"use client";
import { useEffect, useRef, useState } from "react";
import type { StillKey } from "@/lib/story/pose";
import { cn } from "@/lib/utils";

/** Studio still rendered on demand from the story's own 3D models (see lib/story/stills.ts). */
export default function Still({ still, alt, className, imgClassName }: { still: StillKey; alt: string; className?: string; imgClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let alive = true;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      import("@/lib/story/engine").then(({ getStill }) => getStill(still)).then((u) => { if (alive) setSrc(u); }).catch(() => {});
    }, { rootMargin: "800px 800px" });
    io.observe(el);
    return () => { alive = false; io.disconnect(); };
  }, [still]);
  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src ? (
        <img src={src} alt={alt} draggable={false} className={cn("tapri-still-in h-full w-full select-none object-contain", imgClassName)} />
      ) : (
        <div className="h-full w-full animate-pulse bg-paper/30" />
      )}
    </div>
  );
}
