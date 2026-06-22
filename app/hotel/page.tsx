export default function HotelPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <p className="tracking-widest uppercase text-xs mb-3 text-center" style={{ color: '#c9a84c' }}>
        Accommodation
      </p>
      <h1 className="text-4xl text-center mb-4">Hotel & Stay</h1>
      <p className="text-center opacity-60 mb-2 max-w-lg mx-auto">
        We've reserved rooms at the venue itself for out-of-town guests. Stay where the celebration happens.
      </p>
      <p className="text-center text-sm opacity-40 mb-12">December 18 – 20, 2026</p>

      {/* Venue card */}
      <div className="border border-amber-200 rounded-lg p-8 mb-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl mb-1">Champaner Heritage Resort</h2>
            <p className="opacity-50 text-sm">Halol, Gujarat, India</p>
          </div>
          <span className="text-2xl">🏰</span>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-xs tracking-widest uppercase opacity-50 mb-2">Per Night</p>
            <p className="text-2xl font-light">₹10,000</p>
            <p className="text-xs opacity-40 mt-1">per room</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-xs tracking-widest uppercase opacity-50 mb-2">2 Nights</p>
            <p className="text-2xl font-light">₹20,000</p>
            <p className="text-xs opacity-40 mt-1">recommended</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-xs tracking-widest uppercase opacity-50 mb-2">1 Night</p>
            <p className="text-2xl font-light">₹10,000</p>
            <p className="text-xs opacity-40 mt-1">wedding night only</p>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Check-in</p>
            <p className="text-lg">Thursday, Dec 18</p>
            <p className="text-xs opacity-40 mt-1">From 11:00 AM</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Check-out</p>
            <p className="text-lg">Saturday, Dec 20</p>
            <p className="text-xs opacity-40 mt-1">By 11:00 AM</p>
          </div>
        </div>

        {/* Included */}
        <div className="border-t border-amber-100 pt-6">
          <p className="text-xs tracking-widest uppercase opacity-50 mb-3">Included with Your Stay</p>
          <ul className="text-sm space-y-2 opacity-70">
            <li>✓ Daily breakfast</li>
            <li>✓ Transportation to & from the resort (provided by us)</li>
          </ul>
        </div>
      </div>

      {/* Getting There — USA guests */}
      <div className="border border-amber-200 rounded-lg p-8 mb-6">
        <h3 className="text-lg mb-4 flex items-center gap-2">
          <span>✈️</span> Getting Here from the USA
        </h3>
        <p className="text-sm opacity-60 mb-5 leading-relaxed">
          Fly into either of these international airports — both are well-connected from major US hubs (NYC, Chicago, LA, SFO) with one stop.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50 rounded-lg p-4">
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Option 1</p>
            <p className="font-semibold">AMD</p>
            <p className="text-sm opacity-70">Ahmedabad Airport</p>
            <p className="text-xs opacity-50 mt-2">~1.5 hr drive to venue</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <p className="text-xs tracking-widest uppercase opacity-50 mb-1">Option 2</p>
            <p className="font-semibold">BDQ</p>
            <p className="text-sm opacity-70">Vadodara (Baroda) Airport</p>
            <p className="text-xs opacity-50 mt-2">~1 hr drive to venue</p>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm">
          <span className="font-semibold">🚌 We've got you covered.</span>{' '}
          <span className="opacity-70">We're arranging pickup and drop-off from both airports. Let us know your flight details when you contact us.</span>
        </div>
      </div>

      {/* Contact to Book */}
      <div className="border border-amber-300 rounded-lg p-8 text-center" style={{ background: '#fffbf3' }}>
        <h3 className="text-xl mb-2">Need Help Booking?</h3>
        <p className="text-sm opacity-60 mb-6 max-w-sm mx-auto leading-relaxed">
          Rooms are limited. Reach out to us directly and we'll help you secure your room, coordinate airport pickup, and answer any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:riddhik2364@gmail.com?subject=Wedding Hotel Booking"
            className="px-8 py-3 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80"
            style={{ background: '#c9a84c' }}
          >
            Email Us
          </a>
          <a
            href="/rsvp"
            className="px-8 py-3 tracking-widest uppercase text-sm border transition-opacity hover:opacity-60"
            style={{ borderColor: '#c9a84c', color: '#c9a84c' }}
          >
            RSVP & Note Interest
          </a>
        </div>
        <p className="text-xs opacity-40 mt-5">
          Include your arrival date, number of guests, and which airport you're flying into.
        </p>
      </div>
    </div>
  )
}
