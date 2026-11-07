"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "ink" | "ivory" | "ghost" | "ghost-light";
  size?: "md" | "lg";
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  target?: string;
  rel?: string;
};

const variants = {
  ink: "bg-ink text-ivory hover:bg-accent",
  ivory: "bg-ivory text-ink hover:bg-white hover:-translate-y-px hover:shadow-[0_12px_30px_-14px_rgba(0,0,0,.35)]",
  ghost: "border border-ink/20 text-ink hover:border-ink",
  "ghost-light": "border border-ivory/30 text-ivory hover:border-ivory",
} as const;

export default function Button({
  href,
  children,
  variant = "ink",
  size = "md",
  className,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-3 rounded-full font-body font-medium tracking-[0.02em] transition-all duration-500 ease-expo",
    size === "md" ? "px-6 py-3 text-[0.85rem]" : "px-8 py-4 text-[0.95rem]",
    variants[variant],
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-expo group-hover:translate-x-1"
      >
        <path d="M1 7h11M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    return <a href={href} target={target} rel={rel} onClick={onClick} className={classes} data-cursor="cta">{content}</a>;
  }
  return <Link href={href} target={target} rel={rel} onClick={onClick} className={classes} data-cursor="cta">{content}</Link>;
}
