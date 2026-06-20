export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[92vh] text-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1a0a00 0%, #3d1a00 40%, #6b2d00 70%, #3d1a00 100%)' }}
      >
        {/* Decorative mandala rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="w-[600px] h-[600px] rounded-full border opacity-5" style={{ borderColor: '#c9a84c', borderWidth: 1 }} />
          <div className="absolute w-[450px] h-[450px] rounded-full border opacity-10" style={{ borderColor: '#c9a84c', borderWidth: 1 }} />
          <div className="absolute w-[300px] h-[300px] rounded-full border opacity-15" style={{ borderColor: '#c9a84c', borderWidth: 1 }} />
        </div>

        {/* Marigold dots top */}
        <div className="absolute top-8 left-0 right-0 flex justify-center gap-3 text-2xl opacity-60 select-none">
          {'🌼🌸🌼🌸🌼🌸🌼🌸🌼'.split('').map((c, i) => <span key={i}>{c}</span>)}
        </div>

        <p className="relative tracking-[0.4em] uppercase text-xs mb-8" style={{ color: '#c9a84c' }}>
          Together with their families
        </p>

        <h1 className="relative text-7xl md:text-9xl font-light mb-3 text-white" style={{ fontFamily: 'Georgia, serif', textShadow: '0 0 60px rgba(201,168,76,0.4)' }}>
          Riddhi
        </h1>
        <div className="relative text-4xl my-2" style={{ color: '#c9a84c' }}>❋</div>
        <h1 className="relative text-7xl md:text-9xl font-light mb-10 text-white" style={{ fontFamily: 'Georgia, serif', textShadow: '0 0 60px rgba(201,168,76,0.4)' }}>
          [Partner]
        </h1>

        <p className="relative tracking-widest uppercase text-xs mb-3 text-white opacity-50">
          Request the honour of your presence
        </p>
        <p className="relative text-2xl mb-12 font-light" style={{ color: '#c9a84c' }}>
          December 18 – 19, 2026
        </p>
        <p className="relative text-sm opacity-40 text-white mb-10 tracking-wider">
          Champaner Heritage Resort · Halol, Gujarat
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="/rsvp" className="px-10 py-3 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80" style={{ background: '#c9a84c' }}>
            RSVP Now
          </a>
          <a href="/events" className="px-10 py-3 tracking-widest uppercase text-sm border text-white transition-opacity hover:opacity-60" style={{ borderColor: 'rgba(201,168,76,0.6)' }}>
            View Events
          </a>
        </div>

        {/* Marigold dots bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 text-2xl opacity-60 select-none">
          {'🌸🌼🌸🌼🌸🌼🌸🌼🌸'.split('').map((c, i) => <span key={i}>{c}</span>)}
        </div>
      </section>

      {/* Event preview strip */}
      <section className="grid grid-cols-1 md:grid-cols-3">

        {/* Haldi */}
        <a href="/events#haldi" className="group relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(160deg, #f5a623 0%, #f9d423 100%)' }}>
          <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-10 select-none group-hover:scale-110 transition-transform duration-500">💛</div>
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 text-yellow-900 opacity-70">December 18 · 12 PM – 4 PM</p>
          <h2 className="relative text-4xl text-yellow-900 mb-2">Haldi</h2>
          <p className="relative text-sm text-yellow-900 opacity-70 leading-relaxed">
            Turmeric, laughter & blessings. A bright afternoon celebration with family.
          </p>
          <span className="relative text-xs tracking-widest uppercase text-yellow-900 opacity-50 mt-4 group-hover:opacity-100 transition-opacity">Learn more →</span>
        </a>

        {/* Sangeet */}
        <a href="/events#sangeet" className="group relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(160deg, #6b1f6b 0%, #c0392b 100%)' }}>
          <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-10 select-none group-hover:scale-110 transition-transform duration-500">🎶</div>
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 text-pink-200 opacity-70">December 18 · 7 PM Onwards</p>
          <h2 className="relative text-4xl text-white mb-2">Sangeet</h2>
          <p className="relative text-sm text-pink-200 opacity-80 leading-relaxed">
            Cocktail night, dancing & music. The night the whole family performs.
          </p>
          <span className="relative text-xs tracking-widest uppercase text-pink-200 opacity-50 mt-4 group-hover:opacity-100 transition-opacity">Learn more →</span>
        </a>

        {/* Wedding */}
        <a href="/events#wedding" className="group relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(160deg, #1a0a00 0%, #7b2d00 100%)' }}>
          <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-10 select-none group-hover:scale-110 transition-transform duration-500">💍</div>
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 opacity-50" style={{ color: '#c9a84c' }}>December 19 · 3 PM Onwards</p>
          <h2 className="relative text-4xl text-white mb-2">The Wedding</h2>
          <p className="relative text-sm opacity-60 text-amber-100 leading-relaxed">
            The pheras, the vows, the moment we've been waiting for.
          </p>
          <span className="relative text-xs tracking-widest uppercase opacity-40 mt-4 group-hover:opacity-80 transition-opacity" style={{ color: '#c9a84c' }}>Learn more →</span>
        </a>
      </section>

      {/* Photo mood board */}
      <section className="px-6 py-20 text-center" style={{ background: '#fdf8f3' }}>
        <p className="tracking-widest uppercase text-xs mb-3" style={{ color: '#c9a84c' }}>The Venue</p>
        <h2 className="text-4xl mb-4" style={{ color: '#3d2b1f' }}>Champaner Heritage Resort</h2>
        <p className="opacity-50 text-sm mb-12 max-w-md mx-auto">
          Set against the UNESCO World Heritage Site of Champaner, Gujarat — a fort palace brought to life.
        </p>

        {/* Photo grid — CSS mood collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-5xl mx-auto mb-12">
          <div className="col-span-2 row-span-2 rounded-xl flex items-center justify-center min-h-[280px] text-7xl"
            style={{ background: 'linear-gradient(135deg, #c41e3a, #8b0000)' }}>
            <span className="opacity-80">🕌</span>
          </div>
          <div className="rounded-xl flex items-center justify-center min-h-[135px] text-5xl"
            style={{ background: 'linear-gradient(135deg, #f5a623, #f9d423)' }}>
            <span className="opacity-80">🪔</span>
          </div>
          <div className="rounded-xl flex items-center justify-center min-h-[135px] text-5xl"
            style={{ background: 'linear-gradient(135deg, #6b1f6b, #c0392b)' }}>
            <span className="opacity-80">🌺</span>
          </div>
          <div className="rounded-xl flex items-center justify-center min-h-[135px] text-5xl"
            style={{ background: 'linear-gradient(135deg, #1a6b1a, #2ecc71)' }}>
            <span className="opacity-80">🌿</span>
          </div>
          <div className="rounded-xl flex items-center justify-center min-h-[135px] text-5xl"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #f5d769)' }}>
            <span className="opacity-80">✨</span>
          </div>
        </div>

        <p className="text-xs opacity-30 tracking-widest uppercase">Halol · Gujarat · India</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6" style={{ background: '#3d1a00' }}>
        <p className="text-white opacity-40 tracking-widest uppercase text-xs mb-4">We can't wait to celebrate with you</p>
        <h2 className="text-4xl text-white mb-8 font-light">Will you join us?</h2>
        <a href="/rsvp" className="px-12 py-4 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80 inline-block" style={{ background: '#c9a84c' }}>
          RSVP Now
        </a>
      </section>
    </div>
  );
}
