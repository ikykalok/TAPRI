"use client";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { brand } from "@/data/site";

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="relative bg-paper text-ink pb-28 pt-24 md:pb-40 md:pt-32">
      {/* biscuit scallop border */}
      <svg className="tapri-scallop text-paper" viewBox="0 0 1200 24" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,24 C15,24 20,0 30,0 C40,0 45,24 60,24 C75,24 80,0 90,0 C100,0 105,24 120,24 C135,24 140,0 150,0 C160,0 165,24 180,24 C195,24 200,0 210,0 C220,0 225,24 240,24 C255,24 260,0 270,0 C280,0 285,24 300,24 C315,24 320,0 330,0 C340,0 345,24 360,24 C375,24 380,0 390,0 C400,0 405,24 420,24 C435,24 440,0 450,0 C460,0 465,24 480,24 C495,24 500,0 510,0 C520,0 525,24 540,24 C555,24 560,0 570,0 C580,0 585,24 600,24 C615,24 620,0 630,0 C640,0 645,24 660,24 C675,24 680,0 690,0 C700,0 705,24 720,24 C735,24 740,0 750,0 C760,0 765,24 780,24 C795,24 800,0 810,0 C820,0 825,24 840,24 C855,24 860,0 870,0 C880,0 885,24 900,24 C915,24 920,0 930,0 C940,0 945,24 960,24 C975,24 980,0 990,0 C1000,0 1005,24 1020,24 C1035,24 1040,0 1050,0 C1060,0 1065,24 1080,24 C1095,24 1100,0 1110,0 C1120,0 1125,24 1140,24 C1155,24 1160,0 1170,0 C1180,0 1185,24 1200,24 L1200,24 L0,24 Z" />
      </svg>

      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">The house rules</p>
          <Reveal as="h2" className="fat text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight">
            How we brew. <span className="text-accent italic font-normal">And why we don’t negotiate.</span>
          </Reveal>
          <Reveal delay={0.2} className="lede mt-6 max-w-2xl text-ink-soft">
            In 1950 or 2026, Fort moves at one speed and chai moves at another. We take eleven minutes per batch because nine is under-steeped and twelve turns bitter.
          </Reveal>
        </div>

        {/* 2-Column Editorial Grid: Photo + Drawn Glass Schematic */}
        <div className="mt-16 grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Pour Photo column */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal className="group relative overflow-hidden rounded-2xl bg-deep shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/assets/photos/pour.webp"
                  alt="A hot stream of masala cutting chai poured from a steel saucepan into a glass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-kesar">Rule 03 — The Long Pull</span>
                  <p className="fat mt-1 text-2xl md:text-3xl">One metre from pan to rim.</p>
                  <p className="mt-2 text-xs md:text-sm text-ivory/70">Wakes up the aromatic cardamom oils and aerates the malai into silk.</p>
                </div>
              </div>
            </Reveal>

            {/* Sub-strip with spices photo */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Reveal delay={0.1} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/photos/spices.webp"
                  alt="Bruised whole green cardamom, ginger and cinnamon curl"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <span className="absolute bottom-3 left-3 font-mono text-[0.55rem] uppercase tracking-wider text-ivory bg-ink/70 px-2 py-1 rounded">Bruised whole</span>
              </Reveal>
              <Reveal delay={0.2} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/photos/jars.webp"
                  alt="Nine glass jars of biscuits on the wooden shelf"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <span className="absolute bottom-3 left-3 font-mono text-[0.55rem] uppercase tracking-wider text-ivory bg-ink/70 px-2 py-1 rounded">Always 9 jars</span>
              </Reveal>
            </div>
          </div>

          {/* Drawn Section of the Cutting Glass & Manifesto list */}
          <div className="col-span-12 lg:col-span-5 space-y-10">
            {/* Architectural Drawing of Glass */}
            <Reveal className="rounded-2xl border border-ink/15 bg-cream/80 p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/60">FIG 01.1 — GLASS BLUEPRINT</span>
                <span className="font-mono text-[0.62rem] text-accent">SCALE 1:1</span>
              </div>

              {/* Technical SVG Glass */}
              <div className="relative my-6 flex justify-center py-4">
                <svg viewBox="0 0 240 300" className="h-64 w-auto text-ink/80" fill="none">
                  {/* Grid lines */}
                  <line x1="20" y1="50" x2="220" y2="50" stroke="currentColor" strokeDasharray="2 3" strokeOpacity="0.2" />
                  <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeDasharray="2 3" strokeOpacity="0.2" />
                  <line x1="20" y1="260" x2="220" y2="260" stroke="currentColor" strokeDasharray="2 3" strokeOpacity="0.2" />
                  <line x1="120" y1="20" x2="120" y2="280" stroke="#d6481c" strokeDasharray="4 4" strokeWidth="1" strokeOpacity="0.5" />

                  {/* Glass Outline */}
                  <polygon points="50,50 190,50 172,255 68,255" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                  {/* Flutes */}
                  <line x1="74" y1="90" x2="84" y2="225" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
                  <line x1="97" y1="90" x2="102" y2="225" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
                  <line x1="120" y1="90" x2="120" y2="225" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
                  <line x1="143" y1="90" x2="138" y2="225" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
                  <line x1="166" y1="90" x2="156" y2="225" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />

                  {/* Thick glass base */}
                  <path d="M68,255 L172,255 L168,230 L72,230 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />

                  {/* Chai Fill Line (90 ml cutting) */}
                  <polygon points="63,130 177,130 168,230 72,230" fill="#c98a4f" fillOpacity="0.35" />
                  <line x1="56" y1="130" x2="184" y2="130" stroke="#d6481c" strokeWidth="1.8" strokeDasharray="3 2" />

                  {/* Callout annotations */}
                  <text x="195" y="134" className="font-mono text-[9px]" fill="#d6481c" fontWeight="bold">90 ml CUTTING</text>
                  <text x="180" y="245" className="font-mono text-[8px]" fill="currentColor" opacity="0.6">SOLID HEEL (22mm)</text>
                  <text x="195" y="54" className="font-mono text-[8px]" fill="currentColor" opacity="0.6">Ø 68mm RIM</text>
                  <text x="10" y="160" className="font-mono text-[8px]" fill="currentColor" opacity="0.6">18 FLUTES</text>
                </svg>
              </div>

              <p className="font-mono text-[0.62rem] leading-relaxed text-ink/65">
                The traditional Mumbai cutting glass: 18 pressed flutes allow you to hold boiling tea without burning your fingers. Heavy base prevents tipping on marble tables.
              </p>
            </Reveal>

            {/* The 5 Rules */}
            <div className="space-y-6">
              {[
                { n: "01", t: "Pounded, never powdered", d: "Old-crop ginger pounded in brass mortars every 2 hours. Powder dries out the soul." },
                { n: "02", t: "Three boils, no fewer", d: "The milk must climb the lip of the steel saucepan three distinct times before straining." },
                { n: "03", t: "Three seconds on the dunk", d: "Glucose biscuits forgive nothing past 3.2 seconds. Have respect for structural engineering." },
                { n: "04", t: "No laptops before 10 am", d: "Mornings in Fort belong to newspapers, conversation, and second cups." },
              ].map((r) => (
                <Reveal key={r.n} className="flex gap-4 border-t border-ink/10 pt-4">
                  <span className="font-mono text-sm font-bold text-accent">{r.n}</span>
                  <div>
                    <h3 className="fat text-lg text-ink">{r.t}</h3>
                    <p className="body-sm mt-1 text-ink-soft">{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
