import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riddhi & Parth — Wedding 2026",
  description: "Join us to celebrate our special day",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <nav className="flex items-center justify-between px-8 py-4 border-b border-amber-200">
          <span className="text-lg tracking-widest uppercase" style={{ color: '#c47090' }}>
            Riddhi &amp; Parth
          </span>
          <div className="flex gap-6 text-sm tracking-widest uppercase">
            <a href="/" className="hover:opacity-60 transition-opacity">Home</a>
            <a href="/rsvp" className="hover:opacity-60 transition-opacity">RSVP</a>
            <a href="/hotel" className="hover:opacity-60 transition-opacity">Hotel</a>
            <a href="/registry" className="hover:opacity-60 transition-opacity">Registry</a>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="text-center py-6 text-xs opacity-40 tracking-widest uppercase">
          Made with love · 2026
        </footer>
      </body>
    </html>
  );
}
