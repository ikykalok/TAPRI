import * as THREE from "three";

/* ------------------------------------------------------------------
   Shader-patched physical materials.
   - glass:    thin clear glass without a transmission pass (works on a transparent
               canvas over the page): fresnel edges and bright reflections go opaque.
   - chai:     milky tea with a fill level (everything above it is discarded) and a slosh.
   - brew:     the surface of the pan — water that takes colour from the leaves, milk
               that blooms in clouds, then one even chai that foams as it boils up.
   - biscuit:  bakes a soak line and a ragged break into any biscuit.
   - flame:    additive gas flames, instanced.
   ------------------------------------------------------------------ */

export function glassMaterial(tint = "#fffdf5", { opacity = 0.04, edge = 0.36, gloss = 1 }: { opacity?: number; edge?: number; gloss?: number } = {}) {
  const m = new THREE.MeshPhysicalMaterial({
    color: "#000000", roughness: 0.05, metalness: 0, transparent: true, opacity,
    clearcoat: 0, envMapIntensity: 0.66 * gloss, depthWrite: false,
    side: THREE.DoubleSide, specularIntensity: 1, specularColor: new THREE.Color(tint), ior: 1.5,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  });
  m.onBeforeCompile = (s) => {
    s.fragmentShader = s.fragmentShader.replace(
      "#include <opaque_fragment>",
      `float gFres = pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.6);
       diffuseColor.a = clamp(diffuseColor.a + gFres * ${edge.toFixed(3)}, 0.0, 1.0);
       outgoingLight *= 1.0 + gFres * 0.35;
       #include <opaque_fragment>`
    );
  };
  m.customProgramCacheKey = () => `tapri-glass-${edge.toFixed(3)}`;
  return m;
}

const NOISE = /* glsl */ `
float ah3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float anoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(ah3(i), ah3(i + vec3(1,0,0)), f.x), mix(ah3(i + vec3(0,1,0)), ah3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(ah3(i + vec3(0,0,1)), ah3(i + vec3(1,0,1)), f.x), mix(ah3(i + vec3(0,1,1)), ah3(i + vec3(1,1,1)), f.x), f.y), f.z); }
float afbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * anoise(p); p = p * 2.03 + 11.3; a *= 0.5; } return s; }
`;

export const CHAI = "#bb8a66";

export type ChaiUniforms = { uLevel: { value: number }; uSlosh: { value: number }; uTime: { value: number } };
/** Opaque milky tea; `uLevel` is the fill height in the mesh's local space. */
export function chaiMaterial(color = CHAI, level = 10) {
  const u: ChaiUniforms = { uLevel: { value: level }, uSlosh: { value: 0 }, uTime: { value: 0 } };
  const m = new THREE.MeshPhysicalMaterial({ color, roughness: 0.34, clearcoat: 0.5, clearcoatRoughness: 0.25, sheen: 0.5, sheenColor: new THREE.Color("#ffe2c0"), sheenRoughness: 0.5, side: THREE.DoubleSide });
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vJ;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvJ = position;");
    s.fragmentShader = s.fragmentShader
      .replace("#include <common>", `#include <common>\nvarying vec3 vJ;\nuniform float uLevel, uSlosh, uTime;\n${NOISE}`)
      .replace("#include <clipping_planes_fragment>", `#include <clipping_planes_fragment>
        float jw = vJ.x * uSlosh * 0.35 + sin(atan(vJ.z, vJ.x) * 3.0 + uTime * 4.0) * 0.01 * (0.2 + abs(uSlosh) * 3.0);
        if (vJ.y > uLevel + jw) discard;`)
      .replace("#include <color_fragment>", `#include <color_fragment>
        float jn = anoise(vJ * 7.0 + vec3(0.0, uTime * 0.25, 0.0));
        diffuseColor.rgb *= (0.93 + 0.1 * jn) * mix(0.8, 1.04, smoothstep(0.1, 1.3, vJ.y));
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.22 + 0.03, smoothstep(0.07, 0.0, uLevel + jw - vJ.y));`)
      .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * 0.09;");
  };
  m.customProgramCacheKey = () => "tapri-chai";
  return { material: m, uniforms: u };
}

export type BrewUniforms = {
  uTea: { value: number }; uMilk: { value: number }; uMix: { value: number }; uFoam: { value: number }; uTime: { value: number }; uSwirl: { value: number };
  uHit: { value: THREE.Vector2 };
};
/** The pan's surface, drawn on a unit disc (local xy). */
export function brewMaterial() {
  const u: BrewUniforms = { uTea: { value: 0 }, uMilk: { value: 0 }, uMix: { value: 0 }, uFoam: { value: 0 }, uTime: { value: 0 }, uSwirl: { value: 0 }, uHit: { value: new THREE.Vector2(-0.3, -0.15) } };
  const col = (hex: string) => { const c = new THREE.Color(hex); return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`; };
  const m = new THREE.MeshPhysicalMaterial({ color: "#ffffff", roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.06, metalness: 0 });
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vB;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvB = position;");
    s.fragmentShader = s.fragmentShader
      .replace("#include <common>", `#include <common>\nvarying vec3 vB;\nuniform float uTea, uMilk, uMix, uFoam, uTime, uSwirl;\nuniform vec2 uHit;\n${NOISE}\nfloat bFoam;`)
      .replace("#include <map_fragment>", `#include <map_fragment>
        vec2 q = vB.xy; float r = length(q);
        float sw = uSwirl * (1.0 - r * 0.55);
        mat2 R = mat2(cos(sw), -sin(sw), sin(sw), cos(sw));
        vec2 w = R * q;
        float n = afbm(vec3(w * 1.9, uTime * 0.07));
        float n2 = afbm(vec3(w * 3.6 + n * 1.7, uTime * 0.1 + 3.0));
        vec3 cWater = ${col("#8f9a98")}, cTea = ${col("#4a1d08")}, cDeep = ${col("#2c0e03")}, cMilk = ${col("#f3e4cb")}, cChai = ${col("#c39068")}, cFoam = ${col("#ecd3ae")};
        float tea = smoothstep(0.0, 0.5, uTea * 1.6 - (1.0 - n2) * 0.95 + 0.04);
        vec3 c = mix(cWater * (0.85 + 0.3 * n), mix(cTea, cDeep, n), tea);
        float d = length(q - uHit);
        float cl = smoothstep(0.0, 0.2, uMilk * 2.3 - d * 1.1 + (n2 - 0.5) * 1.9 - 0.2);
        float wisp = smoothstep(0.42, 0.5, n2) * smoothstep(0.62, 0.5, n2) * cl;
        c = mix(c, mix(cMilk, cChai, 0.25 + 0.5 * n), cl * (0.82 + 0.18 * wisp));
        c = mix(c, cChai * (0.92 + 0.16 * n), uMix);
        bFoam = uFoam * smoothstep(0.38, 0.62, n2 * 0.8 + uFoam * 0.42 + r * r * 0.3 * uFoam);
        float cells = anoise(vec3(q * 34.0, uTime * 1.4));
        c = mix(c, cFoam * (0.9 + 0.2 * cells), bFoam);
        diffuseColor.rgb = c;`)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.55, bFoam);")
      .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * 0.1;");
  };
  m.customProgramCacheKey = () => "tapri-brew";
  return { material: m, uniforms: u };
}

export type BiscuitUniforms = { uSoak: { value: number }; uBreak: { value: number }; uPart: { value: number }; uWet: { value: number } };
/**
 * A baked biscuit. `uSoak` is the local y below which it has drunk chai (darker, glossy);
 * `uPart` 1 keeps only what is above the ragged line at `uBreak`, 2 only what is below.
 */
export function biscuitMaterial(map: THREE.Texture, bump: THREE.Texture | null, { dunk = false, crumb = "#e9c98f", rough = 0.86, bumpScale = 1.2 }: { dunk?: boolean; crumb?: string; rough?: number; bumpScale?: number } = {}) {
  const u: BiscuitUniforms = { uSoak: { value: -99 }, uBreak: { value: 0 }, uPart: { value: 0 }, uWet: { value: 1 } };
  const m = new THREE.MeshStandardMaterial({ map, bumpMap: bump, bumpScale, roughness: rough, metalness: 0, side: dunk ? THREE.DoubleSide : THREE.FrontSide });
  if (!dunk) return { material: m, uniforms: u };
  const cc = new THREE.Color(crumb);
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vK;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvK = position;");
    s.fragmentShader = s.fragmentShader
      .replace("#include <common>", `#include <common>\nvarying vec3 vK;\nuniform float uSoak, uBreak, uPart, uWet;\n${NOISE}\nfloat kSoak;`)
      .replace("#include <clipping_planes_fragment>", `#include <clipping_planes_fragment>
        float kb = uBreak + (anoise(vec3(vK.x * 13.0, vK.z * 9.0, 2.0)) - 0.5) * 0.11 + (anoise(vec3(vK.x * 41.0, 0.0, 7.0)) - 0.5) * 0.03;
        if (uPart > 0.5 && uPart < 1.5 && vK.y < kb) discard;
        if (uPart > 1.5 && vK.y > kb) discard;`)
      .replace("#include <map_fragment>", `#include <map_fragment>
        float ks = uSoak + (anoise(vec3(vK.x * 9.0, vK.z * 9.0, 4.0)) - 0.5) * 0.07;
        kSoak = smoothstep(ks + 0.035, ks - 0.02, vK.y) * uWet;
        if (!gl_FrontFacing) diffuseColor.rgb = vec3(${cc.r.toFixed(4)}, ${cc.g.toFixed(4)}, ${cc.b.toFixed(4)}) * (0.8 + 0.3 * anoise(vK * 40.0));
        diffuseColor.rgb *= mix(vec3(1.0), vec3(0.5, 0.37, 0.27), kSoak);`)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.22, kSoak);");
  };
  m.customProgramCacheKey = () => "tapri-biscuit-dunk";
  return { material: m, uniforms: u };
}

export type FlameUniforms = { uTime: { value: number }; uPower: { value: number } };
/** Gas flames: a unit cone (base y = 0, tip y = 1), instanced around the burner. */
export function flameMaterial() {
  const u: FlameUniforms = { uTime: { value: 0 }, uPower: { value: 0 } };
  const m = new THREE.ShaderMaterial({
    uniforms: u, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
    vertexShader: /* glsl */ `
      uniform float uTime, uPower; varying float vH; varying float vId; varying vec3 vN; varying vec3 vV;
      void main() {
        float id = float(gl_InstanceID);
        vId = id; vH = position.y;
        vec3 p = position;
        float fl = 0.72 + 0.28 * sin(uTime * 11.0 + id * 2.4) + 0.12 * sin(uTime * 23.0 + id * 5.1);
        p.y *= fl * (0.25 + 0.75 * uPower);
        p.x += sin(uTime * 13.0 + id * 1.7) * 0.07 * vH; p.z += cos(uTime * 9.0 + id * 2.9) * 0.07 * vH;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        vN = normalize(normalMatrix * mat3(instanceMatrix) * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uPower; varying float vH; varying float vId; varying vec3 vN; varying vec3 vV;
      void main() {
        float core = pow(abs(dot(normalize(vN), normalize(vV))), 1.4);
        vec3 c = mix(vec3(0.10, 0.34, 1.0), vec3(0.42, 0.74, 1.0), smoothstep(0.0, 0.7, vH));
        c = mix(c, vec3(1.0, 0.62, 0.22), smoothstep(0.62, 1.0, vH) * (0.35 + 0.35 * sin(vId * 3.7)));
        float a = (1.0 - smoothstep(0.35, 1.0, vH)) * (0.35 + 0.65 * core) * uPower;
        gl_FragColor = vec4(c * a * 1.5, a);
      }`,
  });
  return { material: m, uniforms: u };
}

export const steel = (rough = 0.24, color = "#d7dbdc") => new THREE.MeshStandardMaterial({ color, metalness: 1, roughness: rough, envMapIntensity: 1.15 });
export const ceramic = (color = "#fbf6ec") => new THREE.MeshPhysicalMaterial({ color, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
