export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <p className="tracking-widest uppercase text-sm mb-6" style={{ color: '#c9a84c' }}>
        Together with their families
      </p>
      <h1 className="text-6xl md:text-8xl mb-4" style={{ color: '#3d2b1f' }}>
        Riddhi
      </h1>
      <div className="text-3xl mb-4 opacity-40">&amp;</div>
      <h1 className="text-6xl md:text-8xl mb-8" style={{ color: '#3d2b1f' }}>
        [Partner]
      </h1>
      <p className="text-lg tracking-widest uppercase mb-2 opacity-60">
        Request the honour of your presence
      </p>
      <p className="text-2xl mb-12" style={{ color: '#c9a84c' }}>
        December 2026
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/rsvp"
          className="px-10 py-3 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80"
          style={{ background: '#c9a84c' }}
        >
          RSVP Now
        </a>
        <a
          href="/registry"
          className="px-10 py-3 tracking-widest uppercase text-sm border transition-opacity hover:opacity-60"
          style={{ borderColor: '#c9a84c', color: '#c9a84c' }}
        >
          Registry
        </a>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl w-full text-center">
        <div>
          <p className="tracking-widest uppercase text-xs mb-1 opacity-50">Date</p>
          <p className="text-lg">December 19, 2026</p>
        </div>
        <div>
          <p className="tracking-widest uppercase text-xs mb-1 opacity-50">Venue</p>
          <p className="text-lg">Champaner Heritage Resort</p>
          <p className="text-xs opacity-40 mt-1">Halol, Gujarat</p>
        </div>
        <div>
          <p className="tracking-widest uppercase text-xs mb-1 opacity-50">Dress Code</p>
          <p className="text-lg">Formal / Indian</p>
        </div>
      </div>
    </div>
  );
}
