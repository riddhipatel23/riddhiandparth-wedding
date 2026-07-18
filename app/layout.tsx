import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Public_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Riddhi & Parth — Wedding 2026",
  description: "Join us to celebrate our special day",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${display.variable} ${script.variable} ${body.variable} min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        <nav className="border-b border-[var(--line)] bg-[var(--background)] px-8 py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
            <a
              href="/"
              className={`${display.className} text-3xl md:text-4xl font-light tracking-[0.12em] leading-none hover:opacity-70 transition-opacity`}
            >
              Riddhi &amp; Parth
            </a>
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-[10px] tracking-[0.22em] uppercase text-[var(--muted)]">
              <a href="/" className="hover:text-[var(--foreground)] transition-colors">Home</a>
              <a href="/story" className="hover:text-[var(--foreground)] transition-colors">Our Story</a>
              <a href="/events" className="hover:text-[var(--foreground)] transition-colors">Schedule</a>
              <a href="/hotel" className="hover:text-[var(--foreground)] transition-colors">Travel</a>
              <a href="/registry" className="hover:text-[var(--foreground)] transition-colors">Registry</a>
              <a href="/rsvp" className="hover:text-[var(--foreground)] transition-colors">RSVP</a>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--line)] py-8 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
          Riddhi and Parth · Winter 2026
        </footer>
      </body>
    </html>
  );
}
