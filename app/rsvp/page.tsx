'use client'
import { useState } from 'react'
import { BrushStroke } from '../components/BrushStroke'
import { Reveal } from '../components/Reveal'

export default function RSVPPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    dietary: '',
    hotel: false,
    hotelNights: '2',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const hotelTotal = parseInt(form.hotelNights) * 10000

  const label = 'block text-[10px] tracking-[0.25em] uppercase mb-2 text-[var(--muted)]'
  const input = 'w-full border-b border-[var(--line)] bg-transparent py-2 outline-none focus:border-[var(--foreground)] [font-family:var(--font-display)] text-lg'

  if (status === 'done') {
    return (
      <Reveal className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[var(--muted)]">RSVP Received</p>
        <h2 className="text-6xl md:text-7xl [font-family:var(--font-script)] mb-4">Thank You{form.name ? `, ${form.name}` : ''}</h2>
        <div className="flex justify-center mb-8">
          <BrushStroke variant="underline" className="w-44" color="#b09a78" delay={100} duration={1200} />
        </div>
        <p className="text-sm text-[var(--muted)] max-w-sm leading-7">
          {form.attending === 'yes'
            ? "We're so excited to celebrate with you. Check your email for details."
            : "We'll miss you, but thank you for letting us know."}
        </p>
        {form.hotel && form.attending === 'yes' && (
          <p className="text-xs text-[var(--muted)] mt-6 opacity-70">Hotel interest noted — we'll reach out with booking details.</p>
        )}
      </Reveal>
    )
  }

  return (
    <div className="flex flex-col">
      <section className="px-6 pt-20 pb-14 text-center bg-white border-b border-[var(--line)]">
        <Reveal className="flex flex-col items-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--muted)] mb-4">Kindly reply by November 1, 2026</p>
          <h1 className="text-6xl md:text-7xl [font-family:var(--font-script)] mb-3">RSVP</h1>
          <div className="flex justify-center mb-4">
            <BrushStroke variant="underline" className="w-44" color="#b09a78" delay={100} duration={1200} />
          </div>
          <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-7">
            We can't wait to celebrate with you. Please let us know by the date above.
          </p>
        </Reveal>
      </section>

      <Reveal className="max-w-xl mx-auto w-full px-6 py-16">
        <form onSubmit={submit} className="border border-[var(--line)] bg-white px-8 py-10 flex flex-col gap-7">
          <div>
            <label className={label}>Full Name *</label>
            <input
              required
              className={input}
              value={form.name}
              onChange={e => set('name', e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className={label}>Email *</label>
            <input
              required
              type="email"
              className={input}
              value={form.email}
              onChange={e => set('email', e.target.value)}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className={`${label} mb-3`}>Will you attend? *</label>
            <div className="flex gap-4">
              {['yes', 'no'].map(v => (
                <button
                  key={v}
                  type="button"
                  onClick={() => set('attending', v)}
                  className={`flex-1 py-3 border border-[var(--foreground)] text-[10px] tracking-[0.25em] uppercase transition-all ${
                    form.attending === v ? 'bg-[var(--foreground)] text-white' : 'text-[var(--foreground)] hover:bg-[var(--surface)]'
                  }`}
                >
                  {v === 'yes' ? 'Joyfully Accepts' : 'Regretfully Declines'}
                </button>
              ))}
            </div>
          </div>

          {form.attending === 'yes' && (
            <>
              <div>
                <label className={label}>Number of Guests</label>
                <select
                  className={input}
                  value={form.guests}
                  onChange={e => set('guests', e.target.value)}
                >
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div>
                <label className={label}>Dietary Requirements</label>
                <input
                  className={input}
                  value={form.dietary}
                  onChange={e => set('dietary', e.target.value)}
                  placeholder="Vegetarian, vegan, allergies, etc."
                />
              </div>

              <div className="border border-[var(--line)] bg-[var(--surface)] p-5">
                <div className="flex items-start gap-3">
                  <input
                    id="hotel"
                    type="checkbox"
                    className="mt-1"
                    checked={form.hotel}
                    onChange={e => set('hotel', e.target.checked)}
                  />
                  <div>
                    <label htmlFor="hotel" className="text-[10px] tracking-[0.25em] uppercase cursor-pointer text-[var(--foreground)]">
                      Hotel Accommodation
                    </label>
                    <p className="text-sm mt-1 text-[var(--muted)] leading-6">
                      Champaner Heritage Resort — ₹10,000/night. Check-in Dec 18, check-out Dec 20. Transportation provided by us.
                    </p>
                  </div>
                </div>

                {form.hotel && (
                  <div className="mt-4 ml-7">
                    <label className={label}>Number of Nights</label>
                    <select
                      className="border-b border-[var(--line)] bg-transparent py-2 outline-none [font-family:var(--font-display)] text-lg"
                      value={form.hotelNights}
                      onChange={e => set('hotelNights', e.target.value)}
                    >
                      <option value="1">1 night — ₹10,000</option>
                      <option value="2">2 nights — ₹20,000</option>
                      <option value="3">3 nights — ₹30,000</option>
                    </select>
                    <p className="text-sm mt-3 font-medium text-[var(--foreground)]">
                      Total: ₹{hotelTotal.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs mt-1 text-[var(--muted)] opacity-70">Payment details will be sent by email after confirmation.</p>
                  </div>
                )}
              </div>
            </>
          )}

          <div>
            <label className={label}>Message for the couple (optional)</label>
            <textarea
              className={`${input} resize-none`}
              rows={3}
              value={form.message}
              onChange={e => set('message', e.target.value)}
              placeholder="Share your wishes..."
            />
          </div>

          <button
            type="submit"
            disabled={!form.name || !form.email || !form.attending || status === 'loading'}
            className="border border-[var(--foreground)] bg-[var(--foreground)] text-white px-14 py-4 text-[10px] tracking-[0.3em] uppercase transition-opacity hover:opacity-75 disabled:opacity-40"
          >
            {status === 'loading' ? 'Sending…' : 'Send RSVP'}
          </button>

          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </Reveal>
    </div>
  )
}
