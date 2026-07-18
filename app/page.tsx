import Image from "next/image";
import { BrushStroke } from "./components/BrushStroke";


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Photo ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ height: "calc(100vh - 120px)", minHeight: 500 }}>
        <Image src="/photos/hero.jpg" alt="Riddhi and Parth" fill className="object-cover object-[50%_85%]" priority />
      </section>


      {/* ── Our Story ─────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[var(--surface)]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-center text-[var(--muted)]">How it began</p>
          <h2 className="text-6xl md:text-7xl text-center mb-2 [font-family:var(--font-script)]">Our Story</h2>
          <div className="flex justify-center mb-14">
            <BrushStroke variant="underline" className="w-48" color="#b09a78" delay={100} duration={1200} />
          </div>

          <p className="text-lg leading-9 mb-6 [font-family:var(--font-display)]">
            It started with a conversation neither of them expected to remember — a mutual friend's Diwali party, Parth cracking a terrible joke, Riddhi laughing anyway. That was the beginning.
          </p>
          <p className="text-base leading-8 mb-6 text-[var(--muted)]">
            Over the next two years they built something out of long drives, shared playlists, and the kind of easy silence that only comes when you've found your person. They cooked bad pasta in a
            tiny apartment kitchen. They got hopelessly lost on a road trip and didn't mind at all.
          </p>
          <p className="text-base leading-8 text-[var(--muted)]">When Parth finally asked — on a quiet evening in Rome, the city glowing gold around them — the answer was never in doubt.</p>

          <div className="mt-12 flex items-center gap-5">
            <div className="flex-1 h-px bg-[var(--line)]" />
            <a href="/story" className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex-shrink-0">
              Continue Reading →
            </a>
            <div className="flex-1 h-px bg-[var(--line)]" />
          </div>
        </div>
      </section>

      {/* ── Celebration CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-[var(--surface)] px-6 py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-40">
          <BrushStroke variant="divider" className="w-full max-w-3xl" color="#b09a78" delay={200} duration={1800} />
        </div>

        <p className="relative text-[10px] tracking-[0.4em] uppercase text-[var(--muted)] mb-6">
          December 18 – 19, 2026 · Halol, Gujarat
        </p>
        <h2 className="relative text-5xl md:text-6xl mb-3 [font-family:var(--font-script)]">
          The Celebrations
        </h2>
        <div className="relative flex justify-center mb-8">
          <BrushStroke variant="underline" className="w-40" color="#b09a78" delay={300} duration={1200} />
        </div>
        <p className="relative text-sm text-[var(--muted)] max-w-sm mb-12 leading-7">
          Haldi, Sangeet, and the Wedding — two days of rituals, music, and dancing at Champaner Heritage Resort.
        </p>
        <a
          href="/events"
          className="relative group inline-flex items-center gap-3 border border-[var(--foreground)] px-14 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-[var(--foreground)] hover:text-white"
        >
          Take me to the celebration
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </section>

      {/* ── RSVP CTA ──────────────────────────────────────────────────────── */}
      <section className="text-center py-24 px-6 bg-white">
        <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[var(--muted)]">Kindly reply by November 1, 2026</p>
        <h2 className="text-5xl md:text-6xl mb-2 [font-family:var(--font-script)]">Will You Join Us?</h2>
        <div className="flex justify-center mb-10">
          <BrushStroke variant="underline" className="w-44" color="#b09a78" delay={100} duration={1200} />
        </div>
        <a href="/rsvp" className="inline-block border border-[var(--foreground)] px-14 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-[var(--foreground)] hover:text-white">
          RSVP Now
        </a>
      </section>
    </div>
  );
}
