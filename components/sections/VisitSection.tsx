"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Counter from "@/components/motion/Counter";
import Button from "@/components/ui/Button";
import { brand, visit, day } from "@/data/site";
import { cn } from "@/lib/utils";

/** Minutes past midnight in Mumbai, whatever the visitor's clock says. */
function mumbaiMinutes() {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0), m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return (h % 24) * 60 + m;
}
const mins = (t: string) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

export default function VisitSection() {
  const ref = useRef<HTMLElement>(null);
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(mumbaiMinutes());
    const id = window.setInterval(() => setNow(mumbaiMinutes()), 60000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const el = ref.current!;
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-vs-h] > span > span", { yPercent: 115 }, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: "[data-vs-h]", start: "top 85%" } });
      gsap.fromTo("[data-vs-hero]", { clipPath: "inset(12% 8% 12% 8% round 2rem)" }, { clipPath: "inset(0% 0% 0% 0% round 2rem)", ease: "none", scrollTrigger: { trigger: "[data-vs-hero]", start: "top 92%", end: "top 30%", scrub: true } });
      gsap.fromTo("[data-vs-hero] img", { scale: 1.2, yPercent: -6 }, { scale: 1.04, yPercent: 6, ease: "none", scrollTrigger: { trigger: "[data-vs-hero]", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo("[data-vs-card]", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: "[data-vs-hero]", start: "top 45%" } });
      gsap.fromTo("[data-vs-row]", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.9, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: "[data-vs-day]", start: "top 80%" } });
      gsap.utils.toArray<HTMLElement>("[data-vs-float]").forEach((n, i) => {
        gsap.fromTo(n, { y: 70 + i * 40 }, { y: -50 - i * 30, ease: "none", scrollTrigger: { trigger: n, start: "top bottom", end: "bottom top", scrub: true } });
      });
      gsap.fromTo("[data-vs-stat]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: "[data-vs-stats]", start: "top 88%" } });
    }, el);
    return () => ctx.revert();
  }, []);
  const open = now !== null && now >= 6 * 60 && now < 23 * 60;
  let at = -1;
  if (now !== null) day.forEach((d, i) => { if (now >= mins(d.t)) at = i; });
  const line = "block overflow-hidden pb-[0.2em] -mb-[0.2em] pt-[0.1em] -mt-[0.1em]";
  return (
    <section ref={ref} id="visit" data-theme="dark" className="relative z-10 overflow-hidden bg-deep pb-[14vh] pt-[14vh] text-ivory" aria-labelledby="visit-h">
      <div className="container-x">
        <p className="eyebrow mb-6 !text-ivory/50">11 — Find us</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="visit-h" data-vs-h className="fat text-[clamp(2.7rem,7.2vw,7.6rem)] leading-[1]">
            <span className={line}><span className="block">Fourteen tables,</span></span>
            <span className={line}><span className="block text-kesar">one long counter.</span></span>
          </h2>
          <p className="body-sm max-w-[36ch] pb-2 text-ivory/65">Marble tops, bentwood chairs and a ceiling fan that has seen things. Come for one cutting, stay for the argument about cricket.</p>
        </div>

        <div data-vs-hero className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[16/10] md:mt-14 lg:aspect-[16/8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/photos/interior.webp" alt="Inside the café: marble-top tables, bentwood chairs, a chequered floor and a long teak counter lined with biscuit jars" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/5 to-transparent" />
          <div data-vs-card className="absolute inset-x-3 bottom-3 rounded-[1.5rem] bg-cream p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[23rem] sm:p-6">
            <p className="flex items-center gap-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]">
              <span className={cn("relative flex h-2.5 w-2.5", now === null && "opacity-0")}><span className={cn("absolute inset-0 rounded-full", open ? "animate-ping bg-leaf/70" : "bg-transparent")} /><span className={cn("relative h-2.5 w-2.5 rounded-full", open ? "bg-leaf" : "bg-accent")} /></span>
              <span suppressHydrationWarning>{now === null ? "Mumbai time" : open ? "Open now · the pan is on" : "Closed · first boil at 6 am"}</span>
            </p>
            <p className="fat mt-4 text-[1.65rem] leading-[1.12]">{brand.address}</p>
            <dl className="mt-4 space-y-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink/60">
              <div className="flex justify-between gap-4"><dt>Hours</dt><dd className="text-ink">{brand.hours}</dd></div>
              <div className="flex justify-between gap-4"><dt>Phone</dt><dd className="text-ink">{brand.phone}</dd></div>
              <div className="flex justify-between gap-4"><dt>Nearest</dt><dd className="text-ink">Churchgate · 9 min walk</dd></div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2"><Button href={`tel:${brand.phone.replace(/\s/g, "")}`} variant="ink">Hold a table</Button><Button href="#menu" variant="ghost">The menu</Button></div>
          </div>
        </div>

        <div className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-12">
          <div data-vs-day className="col-span-12 lg:col-span-6">
            <h3 className="fat text-[clamp(1.9rem,3.4vw,3.2rem)] leading-[1.08]">A day at the tapri</h3>
            <ol className="mt-6 border-t border-ivory/15">
              {day.map((d, i) => (
                <li key={d.t} data-vs-row className={cn("flex items-baseline gap-5 border-b border-ivory/15 py-4 transition-colors duration-500", i === at ? "text-ivory" : "text-ivory/55")}>
                  <span className={cn("fat w-[4.6rem] shrink-0 text-[1.7rem] leading-none tabular-nums", i === at && "text-kesar")}>{d.t}</span>
                  <span className="body-sm flex-1">{d.what}</span>
                  {i === at && <span className="hidden shrink-0 rounded-full bg-kesar px-2.5 py-1 font-mono text-[0.54rem] font-bold uppercase tracking-[0.12em] text-ink sm:block">Now</span>}
                </li>
              ))}
            </ol>
          </div>
          <div className="relative col-span-12 grid grid-cols-2 gap-4 lg:col-span-5 lg:col-start-8">
            <figure data-vs-float className="overflow-hidden rounded-[1.4rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/photos/jars.webp" alt="Glass biscuit jars with brass lids on the counter" loading="lazy" className="aspect-[4/5] h-full w-full object-cover" />
            </figure>
            <figure data-vs-float className="mt-12 overflow-hidden rounded-[1.4rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/photos/spices.webp" alt="A brass mortar of pounded ginger and cardamom beside tea, cinnamon and cloves" loading="lazy" className="aspect-[4/5] h-full w-full object-cover" />
            </figure>
          </div>
        </div>

        <dl data-vs-stats className="mt-[10vh] grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory/15 pt-10 lg:grid-cols-4">
          {visit.map((s) => (
            <div key={s.l} data-vs-stat>
              <dd className="fat text-[clamp(2.6rem,5vw,5rem)] leading-none text-kesar"><Counter value={s.v} suffix={s.s} /></dd>
              <dt className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/55">{s.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
