"use client";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createGlass, createDunkBiscuit, createSteam, createDrops, BISCUIT, GLASS, type DunkBiscuit } from "@/lib/story/models";
import { fontsReady } from "@/lib/story/print";
import { studioEnvironment, studioLights } from "@/lib/story/studio";
import type { DunkId } from "@/data/site";
import { clamp, easeOut, lerp } from "@/lib/utils";

export type DunkResult = "dry" | "perfect" | "risky" | "lost";
export type DunkCtrl = {
  holding: boolean; kind: DunkId; limit: number; sweet: [number, number];
  /** bump to put a fresh biscuit over the glass */
  fresh: number;
  onTick?: (secs: number) => void;
  onResult?: (r: DunkResult, secs: number) => void;
};

const BASE = -0.95, SURF = BASE + GLASS.LEVEL_MAX;

function Rig({ ctrl }: { ctrl: RefObject<DunkCtrl> }) {
  const { camera, size, gl, scene } = useThree();
  const cam = camera as THREE.PerspectiveCamera;
  const lights = useMemo(() => studioLights({ shadows: true, reach: 3.2, mapSize: 1024 }), []);
  useEffect(() => {
    scene.environment = studioEnvironment(gl);
    scene.add(lights);
    return () => { scene.remove(lights); };
  }, [gl, scene, lights]);
  const W = useMemo(() => {
    const glass = createGlass(); glass.root.position.y = BASE; glass.setLevel(1);
    const steam = createSteam(10, { rise: 1.6, size: 0.6, spread: 0.26 }); steam.root.position.set(0, SURF + 0.05, 0);
    const splash = createDrops(16);
    const counter = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.ShadowMaterial({ opacity: 0.24, color: "#3a1d0a" }));
    counter.rotation.x = -Math.PI / 2; counter.position.y = BASE; counter.receiveShadow = true;
    const holder = new THREE.Group();
    return { glass, steam, splash, counter, holder, biscuits: new Map<DunkId, DunkBiscuit>() };
  }, []);
  const S = useRef({ kind: "" as DunkId | "", fresh: -1, y: 4, secs: 0, line: -99, phase: "hover" as "hover" | "done" | "lost", lostT: 0, enter: 0, lastTick: -1, slosh: 0 });
  const V = useMemo(() => ({ at: new THREE.Vector3(0, SURF + 0.02, 0), t: new THREE.Vector3(0, 0.36, 0), d: new THREE.Vector3(0.22, 0.26, 1).normalize() }), []);

  useFrame((st, dt) => {
    const c = ctrl.current; if (!c) return;
    const s = S.current, t = st.clock.elapsedTime, d = Math.min(dt, 0.05);
    // a fresh biscuit
    if (c.kind !== s.kind || c.fresh !== s.fresh) {
      if (s.kind) { const old = W.biscuits.get(s.kind as DunkId); if (old) old.root.visible = false; }
      let b = W.biscuits.get(c.kind);
      if (!b) { b = createDunkBiscuit(c.kind); W.biscuits.set(c.kind, b); W.holder.add(b.root); }
      b.root.visible = true; b.set({ soak: -99, wet: 1, split: false });
      b.hinge.rotation.set(0, 0, 0);
      Object.assign(s, { kind: c.kind, fresh: c.fresh, secs: 0, line: -99, phase: "hover", lostT: 0, enter: 0, lastTick: -1 });
      c.onTick?.(0);
    }
    const b = W.biscuits.get(c.kind)!;
    const B = BISCUIT[c.kind], half = B.h / 2;
    const hover = BASE + GLASS.H + 0.3 + half, depth = Math.min(0.46, B.h * 0.47), deep = SURF - depth + half;
    s.enter = Math.min(1, s.enter + d * 2.2);
    const want = s.phase === "hover" && c.holding ? deep : hover;
    const step = d * (want < s.y ? 3.4 : 2.6);
    s.y = Math.abs(want - s.y) <= step ? want : s.y + Math.sign(want - s.y) * step;
    if (s.enter < 1 && !c.holding) s.y = hover;
    const under = s.y < deep + 0.05;
    if (s.phase === "hover") {
      if (c.holding && under) {
        s.secs += d;
        if (s.secs >= c.limit) { s.phase = "lost"; s.lostT = 0; s.slosh = 1; c.onResult?.("lost", s.secs); }
      } else if (!c.holding && s.secs > 0 && s.y >= hover - 0.02) {
        s.phase = "done";
        c.onResult?.(s.secs < c.sweet[0] ? "dry" : s.secs <= c.sweet[1] ? "perfect" : "risky", s.secs);
      }
      const tick = Math.round(s.secs * 20);
      if (tick !== s.lastTick) { s.lastTick = tick; c.onTick?.(s.secs); }
    }
    // the wet line: wherever the chai reached, plus what creeps up while it sits
    if (s.y < hover - 0.05) s.line = Math.max(s.line, Math.min(SURF - s.y, SURF - deep) + 0.015 + Math.min(1, s.secs / c.limit) * 0.1);
    const snap = SURF - deep - 0.035;
    b.set({ soak: s.line, snap, split: s.phase === "lost" });
    const drop = (1 - easeOut(s.enter)) * 3.2;
    const bend = s.phase === "hover" && under ? clamp((s.secs / c.limit - 0.75) / 0.25) : 0;
    b.root.position.set(0, s.y + drop + Math.sin(t * 1.4) * 0.01, 0);
    b.root.rotation.set(-0.05, -0.42 + drop * 0.5, 0.05 + Math.sin(t * 30) * 0.012 * bend);
    if (s.phase === "lost") {
      s.lostT += d;
      const fall = clamp(s.lostT / 0.55);
      b.hinge.position.set(0, snap - fall * fall * 1.3, fall * 0.06);
      b.hinge.rotation.x = 0.3 + fall * 1.4;
      b.hinge.visible = fall < 0.7;
      W.splash.burst(V.at, clamp((s.lostT - 0.1) / 0.7), 0.85, 16);
    } else W.splash.mesh.visible = false;
    s.slosh = Math.max(0, s.slosh - d * 0.9);
    const dip = c.holding && under ? 0.05 : 0;
    W.glass.chai.uSlosh.value = Math.sin(t * 15) * (0.28 * s.slosh + dip * Math.min(1, s.secs * 4) * (1 - Math.min(1, s.secs * 1.5)));
    W.glass.chai.uTime.value = t;
    W.glass.surface.rotation.z = t * 0.12;
    W.steam.update(t, 0.45);
    // camera: fit the glass and the biscuit hovering over it
    const aspect = size.width / Math.max(1, size.height), tanH = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    const dist = Math.max(3.85 / (2 * tanH), 2.5 / (2 * tanH * aspect));
    cam.position.copy(V.t).addScaledVector(V.d, dist);
    cam.lookAt(V.t.x, lerp(V.t.y, V.t.y, 0), V.t.z);
  });

  return (
    <>
      <primitive object={W.counter} />
      <primitive object={W.glass.root} />
      <primitive object={W.steam.root} />
      <primitive object={W.splash.mesh} />
      <primitive object={W.holder} />
    </>
  );
}

/** The dunk test: hold to lower the biscuit into the chai, let go before it gives up. */
export default function DunkScene({ ctrl }: { ctrl: RefObject<DunkCtrl> }) {
  const [fonts, setFonts] = useState(false);
  useEffect(() => { fontsReady().then(() => setFonts(true)); }, []);
  return (
    <div className="absolute inset-0">
      {fonts && (
        <Canvas shadows dpr={[1, 1.75]} camera={{ fov: 26, position: [1.6, 2.4, 8], near: 0.1, far: 60 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance", toneMapping: THREE.NeutralToneMapping, toneMappingExposure: 1.0 }}
          className="!absolute inset-0" aria-hidden frameloop="always">
          <Rig ctrl={ctrl} />
        </Canvas>
      )}
    </div>
  );
}
