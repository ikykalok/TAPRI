import * as THREE from "three";
import { FONT, mulberry32, roundRect, spaced } from "./print";
import { brand } from "@/data/site";

/* ------------------------------------------------------------------
   Everything painted or baked in the café: biscuit faces (with their emboss),
   foam, latte art, marble, bun crust, samosa blisters and steam. All canvas —
   nothing is downloaded.
   ------------------------------------------------------------------ */

const canvas = (w: number, h: number) => { const c = document.createElement("canvas"); c.width = w; c.height = h; return { c, x: c.getContext("2d")! }; };
const tex = (c: HTMLCanvasElement, srgb = true) => { const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
const TAU = Math.PI * 2;
export type Baked = { map: THREE.Texture; bump: THREE.Texture };
const memo = new Map<string, unknown>();
function once<T>(key: string, make: () => T): T { if (!memo.has(key)) memo.set(key, make()); return memo.get(key) as T; }

function speckle(x: CanvasRenderingContext2D, W: number, H: number, n: number, r: () => number, cols: string[], size = 1.4) {
  for (let i = 0; i < n; i++) { x.fillStyle = cols[Math.floor(r() * cols.length)]; x.globalAlpha = 0.25 + r() * 0.5; x.beginPath(); x.arc(r() * W, r() * H, 0.4 + r() * size, 0, TAU); x.fill(); }
  x.globalAlpha = 1;
}
/** Oven browning that creeps in from the edges of a rectangle. */
function bakeEdges(x: CanvasRenderingContext2D, W: number, H: number, color: string, depth: number, alpha = 0.6) {
  const edge = (x0: number, y0: number, x1: number, y1: number, rx: number, ry: number, rw: number, rh: number) => {
    const g = x.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, color.replace("A", String(alpha))); g.addColorStop(1, color.replace("A", "0"));
    x.fillStyle = g; x.fillRect(rx, ry, rw, rh);
  };
  edge(0, 0, depth, 0, 0, 0, depth, H); edge(W, 0, W - depth, 0, W - depth, 0, depth, H);
  edge(0, 0, 0, depth, 0, 0, W, depth); edge(0, H, 0, H - depth, 0, H - depth, W, depth);
}

/* ---------------- glucose biscuit (portrait, 0.62 : 1) ---------------- */
export function glucosePrint(): Baked {
  return once("glucose", () => {
    const W = 512, H = 826;
    const { c, x } = canvas(W, H), { c: bc, x: b } = canvas(W, H);
    const r = mulberry32(21);
    const g = x.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, H * 0.62);
    g.addColorStop(0, "#e8bf7c"); g.addColorStop(0.6, "#dfae66"); g.addColorStop(1, "#cf954a");
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    for (let i = 0; i < 26; i++) { const gx = r() * W, gy = r() * H, gr = 40 + r() * 110; const gg = x.createRadialGradient(gx, gy, 0, gx, gy, gr); gg.addColorStop(0, r() > 0.5 ? "rgba(240,205,140,0.3)" : "rgba(190,128,58,0.22)"); gg.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = gg; x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2); }
    bakeEdges(x, W, H, "rgba(168,98,34,A)", 70, 0.62);
    speckle(x, W, H, 2600, r, ["#b9803a", "#f3d49a", "#a86a2a"], 1.1);
    b.fillStyle = "#808080"; b.fillRect(0, 0, W, H);
    // fine baked grain on the bump
    for (let i = 0; i < 5000; i++) { const v = 112 + Math.floor(r() * 32); b.fillStyle = `rgb(${v},${v},${v})`; b.fillRect(r() * W, r() * H, 2, 2); }
    const raise = (fn: (k: CanvasRenderingContext2D) => void, level = 215) => {
      // colour: a soft lit edge above, shade below — so the emboss reads even in flat light
      x.save(); x.translate(0, 2.5); x.fillStyle = x.strokeStyle = "rgba(120,66,18,0.5)"; fn(x); x.restore();
      x.save(); x.translate(0, -1.5); x.fillStyle = x.strokeStyle = "rgba(255,232,180,0.55)"; fn(x); x.restore();
      x.save(); x.fillStyle = x.strokeStyle = "#deae68"; fn(x); x.restore();
      b.save(); b.fillStyle = b.strokeStyle = `rgb(${level},${level},${level})`; fn(b); b.restore();
    };
    // frame
    raise((k) => { k.lineWidth = 9; roundRect(k, 44, 44, W - 88, H - 88, 26); k.stroke(); });
    raise((k) => { k.lineWidth = 4; roundRect(k, 66, 66, W - 132, H - 132, 16); k.stroke(); });
    // beaded border
    raise((k) => {
      for (let i = 0; i < 13; i++) { const px = 96 + (i * (W - 192)) / 12; for (const py of [100, H - 100]) { k.beginPath(); k.arc(px, py, 7, 0, TAU); k.fill(); } }
      for (let i = 1; i < 20; i++) { const py = 100 + (i * (H - 200)) / 20; for (const px of [96, W - 96]) { k.beginPath(); k.arc(px, py, 7, 0, TAU); k.fill(); } }
    });
    // wordmark, running up the biscuit
    raise((k) => {
      k.save(); k.translate(W / 2, H / 2); k.rotate(-Math.PI / 2); k.textAlign = "center"; k.textBaseline = "middle";
      k.font = FONT.display(138); spaced(k, 4); k.fillText(brand.short, 0, 8);
      k.restore();
    }, 235);
    raise((k) => {
      k.save(); k.translate(W / 2, H / 2); k.rotate(-Math.PI / 2); k.textAlign = "center"; k.textBaseline = "middle";
      k.font = FONT.sans(700, 25); spaced(k, 9);
      k.fillText("GLUCOSE", 0, -112); k.fillText("CHAI BISCUIT", 0, 118);
      k.restore();
    }, 205);
    // docker holes
    const holes: [number, number][] = [];
    for (const px of [150, W - 150]) for (let i = 0; i < 4; i++) holes.push([px, 200 + i * ((H - 400) / 3)]);
    holes.forEach(([px, py]) => {
      x.fillStyle = "rgba(110,60,18,0.85)"; x.beginPath(); x.arc(px, py, 6.5, 0, TAU); x.fill();
      x.fillStyle = "rgba(255,230,180,0.5)"; x.beginPath(); x.arc(px, py + 5, 6, 0, Math.PI); x.fill();
      b.fillStyle = "#1c1c1c"; b.beginPath(); b.arc(px, py, 8, 0, TAU); b.fill();
    });
    return { map: tex(c), bump: tex(bc, false) };
  });
}

/* ---------------- rusk (portrait, 0.5 : 1) ---------------- */
export function ruskPrint(): Baked {
  return once("rusk", () => {
    const W = 420, H = 840;
    const { c, x } = canvas(W, H), { c: bc, x: b } = canvas(W, H);
    const r = mulberry32(5);
    x.fillStyle = "#e3b56c"; x.fillRect(0, 0, W, H);
    b.fillStyle = "#8c8c8c"; b.fillRect(0, 0, W, H);
    for (let i = 0; i < 30; i++) { const gx = r() * W, gy = r() * H, gr = 60 + r() * 120; const gg = x.createRadialGradient(gx, gy, 0, gx, gy, gr); gg.addColorStop(0, r() > 0.4 ? "rgba(204,140,60,0.35)" : "rgba(246,214,150,0.35)"); gg.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = gg; x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2); }
    // open crumb: lots of little pores
    for (let i = 0; i < 1500; i++) {
      const px = r() * W, py = r() * H, rx = 1.5 + r() * 5.5, ry = rx * (0.5 + r() * 0.8), a = r() * Math.PI;
      x.fillStyle = `rgba(150,88,30,${0.3 + r() * 0.4})`; x.beginPath(); x.ellipse(px, py, rx, ry, a, 0, TAU); x.fill();
      x.fillStyle = "rgba(255,236,190,0.4)"; x.beginPath(); x.ellipse(px, py + ry * 0.7, rx, ry * 0.4, a, 0, TAU); x.fill();
      b.fillStyle = "#303030"; b.beginPath(); b.ellipse(px, py, rx, ry, a, 0, TAU); b.fill();
    }
    bakeEdges(x, W, H, "rgba(138,72,20,A)", 34, 0.95);
    bakeEdges(x, W, H, "rgba(150,84,26,A)", 90, 0.4);
    return { map: tex(c), bump: tex(bc, false) };
  });
}

/* ---------------- round biscuits (square texture, planar across the face) ---------------- */
export function roundPrint(kind: "osmania" | "nankhatai" | "jeera"): Baked {
  return once(`round-${kind}`, () => {
    const S = 512, R = S / 2;
    const { c, x } = canvas(S, S), { c: bc, x: b } = canvas(S, S);
    const r = mulberry32(kind === "osmania" ? 3 : kind === "jeera" ? 9 : 14);
    const pal = kind === "nankhatai" ? ["#f1dcb0", "#e9cc98", "#d7b077"] : kind === "jeera" ? ["#e6bf80", "#d9a85e", "#b97c36"] : ["#e0a04c", "#cf8a38", "#a9631f"];
    const g = x.createRadialGradient(R, R, 20, R, R, R);
    g.addColorStop(0, pal[0]); g.addColorStop(0.72, pal[1]); g.addColorStop(1, pal[2]);
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    b.fillStyle = "#808080"; b.fillRect(0, 0, S, S);
    speckle(x, S, S, 1800, r, [pal[2], "#fff0cc"], 1.2);
    for (let i = 0; i < 3000; i++) { const v = 114 + Math.floor(r() * 28); b.fillStyle = `rgb(${v},${v},${v})`; b.fillRect(r() * S, r() * S, 2, 2); }
    if (kind === "nankhatai") {
      // the cracks that open as it bakes
      const crack = (px: number, py: number, a: number, len: number, w: number) => {
        x.strokeStyle = "rgba(170,120,60,0.75)"; b.strokeStyle = "#2a2a2a"; x.lineCap = b.lineCap = "round";
        let cx = px, cy = py, ang = a;
        for (let i = 0; i < len; i++) {
          const nx = cx + Math.cos(ang) * 11, ny = cy + Math.sin(ang) * 11; const lw = w * (1 - i / len) + 0.6;
          x.lineWidth = lw; x.beginPath(); x.moveTo(cx, cy); x.lineTo(nx, ny); x.stroke();
          b.lineWidth = lw + 2; b.beginPath(); b.moveTo(cx, cy); b.lineTo(nx, ny); b.stroke();
          cx = nx; cy = ny; ang += (r() - 0.5) * 0.9;
          if (r() > 0.88 && i < len - 4) crack(cx, cy, ang + (r() > 0.5 ? 1 : -1) * (0.6 + r() * 0.5), Math.floor((len - i) * 0.6), lw * 0.7);
        }
      };
      for (let i = 0; i < 7; i++) { const a = (i / 7) * TAU + r() * 0.5; crack(R + Math.cos(a) * 34, R + Math.sin(a) * 34, a, 12 + Math.floor(r() * 6), 6); }
      // pistachio slivers pressed into the middle
      for (let i = 0; i < 9; i++) {
        const a = r() * TAU, d = r() * 30, px = R + Math.cos(a) * d, py = R + Math.sin(a) * d;
        x.save(); x.translate(px, py); x.rotate(r() * Math.PI);
        x.fillStyle = r() > 0.4 ? "#8fae4c" : "#b7c96a"; x.beginPath(); x.ellipse(0, 0, 11, 5, 0, 0, TAU); x.fill();
        x.fillStyle = "rgba(255,255,220,0.35)"; x.beginPath(); x.ellipse(-2, -1.5, 6, 1.6, 0, 0, TAU); x.fill();
        x.restore();
        b.save(); b.translate(px, py); b.fillStyle = "#c8c8c8"; b.beginPath(); b.ellipse(0, 0, 11, 6, 0, 0, TAU); b.fill(); b.restore();
      }
    } else if (kind === "jeera") {
      for (let i = 0; i < 46; i++) {
        const a = r() * TAU, d = Math.sqrt(r()) * R * 0.86, px = R + Math.cos(a) * d, py = R + Math.sin(a) * d, rot = r() * Math.PI;
        x.save(); x.translate(px, py); x.rotate(rot); x.fillStyle = "#6b4a22"; x.beginPath(); x.ellipse(0, 0, 9, 2.6, 0, 0, TAU); x.fill(); x.restore();
        b.save(); b.translate(px, py); b.rotate(rot); b.fillStyle = "#bdbdbd"; b.beginPath(); b.ellipse(0, 0, 9, 3, 0, 0, TAU); b.fill(); b.restore();
      }
    } else {
      // Osmania: an egg-washed top with a scored lattice
      x.strokeStyle = "rgba(140,78,22,0.55)"; b.strokeStyle = "#484848"; x.lineWidth = 3; b.lineWidth = 5;
      for (let i = -5; i <= 5; i++) for (const ctx of [x, b]) {
        ctx.beginPath(); ctx.moveTo(R + i * 52 - R, 0); ctx.lineTo(R + i * 52 + R, S); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(R + i * 52 + R, 0); ctx.lineTo(R + i * 52 - R, S); ctx.stroke();
      }
      const ring = x.createRadialGradient(R, R, R * 0.7, R, R, R); ring.addColorStop(0, "rgba(120,60,10,0)"); ring.addColorStop(1, "rgba(120,60,10,0.55)");
      x.fillStyle = ring; x.fillRect(0, 0, S, S);
    }
    return { map: tex(c), bump: tex(bc, false) };
  });
}

/* ---------------- surfaces of drinks ---------------- */
function bubbles(x: CanvasRenderingContext2D, S: number, r: () => number, n: number, where: (i: number) => [number, number], max: number, light: string) {
  for (let i = 0; i < n; i++) {
    const [px, py] = where(i), s = 1.5 + r() * r() * max;
    x.strokeStyle = light; x.lineWidth = 1 + s * 0.14; x.globalAlpha = 0.45 + r() * 0.5; x.beginPath(); x.arc(px, py, s, 0, TAU); x.stroke();
    x.fillStyle = "rgba(255,255,255,0.75)"; x.beginPath(); x.arc(px - s * 0.3, py - s * 0.35, Math.max(0.6, s * 0.22), 0, TAU); x.fill();
  }
  x.globalAlpha = 1; void S;
}
/** Top of a glass of chai: a skin of colour, a ring of pulled-chai froth. */
export function chaiSurface() {
  return once("chai-surface", () => {
    const S = 512, R = S / 2;
    const { c, x } = canvas(S, S); const r = mulberry32(31);
    const g = x.createRadialGradient(R * 0.9, R * 0.9, 10, R, R, R);
    g.addColorStop(0, "#cd9f7a"); g.addColorStop(0.7, "#c1906a"); g.addColorStop(1, "#b17f58");
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    // a slow swirl of lighter milk
    x.strokeStyle = "rgba(236,204,160,0.5)"; x.lineCap = "round";
    for (let k = 0; k < 3; k++) { x.lineWidth = 10 - k * 2; x.beginPath(); for (let i = 0; i <= 60; i++) { const a = (i / 60) * TAU * 1.2 + k * 2.1, d = 30 + i * 2.6; const px = R + Math.cos(a) * d, py = R + Math.sin(a) * d; if (i) x.lineTo(px, py); else x.moveTo(px, py); } x.stroke(); }
    // froth gathered at the rim, a raft of it off-centre
    const rim = x.createRadialGradient(R, R, R * 0.72, R, R, R); rim.addColorStop(0, "rgba(240,214,176,0)"); rim.addColorStop(1, "rgba(240,214,176,0.8)");
    x.fillStyle = rim; x.fillRect(0, 0, S, S);
    bubbles(x, S, r, 260, () => { const a = r() * TAU, d = R * (0.8 + r() * 0.19); return [R + Math.cos(a) * d, R + Math.sin(a) * d]; }, 9, "rgba(255,240,214,0.95)");
    bubbles(x, S, r, 90, () => { const a = r() * TAU, d = r() * 70; return [R * 1.25 + Math.cos(a) * d, R * 0.75 + Math.sin(a) * d * 0.7]; }, 8, "rgba(255,240,214,0.9)");
    return tex(c);
  });
}
/** Cappuccino with a poured rosetta. */
export function latteArt() {
  return once("latte", () => {
    const S = 512, R = S / 2;
    const { c, x } = canvas(S, S); const r = mulberry32(8);
    const g = x.createRadialGradient(R, R, 20, R, R, R); g.addColorStop(0, "#9c5a26"); g.addColorStop(0.8, "#8a4a1c"); g.addColorStop(1, "#6f3713");
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 400; i++) { x.fillStyle = `rgba(${r() > 0.5 ? "190,120,60" : "90,44,14"},${0.12 + r() * 0.2})`; x.beginPath(); x.arc(r() * S, r() * S, 1 + r() * 5, 0, TAU); x.fill(); }
    x.save(); x.translate(R, R + 18); x.rotate(-0.25);
    x.shadowColor = "rgba(250,236,214,0.9)"; x.shadowBlur = 5; x.strokeStyle = "#f8eedc"; x.lineCap = "round"; x.lineJoin = "round";
    // rosetta: nested leaves that narrow toward the top, then the pull-through
    for (let i = 0; i < 9; i++) {
      const y = 132 - i * 30, w = 150 - i * 12, h = 46 - i * 2;
      x.lineWidth = 15 - i * 0.9;
      x.beginPath(); x.moveTo(-w, y - h * 0.2); x.quadraticCurveTo(-w * 0.6, y + h, 0, y + h * 0.35); x.quadraticCurveTo(w * 0.6, y + h, w, y - h * 0.2); x.stroke();
    }
    x.fillStyle = "#f8eedc"; x.beginPath(); x.moveTo(0, -122); x.bezierCurveTo(-52, -190, -100, -128, 0, -78); x.bezierCurveTo(100, -128, 52, -190, 0, -122); x.fill();
    x.globalCompositeOperation = "destination-out"; x.shadowBlur = 0; x.lineWidth = 7; x.beginPath(); x.moveTo(0, 176); x.lineTo(0, -110); x.stroke();
    x.restore();
    x.globalCompositeOperation = "destination-over"; x.fillStyle = "#8a4a1c"; x.fillRect(0, 0, S, S);
    x.globalCompositeOperation = "source-over";
    const rim = x.createRadialGradient(R, R, R * 0.86, R, R, R); rim.addColorStop(0, "rgba(80,36,10,0)"); rim.addColorStop(1, "rgba(80,36,10,0.6)");
    x.fillStyle = rim; x.fillRect(0, 0, S, S);
    return tex(c);
  });
}
/** The froth on a pulled filter coffee. */
export function kaapiFoam() {
  return once("kaapi", () => {
    const S = 384, R = S / 2;
    const { c, x } = canvas(S, S); const r = mulberry32(17);
    const g = x.createRadialGradient(R, R, 10, R, R, R); g.addColorStop(0, "#dcb98c"); g.addColorStop(1, "#b98552");
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    bubbles(x, S, r, 1100, () => [r() * S, r() * S], 11, "rgba(255,240,214,0.9)");
    return tex(c);
  });
}

/* ---------------- the table ---------------- */
export function marbleTexture() {
  return once("marble", () => {
    const S = 1536;
    const { c, x } = canvas(S, S); const r = mulberry32(44);
    x.fillStyle = "#f6f2ea"; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 70; i++) { const gx = r() * S, gy = r() * S, gr = 140 + r() * 380; const g = x.createRadialGradient(gx, gy, 0, gx, gy, gr); const grey = r() > 0.7; g.addColorStop(0, grey ? "rgba(214,209,201,0.22)" : "rgba(255,254,250,0.45)"); g.addColorStop(1, grey ? "rgba(214,209,201,0)" : "rgba(255,254,250,0)"); x.fillStyle = g; x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2); }
    // veins: every stroke is laid down three times, wider and fainter, so it reads soft without a canvas filter
    const vein = (px: number, py: number, a: number, len: number, w: number, al: number) => {
      let cx = px, cy = py, ang = a; x.lineCap = "round";
      for (let i = 0; i < len; i++) {
        const nx = cx + Math.cos(ang) * 16, ny = cy + Math.sin(ang) * 16, k = 0.5 + r() * 0.5, lw = w * (0.5 + r());
        for (const [m, f] of [[1, 1], [2.4, 0.3], [5, 0.07]] as const) { x.strokeStyle = `rgba(128,124,122,${al * k * f})`; x.lineWidth = lw * m; x.beginPath(); x.moveTo(cx, cy); x.lineTo(nx, ny); x.stroke(); }
        cx = nx; cy = ny; ang += (r() - 0.5) * 0.5;
        if (r() > 0.94) vein(cx, cy, ang + (r() - 0.5) * 1.6, Math.floor(len * 0.35), w * 0.6, al * 0.7);
      }
    };
    for (let i = 0; i < 18; i++) vein(r() * S, r() * S, 0.6 + (r() - 0.5) * 1.2, 50 + Math.floor(r() * 70), 1 + r() * 2.4, 0.3 + r() * 0.3);
    const t = tex(c); t.anisotropy = 16; return t;
  });
}

/* ---------------- bun maska ---------------- */
/** Sphere-mapped crust: v = 1 at the crown (deep, egg-washed brown), pale at the waist, tanned underneath. */
export function bunCrust() {
  return once("bun", () => {
    const W = 512, H = 512;
    const { c, x } = canvas(W, H); const r = mulberry32(12);
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#96501a"); g.addColorStop(0.2, "#b3661f"); g.addColorStop(0.36, "#d08f3f"); g.addColorStop(0.47, "#ecc88c"); g.addColorStop(0.53, "#efd09a"); g.addColorStop(0.75, "#dba85e"); g.addColorStop(1, "#bf8440");
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    for (let i = 0; i < 60; i++) { const gx = r() * W, gy = r() * H * 0.42, gr = 30 + r() * 80; const gg = x.createRadialGradient(gx, gy, 0, gx, gy, gr); gg.addColorStop(0, r() > 0.5 ? "rgba(120,58,14,0.28)" : "rgba(214,150,70,0.3)"); gg.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = gg; x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2); }
    speckle(x, W, H, 900, r, ["#8a4a16", "#f4d8a0"], 1);
    return tex(c);
  });
}
export function crumbTexture() {
  return once("crumb", () => {
    const S = 384, R = S / 2;
    const { c, x } = canvas(S, S); const r = mulberry32(6);
    x.fillStyle = "#f6e6c4"; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 900; i++) { const px = r() * S, py = r() * S, s = 1 + r() * 5; x.fillStyle = `rgba(206,170,112,${0.25 + r() * 0.4})`; x.beginPath(); x.ellipse(px, py, s, s * (0.5 + r() * 0.6), r() * 3, 0, TAU); x.fill(); }
    const ring = x.createRadialGradient(R, R, R * 0.84, R, R, R); ring.addColorStop(0, "rgba(190,120,50,0)"); ring.addColorStop(1, "rgba(176,104,40,0.95)");
    x.fillStyle = ring; x.fillRect(0, 0, S, S);
    return tex(c);
  });
}

/* ---------------- samosa: blistered, fried pastry ---------------- */
export function friedPastry(): Baked {
  return once("fried", () => {
    const S = 512;
    const { c, x } = canvas(S, S), { c: bc, x: b } = canvas(S, S); const r = mulberry32(27);
    x.fillStyle = "#cf9440"; x.fillRect(0, 0, S, S); b.fillStyle = "#707070"; b.fillRect(0, 0, S, S);
    for (let i = 0; i < 70; i++) { const gx = r() * S, gy = r() * S, gr = 40 + r() * 100; const g = x.createRadialGradient(gx, gy, 0, gx, gy, gr); g.addColorStop(0, r() > 0.45 ? "rgba(160,92,26,0.4)" : "rgba(236,186,104,0.4)"); g.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = g; x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2); }
    for (let i = 0; i < 520; i++) {
      const px = r() * S, py = r() * S, s = 2 + r() * r() * 15;
      const g = x.createRadialGradient(px - s * 0.3, py - s * 0.3, 0, px, py, s); g.addColorStop(0, "rgba(246,208,132,0.9)"); g.addColorStop(0.7, "rgba(214,156,70,0.5)"); g.addColorStop(1, "rgba(150,84,24,0.45)");
      x.fillStyle = g; x.beginPath(); x.arc(px, py, s, 0, TAU); x.fill();
      const gb = b.createRadialGradient(px, py, 0, px, py, s); gb.addColorStop(0, "#f0f0f0"); gb.addColorStop(1, "#707070");
      b.fillStyle = gb; b.beginPath(); b.arc(px, py, s, 0, TAU); b.fill();
    }
    speckle(x, S, S, 700, r, ["#8f4f14"], 1.3);
    const m = tex(c), bm = tex(bc, false);
    m.wrapS = m.wrapT = bm.wrapS = bm.wrapT = THREE.RepeatWrapping;
    return { map: m, bump: bm };
  });
}

/* ---------------- steam, shadow, glow ---------------- */
export function puffTexture(seed = 1) {
  return once(`puff-${seed}`, () => {
    const S = 128;
    const { c, x } = canvas(S, S); const r = mulberry32(seed * 13 + 1);
    for (let i = 0; i < 9; i++) {
      const px = S / 2 + (r() - 0.5) * 46, py = S / 2 + (r() - 0.5) * 46, rr = 18 + r() * 24;
      const g = x.createRadialGradient(px, py, 0, px, py, rr); g.addColorStop(0, "rgba(255,255,255,0.3)"); g.addColorStop(0.5, "rgba(255,255,255,0.12)"); g.addColorStop(1, "rgba(255,255,255,0)");
      x.fillStyle = g; x.fillRect(0, 0, S, S);
    }
    return tex(c);
  });
}
export function blobTexture(color = "50,28,10") {
  return once(`blob-${color}`, () => {
    const { c, x } = canvas(256, 256);
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, `rgba(${color},0.55)`); g.addColorStop(0.45, `rgba(${color},0.22)`); g.addColorStop(1, `rgba(${color},0)`);
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    return tex(c);
  });
}
export function glowTexture() {
  return once("glow", () => {
    const { c, x } = canvas(256, 256);
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(120,170,255,0.9)"); g.addColorStop(0.35, "rgba(70,110,255,0.35)"); g.addColorStop(0.7, "rgba(255,140,60,0.1)"); g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    return tex(c);
  });
}
/** Brushed steel: fine rings around the pan. */
export function brushedBump() {
  return once("brushed", () => {
    const { c, x } = canvas(64, 512); const r = mulberry32(2);
    for (let y = 0; y < 512; y++) { const v = 110 + Math.floor(r() * 40); x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(0, y, 64, 1); }
    const t = tex(c, false); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
  });
}
