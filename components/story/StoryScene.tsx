"use client";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createGlass, createPlate, createBiscuit, createFlat, createDunkBiscuit, createStack, createPan, createBurner, createSpices, createStream, createDrops, createSteam, createTable, createBun, createSamosas, createCappuccino, createFilterCoffee, shadowed, GLASS, PAN, PLATE_Y, BISCUIT, type BiscuitKind } from "@/lib/story/models";
import { fontsReady } from "@/lib/story/print";
import { studioEnvironment, studioLights } from "@/lib/story/studio";
import { BEAT } from "@/lib/story/timeline";
import { usePointer, useQualityTier, useIsMobile } from "@/lib/hooks";
import { seg, easeInOut, easeOut, lerp, clamp } from "@/lib/utils";

export type StoryRefs = { progress: { current: number }; entrance: { current: number } };

const b = (p: number, k: keyof typeof BEAT) => seg(p, BEAT[k][0], BEAT[k][1]);
const easeIn = (t: number) => t * t * t;
const bounce = (t: number) => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75; if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375; return n * (t -= 2.625 / d) * t + 0.984375; };
const TAU = Math.PI * 2;

/** Counter height: the base of the glass, the top of the table. */
const BASE = -0.95;
const PAN_Y = BASE + 0.62;
const SURF = BASE + GLASS.LEVEL_MAX; // chai surface in a full glass
const LIP = new THREE.Vector3(-1.262, 0.915, 0); // where the pan pours from, in its own space
const POUR_FROM = new THREE.Vector3(0.05, 1.5, 0);
const gulps = (s: number) => { const x = s * 3, i = Math.min(2, Math.floor(x)), f = x - i; return { level: (i + easeInOut(clamp((f - 0.15) / 0.7))) / 3, f }; };

type Shot = { t: THREE.Vector3; d: THREE.Vector3; w: number; h: number };
const shot = (t: [number, number, number], d: [number, number, number], w: number, h: number): Shot => ({ t: new THREE.Vector3(...t), d: new THREE.Vector3(...d).normalize(), w, h });

function buildWorld() {
  // ---- hero: a full glass on its saucer, two biscuits
  const glass = createGlass();
  const saucer = new THREE.Group();
  const plate = createPlate(0.95);
  const b1 = createBiscuit("glucose"); b1.position.set(0.7, 0.33, 0.28); b1.rotation.set(-1.15, 0.5, 0.25);
  const b2 = createFlat("glucose"); b2.position.set(-0.56, 0.09, 0.52); b2.rotation.set(0.1, 1.1, 0.05);
  saucer.add(plate, b1, b2);
  const glassSteam = createSteam(12, { rise: 1.75, size: 0.62, spread: 0.26 });
  // ---- the brew
  const pan = createPan();
  const burner = createBurner();
  const spices = createSpices(); pan.body.add(spices.root);
  const milk = createStream("#f6ecd9", { gloss: true }); milk.material.emissiveIntensity = 0.3;
  const panSteam = createSteam(16, { rise: 2.6, size: 1.5, spread: 1.3 });
  // ---- the pour
  const stream = createStream();
  const splash = createDrops(16);
  const drip = createDrops(4);
  // ---- the dunk
  const biscuit = createDunkBiscuit("glucose");
  // ---- the table
  const table = new THREE.Group();
  const top = createTable(); table.add(top.root);
  const slot = (o: THREE.Object3D, x: number, z: number, ry = 0) => { const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; g.add(o); table.add(g); return g; };
  const stack = createStack(7);
  const stackSlot = slot(stack.root, -2.05, 0.95, 0.45);
  const loose = [createFlat("glucose"), createFlat("glucose")];
  const looseSlots = [slot(loose[0], -1.3, 2.25, 1.0), slot(loose[1], -1.0, 2.1, 1.4)];
  const bun = createBun(); const bunPlate = createPlate(1.05); bun.root.position.y = PLATE_Y;
  const bunGroup = new THREE.Group(); bunGroup.add(bunPlate, bun.root); const bunSlot = slot(bunGroup, -2.05, -1.2, -0.5);
  const cap = createCappuccino(); const capSlot = slot(cap.root, 2.1, -0.85, 0.8);
  const capSteam = createSteam(6, { rise: 1.0, size: 0.42, spread: 0.2 }); capSteam.root.position.set(2.1, 0.5, -0.85); table.add(capSteam.root);
  const sam = createSamosas(); const samSlot = slot(sam.root, 0.3, -2.5, 0.3);
  const fil = createFilterCoffee(); const filSlot = slot(fil.root, 2.15, 1.2, 0);
  const kinds: BiscuitKind[] = ["nankhatai", "osmania", "jeera", "nankhatai", "osmania"];
  const cookies = kinds.map((kind, i) => {
    const mesh = createBiscuit(kind); const g = new THREE.Group(); g.add(mesh); table.add(g);
    return { g, mesh, kind, x: -0.2 + i * 0.5 + (i % 2) * 0.06, z: 2.35 + Math.sin(i * 2.2) * 0.3 - i * 0.06, r: BISCUIT[kind].w / 2, t: BISCUIT[kind].t, yaw: i * 1.3 };
  });
  shadowed(table);
  // ---- a counter that only shows the shadows that fall on it
  const counter = new THREE.Mesh(new THREE.PlaneGeometry(22, 22), new THREE.ShadowMaterial({ opacity: 0.26, color: "#3a1d0a" }));
  counter.rotation.x = -Math.PI / 2; counter.position.y = BASE; counter.receiveShadow = true;
  const drops = [stackSlot, bunSlot, capSlot, samSlot, filSlot];
  return { glass, saucer, glassSteam, pan, burner, spices, milk, panSteam, stream, splash, drip, biscuit, table, stack, looseSlots, bun, cap, capSteam, sam, fil, cookies, counter, drops, bunSlot, capSlot, samSlot, filSlot, stackSlot };
}

function Rig({ progress, entrance, mobile, reduced, tier }: StoryRefs & { mobile: boolean; reduced: boolean; tier: number }) {
  const { camera, size, gl, scene } = useThree();
  const cam = camera as THREE.PerspectiveCamera;
  const lights = useMemo(() => studioLights({ shadows: true, reach: 5.6, mapSize: tier === 0 ? 1024 : 2048 }), [tier]);
  useEffect(() => {
    scene.environment = studioEnvironment(gl);
    scene.environmentIntensity = 1;
    scene.add(lights);
    return () => { scene.remove(lights); };
  }, [gl, scene, lights]);

  const W = useMemo(() => buildWorld(), []);
  const pointer = usePointer();
  const ptr = useRef({ x: 0, y: 0 });
  const swirl = useRef(0);
  const camPos = useRef(new THREE.Vector3(0, 0.5, 9));
  const lookCur = useRef(new THREE.Vector3(0, -0.2, 0));
  const V = useMemo(() => ({ t: new THREE.Vector3(), d: new THREE.Vector3(), off: new THREE.Vector3(), lip: new THREE.Vector3(), to: new THREE.Vector3(), a: new THREE.Vector3(), c1: new THREE.Color(), c2: new THREE.Color(), c3: new THREE.Color(), tmp: new THREE.Color() }), []);
  const shots = useMemo(() => ({
    hero: shot([0, -0.14, 0], [0, 0.2, 1], 3.0, 3.5),
    brewLow: shot([0.2, -0.3, 0], [0, 0.4, 1], 5.0, 3.3),
    brew: shot([0.15, -0.08, 0], [0, 1.02, 1], 5.5, 3.9),
    pour: shot([0.75, 0.82, 0], [0.08, 0.1, 1], 5.0, 5.2),
    dunk: shot([0, 0.24, 0], [0.24, 0.3, 1], 2.6, 3.3),
    table: shot([0, BASE, 0.25], [0, 0.94, 1], 10.2, 6.2),
  }), []);
  const frames = useRef(0);

  useFrame((st, dt) => {
    if (++frames.current === 3) window.dispatchEvent(new Event("tapri:scene-ready"));
    const p = progress.current;
    const e = reduced ? 1 : easeOut(clamp(entrance.current));
    const t = st.clock.elapsedTime;
    const d = Math.min(dt, 0.05);
    const k = 1 - Math.pow(0.0016, d);
    ptr.current.x = lerp(ptr.current.x, reduced ? 0 : pointer.current.x, k * 0.5);
    ptr.current.y = lerp(ptr.current.y, reduced ? 0 : pointer.current.y, k * 0.5);
    const px = ptr.current.x, py = ptr.current.y;
    const sway = reduced ? 0 : 1;

    const sip = b(p, "sip"), away = easeInOut(b(p, "glassAway")), panIn = easeOut(b(p, "panIn")), flame = b(p, "flame");
    const spice = b(p, "spice"), teaK = b(p, "tea"), steep = easeInOut(b(p, "steep")), milk = b(p, "milk"), mix = easeInOut(b(p, "mix")), boil = b(p, "boil");
    const lift = easeInOut(b(p, "lift")), pour = b(p, "pour"), panAway = easeIn(b(p, "panAway"));
    const bIn = easeOut(b(p, "biscuitIn")), dunk = easeInOut(b(p, "dunk")), soak = b(p, "soak"), liftB = easeInOut(b(p, "liftB")), snap = b(p, "snap");
    const tableT = b(p, "table"), turn = easeInOut(b(p, "tableTurn")), cover = easeInOut(b(p, "cover"));
    const statsHold = easeInOut(b(p, "statsIn")) * (1 - easeInOut(b(p, "statsOut")));
    const night = easeInOut(b(p, "night")) * (1 - easeInOut(b(p, "day")));
    const tableIn = easeOut(clamp(tableT / 0.34));

    // ---------------- light: the kitchen before dawn, then the café
    scene.environmentIntensity = lerp(1, 0.42, night);
    lights.userData.amb.intensity = lerp(0.62, 0.16, night);
    lights.userData.key.intensity = lerp(2.3, 0.75, night);
    lights.userData.rim.intensity = lerp(1.2, 0.5, night);
    (W.counter.material as THREE.ShadowMaterial).opacity = 0.26 * (1 - night) * (1 - tableIn) * e;
    W.counter.visible = (W.counter.material as THREE.ShadowMaterial).opacity > 0.004;

    // ---------------- the glass
    const first = p < BEAT.glassAway[1];
    const second = p >= BEAT.lift[0];
    const g = W.glass;
    g.root.visible = first || second;
    W.saucer.visible = first;
    let level = 0, glassSteam = 0;
    if (first) {
      const gp = gulps(sip);
      level = 1 - 0.9 * gp.level;
      const x = -away * 7.5, y = BASE - (1 - e) * 2.2;
      W.saucer.position.set(x, y, 0); W.saucer.rotation.y = -0.3 + (1 - e) * 1.4 + px * 0.12 + away * 1.2;
      g.root.position.set(x, y + PLATE_Y, 0);
      g.root.rotation.set(0, t * 0.12 * sway + (1 - e) * 2, 0);
      g.root.scale.setScalar(0.7 + 0.3 * e); W.saucer.scale.setScalar(0.7 + 0.3 * e);
      g.chai.uSlosh.value = Math.sin(t * 8) * 0.22 * Math.sin(Math.PI * clamp((gp.f - 0.1) / 0.8)) * (sip > 0 && sip < 1 ? 1 : 0);
      glassSteam = e * (1 - away) * (0.35 + 0.65 * level);
    } else if (second) {
      level = easeInOut(clamp((pour - 0.07) / 0.83));
      g.root.scale.setScalar(1);
      g.root.position.set(0, BASE - (1 - lift) * 4.5, 0);
      g.root.rotation.set(0, t * 0.1 * sway * (1 - clamp(tableT * 3)) + px * 0.1, 0);
      const plop = clamp((snap - 0.74) / 0.26);
      g.chai.uSlosh.value = Math.sin(t * 13) * 0.07 * (pour > 0.07 && pour < 0.94 ? 1 : 0) + Math.sin(plop * 22) * 0.3 * (1 - plop) * (plop > 0 ? 1 : 0);
      glassSteam = clamp((pour - 0.2) * 3) * (1 - cover);
    }
    g.setLevel(level);
    g.chai.uTime.value = t;
    g.surface.rotation.z = t * 0.15 * sway;
    W.glassSteam.root.position.set(g.root.position.x, g.root.position.y + g.levelY(Math.max(level, 0.5)) + 0.05, 0);
    W.glassSteam.update(t, glassSteam * 0.5);

    // ---------------- the pan on the flame
    const panOn = p > BEAT.panIn[0] && panAway < 1;
    const pan = W.pan;
    pan.root.visible = panOn; W.burner.root.visible = panOn && lift < 0.98;
    let surfaceY = PAN.LEVEL;
    if (panOn) {
      const ph = boil * 3, bi = Math.min(2, Math.floor(ph)), rise = boil > 0 && boil < 1 ? Math.sin(Math.PI * Math.pow(ph - bi, 0.8)) : 0;
      surfaceY = PAN.LEVEL + easeInOut(clamp(milk / 0.7)) * 0.08 + rise * 0.25 - clamp((lift - 0.1) * 3) * 0.2;
      pan.setLevel(surfaceY);
      swirl.current += reduced ? 0 : d * (0.18 + clamp(milk * 4) * 1.1 * (1 - mix * 0.5) + boil * 0.4);
      const u = pan.brew;
      u.uTime.value = t; u.uSwirl.value = swirl.current; u.uTea.value = steep; u.uMilk.value = easeOut(clamp(milk / 0.85)); u.uMix.value = mix;
      u.uFoam.value = boil > 0 ? 0.22 + 0.78 * rise : mix * 0.22;
      // bubbles take the colour of what is boiling
      V.c1.set("#dfe6e6"); V.c2.set("#a5683a"); V.c3.set("#efd8bd");
      pan.bubbleMat.color.copy(V.c1).lerp(V.c2, steep).lerp(V.c3, mix);
      pan.setBubbles(t, clamp(flame) * (0.12 + steep * 0.16 + mix * 0.12 + (boil > 0 ? 0.25 + rise * 0.5 : 0)) * (1 - clamp(lift * 4)), rise);
      pan.liquid.visible = lift < 0.42;
      W.spices.update(spice, teaK, t, surfaceY, pan.innerAt(surfaceY) * 0.9, swirl.current, mix);
      // from the flame to above the glass, tipping as it goes
      const tilt = clamp((lift - 0.3) / 0.7) * 0.5 + easeInOut(clamp(pour / 0.22)) * 0.66 * (1 - panAway) - panAway * 0.3;
      const cs = Math.cos(tilt), sn = Math.sin(tilt);
      const ox = POUR_FROM.x - (cs * LIP.x - sn * LIP.y), oy = POUR_FROM.y - (sn * LIP.x + cs * LIP.y);
      const hold = easeInOut(clamp(lift * 1.15));
      pan.root.position.set(lerp(0, ox, hold) + panAway * 5.5, lerp(PAN_Y - (1 - panIn) * 5, oy, hold) + panAway * 3.4, 0);
      pan.root.rotation.set(0, 0, tilt * (lift > 0 ? 1 : 0));
      W.burner.root.position.set(0, PAN_Y - (1 - panIn) * 5 - easeIn(lift) * 5, 0);
      const fire = clamp(flame * 1.2) * (1 - 0.6 * rise) * (1 - clamp(b(p, "day") * 1.6));
      W.burner.setPower(fire * (0.92 + 0.08 * Math.sin(t * 31)), t);
      W.panSteam.root.position.set(pan.root.position.x, pan.root.position.y + surfaceY, 0);
      W.panSteam.update(t, (0.1 * steep + 0.25 * mix + (boil > 0 ? 0.3 + 0.35 * rise : 0)) * (1 - clamp(lift * 2.5)));
      // milk, from a jug off-camera
      const mOn = milk > 0 && milk < 0.86;
      if (mOn) {
        const R = pan.innerAt(surfaceY);
        V.to.set(pan.root.position.x + pan.brew.uHit.value.x * R, pan.root.position.y + surfaceY, -pan.brew.uHit.value.y * R);
        V.a.set(V.to.x + 0.22, V.to.y + 5.2, V.to.z - 0.1);
        W.milk.set(V.a, V.to, 0.05, 0.062, t, clamp(milk / 0.1), clamp((milk - 0.7) / 0.14));
      } else W.milk.mesh.visible = false;
    } else { W.milk.mesh.visible = false; W.panSteam.update(t, 0); W.burner.setPower(0, t); }

    // ---------------- the pour
    const pouring = panOn && pour > 0 && pour < 1;
    if (pouring) {
      pan.root.updateMatrixWorld(true);
      V.lip.copy(LIP).applyMatrix4(pan.root.matrixWorld);
      V.to.set(0.0, BASE + g.levelY(level) - 0.02, 0);
      W.stream.set(V.lip, V.to, 0.05, 0.034, t, clamp(pour / 0.07), clamp((pour - 0.9) / 0.08));
      const hit = pour > 0.07 && pour < 0.96;
      V.to.y += 0.03;
      W.splash.burst(V.to, hit ? (t * 2.4) % 1 : 0, 0.3, 9);
    } else { W.stream.mesh.visible = false; if (snap <= 0.74 || snap >= 1) W.splash.mesh.visible = false; }

    // ---------------- the dunk
    const bis = W.biscuit;
    const bisOn = p > BEAT.biscuitIn[0] && tableT < 0.5;
    bis.root.visible = bisOn;
    W.drip.mesh.visible = false;
    if (bisOn) {
      const hover = BASE + GLASS.H + 0.32 + bis.half, deep = SURF - 0.43 + bis.half, hover2 = hover - 0.1;
      const cy = lerp(lerp(lerp(5.2, hover, bIn), deep, dunk), hover2, liftB);
      const sagK = easeInOut(clamp(snap / 0.42)), fallK = clamp((snap - 0.42) / 0.36);
      bis.root.position.set(0, cy + Math.sin(t * 1.3) * 0.012 * sway + Math.sin(clamp(snap / 0.5) * Math.PI) * 0.03 + easeIn(clamp(tableT / 0.4)) * 5, 0);
      bis.root.rotation.set(-0.05 + (1 - bIn) * 1.2, -0.42 + (1 - bIn) * 2.2 + px * 0.1, 0.06 + Math.sin(fallK * 40) * 0.02 * (fallK > 0 && fallK < 0.3 ? 1 : 0));
      // the wet line climbs as it sits in the chai
      const line = dunk > 0 ? Math.min(SURF - cy, SURF - deep) + (liftB > 0 || soak > 0 ? 0.02 + soak * 0.085 : 0) : -99;
      bis.set({ soak: line, split: snap > 0 });
      if (snap > 0) {
        bis.hinge.rotation.x = sagK * 0.5 + fallK * 1.6;
        bis.hinge.position.y = -bis.half * 0.16 - fallK * fallK * 1.5;
        bis.hinge.position.z = sagK * 0.01 + fallK * 0.12;
        // gone under
        bis.hinge.visible = bis.root.position.y + bis.hinge.position.y - 0.2 > SURF - 0.12;
      } else { bis.hinge.rotation.x = 0; bis.hinge.position.set(0, -bis.half * 0.16, 0); }
      // drips off the wet edge
      if (liftB > 0.2 && snap < 0.6) {
        const bottom = cy - bis.half;
        for (let i = 0; i < 3; i++) {
          const life = clamp(((p - BEAT.liftB[0]) / 0.03 - 0.25 - i * 0.28) / 0.5);
          const hang = clamp(life / 0.5), fall = clamp((life - 0.5) / 0.5);
          const y = bottom - 0.02 - fall * fall * (bottom - SURF);
          W.drip.place(i, (i - 1) * 0.12, y, 0.05, life > 0 && life < 1 ? 0.014 + hang * 0.012 : 0.0001);
        }
        W.drip.place(3, 0, -9, 0, 0.0001);
        W.drip.commit(true);
      }
      // the plop
      if (snap > 0.74 && snap < 1) { V.to.set(0, SURF + 0.02, 0); W.splash.burst(V.to, clamp((snap - 0.74) / 0.26), 0.85, 16); }
    }

    // ---------------- the table
    const tableOn = tableT > 0;
    W.table.visible = tableOn;
    if (tableOn) {
      W.table.position.set(0, BASE - (1 - tableIn) * 6 - cover * 0.6, 0);
      W.table.rotation.y = lerp(0.25, -0.2, turn) + px * 0.05 * turn;
      W.drops.forEach((s, i) => {
        const kk = clamp((tableT - 0.3 - i * 0.075) / 0.26);
        s.visible = kk > 0; s.position.y = (1 - bounce(kk)) * 3.6; s.scale.setScalar(0.85 + 0.15 * clamp(kk * 3));
      });
      // the stack lands one biscuit at a time
      W.stack.items.forEach(({ obj, rest }, i) => {
        const kk = clamp((tableT - 0.32 - i * 0.05) / 0.2);
        obj.visible = kk > 0; obj.position.y = rest.y + (1 - bounce(kk)) * 2.6; obj.rotation.y = rest.ry + (1 - kk) * (i % 2 ? 2 : -2);
      });
      W.looseSlots.forEach((s, i) => { const kk = clamp((tableT - 0.68 - i * 0.06) / 0.2); s.visible = kk > 0; s.position.y = (1 - bounce(kk)) * 2.4; });
      W.bun.open(easeInOut(clamp((tableT - 0.62) / 0.3)) * 0.3);
      W.fil.pull(0);
      // the round ones roll in on their edges, wobble and fall flat
      W.cookies.forEach((c, i) => {
        const kk = clamp((tableT - 0.42 - i * 0.07) / 0.32);
        c.g.visible = kk > 0;
        const roll = easeOut(clamp(kk / 0.72)), fall = easeInOut(clamp((kk - 0.66) / 0.34));
        const dist = (1 - roll) * 5.4;
        c.g.position.set(c.x + dist, 0, c.z);
        c.g.rotation.y = c.yaw * fall;
        c.mesh.position.y = lerp(c.r, c.t / 2 + (c.kind === "nankhatai" ? 0 : 0), fall);
        c.mesh.rotation.set((-Math.PI / 2) * fall, 0, dist / c.r + Math.sin(kk * 30) * 0.05 * (1 - fall));
      });
      W.capSteam.update(t, clamp((tableT - 0.55) * 3) * 0.4);
    }

    // ---------------- camera
    const aspect = size.width / Math.max(1, size.height);
    const tanH = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    const fit = (s: Shot, sw = 1) => Math.max(s.h / (2 * tanH), (s.w * sw) / (2 * tanH * aspect));
    const T = V.t.copy(shots.hero.t), Dd = V.d.copy(shots.hero.d);
    let dist = fit(shots.hero);
    const blend = (s: Shot, kk: number, x?: number, sw = 1, dy = 0) => { if (kk <= 0) return; T.lerp(V.off.copy(s.t).setX(x ?? s.t.x).setY(s.t.y + dy), kk); Dd.lerp(s.d, kk).normalize(); dist = lerp(dist, fit(s, sw), kk); };
    blend(shots.brewLow, easeInOut(seg(p, BEAT.glassAway[0] + 0.012, BEAT.panIn[1])), mobile ? 0.3 : -0.2);
    blend(shots.brew, easeInOut(seg(p, BEAT.flame[1] - 0.012, BEAT.spice[0] + 0.03)), mobile ? 0.3 : 0.15, mobile ? 0.8 : 1);
    blend(shots.pour, easeInOut(seg(p, BEAT.lift[0], BEAT.lift[1])), mobile ? 0.62 : 0.3, mobile ? 0.78 : 1);
    blend(shots.dunk, easeInOut(seg(p, BEAT.panAway[0], BEAT.biscuitIn[1])), 0, mobile ? 1.3 : 1, mobile ? -0.5 : 0);
    blend(shots.table, easeInOut(seg(p, BEAT.table[0], BEAT.table[0] + 0.05)), mobile ? 0 : -1.45, mobile ? 0.78 : 1);
    dist *= 1 - statsHold * 0.04;
    if (boil > 0 && boil < 1) dist *= 1 - Math.sin(Math.PI * boil) * 0.05;
    if (soak > 0) dist *= 1 - easeInOut(soak) * 0.05 * (1 - clamp(tableT * 8));
    if (turn > 0) dist *= 1 + turn * 0.03;
    T.y -= cover * 0.6;
    camPos.current.copy(T).addScaledVector(Dd, dist);
    camPos.current.x += px * 0.28; camPos.current.y += py * 0.16;
    cam.position.lerp(camPos.current, k);
    lookCur.current.lerp(T, k);
    cam.lookAt(lookCur.current);
  });

  return (
    <>
      <primitive object={W.counter} />
      <primitive object={W.saucer} />
      <primitive object={W.glass.root} />
      <primitive object={W.glassSteam.root} />
      <primitive object={W.burner.root} />
      <primitive object={W.pan.root} />
      <primitive object={W.panSteam.root} />
      <primitive object={W.milk.mesh} />
      <primitive object={W.stream.mesh} />
      <primitive object={W.splash.mesh} />
      <primitive object={W.drip.mesh} />
      <primitive object={W.biscuit.root} />
      <primitive object={W.table} />
    </>
  );
}

export default function StoryScene({ progress, entrance, reduced = false }: StoryRefs & { reduced?: boolean }) {
  const tier = useQualityTier();
  const mobile = useIsMobile();
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [fonts, setFonts] = useState(false);
  useEffect(() => { fontsReady().then(() => setFonts(true)); }, []);
  useEffect(() => {
    const el = wrap.current; if (!el) return;
    const io = new IntersectionObserver(([en]) => setVisible(en.isIntersecting), { threshold: 0 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className="absolute inset-0">
      {fonts && (
        <Canvas
          shadows
          dpr={[1, tier === 2 ? 1.75 : tier === 1 ? 1.5 : 1.25]}
          camera={{ fov: mobile ? 30 : 26, position: [0, 0.5, 9], near: 0.1, far: 80 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance", toneMapping: THREE.NeutralToneMapping, toneMappingExposure: 1.0 }}
          className="!absolute inset-0"
          aria-hidden
          frameloop={visible ? "always" : "never"}
        >
          <Suspense fallback={null}>
            <Rig progress={progress} entrance={entrance} mobile={mobile} reduced={reduced} tier={tier} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
