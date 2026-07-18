export default function HotelPage() {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="px-6 pt-20 pb-14 text-center bg-white border-b border-[var(--line)]">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--muted)] mb-4">Accommodation & Travel</p>
        <h1 className="text-6xl md:text-7xl [font-family:var(--font-script)] mb-3">Travel & Stay</h1>
        <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-7">
          We've reserved rooms at the venue for out-of-town guests. Stay where the celebration happens.
        </p>
        <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] opacity-60">
          December 18 – 20, 2026
        </p>
      </section>

      <div className="max-w-2xl mx-auto w-full px-6 py-16 flex flex-col gap-6">

        {/* Venue card */}
        <div className="border border-[var(--line)] bg-white">
          <div className="px-8 pt-8 pb-6 border-b border-[var(--line)]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--muted)] mb-2">The Venue</p>
            <h2 className="text-2xl [font-family:var(--font-display)]">Champaner Heritage Resort</h2>
            <p className="text-sm text-[var(--muted)] mt-1">Halol, Gujarat, India</p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[var(--line)] border-b border-[var(--line)]">
            {[
              { label: 'Per Night', value: '₹10,000', sub: 'per room' },
              { label: '2 Nights', value: '₹20,000', sub: 'recommended' },
              { label: '1 Night', value: '₹10,000', sub: 'wedding only' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="p-5 text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">{label}</p>
                <p className="text-xl font-light [font-family:var(--font-display)]">{value}</p>
                <p className="text-[10px] text-[var(--muted)] mt-1">{sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-b border-[var(--line)]">
            <div className="p-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Check-in</p>
              <p className="text-base [font-family:var(--font-display)]">Thursday, Dec 18</p>
              <p className="text-xs text-[var(--muted)] mt-1">From 11:00 AM</p>
            </div>
            <div className="p-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Check-out</p>
              <p className="text-base [font-family:var(--font-display)]">Saturday, Dec 20</p>
              <p className="text-xs text-[var(--muted)] mt-1">By 11:00 AM</p>
            </div>
          </div>

          <div className="px-8 py-6">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-4">Included with your stay</p>
            <ul className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-[var(--line)] flex-shrink-0" />
                Daily breakfast
              </li>
              <li className="flex items-center gap-3">
                <span className="h-px w-4 bg-[var(--line)] flex-shrink-0" />
                Transportation to & from the resort, arranged by us
              </li>
            </ul>
          </div>
        </div>

        {/* Getting here */}
        <div className="border border-[var(--line)] bg-white">
          <div className="px-8 pt-8 pb-6 border-b border-[var(--line)]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--muted)] mb-2">Getting Here</p>
            <h2 className="text-2xl [font-family:var(--font-display)]">Flying in from the USA</h2>
            <p className="text-sm text-[var(--muted)] mt-3 leading-7">
              Both airports below have direct connections from major US hubs — New York, Chicago, LA, and SFO — with a single stop.
            </p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-b border-[var(--line)]">
            {[
              { code: 'AMD', name: 'Ahmedabad Airport', drive: '~1.5 hr drive to venue' },
              { code: 'BDQ', name: 'Vadodara (Baroda) Airport', drive: '~1 hr drive to venue' },
            ].map(({ code, name, drive }) => (
              <div key={code} className="p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Option</p>
                <p className="text-2xl font-light [font-family:var(--font-display)]">{code}</p>
                <p className="text-sm text-[var(--muted)] mt-1">{name}</p>
                <p className="text-xs text-[var(--muted)] mt-3 opacity-70">{drive}</p>
              </div>
            ))}
          </div>

          <div className="px-8 py-5">
            <p className="text-sm text-[var(--muted)] leading-7">
              <span className="text-[var(--foreground)] font-medium">We have you covered.</span>{' '}
              Pickup and drop-off from both airports is arranged by us. Share your flight details when you RSVP or reach out.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="border border-[var(--line)] bg-[var(--surface)] px-8 py-10 text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--muted)] mb-4">Need Help Booking?</p>
          <h3 className="text-3xl [font-family:var(--font-script)] mb-3">Get in Touch</h3>
          <p className="text-sm text-[var(--muted)] max-w-sm mx-auto mb-8 leading-7">
            Rooms are limited. Reach out directly and we'll help secure your room, coordinate airport pickup, and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:riddhik2364@gmail.com?subject=Wedding Hotel Booking"
              className="border border-[var(--foreground)] bg-[var(--foreground)] px-8 py-3 text-[10px] tracking-[0.25em] uppercase text-white transition-opacity hover:opacity-75"
            >
              Email Us
            </a>
            <a
              href="/rsvp"
              className="border border-[var(--foreground)] px-8 py-3 text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            >
              RSVP & Note Interest
            </a>
          </div>
          <p className="text-[10px] text-[var(--muted)] mt-6 opacity-60">
            Include your arrival date, number of guests, and which airport you're flying into.
          </p>
        </div>

      </div>
    </div>
  )
}
