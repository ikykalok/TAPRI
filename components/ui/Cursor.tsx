"use client";
import { useEffect, useRef } from "react";
import { useMediaQuery, useReducedMotion } from "@/lib/hooks";

export default function Cursor() {
  const fine = useMediaQuery("(pointer: fine)", false);
  const reduced = useReducedMotion();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    if (!fine || reduced) return;
    const d = dot.current!, r = ring.current!;
    let raf = 0;
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      d.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      if (!visible.current) {
        visible.current = true;
        d.style.opacity = "1";
        r.style.opacity = "1";
      }
    };
    const leave = () => { visible.current = false; d.style.opacity = "0"; r.style.opacity = "0"; };
    const enter = () => { visible.current = true; d.style.opacity = "1"; r.style.opacity = "1"; };
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      r.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;

      // detect nearest data-cursor
      const el = document.elementFromPoint(target.current.x, target.current.y);
      const cur = (el as HTMLElement)?.closest?.("[data-cursor]");
      const mode = cur?.getAttribute("data-cursor") ?? "";
      r.dataset.mode = mode;

      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(raf);
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;
  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full opacity-0"
        style={{ backgroundColor: "#F5F3EE", mixBlendMode: "difference" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-ivory opacity-0 transition-[width,height,background-color] duration-500"
        style={{
          width: 32,
          height: 32,
          mixBlendMode: "difference",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        data-mode=""
      >
        <style>{`
          [data-mode="link"] { width: 48px !important; height: 48px !important; }
          [data-mode="cta"] { width: 64px !important; height: 64px !important; background: rgba(247,236,216,0.2) !important; }
          [data-mode="view"], [data-mode="drag"], [data-mode="3d"] { width: 80px !important; height: 80px !important; background: #f7ecd8 !important; border-color: transparent !important; }
          [data-mode="view"]::after, [data-mode="drag"]::after, [data-mode="3d"]::after {
            font-family: var(--font-mono);
            font-size: 0.6rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--color-ink);
          }
          [data-mode="view"]::after { content: "View"; }
          [data-mode="drag"]::after { content: "Drag"; }
          [data-mode="3d"]::after { content: "Rotate"; }
        `}</style>
      </div>
    </>
  );
}
