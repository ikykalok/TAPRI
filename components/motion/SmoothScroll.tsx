"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

declare global {
  interface Window { __lenis?: Lenis }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.95,
    });

    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t: number) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add("lenis");

    // intercept anchor clicks
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;
      e.preventDefault();
      try {
        const target = document.querySelector(hash);
        if (target) lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.6 });
      } catch { /* invalid selector */ }
    };
    document.addEventListener("click", onClick);

    // refresh
    const refresh = () => ScrollTrigger.refresh();
    const refreshTimer = setTimeout(refresh, 300);
    document.fonts?.ready.then(refresh);

    let lastW = window.innerWidth;
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (Math.abs(window.innerWidth - lastW) < 2) return;
        lastW = window.innerWidth;
        refresh();
      }, 250);
    };
    window.addEventListener("resize", onResize);

    return () => {
      lenis.destroy();
      window.__lenis = undefined;
      document.documentElement.classList.remove("lenis");
      document.removeEventListener("click", onClick);
      clearTimeout(refreshTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  return <div ref={wrap}>{children}</div>;
}
