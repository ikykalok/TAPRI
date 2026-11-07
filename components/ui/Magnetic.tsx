"use client";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/hooks";

export default function Magnetic({ children, strength = 0.22 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useMediaQuery("(pointer: fine)", false);

  useEffect(() => {
    if (!fine) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      tx = (e.clientX - rect.left - rect.width / 2) * strength;
      ty = (e.clientY - rect.top - rect.height / 2) * strength;
    };
    const leave = () => { tx = 0; ty = 0; };
    const tick = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      if (Math.abs(cx) > 0.01 || Math.abs(cy) > 0.01 || Math.abs(tx) > 0.01 || Math.abs(ty) > 0.01) {
        el.style.transform = `translate(${cx}px, ${cy}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    el.style.willChange = "transform";
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
      el.style.willChange = "";
      el.style.transform = "";
    };
  }, [fine, strength]);

  return <div ref={ref} className="inline-block">{children}</div>;
}
