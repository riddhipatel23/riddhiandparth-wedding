import Image from 'next/image'
import { BrushStroke } from '../components/BrushStroke'
import { Reveal } from '../components/Reveal'

export default function EventsPage() {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="px-6 pt-20 pb-14 text-center bg-white border-b border-[var(--line)]">
        <Reveal className="flex flex-col items-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--muted)] mb-4">
            December 18 – 19, 2026 · Halol, Gujarat
          </p>
          <h1 className="text-6xl md:text-7xl [font-family:var(--font-script)] mb-3">The Celebrations</h1>
          <div className="flex justify-center mb-4">
            <BrushStroke variant="underline" className="w-48" color="#b09a78" delay={100} duration={1200} />
          </div>
          <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-7">
            Two days of rituals, music, and dancing at Champaner Heritage Resort.
          </p>
        </Reveal>
      </section>

      {/* Haldi */}
      <section id="haldi" className="scroll-mt-16 bg-white">
        <Reveal className="max-w-3xl mx-auto px-6 py-20">
          <div className="border border-[var(--line)]">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 px-8 py-10">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3 text-[var(--muted)]">
                  Day 1 · December 18, 2026
                </p>
                <h2 className="text-5xl mb-4 [font-family:var(--font-script)]">Haldi</h2>
                <div className="mb-6">
                  <BrushStroke variant="underline" className="w-32" color="#b09a78" delay={100} duration={1000} />
                </div>
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <span className="font-medium text-[var(--foreground)]">12:00 PM – 4:00 PM</span>
                  <span className="opacity-30">·</span>
                  <span className="text-[var(--muted)]">Garden Lawn, Champaner Heritage Resort</span>
                </div>
                <p className="text-base leading-8 mb-5 [font-family:var(--font-display)]">
                  The Haldi ceremony is where the magic starts. Family and friends gather to bless the bride and groom by applying a paste of turmeric, sandalwood, and rose water — a ritual believed to purify and add a natural glow before the wedding.
                </p>
                <p className="text-base leading-8 text-[var(--muted)]">
                  Expect bright yellow everything — outfits, flowers, decor. Come ready to get messy, laugh hard, and eat amazing food. This is the fun afternoon before the dancing begins.
                </p>
              </div>
              <div className="w-full md:w-56 flex-shrink-0 relative min-h-56">
                <Image src="/photos/haldi-decor.jpg" alt="Haldi decor" fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-t border-[var(--line)]">
              <div className="p-5">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Dress Code</p>
                <p className="text-sm text-[var(--muted)] leading-6">Yellow or white — or anything you don't mind getting turmeric on!</p>
              </div>
              <div className="p-5">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Vibe</p>
                <p className="text-sm text-[var(--muted)] leading-6">Casual, joyful, family-first</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sangeet */}
      <section id="sangeet" className="scroll-mt-16" style={{ background: 'var(--foreground)' }}>
        <Reveal className="max-w-3xl mx-auto px-6 py-20">
          <div className="border border-white/10">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="flex-1 px-8 py-10">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3 text-white/50">
                  Day 1 · December 18, 2026
                </p>
                <h2 className="text-5xl mb-4 text-white [font-family:var(--font-script)]">Sangeet</h2>
                <div className="mb-6">
                  <BrushStroke variant="underline" className="w-32" color="#b09a78" delay={100} duration={1000} />
                </div>
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <span className="font-medium text-white">7:00 PM Onwards</span>
                  <span className="opacity-30 text-white">·</span>
                  <span className="text-white/50">Grand Banquet Hall</span>
                </div>
                <p className="text-base leading-8 mb-5 text-white/80 [font-family:var(--font-display)]">
                  The Sangeet is the night everything comes alive. This is the cocktail evening — think glittering outfits, live music, family dance performances, and enough energy to keep you on the floor all night.
                </p>
                <p className="text-base leading-8 text-white/60">
                  Both sides of the family compete in song and dance (lovingly, of course). The bar is open, the dance floor is yours — come ready to perform or cheer.
                </p>
              </div>
              <div className="w-full md:w-56 flex-shrink-0 relative min-h-56">
                <Image src="/photos/sangeet-night.jpg" alt="Sangeet night" fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
              <div className="p-5">
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2">Dress Code</p>
                <p className="text-sm text-white/60 leading-6">Cocktail / Semi-formal Indian — jewels and shimmer encouraged</p>
              </div>
              <div className="p-5">
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2">Vibe</p>
                <p className="text-sm text-white/60 leading-6">Festive, electric, dance-all-night energy</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Wedding */}
      <section id="wedding" className="scroll-mt-16 bg-[var(--surface)]">
        <Reveal className="max-w-3xl mx-auto px-6 py-20">
          <div className="border border-[var(--line)] bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 px-8 py-10">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3 text-[var(--muted)]">
                  Day 2 · December 19, 2026
                </p>
                <h2 className="text-5xl mb-4 [font-family:var(--font-script)]">The Wedding</h2>
                <div className="mb-6">
                  <BrushStroke variant="underline" className="w-32" color="#b09a78" delay={100} duration={1000} />
                </div>
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <span className="font-medium text-[var(--foreground)]">5:00 PM Onwards</span>
                  <span className="opacity-30">·</span>
                  <span className="text-[var(--muted)]">Wedding Mandap, Champaner Heritage Resort</span>
                </div>
                <p className="text-base leading-8 mb-5 [font-family:var(--font-display)]">
                  The main event. Under an open mandap, surrounded by marigolds and family, we'll take our pheras around the sacred fire — the seven vows that bind the Patel and Shah families into one.
                </p>
                <p className="text-base leading-8 text-[var(--muted)]">
                  Eat, celebrate, dance into the night. This is the moment we've all been waiting for.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-t border-[var(--line)]">
              <div className="p-5">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Dress Code</p>
                <p className="text-sm text-[var(--muted)] leading-6">Formal Indian — lehengas, sherwanis, sarees, kurtas. Bright colours welcome!</p>
              </div>
              <div className="p-5">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Schedule</p>
                <p className="text-sm text-[var(--muted)] leading-6">5 PM Ceremony · Dancing till late</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Timeline strip */}
      <section className="py-16 px-6" style={{ background: 'var(--foreground)' }}>
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <p className="text-center text-[10px] tracking-[0.35em] uppercase mb-10 text-white/60">Full Schedule at a Glance</p>
          </Reveal>
          <div className="flex flex-col gap-0">
            {[
              { day: 'Dec 18', time: '12:00 PM', event: 'Haldi', note: 'Garden Lawn' },
              { day: 'Dec 18', time: '4:00 PM', event: 'Haldi Ends', note: 'Freshen up, get glam' },
              { day: 'Dec 18', time: '7:00 PM', event: 'Sangeet / Cocktail Night', note: 'Grand Banquet Hall' },
              { day: 'Dec 19', time: '5:00 PM', event: 'Wedding Ceremony', note: 'Wedding Mandap' },
              { day: 'Dec 20', time: '11:00 AM', event: 'Check-out', note: 'Safe travels!' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80} duration={700} className="flex items-stretch gap-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-5 flex-shrink-0" style={{ background: '#b09a78' }} />
                  {i < 4 && <div className="w-px flex-1 bg-white/10" />}
                </div>
                <div className="ml-5 pb-8 flex gap-6 items-start">
                  <div className="text-right flex-shrink-0 pt-3">
                    <p className="text-xs text-white/30">{item.day}</p>
                    <p className="text-sm font-semibold" style={{ color: '#b09a78' }}>{item.time}</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-white font-medium [font-family:var(--font-display)]">{item.event}</p>
                    <p className="text-xs text-white/40 mt-0.5">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-white">
        <Reveal className="flex flex-col items-center">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-6 text-[var(--muted)]">Don't miss a moment</p>
          <a
            href="/rsvp"
            className="inline-block border border-[var(--foreground)] bg-[var(--foreground)] px-14 py-4 text-[10px] tracking-[0.3em] uppercase text-white transition-opacity hover:opacity-75"
          >
            RSVP Now
          </a>
        </Reveal>
      </section>
    </div>
  )
}
