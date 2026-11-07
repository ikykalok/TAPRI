"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  lines?: string;
  as?: React.ElementType;
};

export default function Reveal({ children, className, delay = 0, lines, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-in"), delay * 1000);
          } else {
            el.classList.add("is-in");
          }
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  if (lines) {
    const parts = lines.split("\n");
    return (
      <Tag ref={ref} data-reveal className={className}>
        {parts.map((line, i) => (
          <span key={i} className="line-mask" style={{ transitionDelay: `${i * 80}ms` }}>
            <span>{line}</span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} data-reveal className={cn(className)} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}
