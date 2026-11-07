import * as THREE from "three";

/* ------------------------------------------------------------------
   Print sheets — every label and carton face is "printed" on three canvases:
     map   colour (inks + foil colour)
     mask  finish:  R = spot-UV gloss (clearcoat) · G = roughness · B = metal (hot-foil)
     bump  emboss / deboss height
   so hot-foil gold actually reflects the studio, spot UV catches a glint and
   the embossed wordmark throws a shadow. Nothing is downloaded.
   ------------------------------------------------------------------ */

export function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const FONT = {
  display: (px: number) => `400 ${px}px "Rozha One", Georgia, serif`,
  sans: (w: number, px: number) => `${w} ${px}px "Albert Sans", "Helvetica Neue", Arial, sans-serif`,
  mono: (w: number, px: number) => `${w} ${px}px "Azeret Mono", Menlo, monospace`,
};

let fontsPromise: Promise<void> | null = null;
/** Resolve once the site fonts are usable on canvas (next/font registers the real family names). */
export function fontsReady() {
  if (typeof document === "undefined") return Promise.resolve();
  fontsPromise ??= (async () => {
    try {
      await Promise.race([
        Promise.all([
          document.fonts.load(FONT.display(64)),
          document.fonts.load(FONT.sans(500, 32)),
          document.fonts.load(FONT.sans(700, 32)),
          document.fonts.load(FONT.mono(400, 24)),
          document.fonts.load(FONT.mono(700, 24)),
        ]),
        new Promise((r) => setTimeout(r, 2500)),
      ]);
    } catch { /* system fallbacks */ }
  })();
  return fontsPromise;
}

type Draw = (ctx: CanvasRenderingContext2D) => void;
const PAPER_ROUGH = 0.74;
const FOIL_ROUGH = 0.3;

export type Printed = { map: THREE.Texture; mask: THREE.Texture | null; bump: THREE.Texture | null; glow?: THREE.Texture | null };

export class Sheet {
  readonly W: number;
  readonly H: number;
  readonly map: CanvasRenderingContext2D;
  readonly mask: CanvasRenderingContext2D | null;
  readonly bump: CanvasRenderingContext2D | null;
  /** foil only — a faint emissive so hot-foil reads as gold even off-highlight */
  readonly glow: CanvasRenderingContext2D | null;
  private foilGrad: CanvasGradient;

  constructor(W: number, H: number, { mask = true, bump = true, foil = ["#fff0b8", "#e7b53a", "#ffe28a", "#c9921f"] }: { mask?: boolean; bump?: boolean; foil?: string[] } = {}) {
    this.W = Math.round(W); this.H = Math.round(H);
    const mk = () => { const c = document.createElement("canvas"); c.width = this.W; c.height = this.H; return c.getContext("2d")!; };
    this.map = mk();
    this.mask = mask ? mk() : null;
    this.bump = bump ? mk() : null;
    this.glow = mask ? mk() : null;
    if (this.glow) { this.glow.fillStyle = "#000"; this.glow.fillRect(0, 0, this.W, this.H); }
    const g = this.map.createLinearGradient(0, 0, this.W, this.H);
    foil.forEach((c, i) => g.addColorStop(i / (foil.length - 1), c));
    this.foilGrad = g;
    this.mask && (this.mask.fillStyle = `rgb(0,${Math.round(PAPER_ROUGH * 255)},0)`, this.mask.fillRect(0, 0, this.W, this.H));
    this.bump && (this.bump.fillStyle = "#808080", this.bump.fillRect(0, 0, this.W, this.H));
  }

  private each(fn: Draw, map: string | CanvasGradient | null, mask: string | null, bump: string | null) {
    const run = (ctx: CanvasRenderingContext2D | null, style: string | CanvasGradient | null) => {
      if (!ctx || style === null) return;
      ctx.save(); ctx.fillStyle = style; ctx.strokeStyle = style; fn(ctx); ctx.restore();
    };
    run(this.map, map); run(this.mask, mask); run(this.bump, bump);
  }

  /** Flood the sheet with a paper/ink colour. `rough` sets the finish (0 = gloss). */
  paper(color: string, rough = PAPER_ROUGH) {
    this.each((c) => c.fillRect(0, 0, this.W, this.H), color, `rgb(0,${Math.round(rough * 255)},0)`, null);
    return this;
  }
  /** Printed ink (colour only). */
  ink(color: string, fn: Draw) { this.each(fn, color, null, null); return this; }
  /** Hot-foil stamping: metallic, low roughness; optionally embossed. */
  foil(fn: Draw, { emboss = 0, color }: { emboss?: number; color?: string } = {}) {
    this.each(fn, color ?? this.foilGrad, `rgb(0,${Math.round(FOIL_ROUGH * 255)},255)`, emboss ? `rgb(${128 + emboss * 127},${128 + emboss * 127},${128 + emboss * 127})` : null);
    if (this.glow) { this.glow.save(); this.glow.fillStyle = this.glow.strokeStyle = "#e7b53a"; fn(this.glow); this.glow.restore(); }
    return this;
  }
  /** Spot UV varnish: gloss only, no colour change. */
  spot(fn: Draw, rough = PAPER_ROUGH) { this.each(fn, null, `rgb(255,${Math.round(rough * 255)},0)`, null); return this; }
  /** Blind emboss (>0) or deboss (<0) without ink. */
  emboss(fn: Draw, depth = 1) { const v = Math.round(128 + depth * 127); this.each(fn, null, null, `rgb(${v},${v},${v})`); return this; }
  /** Direct access for gradients / images on the colour layer. */
  raw(fn: Draw) { this.map.save(); fn(this.map); this.map.restore(); return this; }

  textures(aniso = 8): Printed {
    const t = (ctx: CanvasRenderingContext2D, srgb: boolean) => {
      const tex = new THREE.CanvasTexture(ctx.canvas);
      if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = aniso;
      tex.needsUpdate = true;
      return tex;
    };
    return { map: t(this.map, true), mask: this.mask ? t(this.mask, false) : null, bump: this.bump ? t(this.bump, false) : null, glow: this.glow ? t(this.glow, true) : null };
  }
}

/** Physical material for a printed surface (label, carton face). */
export function printedMaterial(p: Printed, { bumpScale = 1.4, side = THREE.FrontSide }: { bumpScale?: number; side?: THREE.Side } = {}) {
  const m = new THREE.MeshPhysicalMaterial({
    map: p.map,
    roughness: p.mask ? 1 : PAPER_ROUGH,
    metalness: p.mask ? 1 : 0,
    roughnessMap: p.mask,
    metalnessMap: p.mask,
    clearcoat: p.mask ? 1 : 0,
    clearcoatMap: p.mask,
    clearcoatRoughness: 0.06,
    bumpMap: p.bump,
    bumpScale,
    emissive: p.glow ? new THREE.Color("#ffffff") : new THREE.Color("#000000"),
    emissiveMap: p.glow ?? null,
    emissiveIntensity: p.glow ? 0.3 : 0,
    side,
  });
  return m;
}

/* ---------------- small drawing helpers ---------------- */
export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
/** Stroke a rectangle frame of width `lw` as a filled ring (so it works on every layer with fillStyle). */
export function frame(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, lw: number) {
  ctx.fillRect(x, y, w, lw); ctx.fillRect(x, y + h - lw, w, lw); ctx.fillRect(x, y, lw, h); ctx.fillRect(x + w - lw, y, lw, h);
}
/** Largest font ≤ max that fits the width; sets ctx.font and returns px. */
export function fitText(ctx: CanvasRenderingContext2D, text: string, font: (px: number) => string, max: number, width: number) {
  ctx.font = font(max);
  const w = ctx.measureText(text).width;
  const px = w > width ? Math.floor(max * (width / w)) : max;
  ctx.font = font(px);
  return px;
}
export function spaced(ctx: CanvasRenderingContext2D, px: number) {
  (ctx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = `${px}px`;
}
export function barcode(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, seed: number) {
  const rnd = mulberry32(seed);
  let cx = x;
  while (cx < x + w) { const bw = 2 + Math.floor(rnd() * 3) * 2; ctx.fillRect(cx, y, bw, h); cx += bw + 2 + Math.floor(rnd() * 3) * 2; }
}
export function registration(ctx: CanvasRenderingContext2D, x: number, y: number, s = 12, lw = 2) {
  ctx.fillRect(x - s, y - lw / 2, s * 2, lw); ctx.fillRect(x - lw / 2, y - s, lw, s * 2);
}
