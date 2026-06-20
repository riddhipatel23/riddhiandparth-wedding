import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[92vh] text-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #fff0f5 0%, #fde8f0 35%, #fef3e8 70%, #fdf5ff 100%)' }}
      >
        {/* Soft background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://champanerheritageresort.com/wp-content/uploads/2024/08/image-6-2-4-1-scaled.jpg"
            alt="Champaner Heritage Resort"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="w-[600px] h-[600px] rounded-full border opacity-20" style={{ borderColor: '#e8a0b8' }} />
          <div className="absolute w-[420px] h-[420px] rounded-full border opacity-30" style={{ borderColor: '#e8a0b8' }} />
          <div className="absolute w-[260px] h-[260px] rounded-full border opacity-40" style={{ borderColor: '#e8a0b8' }} />
        </div>

        <div className="absolute top-8 left-0 right-0 flex justify-center gap-3 text-xl opacity-50 select-none">
          {'🌸🌼🌸🌼🌸🌼🌸🌼🌸'.split('').map((c, i) => <span key={i}>{c}</span>)}
        </div>

        <p className="relative tracking-[0.4em] uppercase text-xs mb-8" style={{ color: '#b06080' }}>
          Together with their families
        </p>

        <h1 className="relative text-7xl md:text-9xl font-light mb-3" style={{ color: '#7a3050', fontFamily: 'Georgia, serif' }}>
          Riddhi
        </h1>
        <div className="relative text-3xl my-2" style={{ color: '#d4a0b0' }}>❋</div>
        <h1 className="relative text-7xl md:text-9xl font-light mb-10" style={{ color: '#7a3050', fontFamily: 'Georgia, serif' }}>
          Parth
        </h1>

        <p className="relative tracking-widest uppercase text-xs mb-3 opacity-50" style={{ color: '#7a3050' }}>
          Request the honour of your presence
        </p>
        <p className="relative text-2xl mb-4 font-light" style={{ color: '#c9a84c' }}>
          December 18 – 19, 2026
        </p>
        <p className="relative text-sm mb-10 tracking-wider opacity-60" style={{ color: '#7a3050' }}>
          Champaner Heritage Resort · Halol, Gujarat
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4">
          <a href="/rsvp" className="px-10 py-3 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80" style={{ background: '#c47090' }}>
            RSVP Now
          </a>
          <a href="/events" className="px-10 py-3 tracking-widest uppercase text-sm border transition-opacity hover:opacity-60" style={{ borderColor: '#c47090', color: '#c47090' }}>
            View Events
          </a>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 text-xl opacity-50 select-none">
          {'🌼🌸🌼🌸🌼🌸🌼🌸🌼'.split('').map((c, i) => <span key={i}>{c}</span>)}
        </div>
      </section>

      {/* Couple photo strip */}
      <section className="grid grid-cols-2 h-[60vh]">
        <div className="relative overflow-hidden group">
          <Image src="/photos/couple-rome.jpg" alt="Riddhi & Parth in Rome" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(122,48,80,0.5) 0%, transparent 60%)' }} />
          <p className="absolute bottom-6 left-6 text-white text-sm tracking-widest uppercase opacity-80">Rome, Italy</p>
        </div>
        <div className="relative overflow-hidden group">
          <Image src="/photos/dog-of-honour.jpg" alt="Dog of Honour" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(122,48,80,0.5) 0%, transparent 60%)' }} />
          <div className="absolute bottom-6 left-6">
            <p className="text-white text-sm tracking-widest uppercase opacity-80">🐾 Dog of Honour</p>
          </div>
        </div>
      </section>

      {/* Event preview strip */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {/* Haldi */}
        <a href="/events#haldi" className="group relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(160deg, #fff8e0 0%, #fef0a0 100%)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/photos/haldi-decor.jpg" alt="Haldi" fill className="object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500" />
          </div>
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 text-yellow-900 opacity-80">December 18 · 12 PM – 4 PM</p>
          <h2 className="relative text-4xl text-yellow-900 mb-2">Haldi</h2>
          <p className="relative text-sm text-yellow-900 opacity-70 leading-relaxed">Turmeric, laughter & blessings. A bright afternoon celebration with family.</p>
          <span className="relative text-xs tracking-widest uppercase text-yellow-900 opacity-50 mt-4 group-hover:opacity-100 transition-opacity">Learn more →</span>
        </a>

        {/* Sangeet */}
        <a href="/events#sangeet" className="group relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(160deg, #f9e8f5 0%, #f0c8e8 100%)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/photos/sangeet-night.jpg" alt="Sangeet" fill className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500" />
          </div>
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 opacity-80" style={{ color: '#8b3070' }}>December 18 · 7 PM Onwards</p>
          <h2 className="relative text-4xl mb-2" style={{ color: '#6b1f50' }}>Sangeet</h2>
          <p className="relative text-sm opacity-70 leading-relaxed" style={{ color: '#6b1f50' }}>Cocktail night, dancing & music. The night the whole family performs.</p>
          <span className="relative text-xs tracking-widest uppercase opacity-50 mt-4 group-hover:opacity-100 transition-opacity" style={{ color: '#8b3070' }}>Learn more →</span>
        </a>

        {/* Wedding */}
        <a href="/events#wedding" className="group relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden transition-all duration-300"
          style={{ background: 'linear-gradient(160deg, #fef0f5 0%, #fde0e8 100%)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80" alt="Wedding" fill className="object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500" />
          </div>
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 opacity-80" style={{ color: '#8b3040' }}>December 19 · 3 PM Onwards</p>
          <h2 className="relative text-4xl mb-2" style={{ color: '#6b1f30' }}>The Wedding</h2>
          <p className="relative text-sm opacity-70 leading-relaxed" style={{ color: '#6b1f30' }}>The pheras, the vows, the moment we've all been waiting for.</p>
          <span className="relative text-xs tracking-widest uppercase opacity-50 mt-4 group-hover:opacity-100 transition-opacity" style={{ color: '#8b3040' }}>Learn more →</span>
        </a>
      </section>

      {/* Venue photo grid */}
      <section className="px-6 py-20 text-center" style={{ background: '#fff8fb' }}>
        <p className="tracking-widest uppercase text-xs mb-3" style={{ color: '#c47090' }}>The Venue</p>
        <h2 className="text-4xl mb-4" style={{ color: '#7a3050' }}>Champaner Heritage Resort</h2>
        <p className="text-sm mb-12 max-w-md mx-auto opacity-60" style={{ color: '#7a3050' }}>
          Set against the UNESCO World Heritage Site of Champaner, Gujarat — a fort palace brought to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-5xl mx-auto mb-8">
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden min-h-[300px]">
            <Image src="https://champanerheritageresort.com/wp-content/uploads/2024/08/image-6-2-4-1-scaled.jpg" alt="Champaner Heritage Resort" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="https://champanerheritageresort.com/wp-content/uploads/2025/06/Heritage-Rooms.png" alt="Heritage Rooms" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="https://champanerheritageresort.com/wp-content/uploads/2024/08/image-6-2-3-1-scaled.jpg" alt="Wedding decor" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="https://champanerheritageresort.com/wp-content/uploads/2024/10/Royal-Dining-Cuisine-Experience-1.jpg" alt="Royal Dining" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="https://champanerheritageresort.com/wp-content/uploads/2025/06/Suite-Rooms.png" alt="Suite Rooms" fill className="object-cover" />
          </div>
        </div>

        <p className="text-xs tracking-widest uppercase opacity-30" style={{ color: '#7a3050' }}>Halol · Gujarat · India</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6" style={{ background: 'linear-gradient(160deg, #fde8f0 0%, #f5e0f8 100%)' }}>
        <p className="tracking-widest uppercase text-xs mb-4 opacity-50" style={{ color: '#7a3050' }}>We can't wait to celebrate with you</p>
        <h2 className="text-4xl mb-8 font-light" style={{ color: '#7a3050' }}>Will you join us?</h2>
        <a href="/rsvp" className="inline-block px-12 py-4 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80" style={{ background: '#c47090' }}>
          RSVP Now
        </a>
      </section>
    </div>
  );
}
