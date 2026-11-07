"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import CartDrawer, { type CartItem } from "./CartDrawer";
import { nav, brand, menu, inr } from "@/data/site";
import { ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export type BasketItemPayload = {
  id: string;
  name: string;
  price: number;
  sub?: string;
};

/** Dispatch from anywhere: bumps the basket counter and tracks ordered item. */
export function addToBasket(itemOrCount: number | BasketItemPayload = 1, count = 1) {
  if (typeof itemOrCount === "number") {
    window.dispatchEvent(new CustomEvent("tapri:basket", { detail: { add: itemOrCount } }));
  } else {
    window.dispatchEvent(new CustomEvent("tapri:basket", { detail: { add: count, item: itemOrCount } }));
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [bump, setBump] = useState(false);

  const count = items.reduce((sum, item) => sum + item.count, 0);

  const handleUpdateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, count: it.count + delta } : it))
        .filter((it) => it.count > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const handleClearCart = () => {
    setItems([]);
  };

  useEffect(() => {
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setScrolled(window.scrollY > 40)); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const inside = new Set<Element>();
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-theme='dark']")).map((sec) =>
      ScrollTrigger.create({
        trigger: sec, start: "top 44px", end: "bottom 44px", refreshPriority: -1,
        onToggle: (self) => { if (self.isActive) inside.add(sec); else inside.delete(sec); setDark(inside.size > 0); },
      })
    );
    const onBasket = (e: Event) => {
      const detail = (e as CustomEvent<{ add?: number; item?: BasketItemPayload }>).detail;
      const addQty = detail?.add ?? 1;
      const item = detail?.item;

      if (item) {
        setItems((prev) => {
          const idx = prev.findIndex((i) => i.id === item.id);
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], count: next[idx].count + addQty };
            return next;
          }
          return [...prev, { ...item, count: addQty }];
        });
      } else {
        // generic fallback (e.g. cutting chai)
        setItems((prev) => {
          const idx = prev.findIndex((i) => i.id === "chai");
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], count: next[idx].count + addQty };
            return next;
          }
          return [...prev, { id: "chai", name: "Cutting Chai", price: 20, sub: "Masala · 90 ml", count: addQty }];
        });
      }

      setBump(true);
      setTimeout(() => setBump(false), 450);
    };
    window.addEventListener("tapri:basket", onBasket);
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); triggers.forEach((t) => t.kill()); window.removeEventListener("tapri:basket", onBasket); };
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) lenis?.stop(); else if (!cartOpen) lenis?.start();
    document.documentElement.classList.toggle("lenis-stopped", open || cartOpen);
  }, [open, cartOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const light = dark || open;
  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-colors duration-500", light ? "text-ivory" : "text-ink")}>
        <nav aria-label="Primary" className={cn("container-x flex items-center justify-between transition-[height] duration-700", scrolled ? "h-16" : "h-[88px]")}>
          <a href="#story" className="relative z-[60]" aria-label={`${brand.name} — back to top`} data-cursor="link" onClick={() => { setOpen(false); setCartOpen(false); }}>
            <Logo compact={scrolled} />
          </a>
          <div className="relative z-[60] flex items-center gap-2">
            <button
              type="button"
              onClick={() => { setCartOpen(true); setOpen(false); }}
              data-cursor="cta"
              aria-label={`Your table order — ${count} ${count === 1 ? "item" : "items"}`}
              className={cn("flex h-10 items-center gap-2 rounded-full border px-3.5 font-mono text-[0.7rem] tabular-nums transition-[colors,transform] duration-300", light ? "border-ivory/30 hover:border-ivory" : "border-ink/20 hover:border-ink", bump && "scale-110")}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M2.5 6h11l-1.2 7.5H3.7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M5.5 6 8 2.5 10.5 6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
              {String(count).padStart(2, "0")}
            </button>
            <button type="button" onClick={() => { setOpen((o) => !o); setCartOpen(false); }} aria-expanded={open} aria-controls="tapri-menu" data-cursor="cta"
              className={cn("flex h-10 items-center gap-3 rounded-full px-5 font-body text-[0.8rem] font-semibold tracking-[0.02em] transition-colors duration-500", light ? "bg-ivory text-ink hover:bg-kesar" : "bg-ink text-ivory hover:bg-accent")}>
              <span className="relative block h-2.5 w-4" aria-hidden>
                <span className={cn("absolute left-0 h-px w-full bg-current transition-transform duration-500", open ? "top-1/2 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 h-px w-full bg-current transition-transform duration-500", open ? "top-1/2 -rotate-45" : "top-full")} />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <div id="tapri-menu" aria-hidden={!open} className={cn("fixed inset-0 z-[45] bg-deep text-ivory transition-[clip-path] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]", open ? "[clip-path:circle(150%_at_calc(100%-5rem)_2.75rem)]" : "pointer-events-none [clip-path:circle(0%_at_calc(100%-5rem)_2.75rem)]")} data-lenis-prevent>
        <div className="container-x grid h-full grid-cols-12 gap-x-6 pb-10 pt-28 md:pt-32">
          <ul className="col-span-12 flex flex-col justify-end gap-0.5 md:col-span-7">
            {nav.map((n, i) => (
              <li key={n.href} className="overflow-hidden">
                <a href={n.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} data-cursor="link"
                  className={cn("fat group flex items-baseline gap-5 text-[clamp(2.6rem,7vw,6rem)] leading-[1.12] transition-[transform,opacity,color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:text-kesar", open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}
                  style={{ transitionDelay: open ? `${0.14 + i * 0.06}s` : "0s" }}>
                  <span className="font-mono text-[0.7rem] font-normal tracking-[0.16em] text-ivory/40">0{i + 1}</span>{n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={cn("col-span-12 mt-10 flex flex-col justify-end gap-8 border-t border-ivory/15 pt-6 transition-opacity duration-700 md:col-span-4 md:col-start-9 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0", open ? "opacity-100 delay-300" : "opacity-0")}>
            <div>
              <p className="eyebrow !text-ivory/45">On the counter</p>
              <ul className="mt-3 space-y-2 text-sm text-ivory/75">{menu.map((f) => <li key={f.id} className="flex items-center justify-between gap-3"><span className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full" style={{ background: f.tint }} />{f.name}</span><span className="font-mono text-[0.62rem] text-ivory/45">{inr(f.price)}</span></li>)}</ul>
            </div>
            <p className="font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.14em] text-ivory/45">{brand.hours}<br />{brand.address}</p>
          </div>
        </div>
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </>
  );
}
