export default function HotelPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <p className="tracking-widest uppercase text-xs mb-3 text-center" style={{ color: '#c9a84c' }}>
        Accommodation
      </p>
      <h1 className="text-4xl text-center mb-4">Hotel & Stay</h1>
      <p className="text-center opacity-60 mb-12">
        We've arranged a block of rooms at a nearby hotel for out-of-town guests.
      </p>

      <div className="border border-amber-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl mb-2">[Hotel Name]</h2>
        <p className="opacity-60 mb-6 text-sm">[Hotel Address, City]</p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Rate</p>
            <p className="text-2xl font-light">₹10,000</p>
            <p className="text-xs opacity-50">per night</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Suggested Stay</p>
            <p className="text-2xl font-light">2 nights</p>
            <p className="text-xs opacity-50">₹20,000 total</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Check-in</p>
            <p className="text-lg">[Day before wedding]</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Check-out</p>
            <p className="text-lg">[Day after wedding]</p>
          </div>
        </div>

        <div className="border-t border-amber-100 pt-6">
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">What's Included</p>
          <ul className="text-sm space-y-2 opacity-70">
            <li>✓ Breakfast for two</li>
            <li>✓ Airport shuttle</li>
            <li>✓ Wedding shuttle service</li>
            <li>✓ Late checkout on request</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 rounded-lg p-6 text-center">
        <p className="text-sm opacity-60 mb-4">
          To book your room, simply indicate your interest on the RSVP form and we'll send you payment details and the booking code.
        </p>
        <a
          href="/rsvp"
          className="inline-block px-8 py-3 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80"
          style={{ background: '#c9a84c' }}
        >
          Book via RSVP
        </a>
      </div>

      <p className="text-xs text-center mt-8 opacity-40">
        Limited rooms available. First come, first served. Block expires [date].
      </p>
    </div>
  )
}
