"use client";
import { useState } from "react";
import { Mark } from "./Logo";
import { brand, nav, menu } from "@/data/site";

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer data-theme="dark" className="relative z-10 overflow-hidden bg-deep text-ivory" aria-label="Footer">
      <div className="container-x grid grid-cols-12 gap-x-6 gap-y-12 pb-10 pt-20">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow !text-ivory/45">The regulars&apos; list</p>
          <p className="fat mt-4 max-w-[17ch] text-[clamp(1.9rem,3.2vw,3rem)] leading-[1.08]">Your first cutting is on us. <span className="text-kesar">The second you&apos;ll want anyway.</span></p>
          <form id="newsletter" onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 flex max-w-md items-center gap-2 border-b border-ivory/25 pb-2 focus-within:border-ivory">
            <label htmlFor="tapri-news-email" className="sr-only">Email address</label>
            <input id="tapri-news-email" type="email" required disabled={done} placeholder={done ? "Done. Show the email at the counter." : "you@email.com"} className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-ivory/40" />
            <button type="submit" disabled={done} className="rounded-full bg-ivory px-5 py-2.5 text-[0.8rem] font-semibold text-ink transition-colors hover:bg-kesar disabled:opacity-60" data-cursor="cta">{done ? "Sent ✓" : "Get the pass"}</button>
          </form>
        </div>
        <nav className="col-span-6 md:col-span-2 md:col-start-7" aria-label="Footer navigation">
          <p className="eyebrow !text-ivory/45">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">{nav.map((n) => <li key={n.href}><a href={n.href} className="text-ivory/75 hover:text-ivory" data-cursor="link">{n.label}</a></li>)}</ul>
        </nav>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow !text-ivory/45">On the counter</p>
          <ul className="mt-4 space-y-2 text-sm">{menu.map((f) => <li key={f.id} className="text-ivory/75">{f.name}</li>)}</ul>
        </div>
        <address className="col-span-12 not-italic md:col-span-2">
          <p className="eyebrow !text-ivory/45">Find us</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/75">{brand.address}</p>
          <p className="mt-3 text-sm text-ivory/75">{brand.hours}</p>
          <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="mt-3 block text-sm text-ivory/75 hover:text-ivory" data-cursor="link">{brand.phone}</a>
        </address>
      </div>
      <div aria-hidden className="container-x select-none">
        <p className="fat flex items-end justify-between whitespace-nowrap text-[15.5vw] leading-[0.95] text-ivory/[0.07]">{brand.wordmark}<Mark className="mb-[2.4vw] h-[11vw] text-ivory/[0.07]" chai="rgba(247,236,216,.07)" /></p>
      </div>
      <div className="container-x flex flex-col items-start justify-between gap-3 border-t border-ivory/10 py-6 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/40 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} {brand.name}. {brand.product}, {brand.place}.</span>
        <span>Chai boiled fresh every eleven minutes · FSSAI licensed</span>
      </div>
    </footer>
  );
}
