"use client";
import { useEffect, useState } from "react";
import { inr, brand } from "@/data/site";
import { cn } from "@/lib/utils";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  sub?: string;
  count: number;
};

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
};

export default function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [tableNo, setTableNo] = useState("04");
  const [ordered, setOrdered] = useState(false);
  const [orderNum, setOrderNum] = useState(108);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", onKey);
      window.__lenis?.stop();
      document.documentElement.classList.add("lenis-stopped");
    } else {
      window.__lenis?.start();
      document.documentElement.classList.remove("lenis-stopped");
      // Reset order confirmation state on close
      setTimeout(() => setOrdered(false), 500);
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [open, onClose]);

  const handlePlaceOrder = () => {
    setOrderNum((n) => n + 1);
    setOrdered(true);
    setTimeout(() => {
      onClearCart();
    }, 2500);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[70] bg-deep/60 backdrop-blur-sm transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Slide-over Sheet */}
      <aside
        id="cart-drawer"
        role="dialog"
        aria-label="Table Order"
        aria-modal="true"
        className={cn(
          "fixed inset-y-0 right-0 z-[75] flex w-full max-w-md flex-col bg-ivory text-ink shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
        data-lenis-prevent
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/15 px-6 py-5 bg-paper/60">
          <div>
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/60">
              Counter Ticket
            </span>
            <h2 className="fat text-2xl text-ink leading-tight">Your Table Order</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            data-cursor="cta"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory transition-colors"
            aria-label="Close order ticket"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {ordered ? (
          /* Order Confirmed Screen */
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-kesar/20 text-accent mb-5">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Order #{orderNum} Confirmed
            </span>
            <h3 className="fat text-3xl text-ink mt-2">Boiling up for Table {tableNo}</h3>
            <p className="body-sm text-ink/70 mt-3 max-w-xs">
              Ginger is pounded, glasses are steaming. The counter will bring your order hot to your table.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-accent transition-colors"
              >
                Back to Café
              </button>
            </div>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paper text-ink/40 mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h3 className="fat text-2xl text-ink">The glass is empty</h3>
            <p className="body-sm text-ink/65 mt-2 max-w-xs">
              Tap any 3D item on the counter or morning plate from the kitchen to add it to your order.
            </p>
            <a
              href="#menu"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-accent transition-colors"
            >
              Browse Counter
            </a>
          </div>
        ) : (
          /* Items List */
          <>
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-2.5 bg-paper/30 text-xs">
              <span className="font-mono text-ink/60">Table:</span>
              <div className="flex items-center gap-1 font-mono text-xs">
                {["02", "04", "07", "Counter"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTableNo(t)}
                    className={cn(
                      "px-2 py-0.5 rounded transition-colors",
                      tableNo === t ? "bg-ink text-ivory font-bold" : "text-ink/60 hover:text-ink hover:bg-ink/5"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream p-4 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="fat text-lg text-ink truncate">{item.name}</h4>
                    {item.sub && (
                      <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink/50 truncate">
                        {item.sub}
                      </p>
                    )}
                    <span className="font-mono text-xs font-bold text-accent mt-1 block">
                      {inr(item.price * item.count)}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-full border border-ink/20 bg-paper/50 p-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-ink hover:bg-ink hover:text-ivory transition-colors text-sm font-bold"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        –
                      </button>
                      <span className="w-6 text-center font-mono text-xs font-bold tabular-nums">
                        {item.count}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-ink hover:bg-ink hover:text-ivory transition-colors text-sm font-bold"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 text-ink/40 hover:text-accent transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 4h10M6 4V2.5h4V4M5 4v9h6V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Summary & Action Footer */}
            <div className="border-t border-ink/15 bg-paper/50 p-6 space-y-3">
              <div className="space-y-1.5 font-mono text-xs text-ink/70">
                <div className="flex justify-between">
                  <span>Subtotal ({totalCount} items)</span>
                  <span className="tabular-nums font-semibold text-ink">{inr(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[0.65rem] text-ink/50">
                  <span>Restaurant GST (5%)</span>
                  <span className="tabular-nums">{inr(gst)}</span>
                </div>
                <div className="flex justify-between border-t border-ink/10 pt-2 text-sm font-bold text-ink">
                  <span className="fat text-base">Total</span>
                  <span className="font-mono text-base tabular-nums text-accent">{inr(total)}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  data-cursor="cta"
                  className="w-full rounded-full bg-accent py-3.5 text-center font-body text-sm font-bold uppercase tracking-wider text-ivory shadow-lg hover:bg-accent-deep transition-colors"
                >
                  Send Order to Counter ({inr(total)})
                </button>
              </div>

              <p className="text-center font-mono text-[0.55rem] uppercase tracking-wider text-ink/45">
                Pay at counter when done · {brand.hours}
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
