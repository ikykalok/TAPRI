import type { ItemId } from "@/data/site";
/** Still keys shared by the DOM and the stills renderer — no three.js import here. */
export type StillKey = `item:${ItemId}` | "spread" | "jar";
