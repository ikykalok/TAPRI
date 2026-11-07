export function clamp(v: number, a = 0, b = 1) {
  return Math.min(b, Math.max(a, v));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function seg(p: number, a: number, b: number) {
  return clamp((p - a) / (b - a));
}

export function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}
