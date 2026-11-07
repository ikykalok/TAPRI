/**
 * One scroll progress value (0 → 1 across the pinned story) drives both the WebGL rig and the
 * HTML overlay timeline. Every beat is a [start, end] window in that progress space.
 */
export const COVER_START = 0.93;

export const BEAT = {
  heroOut: [0.02, 0.085],
  sip: [0.03, 0.15],
  statsIn: [0.055, 0.11],
  statsOut: [0.15, 0.185],
  glassAway: [0.165, 0.215],
  night: [0.185, 0.235],
  panIn: [0.19, 0.245],
  flame: [0.228, 0.255],
  spice: [0.25, 0.325],
  brewCopyIn: [0.245, 0.275],
  brewCopyOut: [0.335, 0.35],
  tea: [0.305, 0.365],
  steep: [0.33, 0.395],
  milkCopyIn: [0.36, 0.39],
  milk: [0.385, 0.445],
  mix: [0.425, 0.472],
  milkCopyOut: [0.452, 0.466],
  boil: [0.465, 0.545],
  boilCopyIn: [0.47, 0.5],
  boilCopyOut: [0.54, 0.555],
  day: [0.535, 0.578],
  lift: [0.545, 0.602],
  pour: [0.596, 0.686],
  pourCopyIn: [0.6, 0.63],
  pourCopyOut: [0.68, 0.695],
  panAway: [0.682, 0.722],
  biscuitIn: [0.695, 0.732],
  dunkCopyIn: [0.7, 0.73],
  dunk: [0.732, 0.756],
  soak: [0.748, 0.792],
  liftB: [0.792, 0.812],
  dunkCopyOut: [0.8, 0.812],
  snap: [0.812, 0.842],
  oopsIn: [0.814, 0.832],
  oopsOut: [0.85, 0.862],
  table: [0.846, 0.916],
  spreadCopyIn: [0.876, 0.91],
  tableTurn: [0.9, 0.935],
  cover: [COVER_START, 1],
} as const satisfies Record<string, readonly [number, number]>;

/** When each stage of the readout lights up (see `stages` in data/site.ts). */
export const STAGE_AT = [0.25, 0.33, 0.385, 0.465, 0.596, 0.732, 0.846] as const;
