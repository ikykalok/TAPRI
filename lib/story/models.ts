import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mulberry32 } from "./print";
import { glassMaterial, chaiMaterial, brewMaterial, biscuitMaterial, flameMaterial, steel, ceramic, CHAI, type ChaiUniforms, type BiscuitUniforms } from "./materials";
import { glucosePrint, ruskPrint, roundPrint, chaiSurface, latteArt, kaapiFoam, marbleTexture, bunCrust, crumbTexture, friedPastry, puffTexture, glowTexture, brushedBump, type Baked } from "./textures";

/* ------------------------------------------------------------------
   Plain three.js builders shared by the story, the stills, the card
   turntable and the dunk test. Units: the chai glass is 1.5 tall.
   ------------------------------------------------------------------ */

const ss = THREE.MathUtils.smoothstep;
const lerp = THREE.MathUtils.lerp;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const TAU = Math.PI * 2;
const V2 = (x: number, y: number) => new THREE.Vector2(x, y);
type Prof = [number, number][];
const lathe = (pts: Prof, seg = 96) => new THREE.LatheGeometry(pts.map(([x, y]) => V2(x, y)), seg);

/** Everything solid casts and receives; glass, steam and flames opt out with userData.noShadow. */
export function shadowed<T extends THREE.Object3D>(root: T) {
  root.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh && !m.userData.noShadow) { m.castShadow = true; m.receiveShadow = true; } });
  return root;
}
/** Planar UVs across the xy face of a centred geometry. */
function planarUV(g: THREE.BufferGeometry) {
  g.computeBoundingBox(); const bb = g.boundingBox!;
  const p = g.getAttribute("position") as THREE.BufferAttribute;
  const uv = new Float32Array(p.count * 2);
  const w = bb.max.x - bb.min.x, h = bb.max.y - bb.min.y;
  for (let i = 0; i < p.count; i++) { uv[i * 2] = (p.getX(i) - bb.min.x) / w; uv[i * 2 + 1] = (p.getY(i) - bb.min.y) / h; }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return g;
}

/* =================================================================
   THE CUTTING GLASS — tapered, fluted, thick-bottomed
   ================================================================= */
export const GLASS = { H: 1.5, R_TOP: 0.53, R_BOT: 0.372, LEVEL_MIN: 0.17, LEVEL_MAX: 1.3, FLUTES: 18 } as const;
const wallR = (y: number) => GLASS.R_BOT + (GLASS.R_TOP - GLASS.R_BOT) * (y / 1.47);

let glassGeo: THREE.BufferGeometry | null = null;
function glassGeometry() {
  if (glassGeo) return glassGeo;
  const outer: Prof = [[0, 0], [0.335, 0], [0.36, 0.012], [0.372, 0.05]];
  for (let y = 0.1; y < 1.46; y += 0.065) outer.push([wallR(y), y]);
  outer.push([wallR(1.47), 1.47], [0.534, 1.492], [0.526, 1.5]);
  const inner: Prof = [[0.512, 1.495], [0.505, 1.47]];
  for (let y = 1.4; y > 0.21; y -= 0.1) inner.push([wallR(y) - 0.024, y]);
  inner.push([0.335, 0.166], [0.2, 0.153], [0, 0.15]);
  const pts = [...outer, ...inner], n = pts.length, SEG = GLASS.FLUTES * 12;
  const g = lathe(pts, SEG);
  const p = g.getAttribute("position") as THREE.BufferAttribute;
  for (let i = 0; i <= SEG; i++) {
    const a = (i / SEG) * TAU;
    for (let j = 0; j < outer.length; j++) {
      const idx = i * n + j, y = p.getY(idx);
      const mask = ss(y, 0.07, 0.17) * (1 - ss(y, 0.9, 1.03));
      if (mask <= 0) continue;
      const k = 1 + 0.034 * mask * (Math.abs(Math.cos((a * GLASS.FLUTES) / 2)) - 0.62);
      p.setXYZ(idx, p.getX(idx) * k, y, p.getZ(idx) * k);
    }
  }
  g.computeVertexNormals();
  // close the seam the lathe leaves at 0 / 2π
  const nm = g.getAttribute("normal") as THREE.BufferAttribute;
  for (let j = 0; j < n; j++) {
    const a = j, b = SEG * n + j;
    const x = nm.getX(a) + nm.getX(b), y = nm.getY(a) + nm.getY(b), z = nm.getZ(a) + nm.getZ(b), l = Math.hypot(x, y, z) || 1;
    nm.setXYZ(a, x / l, y / l, z / l); nm.setXYZ(b, x / l, y / l, z / l);
  }
  glassGeo = g;
  return g;
}

export type GlassModel = { root: THREE.Group; glass: THREE.Mesh; chai: ChaiUniforms; surface: THREE.Mesh; setLevel: (l: number) => void; levelY: (l: number) => number };
export function createGlass(): GlassModel {
  const root = new THREE.Group(); root.name = "glass";
  const glass = new THREE.Mesh(glassGeometry(), glassMaterial("#fffdf5", { edge: 0.34 })); glass.renderOrder = 3; glass.userData.noShadow = true;
  const vol: Prof = [[0, 0.158], [0.325, 0.162], [0.35, 0.2]];
  for (let y = 0.3; y < 1.49; y += 0.1) vol.push([wallR(y) - 0.028, y]);
  vol.push([wallR(1.49) - 0.028, 1.49], [0, 1.49]);
  const c = chaiMaterial(CHAI);
  const chai = new THREE.Mesh(lathe(vol, 72), c.material); chai.renderOrder = 1;
  const surface = new THREE.Mesh(new THREE.CircleGeometry(1, 64), new THREE.MeshPhysicalMaterial({ map: chaiSurface(), roughness: 0.22, clearcoat: 0.7, clearcoatRoughness: 0.2, emissive: new THREE.Color(CHAI), emissiveIntensity: 0.1 }));
  surface.rotation.x = -Math.PI / 2; surface.renderOrder = 1; surface.userData.noShadow = true;
  root.add(chai, surface, glass);
  const levelY = (l: number) => lerp(GLASS.LEVEL_MIN, GLASS.LEVEL_MAX, l);
  const setLevel = (l: number) => {
    const y = levelY(l);
    c.uniforms.uLevel.value = y;
    surface.visible = l > 0.004; chai.visible = l > 0.004;
    surface.position.y = y; surface.scale.setScalar((wallR(y) - 0.029) * 0.998);
  };
  setLevel(1);
  shadowed(root);
  return { root, glass, chai: c.uniforms, surface, setLevel, levelY };
}

export function createPlate(r = 0.95, mat: THREE.Material = ceramic()) {
  const k = r / 0.95;
  const g = lathe(([[0, 0], [0.5, 0], [0.56, 0.018], [0.92, 0.1], [0.95, 0.118], [0.94, 0.132], [0.56, 0.05], [0.5, 0.036], [0, 0.036]] as Prof).map(([x, y]) => [x * k, y * Math.min(1.15, k)] as [number, number]), 72);
  const m = new THREE.Mesh(g, mat); m.name = "plate";
  return shadowed(m);
}
export const PLATE_Y = 0.036;

/* =================================================================
   BISCUITS — every one stands in the xy plane, faces on ±z
   ================================================================= */
export type BiscuitKind = "glucose" | "rusk" | "osmania" | "nankhatai" | "jeera";
export const BISCUIT: Record<BiscuitKind, { w: number; h: number; t: number; crumb: string }> = {
  glucose: { w: 0.6, h: 0.97, t: 0.078, crumb: "#ecd09a" },
  rusk: { w: 0.5, h: 1.06, t: 0.14, crumb: "#f0d6a0" },
  osmania: { w: 0.74, h: 0.74, t: 0.1, crumb: "#efd3a0" },
  nankhatai: { w: 0.68, h: 0.68, t: 0.2, crumb: "#f4e2ba" },
  jeera: { w: 0.6, h: 0.6, t: 0.07, crumb: "#ecd09a" },
};

const geoCache = new Map<BiscuitKind, THREE.BufferGeometry>();
export function biscuitGeometry(kind: BiscuitKind) {
  const hit = geoCache.get(kind); if (hit) return hit;
  const B = BISCUIT[kind];
  let g: THREE.BufferGeometry;
  if (kind === "glucose") {
    // a rectangle whose every edge is a row of scallops
    const hw = B.w / 2 - 0.02, hh = B.h / 2 - 0.02, amp = 0.02;
    const pts: THREE.Vector2[] = [];
    const edge = (x0: number, y0: number, x1: number, y1: number, n: number) => {
      const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy), nx = dy / len, ny = -dx / len;
      for (let i = 0; i < n * 7; i++) { const s = i / (n * 7), o = amp * Math.abs(Math.sin(Math.PI * n * s)); pts.push(V2(x0 + dx * s + nx * o, y0 + dy * s + ny * o)); }
    };
    edge(-hw, -hh, hw, -hh, 7); edge(hw, -hh, hw, hh, 11); edge(hw, hh, -hw, hh, 7); edge(-hw, hh, -hw, -hh, 11);
    g = new THREE.ExtrudeGeometry(new THREE.Shape(pts), { depth: B.t - 0.024, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 2, curveSegments: 1 });
    g.translate(0, 0, -(B.t - 0.024) / 2);
  } else if (kind === "rusk") {
    // a slice of a small loaf: flat base, domed top
    const hw = B.w / 2 - 0.015, hh = B.h / 2 - 0.015;
    const s = new THREE.Shape();
    s.moveTo(-hw + 0.05, -hh); s.lineTo(hw - 0.05, -hh); s.quadraticCurveTo(hw, -hh, hw, -hh + 0.05);
    s.lineTo(hw, hh - 0.28); s.bezierCurveTo(hw + 0.02, hh - 0.05, hw * 0.5, hh, 0, hh); s.bezierCurveTo(-hw * 0.5, hh, -hw - 0.02, hh - 0.05, -hw, hh - 0.28);
    s.lineTo(-hw, -hh + 0.05); s.quadraticCurveTo(-hw, -hh, -hw + 0.05, -hh);
    g = new THREE.ExtrudeGeometry(s, { depth: B.t - 0.03, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.015, bevelSegments: 2, curveSegments: 14 });
    g.translate(0, 0, -(B.t - 0.03) / 2);
  } else {
    const R = B.w / 2, t = B.t;
    const prof: Prof = kind === "nankhatai"
      ? [[0, 0], [R * 0.94, 0], [R * 0.985, 0.02], [R, t * 0.14], [R * 0.88, t * 0.45], [R * 0.65, t * 0.78], [R * 0.35, t * 0.96], [0, t]]
      : [[0, 0], [R - 0.05, 0], [R - 0.012, 0.016], [R, t / 2], [R - 0.012, t - 0.016], [R - 0.05, t], [0, t]];
    g = lathe(prof, 64); g.translate(0, -t / 2, 0); g.rotateX(Math.PI / 2);
  }
  planarUV(g);
  g.computeVertexNormals();
  geoCache.set(kind, g);
  return g;
}
const printFor = (kind: BiscuitKind): Baked => (kind === "glucose" ? glucosePrint() : kind === "rusk" ? ruskPrint() : roundPrint(kind));

const plainMat = new Map<BiscuitKind, THREE.Material>();
/** A whole biscuit, standing. */
export function createBiscuit(kind: BiscuitKind = "glucose") {
  let m = plainMat.get(kind);
  if (!m) { const p = printFor(kind); m = biscuitMaterial(p.map, p.bump, { rough: kind === "osmania" ? 0.55 : 0.86 }).material; plainMat.set(kind, m); }
  const mesh = new THREE.Mesh(biscuitGeometry(kind), m); mesh.castShadow = true; mesh.receiveShadow = true;
  return mesh;
}
/** A biscuit lying flat (face up), origin on the surface it rests on. */
export function createFlat(kind: BiscuitKind = "glucose") {
  const g = new THREE.Group(); const m = createBiscuit(kind);
  m.rotation.x = -Math.PI / 2; m.position.y = BISCUIT[kind].t / 2; g.add(m);
  return g;
}

export type DunkBiscuit = {
  root: THREE.Group; whole: THREE.Mesh; top: THREE.Mesh; hinge: THREE.Group; bottom: THREE.Mesh; kind: BiscuitKind; half: number;
  /** soak: local y of the wet line · wet: 0..1 · snap: local y of the break (shows two pieces when split) */
  set: (o: { soak?: number; wet?: number; snap?: number; split?: boolean }) => void;
};
/** A biscuit that can drink chai and break: one whole mesh, or an upper piece and a lower piece hinged on the break. */
export function createDunkBiscuit(kind: BiscuitKind = "glucose"): DunkBiscuit {
  const B = BISCUIT[kind], p = printFor(kind), geo = biscuitGeometry(kind);
  const mk = (part: number) => { const b = biscuitMaterial(p.map, p.bump, { dunk: true, crumb: B.crumb, rough: kind === "osmania" ? 0.55 : 0.86 }); b.uniforms.uPart.value = part; return b; };
  const mats = [mk(0), mk(1), mk(2)];
  const root = new THREE.Group(); root.name = `dunk-${kind}`;
  const whole = new THREE.Mesh(geo, mats[0].material), top = new THREE.Mesh(geo, mats[1].material), bottom = new THREE.Mesh(geo, mats[2].material);
  const hinge = new THREE.Group(); hinge.add(bottom);
  root.add(whole, top, hinge);
  [whole, top, bottom].forEach((m) => { m.castShadow = true; });
  const us: BiscuitUniforms[] = mats.map((m) => m.uniforms);
  const set: DunkBiscuit["set"] = ({ soak, wet, snap, split }) => {
    if (soak !== undefined) us.forEach((u) => (u.uSoak.value = soak));
    if (wet !== undefined) us.forEach((u) => (u.uWet.value = wet));
    if (snap !== undefined) { us.forEach((u) => (u.uBreak.value = snap)); hinge.position.set(0, snap, 0); bottom.position.set(0, -snap, 0); }
    if (split !== undefined) { whole.visible = !split; top.visible = split; hinge.visible = split; }
  };
  set({ soak: -99, wet: 1, snap: -B.h * 0.08, split: false });
  return { root, whole, top, hinge, bottom, kind, half: B.h / 2, set };
}

/** A neat stack of glucose biscuits lying flat; `fan(k)` lifts and spirals it open. */
export function createStack(n = 6, kind: BiscuitKind = "glucose") {
  const root = new THREE.Group(); root.name = "stack";
  const r = mulberry32(4), B = BISCUIT[kind];
  const items = Array.from({ length: n }, (_, i) => {
    const b = createFlat(kind);
    const rest = { x: (r() - 0.5) * 0.035, y: i * (B.t + 0.003), z: (r() - 0.5) * 0.035, ry: (r() - 0.5) * 0.2 };
    b.position.set(rest.x, rest.y, rest.z); b.rotation.y = rest.ry; root.add(b);
    return { obj: b, rest };
  });
  const fan = (k: number) => items.forEach(({ obj, rest }, i) => {
    obj.position.set(rest.x + Math.sin(i * 1.1) * 0.12 * k, rest.y + k * i * 0.13, rest.z);
    obj.rotation.set(Math.sin(i * 2.3) * 0.12 * k, rest.ry + k * (i - (n - 1) / 2) * 0.42, Math.cos(i * 1.7) * 0.1 * k);
  });
  return { root, items, fan, height: n * (B.t + 0.003) };
}

/* =================================================================
   THE PAN — a steel saucepan, its surface, its bubbles
   ================================================================= */
export const PAN = { R: 1.2, H: 0.9, LEVEL: 0.46, LIP: -1.2 } as const;
const panInner = (y: number) => lerp(1.112, 1.185, y / PAN.H);

export function createPan() {
  const root = new THREE.Group(); root.name = "pan";
  const body = new THREE.Group(); root.add(body);
  const outside = steel(0.3); outside.bumpMap = brushedBump(); outside.bumpScale = 0.35; (outside.bumpMap as THREE.Texture).repeat.set(1, 3);
  const shell = new THREE.Mesh(lathe([[0, 0], [1.13, 0], [1.175, 0.02], [1.2, 0.07], [1.215, 0.86], [1.25, 0.9], [1.262, 0.915], [1.25, 0.93], [1.2, 0.925], [1.185, 0.88], [1.112, 0.07], [1.07, 0.035], [0, 0.03]], 128), outside);
  body.add(shell);
  // handle: a riveted steel tang and a bakelite grip
  const handle = new THREE.Group(); handle.position.set(1.2, 0.8, 0); handle.rotation.z = 0.16;
  const tang = new THREE.Mesh(new RoundedBoxGeometry(0.75, 0.035, 0.2, 2, 0.015), steel(0.3)); tang.position.x = 0.36;
  const grip = new THREE.Mesh(new RoundedBoxGeometry(1.05, 0.13, 0.25, 4, 0.06), new THREE.MeshPhysicalMaterial({ color: "#17120f", roughness: 0.42, clearcoat: 0.4, clearcoatRoughness: 0.4 })); grip.position.x = 1.2;
  const eye = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.016, 8, 20), steel(0.25)); eye.position.set(1.66, 0, 0); eye.rotation.x = Math.PI / 2;
  handle.add(tang, grip, eye);
  for (const z of [-0.055, 0.055]) { const rv = new THREE.Mesh(new THREE.SphereGeometry(0.026, 12, 8), steel(0.2)); rv.position.set(0.07, 0.02, z); rv.scale.y = 0.5; handle.add(rv); }
  body.add(handle);
  // the brew
  const brew = brewMaterial();
  const liquid = new THREE.Mesh(new THREE.CircleGeometry(1, 96), brew.material); liquid.rotation.x = -Math.PI / 2; liquid.userData.noShadow = true; liquid.receiveShadow = true;
  body.add(liquid);
  let levelY: number = PAN.LEVEL;
  const setLevel = (y: number) => { levelY = y; liquid.position.y = y; liquid.scale.setScalar(panInner(y) * 0.998); };
  setLevel(PAN.LEVEL);
  // bubbles: half-domes that swell and pop
  const N = 110, r = mulberry32(19);
  const bubbleMat = new THREE.MeshPhysicalMaterial({ color: "#f0dcc0", roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05, transparent: true, opacity: 0.86 });
  const bubbles = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 14, 8, 0, TAU, 0, Math.PI / 2), bubbleMat, N); bubbles.frustumCulled = false; bubbles.userData.noShadow = true;
  body.add(bubbles);
  const seeds = Array.from({ length: N }, () => ({ a: r() * TAU, d: Math.pow(r(), 0.45), rate: 0.5 + r() * 1.3, ph: r(), s: 0.03 + r() * r() * 0.085 }));
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sv = new THREE.Vector3();
  /** amt 0..1 (how hard it boils), edge 0..1 (0: all over · 1: crowding the rim) */
  const setBubbles = (t: number, amt: number, edge = 0) => {
    bubbles.visible = amt > 0.004;
    if (!bubbles.visible) return;
    const R = panInner(levelY) * 0.97;
    seeds.forEach((b, i) => {
      const life = (t * b.rate + b.ph) % 1;
      const grow = life < 0.82 ? 1 - Math.pow(1 - life / 0.82, 3) : 0;
      const d = lerp(b.d, 0.6 + 0.4 * b.d, edge);
      const on = i / N < amt * 1.15 ? 1 : 0;
      sv.setScalar(Math.max(0.0001, b.s * grow * on * (0.5 + 0.7 * amt)));
      sv.y *= 0.72;
      v.set(Math.cos(b.a) * d * R, levelY - 0.004, Math.sin(b.a) * d * R);
      M.compose(v, q, sv); bubbles.setMatrixAt(i, M);
    });
    bubbles.instanceMatrix.needsUpdate = true;
  };
  setBubbles(0, 0);
  shadowed(root);
  return { root, body, shell, handle, liquid, brew: brew.uniforms, bubbles, bubbleMat, setLevel, setBubbles, innerAt: panInner };
}

/** Gas ring, pan support and a crown of flames. Origin = the pan's base centre. */
export function createBurner() {
  const root = new THREE.Group(); root.name = "burner";
  const iron = new THREE.MeshStandardMaterial({ color: "#1b1917", roughness: 0.62, metalness: 0.55 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.9, 0.2, 56), iron); base.position.y = -0.5;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.84, 0.09, 56), new THREE.MeshStandardMaterial({ color: "#3a332c", roughness: 0.45, metalness: 0.8 })); head.position.y = -0.37;
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.6, 0.06, 48), iron); cap.position.y = -0.3;
  root.add(base, head, cap);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * TAU + Math.PI / 4;
    const arm = new THREE.Mesh(new RoundedBoxGeometry(1.0, 0.07, 0.09, 2, 0.02), iron);
    arm.position.set(Math.cos(a) * 1.0, -0.04, Math.sin(a) * 1.0); arm.rotation.y = -a; root.add(arm);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.5, 8), iron); leg.position.set(Math.cos(a) * 1.46, -0.3, Math.sin(a) * 1.46); root.add(leg);
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.46, 0.035, 8, 72), iron); ring.rotation.x = Math.PI / 2; ring.position.y = -0.55; root.add(ring);
  // flames
  const N = 30, fl = flameMaterial();
  const cone = new THREE.ConeGeometry(0.085, 1, 10, 6, true); cone.translate(0, 0.5, 0);
  const flames = new THREE.InstancedMesh(cone, fl.material, N); flames.frustumCulled = false; flames.userData.noShadow = true; flames.renderOrder = 5;
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), dir = new THREE.Vector3(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
  for (let i = 0; i < N; i++) {
    const a = (i / N) * TAU, tilt = 0.98;
    dir.set(Math.cos(a) * Math.sin(tilt), Math.cos(tilt), Math.sin(a) * Math.sin(tilt));
    q.setFromUnitVectors(up, dir); pos.set(Math.cos(a) * 0.8, -0.33, Math.sin(a) * 0.8); sc.set(1, 0.66 + (i % 3) * 0.05, 1);
    M.compose(pos, q, sc); flames.setMatrixAt(i, M);
  }
  root.add(flames);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0, toneMapped: false }));
  glow.scale.set(4.4, 1.6, 1); glow.position.set(0, -0.22, 0.2); glow.renderOrder = 4; glow.userData.noShadow = true; root.add(glow);
  const light = new THREE.PointLight("#6f9dff", 0, 2.4, 1.4); light.position.set(0, -0.6, 1.3); root.add(light);
  const warm = new THREE.PointLight("#ffab5c", 0, 9, 1.5); warm.position.set(0.4, -0.1, 2.2); root.add(warm);
  shadowed(root);
  const setPower = (p: number, t: number) => {
    fl.uniforms.uPower.value = p; fl.uniforms.uTime.value = t;
    flames.visible = p > 0.003;
    const f = 0.9 + 0.1 * Math.sin(t * 17) * Math.sin(t * 7.3);
    (glow.material as THREE.SpriteMaterial).opacity = p * 0.75 * f;
    light.intensity = p * 5 * f; warm.intensity = p * 5 * f;
  };
  return { root, flames, glow, light, setPower };
}

/* =================================================================
   WHAT GOES IN — ginger, cardamom, clove, cinnamon, pepper, then the leaves
   ================================================================= */
export function createSpices() {
  const root = new THREE.Group(); root.name = "spices";
  const r = mulberry32(33);
  type Item = { obj: THREE.Object3D; a: number; d: number; delay: number; from: THREE.Vector3; spin: THREE.Vector3; ph: number; float: number; group: number };
  const items: Item[] = [];
  const add = (obj: THREE.Object3D, group: number, delay: number, float = 0) => {
    obj.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.castShadow = true; } });
    const a = r() * TAU, d = 0.18 + r() * 0.66;
    items.push({ obj, a, d, delay, from: new THREE.Vector3((r() - 0.5) * 0.9, 3.4 + r() * 0.8, (r() - 0.5) * 0.5), spin: new THREE.Vector3(r() * 6 - 3, r() * 6 - 3, r() * 6 - 3), ph: r() * TAU, float, group });
    obj.visible = false; root.add(obj);
  };
  // ginger — pounded, fibrous
  const gingerGeo = new THREE.IcosahedronGeometry(0.105, 2);
  { const p = gingerGeo.getAttribute("position") as THREE.BufferAttribute; const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const k = 1 + 0.22 * Math.sin(v.x * 23 + v.y * 11) * Math.cos(v.z * 17 + v.x * 7); v.multiplyScalar(k); p.setXYZ(i, v.x * 1.35, v.y * 0.62, v.z); }
    gingerGeo.computeVertexNormals(); }
  const gingerMat = new THREE.MeshStandardMaterial({ color: "#cdb886", roughness: 0.82 });
  for (let i = 0; i < 4; i++) { const m = new THREE.Mesh(gingerGeo, gingerMat); m.scale.setScalar(0.85 + r() * 0.5); add(m, 0, i * 0.028, 0.03); }
  // green cardamom
  const podGeo = new THREE.SphereGeometry(0.06, 16, 12); podGeo.scale(1, 2.1, 1);
  { const p = podGeo.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), a = Math.atan2(z, x), k = 1 + 0.1 * Math.cos(a * 3); p.setX(i, x * k); p.setZ(i, z * k); }
    podGeo.computeVertexNormals(); }
  const podMat = new THREE.MeshStandardMaterial({ color: "#96a65a", roughness: 0.7 });
  for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(podGeo, podMat); m.rotation.z = Math.PI / 2; const g = new THREE.Group(); g.add(m); add(g, 1, 0.17 + i * 0.02, 0.02); }
  // cloves
  const cloveMat = new THREE.MeshStandardMaterial({ color: "#3b2212", roughness: 0.8 });
  for (let i = 0; i < 5; i++) {
    const g = new THREE.Group();
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.022, 0.17, 8), cloveMat); stem.rotation.z = Math.PI / 2;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.038, 10, 8), cloveMat); head.position.x = 0.1;
    g.add(stem, head); add(g, 2, 0.32 + i * 0.02, 0.015);
  }
  // one curl of cinnamon
  { const g = new THREE.Group(); const mat = new THREE.MeshStandardMaterial({ color: "#8f5527", roughness: 0.85, side: THREE.DoubleSide });
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.85, 20, 1, true, 0, TAU * 0.86), mat); a.rotation.z = Math.PI / 2;
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.85, 16, 1, true, 1, TAU * 0.8), mat); b.rotation.z = Math.PI / 2; b.position.z = 0.02;
    g.add(a, b); add(g, 3, 0.44, 0.045); }
  // black pepper
  const pepGeo = new THREE.SphereGeometry(0.04, 10, 8), pepMat = new THREE.MeshStandardMaterial({ color: "#1c1511", roughness: 0.75 });
  for (let i = 0; i < 9; i++) add(new THREE.Mesh(pepGeo, pepMat), 4, 0.54 + i * 0.012, 0.012);
  // tea: a shower of CTC granules
  const N = 520;
  const tea = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.016, 0), new THREE.MeshStandardMaterial({ color: "#1d0f08", roughness: 0.9 }), N); tea.frustumCulled = false; tea.castShadow = true;
  root.add(tea);
  const leaves = Array.from({ length: N }, () => ({ a: r() * TAU, d: Math.sqrt(r()) * 0.9, delay: r() * 0.62, jx: (r() - 0.5) * 0.5, jz: (r() - 0.5) * 0.5, s: 0.5 + r() * 1.2, ph: r() * TAU }));
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sv = new THREE.Vector3();
  /**
   * k: 0..1 across the whole-spice drop · teaK: 0..1 for the leaves · y: surface height · R: surface radius
   * swirl: the brew's rotation · sink: 0..1, everything goes under
   */
  const update = (k: number, teaK: number, t: number, y: number, R: number, swirl: number, sink: number) => {
    for (const it of items) {
      const kk = clamp01((k - it.delay) / 0.15);
      it.obj.visible = kk > 0 && sink < 0.999;
      if (!it.obj.visible) continue;
      const land = 1 - kk, ang = it.a - swirl * (1 - it.d * 0.55);
      const lx = Math.cos(ang) * it.d * R, lz = Math.sin(ang) * it.d * R;
      const dip = kk >= 1 ? 0 : Math.sin(Math.PI * clamp01((kk - 0.86) / 0.14)) * 0.03;
      it.obj.position.set(lerp(it.from.x + lx * 0.5, lx, kk), lerp(y + it.from.y, y + it.float + Math.sin(t * 1.7 + it.ph) * 0.008 - dip, kk * kk) - sink * 0.16, lerp(it.from.z + lz * 0.5, lz, kk));
      it.obj.rotation.set(it.spin.x * land * 2 + (it.group === 0 ? 0.2 : 0), it.ph + it.spin.y * land * 2 - swirl * 0.6, it.spin.z * land * 2);
      it.obj.scale.setScalar(it.obj.userData.s0 ?? (it.obj.userData.s0 = it.obj.scale.x));
      it.obj.scale.multiplyScalar(1 - sink * 0.5);
    }
    tea.visible = teaK > 0 && sink < 0.999;
    if (tea.visible) {
      leaves.forEach((l, i) => {
        const kk = clamp01((teaK - l.delay) / 0.36);
        const ang = l.a - swirl * (1 - l.d * 0.55);
        const lx = Math.cos(ang) * l.d * R, lz = Math.sin(ang) * l.d * R;
        v.set(lerp(-0.3 + l.jx, lx, kk), lerp(y + 3.3 + l.jz, y + 0.008 - sink * 0.1, kk * kk), lerp(0.1 + l.jz, lz, kk));
        e.set(t * (1 - kk) * 6 + l.ph, l.ph * 2, t * (1 - kk) * 4);
        sv.setScalar(kk > 0 ? l.s * (1 - sink * 0.8) : 0.0001);
        M.compose(v, q.setFromEuler(e), sv); tea.setMatrixAt(i, M);
      });
      tea.instanceMatrix.needsUpdate = true;
    }
  };
  return { root, items, tea, update };
}

/* =================================================================
   LIQUID IN THE AIR — a stream between two points, droplets, steam
   ================================================================= */
export function createStream(color = CHAI, { S = 34, RS = 12, gloss = true }: { S?: number; RS?: number; gloss?: boolean } = {}) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array((S + 1) * (RS + 1) * 3), nor = new Float32Array((S + 1) * (RS + 1) * 3);
  const idx: number[] = [];
  for (let i = 0; i < S; i++) for (let j = 0; j < RS; j++) { const a = i * (RS + 1) + j, b = a + RS + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  g.setIndex(idx);
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3)); g.setAttribute("normal", new THREE.BufferAttribute(nor, 3));
  const mat = new THREE.MeshPhysicalMaterial({ color, roughness: gloss ? 0.16 : 0.3, clearcoat: 1, clearcoatRoughness: 0.08, emissive: new THREE.Color(color), emissiveIntensity: 0.16 });
  const mesh = new THREE.Mesh(g, mat); mesh.frustumCulled = false; mesh.castShadow = true; mesh.visible = false;
  const c = new THREE.Vector3(), T = new THREE.Vector3(), N = new THREE.Vector3(), Z = new THREE.Vector3(0, 0, 1), B = new THREE.Vector3();
  /**
   * A falling arc from `from` (leaving sideways) to `to`. `tail`..`head` (0..1) is the part of the arc that exists:
   * head grows as the pour starts, tail follows when it is cut off.
   */
  const set = (from: THREE.Vector3, to: THREE.Vector3, r0: number, r1: number, t: number, head = 1, tail = 0) => {
    mesh.visible = head - tail > 0.01;
    if (!mesh.visible) return;
    for (let i = 0; i <= S; i++) {
      const s = lerp(tail, head, i / S);
      c.set(lerp(from.x, to.x, s), from.y + (to.y - from.y) * s * s, lerp(from.z, to.z, s));
      T.set(to.x - from.x, 2 * (to.y - from.y) * Math.max(s, 0.02), to.z - from.z).normalize();
      N.crossVectors(Z, T).normalize(); B.crossVectors(T, N).normalize();
      const ends = Math.min(1, (i / S) * 14 + 0.25) * Math.min(1, ((S - i) / S) * 10 + 0.4);
      const rad = lerp(r0, r1, s) * (1 + 0.14 * Math.sin(s * 26 - t * 16) + 0.06 * Math.sin(s * 57 - t * 31)) * ends;
      for (let j = 0; j <= RS; j++) {
        const a = (j / RS) * TAU, cx = Math.cos(a), sn = Math.sin(a), o = (i * (RS + 1) + j) * 3;
        const nx = N.x * cx + B.x * sn, ny = N.y * cx + B.y * sn, nz = N.z * cx + B.z * sn;
        pos[o] = c.x + nx * rad; pos[o + 1] = c.y + ny * rad; pos[o + 2] = c.z + nz * rad * 0.8;
        nor[o] = nx; nor[o + 1] = ny; nor[o + 2] = nz;
      }
    }
    g.attributes.position.needsUpdate = true; g.attributes.normal.needsUpdate = true;
  };
  return { mesh, material: mat, set };
}

export function createDrops(n = 24, color = CHAI) {
  const mat = new THREE.MeshPhysicalMaterial({ color, roughness: 0.15, clearcoat: 1, emissive: new THREE.Color(color), emissiveIntensity: 0.15 });
  const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 10), mat, n); mesh.frustumCulled = false; mesh.visible = false;
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sv = new THREE.Vector3();
  const r = mulberry32(51);
  const seeds = Array.from({ length: n }, () => ({ a: r() * TAU, sp: 0.4 + r() * 0.8, up: 0.5 + r() * 0.9, s: 0.018 + r() * 0.03, ph: r() }));
  /** A crown of droplets thrown up from `at`; life 0..1. */
  const burst = (at: THREE.Vector3, life: number, spread = 1, count = n) => {
    mesh.visible = life > 0 && life < 1;
    if (!mesh.visible) return;
    seeds.forEach((d, i) => {
      const l = clamp01(life * 1.2 - d.ph * 0.2);
      const on = i < count && l > 0 && l < 1;
      v.set(at.x + Math.cos(d.a) * d.sp * 0.45 * l * spread, at.y + (d.up * l - 1.9 * l * l) * 0.75 * spread, at.z + Math.sin(d.a) * d.sp * 0.45 * l * spread);
      sv.setScalar(on ? d.s * (1 - l * 0.4) : 0.0001); sv.y *= 1.25;
      M.compose(v, q, sv); mesh.setMatrixAt(i, M);
    });
    mesh.instanceMatrix.needsUpdate = true;
  };
  /** Place droplets one by one (for drips). */
  const place = (i: number, x: number, y: number, z: number, s: number) => { v.set(x, y, z); sv.set(s, s * 1.35, s); M.compose(v, q, sv); mesh.setMatrixAt(i, M); };
  const commit = (on: boolean) => { mesh.visible = on; mesh.instanceMatrix.needsUpdate = true; };
  return { mesh, burst, place, commit, n };
}

/** Rising, curling steam: soft sprites that swell and thin out. */
export function createSteam(n = 12, { rise = 1.7, size = 0.62, spread = 0.2, color = "#ffffff" }: { rise?: number; size?: number; spread?: number; color?: string } = {}) {
  const root = new THREE.Group(); root.name = "steam";
  const r = mulberry32(n * 7 + 3);
  const puffs = Array.from({ length: n }, (_, i) => {
    const mat = new THREE.SpriteMaterial({ map: puffTexture(1 + (i % 3)), color, transparent: true, depthWrite: false, opacity: 0 });
    const s = new THREE.Sprite(mat); s.renderOrder = 8; s.userData.noShadow = true; root.add(s);
    return { s, mat, ph: r(), sp: 0.1 + r() * 0.07, x: (r() - 0.5) * spread, z: (r() - 0.5) * spread, w: 0.6 + r() * 0.8, sw: r() * TAU };
  });
  const update = (t: number, amt: number, tint?: THREE.Color) => {
    root.visible = amt > 0.004;
    if (!root.visible) return;
    for (const p of puffs) {
      const life = (t * p.sp + p.ph) % 1;
      const curl = Math.sin(life * 4.2 + p.sw + t * 0.3) * 0.16 * life + Math.sin(life * 9 + p.sw * 2) * 0.04 * life;
      p.s.position.set(p.x + curl * p.w, life * rise, p.z + Math.cos(life * 3 + p.sw) * 0.06 * life);
      const sc = size * (0.3 + 0.9 * life) * p.w;
      p.s.scale.set(sc * 0.8, sc * 1.25, 1);
      p.mat.rotation = p.sw + life * 1.4;
      p.mat.opacity = amt * Math.pow(Math.sin(Math.PI * life), 1.3) * (1 - life * 0.35);
      if (tint) p.mat.color.copy(tint);
    }
  };
  return { root, update };
}

/* =================================================================
   THE TABLE AND WHAT'S ON IT
   ================================================================= */
export const TABLE = { R: 3.85, T: 0.14 } as const;
export function createTable() {
  const root = new THREE.Group(); root.name = "table";
  const marble = marbleTexture();
  const top = new THREE.MeshPhysicalMaterial({ map: marble, color: "#cdcbc8", roughness: 0.3, clearcoat: 0.45, clearcoatRoughness: 0.22, envMapIntensity: 0.6 });
  const side = new THREE.MeshPhysicalMaterial({ color: "#cfc8bd", roughness: 0.35, clearcoat: 0.4, envMapIntensity: 0.7 });
  const slab = new THREE.Mesh(new THREE.CylinderGeometry(TABLE.R, TABLE.R, TABLE.T, 128), [side, top, side]); slab.position.y = -TABLE.T / 2; slab.receiveShadow = true; slab.userData.noShadow = true;
  const bull = new THREE.Mesh(new THREE.TorusGeometry(TABLE.R, TABLE.T / 2, 12, 128), side); bull.rotation.x = Math.PI / 2; bull.position.y = -TABLE.T / 2; bull.receiveShadow = true; bull.userData.noShadow = true;
  const band = new THREE.Mesh(new THREE.CylinderGeometry(TABLE.R - 0.12, TABLE.R - 0.2, 0.2, 96, 1, true), new THREE.MeshStandardMaterial({ color: "#3a2416", roughness: 0.6 })); band.position.y = -TABLE.T - 0.1;
  // the key light is one of many here, so its shadows are doubled up on a shadow-only sheet lying on the marble
  const contact = new THREE.Mesh(new THREE.CircleGeometry(TABLE.R - 0.02, 96), new THREE.ShadowMaterial({ opacity: 0.34, color: "#2e1a0c" }));
  contact.rotation.x = -Math.PI / 2; contact.position.y = 0.003; contact.receiveShadow = true; contact.userData.noShadow = true;
  root.add(slab, bull, band, contact);
  return { root, slab };
}

/** Bun maska: a soft bun split through the waist, a slab of butter inside. `open(k)` lifts the lid. */
export function createBun() {
  const root = new THREE.Group(); root.name = "bun";
  const crust = new THREE.MeshPhysicalMaterial({ map: bunCrust(), roughness: 0.38, clearcoat: 0.55, clearcoatRoughness: 0.3, sheen: 0.4, sheenColor: new THREE.Color("#ffd9a0") });
  const crumb = new THREE.MeshStandardMaterial({ map: crumbTexture(), roughness: 0.9 });
  const R = 0.62, HB = 0.2, HT = 0.4, BUT = 0.085;
  const squash = (g: THREE.BufferGeometry, h: number) => { const p = g.getAttribute("position") as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), rr = Math.hypot(x, z) / R; p.setXYZ(i, x * (1 + 0.05 * (1 - rr)), (y / R) * h * (1 + 0.06 * Math.min(1, rr * 2.5) * Math.sin(Math.atan2(z, x) * 3 + 1)), z * (1 + 0.05 * (1 - rr))); } g.computeVertexNormals(); return g; };
  const base = new THREE.Group();
  const bot = new THREE.Mesh(squash(new THREE.SphereGeometry(R, 56, 20, 0, TAU, Math.PI / 2, Math.PI / 2), HB), crust); bot.position.y = HB;
  const botCut = new THREE.Mesh(new THREE.CircleGeometry(R * 1.0, 56), crumb); botCut.rotation.x = -Math.PI / 2; botCut.position.y = HB + 0.001;
  const butter = new THREE.Mesh(new RoundedBoxGeometry(0.92, BUT, 0.74, 4, 0.03), new THREE.MeshPhysicalMaterial({ color: "#f8e9a8", roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.25, sheen: 0.5, sheenColor: new THREE.Color("#fff6cf") }));
  butter.position.y = HB + BUT / 2; butter.rotation.y = 0.12;
  base.add(bot, botCut, butter);
  const lid = new THREE.Group(); lid.position.y = HB + BUT;
  const top = new THREE.Mesh(squash(new THREE.SphereGeometry(R, 56, 28, 0, TAU, 0, Math.PI / 2), HT), crust);
  const topCut = new THREE.Mesh(new THREE.CircleGeometry(R * 1.0, 56), crumb); topCut.rotation.x = Math.PI / 2; topCut.position.y = -0.001;
  lid.add(top, topCut);
  root.add(base, lid);
  const open = (k: number) => { lid.position.set(0, HB + BUT + k * 0.42, -k * 0.34); lid.rotation.set(-k * 0.62, k * 0.25, 0); };
  shadowed(root);
  return { root, lid, butter, open, height: HB + BUT + HT };
}

let samosaGeo: THREE.BufferGeometry | null = null;
function samosaGeometry() {
  if (samosaGeo) return samosaGeo;
  const g = new THREE.SphereGeometry(1, 64, 48);
  const f = [new THREE.Vector3(0, -1, 0)];
  for (let i = 0; i < 3; i++) { const a = (i / 3) * TAU; f.push(new THREE.Vector3((Math.sqrt(8) / 3) * Math.cos(a), 1 / 3, (Math.sqrt(8) / 3) * Math.sin(a))); }
  const p = g.getAttribute("position") as THREE.BufferAttribute, v = new THREE.Vector3(), P = 3.6;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).normalize();
    let s = 0; for (const n of f) s += Math.pow(Math.max(0, v.dot(n)), P);
    const rad = Math.min(2.05, 1 / Math.pow(s, 1 / P)) * (1 + 0.035 * Math.sin(v.x * 9 + v.z * 7) * Math.cos(v.y * 8));
    p.setXYZ(i, v.x * rad * 0.27, (v.y * rad + 1) * 0.25, v.z * rad * 0.27);
  }
  g.computeVertexNormals();
  samosaGeo = g;
  return g;
}
/** Two samosas and a bowl of green chutney on a steel plate. `toss(k)` hops them. */
export function createSamosas() {
  const root = new THREE.Group(); root.name = "samosas";
  const plate = createPlate(1.0, steel(0.22)); root.add(plate);
  const p = friedPastry(); p.map.repeat.set(2, 1.5); p.bump.repeat.set(2, 1.5);
  const mat = new THREE.MeshPhysicalMaterial({ map: p.map, bumpMap: p.bump, bumpScale: 2.2, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.4 });
  const rest = [{ x: -0.3, z: 0.1, ry: 0.5, rz: 0 }, { x: 0.24, z: -0.2, ry: 2.4, rz: 0.05 }];
  const items = rest.map((q) => { const m = new THREE.Mesh(samosaGeometry(), mat); m.position.set(q.x, PLATE_Y, q.z); m.rotation.set(0, q.ry, q.rz); root.add(m); return m; });
  const bowl = new THREE.Mesh(lathe([[0, 0], [0.15, 0], [0.2, 0.03], [0.25, 0.13], [0.255, 0.14], [0.235, 0.135], [0.18, 0.04], [0, 0.03]], 40), steel(0.2)); bowl.position.set(0.42, PLATE_Y, 0.42);
  const chutney = new THREE.Mesh(new THREE.CircleGeometry(0.225, 32), new THREE.MeshPhysicalMaterial({ color: "#5f8a2c", roughness: 0.3, clearcoat: 0.8 })); chutney.rotation.x = -Math.PI / 2; chutney.position.set(0.42, PLATE_Y + 0.11, 0.42);
  root.add(bowl, chutney);
  const toss = (k: number) => items.forEach((m, i) => { const q = rest[i], s = Math.sin(Math.PI * k); m.position.set(q.x + (i ? 0.12 : -0.12) * s, PLATE_Y + s * (0.55 + i * 0.2), q.z); m.rotation.set(k * TAU * (i ? -1 : 1), q.ry + k * TAU, q.rz); });
  shadowed(root);
  return { root, items, toss };
}

/** A cappuccino with a rosetta, on its saucer. */
export function createCappuccino() {
  const root = new THREE.Group(); root.name = "cappuccino";
  const white = ceramic("#fbf7ef");
  const saucer = createPlate(0.86, white); root.add(saucer);
  const cup = new THREE.Group(); cup.position.y = PLATE_Y;
  const body = new THREE.Mesh(lathe([[0, 0], [0.26, 0], [0.3, 0.02], [0.36, 0.1], [0.43, 0.22], [0.48, 0.34], [0.505, 0.42], [0.512, 0.436], [0.5, 0.442], [0.485, 0.42], [0.46, 0.33], [0.41, 0.21], [0.34, 0.1], [0.27, 0.05], [0, 0.045]], 80), white);
  const arc = Math.PI * 1.15;
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.036, 12, 28, arc), white); handle.rotation.z = -arc / 2; handle.position.set(0.5, 0.235, 0); handle.scale.set(1, 1, 1.25);
  const coffee = new THREE.Mesh(new THREE.CircleGeometry(0.468, 56), new THREE.MeshPhysicalMaterial({ map: latteArt(), roughness: 0.3, clearcoat: 0.5, clearcoatRoughness: 0.3 })); coffee.rotation.x = -Math.PI / 2; coffee.position.y = 0.385; coffee.userData.noShadow = true;
  cup.add(body, handle, coffee); root.add(cup);
  shadowed(root);
  return { root, cup, coffee };
}

/** South-Indian filter coffee: a steel tumbler standing in its dabara. */
export function createFilterCoffee() {
  const root = new THREE.Group(); root.name = "filter";
  const st = steel(0.17);
  const dabara = new THREE.Mesh(lathe([[0, 0], [0.36, 0], [0.39, 0.02], [0.47, 0.27], [0.54, 0.31], [0.55, 0.322], [0.535, 0.32], [0.455, 0.272], [0.375, 0.035], [0, 0.03]], 72), st);
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.405, 48), new THREE.MeshPhysicalMaterial({ color: "#3a1c0b", roughness: 0.16, clearcoat: 1 })); pool.rotation.x = -Math.PI / 2; pool.position.y = 0.11; pool.userData.noShadow = true;
  const tumbler = new THREE.Group(); tumbler.position.y = 0.03;
  const tb = new THREE.Mesh(lathe([[0, 0], [0.24, 0], [0.262, 0.015], [0.275, 0.5], [0.29, 0.6], [0.345, 0.64], [0.352, 0.652], [0.336, 0.648], [0.28, 0.602], [0.262, 0.5], [0.25, 0.03], [0, 0.03]], 72), st);
  const foam = new THREE.Mesh(new THREE.CircleGeometry(0.268, 40), new THREE.MeshStandardMaterial({ map: kaapiFoam(), roughness: 0.7 })); foam.rotation.x = -Math.PI / 2; foam.position.y = 0.565; foam.userData.noShadow = true;
  tumbler.add(tb, foam);
  root.add(dabara, pool, tumbler);
  const pull = (k: number) => { const s = Math.sin(Math.PI * k); tumbler.position.set(s * 0.16, 0.03 + s * 0.5, 0); tumbler.rotation.z = s * 0.45; };
  shadowed(root);
  return { root, tumbler, pull };
}
