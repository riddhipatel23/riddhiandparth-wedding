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
          {Array.from('🌸🌼🌸🌼🌸🌼🌸🌼🌸').map((c, i) => <span key={i}>{c}</span>)}
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
          <a href="/registry" className="px-10 py-3 tracking-widest uppercase text-sm border transition-opacity hover:opacity-60" style={{ borderColor: '#c47090', color: '#c47090' }}>
            Registry
          </a>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 text-xl opacity-50 select-none">
          {Array.from('🌼🌸🌼🌸🌼🌸🌼🌸🌼').map((c, i) => <span key={i}>{c}</span>)}
        </div>
      </section>


      {/* Event strip */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {/* Haldi */}
        <div className="relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #fff8e0 0%, #fef0a0 100%)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/photos/haldi-decor.jpg" alt="Haldi" fill className="object-cover opacity-50" />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(120,80,0,0.6) 0%, transparent 60%)' }} />
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 text-yellow-100 opacity-90">December 18 · 12 PM – 4 PM</p>
          <h2 className="relative text-4xl text-white mb-2">Haldi</h2>
          <p className="relative text-sm text-yellow-100 opacity-80 leading-relaxed">Turmeric, laughter & blessings. A bright afternoon with family.</p>
        </div>

        {/* Sangeet */}
        <div className="relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden"
          style={{ background: '#1a0012' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/photos/sangeet-night.jpg" alt="Sangeet" fill className="object-cover opacity-70" />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(80,0,50,0.7) 0%, transparent 60%)' }} />
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 text-pink-200 opacity-90">December 18 · 7 PM Onwards</p>
          <h2 className="relative text-4xl text-white mb-2">Sangeet</h2>
          <p className="relative text-sm text-pink-100 opacity-80 leading-relaxed">Cocktail night, dancing & music. The night the whole family performs.</p>
        </div>

        {/* Wedding */}
        <div className="relative flex flex-col justify-end p-10 min-h-[380px] overflow-hidden"
          style={{ background: '#1a0a00' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/photos/PYE_3523.jpg" alt="Wedding" fill className="object-cover opacity-60" />
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(80,20,0,0.7) 0%, transparent 60%)' }} />
          <p className="relative text-xs tracking-[0.3em] uppercase mb-2 opacity-90" style={{ color: '#f5d98c' }}>December 19 · 3 PM Onwards</p>
          <h2 className="relative text-4xl text-white mb-2">The Wedding</h2>
          <p className="relative text-sm text-amber-100 opacity-80 leading-relaxed">The pheras, the vows, the moment we've all been waiting for.</p>
        </div>
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
            <Image src="/photos/PYE_3523.jpg" alt="Wedding ceremony" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="/photos/cover.jpg" alt="Wedding ritual" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="/photos/wedding-ritual.webp" alt="Wedding ceremony" fill className="object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[145px]">
            <Image src="/photos/haldi-decor.jpg" alt="Haldi decor" fill className="object-cover" />
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
