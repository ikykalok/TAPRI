import { cn } from "@/lib/utils";
import { brand } from "@/data/site";

/** The mark: a cutting glass, half full, three curls of steam (viewBox 0 0 32 32). */
export function Mark({ className, chai = "var(--color-chai)", title }: { className?: string; chai?: string; title?: string }) {
  return (
    <svg viewBox="6 3 20 24" className={cn("h-8 w-auto", className)} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} fill="none">
      <path d="M9.5 11h13l-1.7 13.2a1.6 1.6 0 0 1-1.6 1.4h-6.4a1.6 1.6 0 0 1-1.6-1.4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10.9 15.6h10.2l-1 8.3a1 1 0 0 1-1 .9h-6.2a1 1 0 0 1-1-.9z" fill={chai} />
      <path d="M13 8.6c-1-1.2.9-1.8 0-3.1M16.4 8.6c-1-1.2.9-1.8 0-3.1M19.8 8.6c-1-1.2.9-1.8 0-3.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ className, compact = false, chai }: { className?: string; compact?: boolean; chai?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-current", className)}>
      <Mark className={compact ? "h-7" : "h-8"} chai={chai} />
      <span className="flex flex-col leading-none">
        <span className="fat text-[1.5rem] leading-[1]">{brand.wordmark}</span>
        {!compact && <span className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.2em] opacity-60">{brand.product} · {brand.place}</span>}
      </span>
    </span>
  );
}
