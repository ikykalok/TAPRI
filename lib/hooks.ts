"use client";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useMediaQuery(query: string, initial = false) {
  const [matches, setMatches] = useState(initial);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)", false);
}

export function useIsMobile() {
  return useMediaQuery("(max-width:767px)", false);
}

export function useIsTouch() {
  return useMediaQuery("(hover:none), (pointer:coarse)", false);
}

export function useQualityTier() {
  const [tier, setTier] = useState(1);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width:767px)").matches;
    const cores = navigator.hardwareConcurrency ?? 4;
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    const dpr = window.devicePixelRatio ?? 1;
    if (mobile || cores <= 4 || mem <= 4) { setTier(0); return; }
    if (cores >= 8 && mem >= 8 && dpr <= 2) { setTier(2); return; }
    setTier(1);
  }, []);
  return tier;
}

export function useInView(options?: { rootMargin?: string; threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) io.disconnect();
        } else {
          if (options?.once === false) setInView(false);
        }
      },
      { rootMargin: options?.rootMargin ?? "0px 0px -10% 0px", threshold: options?.threshold ?? 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options?.rootMargin, options?.threshold, options?.once]);
  return { ref, inView };
}

export function usePointer() {
  const ref = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      ref.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      ref.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, []);
  return ref;
}

export function useLatest<T>(value: T) {
  const ref = useRef(value);
  useIsomorphicLayoutEffect(() => { ref.current = value; });
  return ref;
}

export function useEvent<T extends (...args: unknown[]) => unknown>(fn: T): T {
  const ref = useLatest(fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ((...args: unknown[]) => ref.current(...args)) as T, [ref]);
}
