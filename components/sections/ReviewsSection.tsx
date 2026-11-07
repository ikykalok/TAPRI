"use client";
import Image from "next/image";
import { reviews } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-ivory text-ink py-28 md:py-36 overflow-hidden">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Words from the counter</p>
          <Reveal as="h2" className="fat text-[clamp(2.6rem,7vw,5.5rem)] leading-none">
            The regulars. <span className="text-accent italic font-normal">Fort speaks for itself.</span>
          </Reveal>
        </div>

        {/* Big Editorial Quote Card with Marble Table Photo */}
        <div className="mt-14 grid grid-cols-12 gap-8 items-stretch">
          {/* Table photo */}
          <div className="col-span-12 lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-deep">
            <Image
              src="/assets/photos/table.webp"
              alt="Marble table laid with cuttings, bun maska, samosas and biscuit stacks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-ivory">
              <span className="font-mono text-[0.6rem] uppercase tracking-widest text-kesar">Table 04</span>
              <p className="fat text-xl mt-1">Eleven cuttings, bun maska and samosas</p>
            </div>
          </div>

          {/* Featured First Quote */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between rounded-2xl border border-ink/15 bg-cream p-8 md:p-10 shadow-sm">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="text-kesar opacity-70">
              <path d="M0 19.2C0 8.6 6.8 0 17.6 0V6.4C11.6 6.4 8 10.4 8 16H17.6V32H0V19.2ZM22.4 19.2C22.4 8.6 29.2 0 40 0V6.4C34 6.4 30.4 10.4 30.4 16H40V32H22.4V19.2Z" fill="currentColor" />
            </svg>

            <blockquote className="fat text-2xl md:text-3xl text-ink leading-snug my-6">
              “{reviews[0].quote}”
            </blockquote>

            <div className="border-t border-ink/10 pt-4 flex items-center justify-between">
              <div>
                <span className="fat text-lg text-ink block">{reviews[0].name}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/50">{reviews[0].place}</span>
              </div>
              <span className="font-mono text-xs text-accent">Regular since &apos;18</span>
            </div>
          </div>
        </div>

        {/* 4 Remaining Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(1).map((rev, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream/70 p-6 shadow-sm hover:border-ink/25 hover:shadow-md transition-all duration-300"
            >
              <p className="body-sm text-ink-soft leading-relaxed italic">
                “{rev.quote}”
              </p>
              <div className="mt-6 border-t border-ink/10 pt-4">
                <span className="fat text-base text-ink block">{rev.name}</span>
                <span className="font-mono text-[0.55rem] uppercase tracking-widest text-ink/50">{rev.place}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee strip */}
        <div className="mt-20 overflow-hidden border-y border-ink/15 py-4">
          <div className="marquee-track flex gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
            <span>First, chai</span>
            <span>·</span>
            <span>Ginger pounded, never grated</span>
            <span>·</span>
            <span>Three boils, no fewer</span>
            <span>·</span>
            <span>14 Homi Mody Street, Fort</span>
            <span>·</span>
            <span>Glucose biscuits baked daily</span>
            <span>·</span>
            <span>First boil at 6 am</span>
            <span>·</span>
            <span>First, chai</span>
            <span>·</span>
            <span>Ginger pounded, never grated</span>
            <span>·</span>
            <span>Three boils, no fewer</span>
            <span>·</span>
            <span>14 Homi Mody Street, Fort</span>
            <span>·</span>
            <span>Glucose biscuits baked daily</span>
            <span>·</span>
            <span>First boil at 6 am</span>
            <span>·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
