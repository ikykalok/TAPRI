import * as THREE from "three";

/* ------------------------------------------------------------------
   One studio for everything: the live story, the offscreen stills, the card
   turntable and the dunk test all light the counter with the same softbox
   environment and the same lamps, so a still and a live frame match.
   ------------------------------------------------------------------ */

function softbox(w: number, h: number, color: string, intensity: number, pos: [number, number, number], rot: [number, number, number]) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide, toneMapped: false })
  );
  m.position.set(...pos);
  m.rotation.set(...rot);
  return m;
}

/** A café by a window: one big soft window on the left, a warm wall, a bright ceiling. */
export function studioEnvScene() {
  const s = new THREE.Scene();
  s.background = new THREE.Color("#6e5f4c");
  s.add(
    softbox(9, 6, "#fff6e8", 2.4, [0, 5.5, 1], [Math.PI / 2, 0, 0]),          // ceiling
    softbox(3.2, 6.5, "#fff3df", 4.4, [-4.4, 1.9, 2.6], [0, Math.PI / 3, 0]),  // the window, left
    softbox(1.2, 6.5, "#ffe9d0", 3.0, [4.6, 1.5, 1.0], [0, -Math.PI / 2.4, 0]), // rim strip, right
    softbox(3.5, 2.2, "#fff4e4", 1.5, [1.5, 0.8, 6], [0, Math.PI, 0]),          // front fill card
    softbox(7, 1.0, "#ffffff", 1.9, [0, 2.5, -5.5], [0, 0, 0]),               // back bar — the glass edge line
    softbox(8, 4, "#efe2cc", 0.7, [0, -3.2, 2], [-Math.PI / 2, 0, 0]),         // warm counter bounce
  );
  return s;
}

const envCache = new WeakMap<THREE.WebGLRenderer, THREE.Texture>();
export function studioEnvironment(renderer: THREE.WebGLRenderer) {
  let t = envCache.get(renderer);
  if (!t) {
    const pmrem = new THREE.PMREMGenerator(renderer);
    t = pmrem.fromScene(studioEnvScene(), 0.02).texture;
    pmrem.dispose();
    envCache.set(renderer, t);
  }
  return t;
}

export type StudioLights = THREE.Group & { userData: { key: THREE.DirectionalLight; rim: THREE.DirectionalLight; fill: THREE.DirectionalLight; amb: THREE.AmbientLight } };
/** `shadows`: the key light casts a soft shadow over a `reach`-wide square around the origin. */
export function studioLights({ shadows = false, reach = 5, mapSize = 2048 }: { shadows?: boolean; reach?: number; mapSize?: number } = {}) {
  const g = new THREE.Group();
  const amb = new THREE.AmbientLight("#fff3e0", 0.62);
  const key = new THREE.DirectionalLight("#fff0dc", 2.3); key.position.set(-4.2, 6.5, 4.2);
  const rim = new THREE.DirectionalLight("#ffe8d2", 1.2); rim.position.set(4.5, 2.4, -3.5);
  const fill = new THREE.DirectionalLight("#f6e3d0", 0.32); fill.position.set(0.5, -2.5, 3);
  if (shadows) {
    key.castShadow = true;
    key.shadow.mapSize.set(mapSize, mapSize);
    const c = key.shadow.camera; c.left = -reach; c.right = reach; c.top = reach; c.bottom = -reach; c.near = 0.5; c.far = 24;
    key.shadow.bias = -0.0005; key.shadow.normalBias = 0.025; key.shadow.radius = 3.5;
    g.add(key.target);
  }
  g.add(amb, key, rim, fill);
  g.userData = { key, rim, fill, amb };
  return g as StudioLights;
}

export function configureRenderer(r: THREE.WebGLRenderer, shadows = false) {
  r.outputColorSpace = THREE.SRGBColorSpace;
  r.toneMapping = THREE.NeutralToneMapping;
  r.toneMappingExposure = 1;
  r.setClearColor(0x000000, 0);
  if (shadows) { r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap; }
}
