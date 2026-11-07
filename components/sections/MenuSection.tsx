"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { addToBasket } from "@/components/site/Nav";
import { menu, kitchen, inr, type MenuItem } from "@/data/site";
import type { StillKey } from "@/lib/story/pose";
import { useReducedMotion } from "@/lib/hooks";
import { cn, pad } from "@/lib/utils";

const loadStill = (key: StillKey) => import("@/lib/story/engine").then((m) => m.getStill(key));
const OVERSCAN = 1.3;
const CRUMBS = Array.from({ length: 16 }, (_, i) => ({ a: -Math.PI / 2 + ((i / 15) - 0.5) * 2.9, r: 60 + ((i * 29) % 80), s: 4 + ((i * 7) % 6) }));

function AddButton({ label = "Add" }: { label?: string }) {
  const [added, setAdded] = useState(false);
  return (
    <button type="button" data-cursor="cta" onClick={() => { addToBasket(1); setAdded(true); setTimeout(() => setAdded(false), 1400); }}
      className={cn("flex h-9 items-center gap-2 rounded-full px-4 text-[0.75rem] font-semibold transition-colors duration-300", added ? "bg-leaf text-cream" : "bg-ink text-ivory hover:bg-accent")}>{added ? "Added ✓" : label}{!added && <span aria-hidden>+</span>}</button>
  );
}

function Card({ f, i }: { f: MenuItem; i: number }) {
  const reduced = useReducedMotion();
  const [url, setUrl] = useState<string | null>(null);
  const [live, setLive] = useState(false);
  const stage = useRef<HTMLButtonElement>(null);
  const host = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = stage.current; if (!el) return;
    let alive = true;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      loadStill(`item:${f.id}`).then((u) => alive && setUrl(u)).catch(() => {});
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => { alive = false; io.disconnect(); };
  }, [f]);

  const play = async () => {
    if (reduced || !host.current || !card.current) return;
    const { getTurntable } = await import("@/lib/story/engine");
    const tt = await getTurntable();
    if (tt.busy) return;
    tt.busy = true;
    const q = gsap.utils.selector(card.current);
    tt.use(f.id);
    tt.mount(host.current, OVERSCAN);
    const s = { hop: 0, spin: 0, sweep: 0, act: 0 };
    tt.apply(s); tt.render();
    setLive(true);
    const tl = gsap.timeline({ onUpdate: () => { tt.apply(s); tt.render(); } });
    tl.to(s, { hop: 1, duration: 0.3, ease: "power2.out" }, 0)
      .to(s, { act: 1, duration: 1.5, ease: "power1.inOut" }, 0.1)
      .to(s, { sweep: 1, duration: 1.1, ease: "power1.inOut" }, 0.25)
      .fromTo(q("[data-crumb]"), { x: 0, y: 0, opacity: 1, scale: 1 }, {
        x: (k: number) => Math.cos(CRUMBS[k].a) * CRUMBS[k].r, y: (k: number) => Math.sin(CRUMBS[k].a) * CRUMBS[k].r + 80, opacity: 0, scale: 0.5,
        duration: 0.9, ease: "power2.out", stagger: 0.015,
      }, 0.5)
      .fromTo(q("[data-cheer]"), { opacity: 0, scale: 0.6, rotate: -12 }, { opacity: 1, scale: 1, rotate: -6, duration: 0.4, ease: "back.out(3)" }, 0.7)
      .to(s, { spin: 1, duration: 1.2, ease: "power2.inOut" }, 1.1)
      .to(s, { hop: 0, duration: 0.5, ease: "bounce.out" }, 1.9)
      .to(q("[data-cheer]"), { opacity: 0, y: -20, duration: 0.4 }, 2.0);
    await tl;
    setLive(false);
    requestAnimationFrame(() => requestAnimationFrame(() => { tt.unmount(); tt.busy = false; }));
  };

  return (
    <article ref={card} data-card className="group relative flex flex-col overflow-hidden rounded-[1.8rem] p-5 text-ink md:p-6" style={{ background: f.tint }}>
      <div className="relative flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/55">
        <span>{pad(i + 1)} / {pad(menu.length)}</span>
        <span className="rounded-full bg-ink px-2.5 py-1 text-[0.58rem] font-bold text-ivory">{inr(f.price)}</span>
      </div>
      <button ref={stage} type="button" onClick={play} aria-label={`${f.verb} — ${f.name}`} data-cursor="3d"
        className="relative mx-auto -my-1 block aspect-square w-[88%] cursor-pointer transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.04]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {url && <img src={url} alt={`${f.name} — ${f.sub}`} draggable={false} className={cn("tapri-still-in pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain", live && "invisible")} />}
        <div ref={host} aria-hidden className={cn("pointer-events-none absolute left-1/2 top-1/2 z-10 aspect-square -translate-x-1/2 -translate-y-1/2", !live && "invisible")} style={{ width: `${OVERSCAN * 100}%` }} />
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-[40%] z-20">
          {CRUMBS.map((c, k) => <span key={k} data-crumb className="absolute rounded-[40%] bg-chai opacity-0" style={{ width: c.s, height: c.s * 0.8 }} />)}
        </span>
        <span data-cheer aria-hidden className="fat pointer-events-none absolute right-[2%] top-[10%] z-20 rounded-full bg-ink px-3.5 pb-1 pt-0.5 text-lg text-kesar opacity-0">{f.cheer}</span>
        <span className="pointer-events-none absolute inset-x-0 bottom-1 z-20 text-center font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-md:opacity-100">{f.verb}</span>
      </button>
      <h3 className="fat mt-1 text-[1.9rem] leading-[1.05]">{f.name}</h3>
      <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink/55">{f.sub}</p>
      <p className="body-sm mt-3 max-w-[38ch] text-ink/65">{f.notes}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">{f.tags.map((t) => <li key={t} className="rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-ink/70">{t}</li>)}</ul>
      <div className="mt-auto pt-5"><div className="flex items-center justify-between border-t border-ink/10 pt-4">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/60">Per {f.unit} · <span className="text-ink">{inr(f.price)}</span></span>
        <AddButton />
      </div></div>
    </article>
  );
}

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-mn-a]", { xPercent: -10, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "top 35%", scrub: true } });
      gsap.fromTo("[data-mn-b]", { xPercent: 10, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "top 35%", scrub: true } });
      gsap.to("[data-mn-spin]", { rotate: 360, repeat: -1, duration: 16, ease: "none" });
      gsap.set("[data-card]", { y: 80, opacity: 0, rotate: (i: number) => (i % 2 ? 2 : -2) });
      ScrollTrigger.batch("[data-card]", { start: "top 90%", once: true, onEnter: (b) => gsap.to(b, { y: 0, opacity: 1, rotate: 0, duration: 1.2, stagger: 0.08, ease: "expo.out" }) });
      gsap.set("[data-plate]", { y: 60, opacity: 0 });
      ScrollTrigger.batch("[data-plate]", { start: "top 92%", once: true, onEnter: (b) => gsap.to(b, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: "expo.out" }) });
      gsap.utils.toArray<HTMLElement>("[data-plate] img").forEach((img) => gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } }));
    }, el);
    let warmed = false;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || warmed) return;
      warmed = true; io.disconnect();
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      const go = () => import("@/lib/story/engine").then(({ getTurntable }) => getTurntable()).then((tt) => tt.warm(menu[0].id)).catch(() => {});
      if (w.requestIdleCallback) w.requestIdleCallback(go, { timeout: 3000 }); else setTimeout(go, 1200);
    }, { rootMargin: "200px 0px" });
    io.observe(el);
    return () => { ctx.revert(); io.disconnect(); };
  }, []);
  return (
    <section ref={ref} id="menu" className="relative z-10 bg-ivory pb-[12vh] pt-[16vh] text-ink" aria-labelledby="menu-h">
      <div className="container-x">
        <p className="eyebrow mb-6">09 — The counter</p>
        <h2 id="menu-h" className="fat flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[clamp(2.8rem,7.8vw,8.4rem)] leading-[1]">
          <span data-mn-a>Chai, and</span>
          <span data-mn-spin aria-hidden className="hidden h-[0.72em] w-[0.72em] md:inline-flex">
            <svg viewBox="0 0 100 100" className="h-full w-full"><defs><path id="tapri-mn-arc" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs><circle cx="50" cy="50" r="46" fill="var(--color-kesar)" /><text fontSize="8.2" letterSpacing="2.1" className="font-mono" fontWeight="700" fill="var(--color-ink)"><textPath href="#tapri-mn-arc">BAKED HERE · FRIED HERE · BOILED HERE · </textPath></text></svg>
          </span>
          <span data-mn-b className="text-accent">what goes with it.</span>
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/55"><span className="inline-block h-px w-6 bg-ink/40" />Tap anything on the counter</p>
          <p className="body-sm max-w-[46ch] text-ink/60">Six things we will never take off the menu. The biscuits are baked upstairs at four every morning; everything else is made when you ask.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-5">
          {menu.map((f, i) => <Card key={f.id} f={f} i={i} />)}
        </div>

        <div className="mt-[12vh] flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-8">
          <h3 className="fat text-[clamp(2rem,4.2vw,4rem)] leading-[1.05]">From the kitchen, <span className="text-accent">till it runs out.</span></h3>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/55">Hot plates · 8 am onwards</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {kitchen.map((k) => (
            <article key={k.id} data-plate className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={k.photo} alt={k.alt} loading="lazy" className="absolute inset-0 h-[112%] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]" style={{ top: "-6%" }} />
                <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 font-mono text-[0.58rem] font-bold text-ink backdrop-blur-sm">{inr(k.price)}</span>
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div><h4 className="fat text-[1.35rem] leading-[1.1] md:text-[1.5rem]">{k.name}</h4><p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink/55">{k.sub}</p></div>
                <span className="hidden shrink-0 sm:block"><AddButton /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
