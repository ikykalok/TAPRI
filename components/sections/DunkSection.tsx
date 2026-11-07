"use client";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { dunkables, type DunkId } from "@/data/site";
import type { DunkCtrl, DunkResult } from "@/components/story/DunkScene";
import { cn } from "@/lib/utils";

const DunkScene = lazy(() => import("@/lib/story/engine").then((m) => ({ default: m.DunkScene })));

const VERDICT: Record<DunkResult, { title: string; tone: string }> = {
  dry: { title: "Barely damp.", tone: "text-ink" },
  perfect: { title: "Perfect dunk.", tone: "text-leaf" },
  risky: { title: "Living dangerously.", tone: "text-kesar" },
  lost: { title: "Lost at sea.", tone: "text-accent" },
};

export default function DunkSection() {
  const ref = useRef<HTMLElement>(null);
  const [id, setId] = useState<DunkId>("glucose");
  const [result, setResult] = useState<{ r: DunkResult; secs: number } | null>(null);
  const [holding, setHolding] = useState(false);
  const [score, setScore] = useState({ saved: 0, lost: 0 });
  const [mount, setMount] = useState(false);
  const secs = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const cur = dunkables.find((d) => d.id === id)!;
  const scale = cur.limit * 1.12; // seconds across the whole meter

  const ctrl = useRef<DunkCtrl>({ holding: false, kind: "glucose", limit: cur.limit, sweet: cur.sweet, fresh: 0 });
  useEffect(() => {
    const current = ctrl.current;
    current.onTick = (s) => {
      if (secs.current) secs.current.textContent = s.toFixed(1);
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, s / (current.limit * 1.12))})`;
    };
    ctrl.current.onResult = (r, s) => {
      setResult({ r, secs: s }); setHolding(false); ctrl.current.holding = false;
      setScore((sc) => (r === "lost" ? { ...sc, lost: sc.lost + 1 } : r === "dry" ? sc : { ...sc, saved: sc.saved + 1 }));
    };
    return () => {
      current.onTick = undefined;
      current.onResult = undefined;
    };
  }, []);

  const pick = (next: DunkId) => {
    const d = dunkables.find((x) => x.id === next)!;
    Object.assign(ctrl.current, { kind: next, limit: d.limit, sweet: d.sweet, holding: false, fresh: ctrl.current.fresh + 1 });
    setId(next); setResult(null); setHolding(false);
  };
  const down = useCallback(() => {
    if (result) { ctrl.current.fresh += 1; setResult(null); }
    ctrl.current.holding = true; setHolding(true);
  }, [result]);
  const up = useCallback(() => { ctrl.current.holding = false; setHolding(false); }, []);

  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setMount(true); io.disconnect(); } }, { rootMargin: "700px 0px" });
    io.observe(el);
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-dk-h] > span > span", { yPercent: 115 }, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: "[data-dk-h]", start: "top 85%" } });
      gsap.fromTo("[data-dk-in]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.07, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 65%" } });
      gsap.fromTo("[data-dk-stage]", { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: "[data-dk-stage]", start: "top 85%" } });
    }, el);
    return () => { io.disconnect(); ctx.revert(); };
  }, []);

  const v = result ? VERDICT[result.r] : null;
  const line = "block overflow-hidden pb-[0.2em] -mb-[0.2em] pt-[0.1em] -mt-[0.1em]";
  return (
    <section ref={ref} id="dunk" className="relative z-10 overflow-hidden bg-paper pb-[14vh] pt-[14vh] text-ink" aria-labelledby="dunk-h">
      <div className="container-x grid grid-cols-12 items-center gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-5">
          <p className="eyebrow mb-6">10 — Play with your food</p>
          <h2 id="dunk-h" data-dk-h className="fat text-[clamp(3rem,7vw,7.4rem)] leading-[1]">
            <span className={line}><span className="block">The dunk</span></span>
            <span className={line}><span className="block text-accent">test.</span></span>
          </h2>
          <p data-dk-in className="lede mt-6 max-w-[34ch] text-ink/70">Every biscuit has a number. Hold the button to dunk, let go before the chai wins.</p>

          <div data-dk-in role="radiogroup" aria-label="Choose a biscuit" className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {dunkables.map((d) => (
              <button key={d.id} type="button" role="radio" aria-checked={d.id === id} onClick={() => pick(d.id)} data-cursor="link"
                className={cn("rounded-2xl border px-3.5 py-3 text-left transition-colors duration-300", d.id === id ? "border-ink bg-ink text-ivory" : "border-ink/20 hover:border-ink")}>
                <span className="fat block text-[1.15rem] leading-none">{d.name}</span>
                <span className="mt-1.5 block font-mono text-[0.54rem] uppercase tracking-[0.12em] opacity-60">{d.sub}</span>
              </button>
            ))}
          </div>

          <div data-dk-in className="mt-8">
            <div className="flex items-end justify-between">
              <p className="flex items-start gap-1"><span ref={secs} className={cn("fat text-[clamp(3.4rem,6vw,5.4rem)] leading-[0.85] tabular-nums transition-colors", result?.r === "lost" && "text-accent")}>0.0</span><span className="fat pt-1 text-2xl">s</span></p>
              <p className="pb-1 text-right font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.14em] text-ink/55">Saved {String(score.saved).padStart(2, "0")}<br />Lost {String(score.lost).padStart(2, "0")}</p>
            </div>
            <div className="relative mt-4 h-3 overflow-hidden rounded-full bg-ink/10" aria-hidden>
              <span className="absolute inset-y-0 bg-pista" style={{ left: `${(cur.sweet[0] / scale) * 100}%`, width: `${((cur.sweet[1] - cur.sweet[0]) / scale) * 100}%` }} />
              <span className="absolute inset-y-0 w-0.5 bg-accent" style={{ left: `${(cur.limit / scale) * 100}%` }} />
              <div ref={bar} className="absolute inset-0 origin-left bg-ink/75 mix-blend-multiply" style={{ transform: "scaleX(0)" }} />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/50"><span>Dry</span><span className="text-leaf">Sweet spot {cur.sweet[0]}–{cur.sweet[1]} s</span><span className="text-accent">Gone at {cur.limit} s</span></div>
          </div>

          <div data-dk-in className="mt-8 flex items-center gap-5">
            <button type="button" data-cursor="cta" aria-label="Hold to dunk the biscuit"
              onPointerDown={(e) => { e.preventDefault(); (e.target as HTMLElement).setPointerCapture?.(e.pointerId); down(); }} onPointerUp={up} onPointerCancel={up} onLostPointerCapture={up}
              onKeyDown={(e) => { if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); down(); } }} onKeyUp={(e) => { if (e.key === " " || e.key === "Enter") up(); }} onContextMenu={(e) => e.preventDefault()}
              className={cn("tapri-hold relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-center font-mono text-[0.6rem] font-bold uppercase leading-tight tracking-[0.12em] transition-[transform,background-color] duration-200", holding ? "scale-90 bg-accent text-cream" : "bg-ink text-ivory hover:bg-accent")}>
              <span className={cn("absolute inset-0 rounded-full border-2 border-accent", holding ? "animate-ping opacity-60" : "opacity-0")} />
              {holding ? "Let go!" : result ? "Again" : <>Hold<br />to dunk</>}
            </button>
            <div aria-live="polite" className="min-h-[4.5rem]">
              {v ? (
                <>
                  <p className={cn("fat text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.05]", v.tone)}>{v.title}</p>
                  <p className="body-sm mt-1 max-w-[30ch] text-ink/65">{result!.r === "lost" ? cur.note : result!.r === "dry" ? `${result!.secs.toFixed(1)} s. Give it at least ${cur.sweet[0]}.` : result!.r === "perfect" ? `${result!.secs.toFixed(1)} s. Soft outside, still has a spine.` : `${result!.secs.toFixed(1)} s. It held — just. Eat it now.`}</p>
                </>
              ) : (
                <p className="body-sm max-w-[30ch] text-ink/60">{cur.name}: {cur.note}</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <div data-dk-stage className="relative mx-auto aspect-[4/5] w-full max-w-[640px] overflow-hidden rounded-[2.2rem] lg:aspect-[5/6]" style={{ background: "radial-gradient(70% 60% at 50% 48%, #fdf6e8 0%, #f6e6cb 55%, #e9cd9f 100%)" }}>
            <p aria-hidden className="fat pointer-events-none absolute inset-x-0 top-[6%] text-center text-[clamp(5rem,15vw,13rem)] leading-none text-ink/[0.06]">{cur.limit}s</p>
            {mount && <Suspense fallback={null}><DunkScene ctrl={ctrl} /></Suspense>}
            <p className="pointer-events-none absolute bottom-4 left-5 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-ink/45">Live 3D · {cur.name} · {cur.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
