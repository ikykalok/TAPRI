import type { Metadata, Viewport } from "next";
import { Rozha_One, Albert_Sans, Azeret_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/ui/Cursor";

const display = Rozha_One({ subsets: ["latin"], variable: "--font-display", weight: "400", display: "swap" });
const body = Albert_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"], display: "swap" });
const mono = Azeret_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "700"], display: "swap" });

const TITLE = "BR-Tapri — First, chai";
const DESC = "A chai café in Fort, Mumbai. Ginger and cardamom pounded every morning, milk boiled up three times, poured from a height — with a biscuit jar that is never empty.";

export const metadata: Metadata = {
  title: { default: TITLE, template: "%s — BR-Tapri" },
  description: DESC,
  openGraph: { type: "website", title: TITLE, description: DESC, locale: "en_IN" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  icons: { icon: [{ url: "/assets/brand/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = { themeColor: "#F7ECD8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="cursor-none-desktop">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">Skip to content</a>
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
