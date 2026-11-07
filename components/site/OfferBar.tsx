"use client";
import { useEffect, useState } from "react";
import { Mark } from "./Logo";
import { onIntroDone } from "./Intro";
import { cn } from "@/lib/utils";

/** Floating "first cutting is on us" pill. Dismissible; stays out of the way on mobile. */
export default function OfferBar() {
  const [shown, setShown] = useState(false);
  const [closed, setClosed] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("tapri-offer-closed")) { setClosed(true); return; }
    return onIntroDone(() => setTimeout(() => setShown(true), 1600));
  }, []);
  if (closed) return null;
  return (
    <div role="region" aria-label="First cutting offer" className={cn("fixed inset-x-3 bottom-3 z-40 mx-auto max-w-[640px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] md:bottom-5", shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0")}>
      <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex items-center gap-2 rounded-full border border-ink/10 bg-cream/95 py-1.5 pl-2 pr-1.5 text-ink shadow-[0_18px_40px_-18px_rgba(50,24,6,.5)] backdrop-blur-sm">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deep text-ivory"><Mark className="h-5" /></span>
        <p className="min-w-0 flex-1 truncate pl-1 text-[0.78rem] leading-tight">
          {done ? <span>Done — show the email at the counter for a <b className="font-semibold">cutting on the house</b>.</span> : <><b className="font-semibold">First cutting&apos;s on us</b><span className="hidden sm:inline"> — leave your email, show it at the counter</span><span className="sm:hidden"> · get the pass</span></>}
        </p>
        {!done && (
          <>
            <label htmlFor="tapri-offer-email" className="sr-only">Email address</label>
            <input id="tapri-offer-email" type="email" required placeholder="you@email.com" className="hidden w-44 rounded-full bg-paper/70 px-4 py-2 text-[0.78rem] outline-none placeholder:text-ink/40 focus:bg-paper md:block" />
            <button type="submit" className="hidden shrink-0 rounded-full bg-ink px-4 py-2 text-[0.75rem] font-semibold text-ivory transition-colors hover:bg-accent md:block" data-cursor="cta">Get the pass</button>
            <a href="#newsletter" className="shrink-0 rounded-full bg-ink px-4 py-2 text-[0.75rem] font-semibold text-ivory md:hidden">Get it</a>
          </>
        )}
        <button type="button" aria-label="Dismiss offer" onClick={() => { setClosed(true); sessionStorage.setItem("tapri-offer-closed", "1"); }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/50 hover:text-ink" data-cursor="link">
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" /></svg>
        </button>
      </form>
    </div>
  );
}
