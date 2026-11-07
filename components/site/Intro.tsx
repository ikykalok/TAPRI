"use client";
import { useEffect, useRef, useState } from "react";
import { Mark } from "./Logo";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

declare global {
  interface Window { __tapriIntroDone?: boolean }
}

export function onIntroDone(fn: () => void) {
  if (typeof window === "undefined") return () => {};
  if (window.__tapriIntroDone) { fn(); return () => {}; }
  const h = () => fn();
  window.addEventListener("tapri:intro-done", h, { once: true });
  return () => window.removeEventListener("tapri:intro-done", h);
}

/**
 * Loader: a cutting glass fills with chai (with a wobbling surface) while fonts and the WebGL scene
 * warm up; when full, the veil lifts. Waits for real readiness (≤ 4.5 s).
 */
export default function Intro() {
  const [phase, setPhase] = useState<"load" | "lift" | "done">("load");
  const fill = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finish = () => { window.__tapriIntroDone = true; window.dispatchEvent(new Event("tapri:intro-done")); };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPhase("done"); finish(); return; }
    document.documentElement.classList.add("lenis-stopped");
    window.__lenis?.stop();
    window.scrollTo(0, 0);
    let shown = 0, target = 10, raf = 0, sceneReady = false, lifted = false;
    const t0 = performance.now();
    const onScene = () => { sceneReady = true; };
    window.addEventListener("tapri:scene-ready", onScene);
    (document.fonts?.ready ?? Promise.resolve()).then(() => { target = Math.max(target, 50); });
    const tick = () => {
      const el = performance.now() - t0;
      if (sceneReady) target = 100;
      else target = Math.min(92, Math.max(target, 18 + el / 60));
      if (el > 4500) target = 100;
      shown += (target - shown) * 0.1;
      if (fill.current) fill.current.style.transform = `translateY(${100 - shown}%)`;
      if (count.current) count.current.textContent = String(Math.round((shown / 100) * 90));
      if (!lifted && shown > 99.2 && el > 1100) {
        lifted = true;
        setPhase("lift");
        setTimeout(() => { document.documentElement.classList.remove("lenis-stopped"); window.__lenis?.start(); finish(); }, 650);
        setTimeout(() => setPhase("done"), 1500);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("tapri:scene-ready", onScene); document.documentElement.classList.remove("lenis-stopped"); };
  }, []);

  if (phase === "done") return null;
  return (
    <div aria-hidden className={cn("fixed inset-0 z-[90] flex items-center justify-center bg-deep text-ivory transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)]", phase === "lift" && "-translate-y-full")}>
      <div className="flex flex-col items-center gap-7">
        <div className="relative">
          <svg aria-hidden className="absolute -top-9 left-1/2 h-8 w-12 -translate-x-1/2 text-ivory/50" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path className="animate-[tapri-steam_2.2s_ease-in-out_infinite]" d="M12 30c-4-6 4-9 0-15s4-9 0-13" />
            <path className="animate-[tapri-steam_2.2s_ease-in-out_0.5s_infinite]" d="M24 30c-4-6 4-9 0-15s4-9 0-13" />
            <path className="animate-[tapri-steam_2.2s_ease-in-out_1s_infinite]" d="M36 30c-4-6 4-9 0-15s4-9 0-13" />
          </svg>
          <div className="relative h-32 w-[5.5rem] overflow-hidden border-2 border-ivory/40 [clip-path:polygon(0_0,100%_0,84%_100%,16%_100%)]" style={{ borderRadius: "0.4rem 0.4rem 0.9rem 0.9rem" }}>
            <div ref={fill} className="absolute inset-0 translate-y-full bg-chai">
              <svg className="absolute -top-3 left-0 h-4 w-[200%] animate-[tapri-wave_1.6s_linear_infinite] text-chai" viewBox="0 0 200 16" preserveAspectRatio="none"><path d="M0 8 Q 12.5 0 25 8 T 50 8 T 75 8 T 100 8 T 125 8 T 150 8 T 175 8 T 200 8 V16 H0 Z" fill="currentColor" /></svg>
            </div>
            <span className="absolute inset-y-2 left-[22%] w-1.5 rounded-full bg-ivory/25" />
            <span className="absolute inset-x-0 bottom-0 h-3 bg-ivory/15" />
          </div>
        </div>
        <span className="flex items-center gap-3"><Mark className="h-8 text-ivory" /><span className="fat text-[2.1rem] leading-none">{brand.wordmark}</span></span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/50">brewing · <span ref={count} className="tabular-nums text-ivory/85">0</span> ml</span>
      </div>
    </div>
  );
}
