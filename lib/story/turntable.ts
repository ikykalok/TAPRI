"use client";
import * as THREE from "three";
import { fontsReady } from "./print";
import { configureRenderer } from "./studio";
import { buildItem, createStudioScene, STUDIO, type Staged } from "./stills";
import type { ItemId } from "@/data/site";

/**
 * Live "tap" for the menu cards: the same studio, builder and camera as the stills, so a card
 * swaps still → live canvas → still without a jump. One renderer, moved into whichever card plays.
 */
export type TapState = { hop: number; spin: number; sweep: number; act: number };

type Entry = Staged & { ry: number };

class Turntable {
  readonly renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private sweep: THREE.DirectionalLight;
  private items = new Map<ItemId, Entry>();
  private cur: Entry | null = null;
  private clock = 0;
  busy = false;
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    configureRenderer(this.renderer, true);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = createStudioScene(this.renderer);
    this.camera = new THREE.PerspectiveCamera(STUDIO.fov, STUDIO.W / STUDIO.H, 0.1, 60);
    this.sweep = new THREE.DirectionalLight("#fff4e0", 0); this.scene.add(this.sweep);
    const el = this.renderer.domElement;
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:block";
  }
  use(id: ItemId) {
    let e = this.items.get(id);
    if (!e) { const b = buildItem(id); e = { ...b, ry: b.root.rotation.y }; this.items.set(id, e); }
    if (this.cur !== e) { if (this.cur) this.scene.remove(this.cur.root); this.scene.add(e.root); this.cur = e; }
    this.camera.position.copy(e.cam); this.camera.lookAt(e.look);
  }
  mount(host: HTMLElement, overscan = 1) {
    host.appendChild(this.renderer.domElement);
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.zoom = 1 / overscan; this.camera.updateProjectionMatrix();
  }
  unmount() { this.renderer.domElement.remove(); }
  apply(s: TapState) {
    const e = this.cur; if (!e) return;
    this.clock += 1 / 60;
    e.inner.position.y = s.hop * 0.22;
    e.root.rotation.y = e.ry + s.spin * Math.PI * 2;
    e.act(s.act, this.clock);
    this.sweep.intensity = Math.sin(Math.PI * s.sweep) * 2.2;
    this.sweep.position.set(-5 + 10 * s.sweep, 2.5, 4);
  }
  render() { this.renderer.render(this.scene, this.camera); }
  warm(id: ItemId) { this.use(id); this.renderer.compile(this.scene, this.camera); }
}

let instance: Promise<Turntable> | null = null;
export function getTurntable() { instance ??= fontsReady().then(() => new Turntable()); return instance; }
