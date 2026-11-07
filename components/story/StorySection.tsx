"use client";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { BEAT, STAGE_AT } from "@/lib/story/timeline";
import { stages, stickers, brand, spices, inr } from "@/data/site";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { onIntroDone } from "@/components/site/Intro";
import { cn, pad, seg } from "@/lib/utils";

const StoryScene = lazy(() => import("@/lib/story/engine").then((m) => ({ default: m.StoryScene })));

const at = (k: keyof typeof BEAT) => BEAT[k][0];
const len = (k: keyof typeof BEAT) => BEAT[k][1] - BEAT[k][0];

const STK = [
  { pos: "left-[5%] top-[19%] md:left-[16%] md:top-[19%]", bg: "var(--color-accent)", fg: "var(--color-cream)", rot: -12 },
  { pos: "left-[60%] top-[14%] md:left-[69%] md:top-[15%]", bg: "var(--color-deep)", fg: "var(--color-malai)", rot: 9 },
  { pos: "left-[3%] top-[64%] md:left-[11%] md:top-[60%]", bg: "var(--color-kesar)", fg: "var(--color-ink)", rot: 7 },
  { pos: "left-[57%] top-[65%] md:left-[72%] md:top-[58%]", bg: "var(--color-pista)", fg: "var(--color-ink)", rot: -8 },
] as const;

function Sticker({ i }: { i: number }) {
  const s = stickers[i], v = STK[i];
  return (
    <div data-stk={i} data-shape={s.shape} className={cn("tapri-sticker absolute opacity-0", v.pos)}>
      <div className="face" style={{ background: v.bg, color: v.fg }}>
        <span className="edge" />
        <span className="fat text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[0.9]">{s.value}<span className="text-[0.48em]">{s.unit}</span></span>
        <span className="mt-1.5 max-w-[80%] font-mono text-[0.54rem] font-bold uppercase leading-tight tracking-[0.1em]">{s.label}</span>
      </div>
    </div>
  );
}

export default function StorySection() {
  const wrap = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const entrance = useRef(0);
  const stageText = useRef<HTMLSpanElement>(null);
  const stageNum = useRef<HTMLSpanElement>(null);
  const ml = useRef<HTMLSpanElement>(null);
  const secs = useRef<HTMLSpanElement>(null);
  const boilN = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = wrap.current!;
    if (reduced) { entrance.current = 1; gsap.set(el.querySelectorAll("[data-in]"), { opacity: 1, yPercent: 0, y: 0 }); }
    const ctx = gsap.context(() => {
      let intro: gsap.core.Timeline | null = null;
      if (!reduced) {
        gsap.set("[data-in='line'] > span", { yPercent: 130 });
        intro = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
          .to(entrance, { current: 1, duration: 1.9, ease: "power2.out" }, 0)
          .to("[data-in='line'] > span", { yPercent: 0, duration: 1.3, ease: "expo.out", stagger: 0.12 }, 0.2)
          .fromTo("[data-in='fade']", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.6);
      }
      const off = onIntroDone(() => intro?.play());

      let stage = -1, lastMl = -1, lastS = -1, lastB = -1;
      const st = ScrollTrigger.create({
        trigger: el, start: "top top", end: "bottom bottom",
        onUpdate: (self) => {
          const p = self.progress;
          progress.current = p;
          let s = -1;
          STAGE_AT.forEach((v, i) => { if (p >= v) s = i; });
          if (s !== stage) {
            stage = s;
            if (stageText.current && stageNum.current && s >= 0) {
              gsap.fromTo([stageText.current, stageNum.current], { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out", overwrite: true });
              stageText.current.textContent = stages[s];
              stageNum.current.textContent = pad(s + 1);
            }
          }
          const m = Math.round(seg(p, BEAT.pour[0] + len("pour") * 0.07, BEAT.pour[0] + len("pour") * 0.9) * 90);
          if (m !== lastMl && ml.current) { lastMl = m; ml.current.textContent = String(m); }
          const sc = Math.round(seg(p, BEAT.soak[0], BEAT.soak[1]) * 41);
          if (sc !== lastS && secs.current) { lastS = sc; secs.current.textContent = (sc / 10).toFixed(1); secs.current.parentElement!.dataset.over = sc > 32 ? "1" : "0"; }
          const bn = Math.min(3, 1 + Math.floor(seg(p, BEAT.boil[0], BEAT.boil[1]) * 3));
          if (bn !== lastB && boilN.current) { lastB = bn; boilN.current.textContent = String(bn); gsap.fromTo(boilN.current, { scale: 1.25 }, { scale: 1, duration: 0.5, ease: "back.out(2)" }); }
        },
      });

      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 }, defaults: { ease: "none" } });
      tl.to("[data-hero-a]", { xPercent: -20, yPercent: -30, opacity: 0, duration: len("heroOut") }, at("heroOut"))
        .to("[data-hero-b]", { xPercent: 20, yPercent: 30, opacity: 0, duration: len("heroOut") }, at("heroOut"))
        .to("[data-hero-copy]", { y: -40, opacity: 0, duration: len("heroOut") * 0.7 }, at("heroOut"))
        .to("[data-hint]", { opacity: 0, duration: 0.02 }, 0.005);
      stickers.forEach((_, i) => {
        const a = at("statsIn") + i * 0.013;
        tl.fromTo(`[data-stk='${i}']`, { opacity: 0, scale: 0.2, rotate: STK[i].rot * -3 }, { opacity: 1, scale: 1, rotate: STK[i].rot, duration: 0.035, ease: "back.out(2.2)" }, a)
          .fromTo(`[data-stk='${i}'] > .face`, { "--sheen": "-120%" }, { "--sheen": "120%", duration: 0.03 }, a + 0.02)
          .to(`[data-stk='${i}']`, { y: -50 - i * 12, rotate: STK[i].rot * 0.4, duration: at("statsOut") - a - 0.035 }, a + 0.035)
          .to(`[data-stk='${i}']`, { opacity: 0, scale: 0.6, y: -160, rotate: STK[i].rot * 3, duration: len("statsOut") * 0.8 }, at("statsOut") + i * 0.006);
      });
      // before dawn in the kitchen → morning in the café
      tl.fromTo("[data-night]", { opacity: 0 }, { opacity: 1, duration: len("night") }, at("night"))
        .to("[data-night]", { opacity: 0, duration: len("day") }, at("day"))
        .fromTo("[data-ember]", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: len("flame") * 1.5 }, at("flame"))
        .to("[data-ember]", { opacity: 0, duration: len("day") * 0.7 }, at("day"));
      tl.fromTo("[data-readout]", { opacity: 0 }, { opacity: 1, duration: 0.02 }, STAGE_AT[0] - 0.01)
        .fromTo("[data-readout-bar]", { scaleX: 0 }, { scaleX: 1, duration: 0.91 - STAGE_AT[0] }, STAGE_AT[0])
        .to("[data-readout]", { color: "#2a160c", duration: len("day") }, at("day"))
        .to("[data-readout]", { opacity: 0, duration: 0.02 }, 0.91);
      const block = (title: string, copy: string, inK: keyof typeof BEAT, outK: keyof typeof BEAT) => {
        tl.fromTo(`${title} > span > span`, { yPercent: 130, y: 0 }, { yPercent: 0, y: 0, duration: len(inK), stagger: 0.008, ease: "power2.out" }, at(inK))
          .fromTo(copy, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: len(inK), stagger: 0.008 }, at(inK) + 0.01)
          .to(`${title} > span > span`, { yPercent: -130, y: 0, duration: len(outK), stagger: 0.006 }, at(outK))
          .to(copy, { opacity: 0, y: -22, duration: len(outK) }, at(outK));
      };
      block("[data-brew-title]", "[data-brew]", "brewCopyIn", "brewCopyOut");
      spices.forEach((_, i) => {
        const a = i < 5 ? at("spice") + [0, 0.17, 0.32, 0.44, 0.54][i] * len("spice") + 0.006 : at("tea") + 0.012;
        tl.fromTo(`[data-spice='${i}']`, { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.014, ease: "power2.out" }, a)
          .to(`[data-spice='${i}']`, { opacity: 0, x: 12, duration: 0.012 }, at("milkCopyIn") - 0.012 + i * 0.002);
      });
      block("[data-milk-title]", "[data-milk]", "milkCopyIn", "milkCopyOut");
      block("[data-boil-title]", "[data-boil]", "boilCopyIn", "boilCopyOut");
      tl.fromTo("[data-boilword]", { opacity: 0, yPercent: 20 }, { opacity: 1, yPercent: 0, duration: len("boilCopyIn") }, at("boilCopyIn"))
        .to("[data-boilword]", { opacity: 0, yPercent: -20, duration: len("boilCopyOut") }, at("boilCopyOut"));
      block("[data-pour-title]", "[data-pour]", "pourCopyIn", "pourCopyOut");
      block("[data-dunk-title]", "[data-dunk]", "dunkCopyIn", "oopsOut");
      tl.fromTo("[data-oops]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: len("oopsIn"), stagger: 0.006 }, at("oopsIn"))
        .to("[data-oops]", { opacity: 0, y: -16, duration: len("oopsOut") }, at("oopsOut"));
      tl.fromTo("[data-spread-title] > span > span", { yPercent: 130, y: 0 }, { yPercent: 0, y: 0, duration: len("spreadCopyIn"), stagger: 0.008, ease: "power2.out" }, at("spreadCopyIn"))
        .fromTo("[data-spread-copy]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: len("spreadCopyIn"), stagger: 0.01 }, at("spreadCopyIn") + 0.012)
        .fromTo("[data-spread-spec]", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.03, stagger: 0.008 }, at("tableTurn"));
      tl.set({}, {}, 1);
      return () => { off(); st.kill(); intro?.kill(); };
    }, el);
    return () => ctx.revert();
  }, [reduced]);

  const line = "block w-max overflow-hidden whitespace-nowrap pt-[0.14em] pb-[0.22em] -mt-[0.14em] -mb-[0.2em]";
  const h2 = "fat text-[clamp(2.3rem,9.6vw,3.2rem)] leading-[1.02] md:text-[clamp(2.8rem,5vw,5.4rem)]";
  const nightSpan = { top: `calc(${BEAT.night[0] + 0.02} * (100% - 100svh))`, height: `calc(${BEAT.day[0] + 0.018 - BEAT.night[0] - 0.02} * (100% - 100svh) + 60px)` };
  return (
    <section ref={wrap} id="story" className="relative h-[1150svh] md:h-[1350vh]" aria-label={`${brand.name} — how a glass of chai is made`}>
      {/* tells the nav it is over a dark stage while the kitchen is lit by the flame */}
      <div aria-hidden data-theme="dark" className="pointer-events-none absolute inset-x-0" style={nightSpan} />
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ivory">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(72% 64% at 50% 46%, #fdf6e8 0%, #f6e6cb 52%, #ecd2a6 100%)" }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(34% 30% at 50% 56%, rgba(201,138,79,.16), transparent 70%)" }} />
        <div aria-hidden data-night className="absolute inset-0 opacity-0" style={{ background: "radial-gradient(70% 60% at 50% 58%, #4a2410 0%, #2c140a 46%, #170a05 100%)" }}>
          <div data-ember className="absolute inset-0 opacity-0" style={{ background: "radial-gradient(36% 26% at 50% 66%, rgba(255,150,60,.3), rgba(70,110,255,.08) 55%, transparent 75%)" }} />
        </div>
        <div aria-hidden className="grain absolute inset-0 opacity-70" />

        {/* BACK LAYER */}
        <div className="absolute inset-0 z-0">
          <h1 className="fat leading-[0.9] text-ink">
            <span data-hero-a className="absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1.25rem)] block text-[clamp(4.2rem,22vw,7rem)] md:top-[calc(var(--nav-h)+1rem)] md:text-[clamp(5rem,13.5vw,15rem)]">
              <span data-in="line" className={line}><span className="block">First,</span></span>
            </span>
            <span data-hero-b className="absolute bottom-[max(10svh,7rem)] right-[var(--gutter)] block text-right text-[clamp(4.2rem,22vw,7rem)] md:bottom-[8svh] md:text-[clamp(5rem,13.5vw,15rem)]">
              <span data-in="line" className={cn(line, "ml-auto")}><span className="block text-accent">chai.</span></span>
            </span>
          </h1>
          <p data-boilword aria-hidden className="fat absolute inset-x-0 top-[9%] text-center leading-[0.85] text-ivory/[0.09] opacity-0 text-[clamp(9rem,46vw,34rem)] md:top-[2%]">
            <span className="text-[0.5em]">×</span><span ref={boilN} className="inline-block">1</span>
          </p>
        </div>

        <div className="absolute inset-0 z-10">{ready && <Suspense fallback={null}><StoryScene progress={progress} entrance={entrance} reduced={reduced} /></Suspense>}</div>

        {/* FRONT LAYER */}
        <div className="pointer-events-none absolute inset-0 z-20 text-ink">
          <div data-hero-copy>
            <div data-in="fade" className="pointer-events-auto absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1.25rem)] hidden max-w-[28ch] text-right opacity-0 md:block">
              <p className="body-sm text-ink/70">A chai café in {brand.place}. Ginger pounded every morning, milk boiled up three times, poured from as high as the arm goes.</p>
              <div className="mt-5 flex justify-end"><Magnetic><Button href="#menu" variant="ghost">See the menu</Button></Magnetic></div>
            </div>
            <p data-in="fade" className="absolute bottom-[max(11svh,7.5rem)] left-[var(--gutter)] hidden max-w-[40ch] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-ink/55 opacity-0 md:block">Cutting chai · 90 ml · {inr(20)}<br />{brand.hours}</p>
            <div data-hint data-in="fade" className="absolute bottom-[max(3.5svh,4.5rem)] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink/50 opacity-0">
              <span className="relative block h-8 w-px overflow-hidden bg-ink/15"><span className="absolute inset-x-0 top-0 h-3 animate-[tapri-hint_1.8s_ease-in-out_infinite] bg-ink/70" /></span>
              <span>Scroll to take a sip</span>
            </div>
          </div>

          <div className="absolute inset-0">{stickers.map((_, i) => <Sticker key={i} i={i} />)}</div>

          {/* spiced */}
          <div className="absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]">
            <p data-brew className="eyebrow mb-3 !text-ivory/55 opacity-0">01 — 5:40 am, the first pan</p>
            <h2 data-brew-title className={h2}>
              <span className={line}><span className="block">Ginger first.</span></span>
              <span className={line}><span className="block text-kesar">Always pounded.</span></span>
            </h2>
            <p data-brew className="body-sm mt-4 hidden max-w-[32ch] text-ivory/70 opacity-0 md:block">Every spice goes into the water whole and bruised, never as a powder — then two heaped spoons of Assam.</p>
          </div>
          <ul className="absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] space-y-2.5 text-right text-ivory md:top-[22%] md:space-y-3.5">
            {spices.map((s, i) => (
              <li key={s.id} data-spice={i} className="opacity-0">
                <span className="fat block text-[clamp(1.05rem,4.2vw,1.3rem)] leading-none md:text-[clamp(1.3rem,1.9vw,2rem)]">{s.name}</span>
                <span className="mt-1 hidden font-mono text-[0.56rem] uppercase tracking-[0.14em] text-ivory/50 md:block">{s.note}</span>
              </li>
            ))}
          </ul>

          {/* milked */}
          <div className="absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]">
            <p data-milk className="eyebrow mb-3 !text-ivory/55 opacity-0">03 — Milked</p>
            <h2 data-milk-title className={h2}>
              <span className={line}><span className="block">Then the milk,</span></span>
              <span className={line}><span className="block text-kesar">all at once.</span></span>
            </h2>
            <p data-milk className="body-sm mt-4 hidden max-w-[32ch] text-ivory/70 opacity-0 md:block">Full-cream buffalo milk, straight into the rolling tea. No water-to-milk maths on a napkin.</p>
          </div>

          {/* boiled */}
          <div className="absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]">
            <p data-boil className="eyebrow mb-3 !text-ivory/55 opacity-0">04 — Boiled</p>
            <h2 data-boil-title className={h2}>
              <span className={line}><span className="block">Boiled up</span></span>
              <span className={line}><span className="block text-kesar">three times.</span></span>
            </h2>
          </div>
          <div className="absolute bottom-[max(13svh,8.5rem)] right-[var(--gutter)] max-w-[26ch] text-right text-ivory md:bottom-[13svh]">
            <p data-boil className="body-sm text-ivory/70 opacity-0 max-md:hidden">Let it climb to the rim, drop the flame, let it climb again. That is where the colour comes from.</p>
            <p data-boil className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/50 opacity-0">Eleven minutes · never less</p>
          </div>

          {/* poured */}
          <div className="absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] max-w-[34ch] md:top-1/2 md:-translate-y-1/2">
            <p data-pour className="eyebrow mb-3 opacity-0">05 — Poured</p>
            <h2 data-pour-title className={h2}>
              <span className={line}><span className="block">Pulled from</span></span>
              <span className={line}><span className="block text-accent">a height.</span></span>
            </h2>
            <p data-pour className="body-sm mt-4 hidden max-w-[30ch] text-ink/70 opacity-0 md:block">The long pour cools it a degree, wakes up the froth and — let&apos;s be honest — looks fantastic.</p>
          </div>
          <div className="absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] md:bottom-[11svh] md:left-auto md:right-[var(--gutter)] md:text-right">
            <p data-pour className="flex items-start gap-1 opacity-0 md:justify-end"><span ref={ml} className="fat text-[clamp(4.2rem,16vw,6rem)] leading-[0.8] tabular-nums text-accent md:text-[clamp(5rem,9vw,9rem)]">0</span><span className="fat pt-2 text-[clamp(1.4rem,3vw,3rem)] text-accent">ml</span></p>
            <p data-pour className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/55 opacity-0">One cutting · {inr(20)} · since forever</p>
          </div>

          {/* dunked */}
          <div className="absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] md:bottom-[11svh]">
            <p data-dunk className="eyebrow mb-3 opacity-0">06 — Dunked</p>
            <h2 data-dunk-title className={h2}>
              <span className={line}><span className="block">Three seconds.</span></span>
              <span className={line}><span className="block text-accent">Not four.</span></span>
            </h2>
            <p data-oops className="body-sm mt-4 max-w-[30ch] text-ink/75 opacity-0">That was four. We&apos;ll bring you another — and a spoon.</p>
          </div>
          <div className="absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] text-right md:top-auto md:bottom-[11svh]">
            <p data-dunk className="group flex items-start justify-end gap-1 text-ink opacity-0 data-[over='1']:text-accent"><span ref={secs} className="fat text-[clamp(3.6rem,14vw,5rem)] leading-[0.8] tabular-nums md:text-[clamp(5rem,9vw,9rem)]">0.0</span><span className="fat pt-1 text-[clamp(1.2rem,2.4vw,2.6rem)]">s</span></p>
            <p data-dunk className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/55 opacity-0">Glucose biscuit · safe till 3.2 s</p>
          </div>

          {/* served */}
          <div className="absolute inset-x-[var(--gutter)] top-[calc(var(--nav-h)+0.5rem)] md:inset-x-auto md:left-[var(--gutter)] md:top-[calc(var(--nav-h)+1.5rem)] md:max-w-[40ch]">
            <p data-spread-copy className="eyebrow mb-4 opacity-0">07 — Served</p>
            <h2 data-spread-title className="fat text-[clamp(2.6rem,11vw,3.6rem)] leading-[1.02] md:text-[clamp(3rem,5.4vw,5.8rem)]">
              <span className={line}><span className="block">Pull up</span></span>
              <span className={line}><span className="block text-accent">a chair.</span></span>
            </h2>
            <p data-spread-copy className="body-sm mt-5 hidden max-w-[34ch] text-ink/70 opacity-0 md:block">Chai, a stack of glucose biscuits, bun maska, hot samosas — and a filter kaapi for the one friend who insists.</p>
            <div data-spread-copy className="pointer-events-auto mt-6 hidden gap-3 opacity-0 md:flex"><Magnetic><Button href="#menu" variant="ink">See the menu</Button></Magnetic><Magnetic><Button href="#visit" variant="ghost">Find us</Button></Magnetic></div>
          </div>
          <ul className="absolute bottom-[max(11svh,7rem)] left-[var(--gutter)] hidden space-y-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/60 md:block">
            {["Marble tables · bentwood chairs", "Nine biscuit jars, always full", brand.hours, "No laptops before 10 am"].map((s) => <li key={s} data-spread-spec className="opacity-0">{s}</li>)}
          </ul>

          <div data-readout className="absolute bottom-[max(2.2svh,1rem)] left-[var(--gutter)] w-[min(15rem,40vw)] text-ivory opacity-0 max-md:bottom-[5.25rem]">
            <div className="flex items-end justify-between font-mono text-[0.6rem] uppercase tracking-[0.16em]">
              <span className="block overflow-hidden"><span ref={stageText} className="block">{stages[0]}</span></span>
              <span className="block overflow-hidden tabular-nums"><span ref={stageNum} className="block">01</span><span className="opacity-40"> / {pad(stages.length)}</span></span>
            </div>
            <div className="mt-2 h-px w-full bg-current/20"><div data-readout-bar className="h-full w-full origin-left bg-accent" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
