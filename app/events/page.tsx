import Image from 'next/image'

export default function EventsPage() {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section
        className="flex flex-col items-center justify-center py-24 px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #1a0a00 0%, #3d1a00 100%)' }}
      >
        <p className="tracking-[0.4em] uppercase text-xs mb-4" style={{ color: '#c9a84c' }}>
          December 18 – 19, 2026
        </p>
        <h1 className="text-5xl text-white mb-4 font-light">The Celebrations</h1>
        <p className="text-white opacity-40 max-w-md text-sm leading-relaxed">
          Two days of rituals, music, dancing, and love at Champaner Heritage Resort, Halol, Gujarat.
        </p>
      </section>

      {/* Haldi */}
      <section id="haldi" className="scroll-mt-16">
        <div
          className="py-20 px-6 md:px-20"
          style={{ background: 'linear-gradient(160deg, #fff8e0 0%, #fef3b0 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <p className="tracking-[0.3em] uppercase text-xs mb-3" style={{ color: '#b07d00' }}>
                  Day 1 · December 18, 2026
                </p>
                <h2 className="text-5xl mb-4" style={{ color: '#7a4f00' }}>Haldi</h2>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-semibold" style={{ color: '#c9840a' }}>12:00 PM – 4:00 PM</span>
                  <span className="opacity-30 text-sm">·</span>
                  <span className="text-sm opacity-60" style={{ color: '#7a4f00' }}>Garden Lawn, Champaner Heritage Resort</span>
                </div>
                <p className="text-base leading-8 mb-6 opacity-80" style={{ color: '#5a3a00' }}>
                  The Haldi ceremony is where the magic starts. Family and friends gather to bless the bride and groom by applying a paste of turmeric, sandalwood, and rose water — a ritual believed to purify and add a natural glow before the wedding.
                </p>
                <p className="text-base leading-8 mb-8 opacity-80" style={{ color: '#5a3a00' }}>
                  Expect bright yellow everything — outfits, flowers, decor. Come ready to get messy, laugh hard, and eat amazing food. This is the fun afternoon before the dancing begins.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg p-4" style={{ background: 'rgba(249,212,35,0.3)' }}>
                    <p className="font-semibold mb-1" style={{ color: '#7a4f00' }}>Dress Code</p>
                    <p className="opacity-70" style={{ color: '#5a3a00' }}>Yellow or white — or anything you don't mind getting turmeric on!</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: 'rgba(249,212,35,0.3)' }}>
                    <p className="font-semibold mb-1" style={{ color: '#7a4f00' }}>Vibe</p>
                    <p className="opacity-70" style={{ color: '#5a3a00' }}>Casual, joyful, family-first</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-2">
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <Image src="https://picsum.photos/seed/haldi1/500/400" alt="Haldi ceremony" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(245,166,35,0.25)' }} />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-40">
                  <Image src="https://picsum.photos/seed/flowers11/500/350" alt="Marigold flowers" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sangeet */}
      <section id="sangeet" className="scroll-mt-16">
        <div
          className="py-20 px-6 md:px-20"
          style={{ background: 'linear-gradient(160deg, #1a0012 0%, #4a0030 50%, #8b0020 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1">
                <p className="tracking-[0.3em] uppercase text-xs mb-3" style={{ color: '#e8a0c0' }}>
                  Day 1 · December 18, 2026
                </p>
                <h2 className="text-5xl mb-4 text-white">Sangeet</h2>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-semibold" style={{ color: '#e8a0c0' }}>7:00 PM Onwards</span>
                  <span className="opacity-30 text-sm text-white">·</span>
                  <span className="text-sm text-white opacity-50">Grand Banquet Hall</span>
                </div>
                <p className="text-base leading-8 mb-6 text-white opacity-70">
                  The Sangeet is the night everything comes alive. This is the cocktail evening — think glittering outfits, live music, family dance performances, and enough energy to keep you on the floor all night.
                </p>
                <p className="text-base leading-8 mb-8 text-white opacity-70">
                  Both sides of the family compete in song and dance (lovingly, of course). The bar is open, the dance floor is yours — come ready to perform or cheer.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="font-semibold mb-1 text-pink-200">Dress Code</p>
                    <p className="text-white opacity-50">Cocktail / Semi-formal Indian — jewels and shimmer encouraged</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="font-semibold mb-1 text-pink-200">Vibe</p>
                    <p className="text-white opacity-50">Festive, electric, dance-all-night energy</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-2">
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <Image src="https://picsum.photos/seed/dance55/500/400" alt="Sangeet dance" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(139,0,80,0.3)' }} />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-40">
                  <Image src="https://picsum.photos/seed/lights33/500/350" alt="Cocktail night lights" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(80,0,40,0.2)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding */}
      <section id="wedding" className="scroll-mt-16">
        <div
          className="py-20 px-6 md:px-20"
          style={{ background: 'linear-gradient(160deg, #fdf8f0 0%, #fef4e0 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <p className="tracking-[0.3em] uppercase text-xs mb-3" style={{ color: '#c9a84c' }}>
                  Day 2 · December 19, 2026
                </p>
                <h2 className="text-5xl mb-4" style={{ color: '#3d1a00' }}>The Wedding</h2>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-semibold" style={{ color: '#c9a84c' }}>3:00 PM Onwards</span>
                  <span className="opacity-30 text-sm">·</span>
                  <span className="text-sm opacity-60" style={{ color: '#3d1a00' }}>Wedding Mandap, Champaner Heritage Resort</span>
                </div>
                <p className="text-base leading-8 mb-6 opacity-70" style={{ color: '#3d1a00' }}>
                  The main event. Under an open mandap, surrounded by marigolds and family, we'll take our pheras around the sacred fire — the seven vows that bind two families into one.
                </p>
                <p className="text-base leading-8 mb-8 opacity-70" style={{ color: '#3d1a00' }}>
                  The evening flows into a grand reception dinner. Eat, celebrate, dance into the night. This is the moment we've all been waiting for.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold mb-1" style={{ color: '#7a4f00' }}>Dress Code</p>
                    <p className="opacity-70" style={{ color: '#5a3a00' }}>Formal Indian — lehengas, sherwanis, sarees, kurtas. Bright colours welcome!</p>
                  </div>
                  <div className="rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold mb-1" style={{ color: '#7a4f00' }}>Schedule</p>
                    <p className="opacity-70" style={{ color: '#5a3a00' }}>3 PM Ceremony · 6 PM Reception Dinner · Dancing till late</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-2">
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <Image src="https://picsum.photos/seed/wedding88/500/400" alt="Wedding ceremony" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(139,0,0,0.2)' }} />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-40">
                  <Image src="https://picsum.photos/seed/mandap66/500/350" alt="Mandap decor" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(201,168,76,0.15)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline strip */}
      <section className="py-16 px-6" style={{ background: '#1a0a00' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-center tracking-widest uppercase text-xs mb-10" style={{ color: '#c9a84c' }}>Full Schedule at a Glance</p>
          <div className="flex flex-col gap-0">
            {[
              { day: 'Dec 18', time: '12:00 PM', event: 'Haldi', note: 'Garden Lawn', color: '#f9d423', text: '#7a4f00' },
              { day: 'Dec 18', time: '4:00 PM', event: 'Haldi Ends', note: 'Freshen up, get glam', color: '#f9d423', text: '#7a4f00' },
              { day: 'Dec 18', time: '7:00 PM', event: 'Sangeet / Cocktail Night', note: 'Grand Banquet Hall', color: '#c0392b', text: '#fff' },
              { day: 'Dec 19', time: '3:00 PM', event: 'Wedding Ceremony', note: 'Wedding Mandap', color: '#c9a84c', text: '#3d1a00' },
              { day: 'Dec 19', time: '6:00 PM', event: 'Reception Dinner', note: 'Open Courtyard', color: '#c9a84c', text: '#3d1a00' },
              { day: 'Dec 20', time: '11:00 AM', event: 'Check-out', note: 'Safe travels!', color: '#555', text: '#fff' },
            ].map((item, i) => (
              <div key={i} className="flex items-stretch gap-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-5 flex-shrink-0" style={{ background: item.color }} />
                  {i < 5 && <div className="w-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                </div>
                <div className="ml-5 pb-8 flex gap-6 items-start">
                  <div className="text-right flex-shrink-0 pt-3">
                    <p className="text-xs opacity-30 text-white">{item.day}</p>
                    <p className="text-sm font-semibold" style={{ color: item.color }}>{item.time}</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-white font-medium">{item.event}</p>
                    <p className="text-xs opacity-40 text-white mt-0.5">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-14 px-6" style={{ background: '#fdf8f3' }}>
        <p className="text-xs tracking-widest uppercase opacity-40 mb-4">Don't miss a moment</p>
        <a href="/rsvp" className="inline-block px-12 py-4 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80" style={{ background: '#c9a84c' }}>
          RSVP Now
        </a>
      </section>
    </div>
  )
}
