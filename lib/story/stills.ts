"use client";
import * as THREE from "three";
import { createGlass, createPlate, createBiscuit, createFlat, createStack, createBun, createSamosas, createCappuccino, createFilterCoffee, createTable, shadowed, BISCUIT, PLATE_Y } from "./models";
import { steel } from "./materials";
import { fontsReady } from "./print";
import { configureRenderer, studioEnvironment, studioLights } from "./studio";
import type { StillKey } from "./pose";
import type { ItemId } from "@/data/site";

/** Studio stills rendered in the browser from the story's own models. One renderer, serial queue, cached URLs. */
export type { StillKey };
export const STUDIO = { W: 720, H: 720, fov: 24 } as const;

export function createStudioScene(renderer: THREE.WebGLRenderer) {
  const scene = new THREE.Scene();
  scene.environment = studioEnvironment(renderer);
  scene.environmentIntensity = 1;
  scene.add(studioLights({ shadows: true, reach: 3, mapSize: 1024 }));
  // a counter that only shows the shadows falling on it
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.ShadowMaterial({ opacity: 0.26, color: "#3a1d0a" }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  return scene;
}

export type Staged = { root: THREE.Group; inner: THREE.Group; act: (k: number, t: number) => void; cam: THREE.Vector3; look: THREE.Vector3 };

/** Everything on the menu, posed on the counter — shared with the card turntable. */
export function buildItem(id: ItemId): Staged {
  const root = new THREE.Group(), inner = new THREE.Group(); root.add(inner);
  let act: Staged["act"] = () => {};
  let cam = new THREE.Vector3(0, 2.5, 6.6), look = new THREE.Vector3(0, 0.3, 0);
  if (id === "chai") {
    const plate = createPlate(0.95); const g = createGlass(); g.root.position.y = PLATE_Y; g.setLevel(1);
    const b1 = createBiscuit("glucose"); b1.position.set(0.7, 0.33, 0.28); b1.rotation.set(-1.15, 0.5, 0.25);
    const b2 = createFlat("glucose"); b2.position.set(-0.56, 0.09, 0.52); b2.rotation.set(0.1, 1.1, 0.05);
    inner.add(plate, g.root, b1, b2);
    act = (k, t) => { g.chai.uSlosh.value = Math.sin(t * 9) * 0.5 * Math.sin(Math.PI * k); g.chai.uTime.value = t; g.surface.rotation.z = k * Math.PI * 2; g.root.rotation.z = Math.sin(t * 9) * 0.05 * Math.sin(Math.PI * k); };
    cam = new THREE.Vector3(0, 1.75, 6.1); look = new THREE.Vector3(0, 0.7, 0);
  } else if (id === "biscuits") {
    const plate = createPlate(1.0, steel(0.22)); const s = createStack(6); s.root.position.set(-0.12, PLATE_Y, 0); s.root.rotation.y = 0.5;
    const lean = createBiscuit("glucose"); lean.position.set(0.52, 0.3, 0.26); lean.rotation.set(-1.0, -0.5, -0.2);
    inner.add(plate, s.root, lean);
    act = (k) => s.fan(Math.sin(Math.PI * k));
    cam = new THREE.Vector3(0, 2.25, 5.2); look = new THREE.Vector3(0, 0.3, 0);
  } else if (id === "bun") {
    const plate = createPlate(1.05); const b = createBun(); b.root.position.y = PLATE_Y; b.root.rotation.y = -0.4; b.open(0.16);
    inner.add(plate, b.root);
    act = (k) => b.open(0.16 + Math.sin(Math.PI * k) * 0.84);
    cam = new THREE.Vector3(0, 2.1, 5.4); look = new THREE.Vector3(0, 0.34, 0);
  } else if (id === "samosa") {
    const s = createSamosas(); inner.add(s.root);
    act = (k) => s.toss(k);
    cam = new THREE.Vector3(0, 2.25, 5.2); look = new THREE.Vector3(0, 0.24, 0);
  } else if (id === "cappuccino") {
    const c = createCappuccino(); c.cup.rotation.y = 0.7; inner.add(c.root);
    act = (k) => { c.cup.rotation.y = 0.7 + k * Math.PI * 2; c.cup.position.y = PLATE_Y + Math.sin(Math.PI * k) * 0.3; };
    cam = new THREE.Vector3(0, 2.4, 4.6); look = new THREE.Vector3(0, 0.2, 0);
  } else {
    const f = createFilterCoffee(); inner.add(f.root);
    act = (k) => f.pull(k);
    cam = new THREE.Vector3(0, 1.75, 3.9); look = new THREE.Vector3(0, 0.34, 0);
  }
  root.rotation.y = -0.3;
  shadowed(root);
  return { root, inner, act, cam, look };
}

/** The whole counter, for the wide still. */
function buildSpread() {
  const g = new THREE.Group();
  const t = createTable(); g.add(t.root);
  const put = (o: THREE.Object3D, x: number, z: number, ry = 0) => { o.position.set(x, o.position.y, z); o.rotation.y = ry; g.add(o); };
  const glass = createGlass(); put(glass.root, 0, 0.2);
  const s = createStack(7); put(s.root, -1.7, 0.9, 0.4);
  const bunPlate = createPlate(1.05); put(bunPlate, -1.9, -1.3);
  const bun = createBun(); bun.root.position.y = PLATE_Y; bun.open(0.3); put(bun.root, -1.9, -1.3, -0.5);
  const cap = createCappuccino(); put(cap.root, 1.9, -1.0, 0.8);
  const sam = createSamosas(); put(sam.root, 0.3, -2.3, 0.3);
  const fil = createFilterCoffee(); put(fil.root, 1.7, 1.3);
  (["nankhatai", "osmania", "nankhatai", "jeera"] as const).forEach((k, i) => { const c = createFlat(k); put(c, -0.4 + i * 0.75, 2.1 + Math.sin(i * 2) * 0.25, i); void BISCUIT; });
  shadowed(g);
  return g;
}

type Job = { key: StillKey; resolve: (url: string) => void; reject: (e: unknown) => void };
const cache = new Map<StillKey, Promise<string>>();
const queue: Job[] = [];
let running = false;
let ctx: { renderer: THREE.WebGLRenderer; scene: THREE.Scene; camera: THREE.PerspectiveCamera } | null = null;
let idleTimer = 0;

function setup() {
  if (ctx) return ctx;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: "low-power" });
  renderer.setPixelRatio(1.5); renderer.setSize(STUDIO.W, STUDIO.H, false);
  configureRenderer(renderer, true);
  ctx = { renderer, scene: createStudioScene(renderer), camera: new THREE.PerspectiveCamera(STUDIO.fov, STUDIO.W / STUDIO.H, 0.1, 60) };
  return ctx;
}
function teardown() { if (!ctx) return; ctx.renderer.dispose(); ctx.renderer.forceContextLoss(); ctx = null; }

function stage(key: StillKey): { obj: THREE.Object3D; cam: THREE.Vector3; look: THREE.Vector3; wide?: boolean } {
  const [kind, arg] = key.split(":");
  if (kind === "item") { const s = buildItem(arg as ItemId); return { obj: s.root, cam: s.cam, look: s.look }; }
  const g = buildSpread(); g.rotation.y = -0.35;
  return { obj: g, cam: new THREE.Vector3(0, 11.5, 13.5), look: new THREE.Vector3(0, 0, 0.2), wide: true };
}

async function run() {
  if (running) return;
  running = true; clearTimeout(idleTimer);
  await fontsReady();
  while (queue.length) {
    const job = queue.shift()!;
    try {
      const { renderer, scene, camera } = setup();
      const { obj, cam, look, wide } = stage(job.key);
      camera.aspect = wide ? 16 / 10 : STUDIO.W / STUDIO.H; camera.updateProjectionMatrix();
      renderer.setSize(wide ? 1120 : STUDIO.W, wide ? 700 : STUDIO.H, false);
      scene.add(obj); camera.position.copy(cam); camera.lookAt(look);
      renderer.render(scene, camera);
      const blob = await new Promise<Blob | null>((r) => renderer.domElement.toBlob(r, "image/webp", 0.93));
      scene.remove(obj);
      if (!blob) throw new Error("toBlob failed");
      job.resolve(URL.createObjectURL(blob));
    } catch (e) { job.reject(e); }
    await new Promise((r) => setTimeout(r, 0));
  }
  running = false;
  idleTimer = window.setTimeout(teardown, 1500);
}

export function getStill(key: StillKey): Promise<string> {
  let p = cache.get(key);
  if (!p) {
    p = new Promise<string>((resolve, reject) => { queue.push({ key, resolve, reject }); });
    cache.set(key, p);
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(() => run(), { timeout: 600 }); else setTimeout(() => run(), 50);
  }
  return p;
}
