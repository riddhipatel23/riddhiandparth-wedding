'use client'
import { useState } from 'react'

const goldBtn = 'px-8 py-3 tracking-widest uppercase text-sm text-white transition-opacity hover:opacity-80 disabled:opacity-40'

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

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <div className="text-5xl mb-6">🎉</div>
        <h2 className="text-3xl mb-4">Thank you, {form.name}!</h2>
        <p className="opacity-60 mb-8">
          {form.attending === 'yes'
            ? "We're so excited to celebrate with you. Check your email for details."
            : "We'll miss you, but thank you for letting us know."}
        </p>
        {form.hotel && form.attending === 'yes' && (
          <p className="text-sm opacity-50">Hotel interest noted — we'll reach out with booking details.</p>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <p className="tracking-widest uppercase text-xs mb-3 text-center" style={{ color: '#c9a84c' }}>
        Kindly reply by November 1, 2026
      </p>
      <h1 className="text-4xl text-center mb-10">RSVP</h1>

      <form onSubmit={submit} className="flex flex-col gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">Full Name *</label>
          <input
            required
            className="w-full border-b border-amber-300 bg-transparent py-2 outline-none focus:border-amber-500"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">Email *</label>
          <input
            required
            type="email"
            className="w-full border-b border-amber-300 bg-transparent py-2 outline-none focus:border-amber-500"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase mb-3 opacity-60">Will you attend? *</label>
          <div className="flex gap-4">
            {['yes', 'no'].map(v => (
              <button
                key={v}
                type="button"
                onClick={() => set('attending', v)}
                className="flex-1 py-2 border tracking-widest uppercase text-sm transition-all"
                style={{
                  borderColor: '#c9a84c',
                  background: form.attending === v ? '#c9a84c' : 'transparent',
                  color: form.attending === v ? 'white' : '#c9a84c',
                }}
              >
                {v === 'yes' ? 'Joyfully Accepts' : 'Regretfully Declines'}
              </button>
            ))}
          </div>
        </div>

        {form.attending === 'yes' && (
          <>
            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">Number of Guests</label>
              <select
                className="w-full border-b border-amber-300 bg-transparent py-2 outline-none"
                value={form.guests}
                onChange={e => set('guests', e.target.value)}
              >
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">Dietary Requirements</label>
              <input
                className="w-full border-b border-amber-300 bg-transparent py-2 outline-none focus:border-amber-500"
                value={form.dietary}
                onChange={e => set('dietary', e.target.value)}
                placeholder="Vegetarian, vegan, allergies, etc."
              />
            </div>

            <div className="border border-amber-200 rounded p-5">
              <div className="flex items-start gap-3">
                <input
                  id="hotel"
                  type="checkbox"
                  className="mt-1"
                  checked={form.hotel}
                  onChange={e => set('hotel', e.target.checked)}
                />
                <div>
                  <label htmlFor="hotel" className="text-xs tracking-widest uppercase cursor-pointer" style={{ color: '#c9a84c' }}>
                    Hotel Accommodation
                  </label>
                  <p className="text-sm mt-1 opacity-60">
                    Champaner Heritage Resort — ₹10,000/night. Check-in Dec 18, check-out Dec 20. Transportation provided by us.
                  </p>
                </div>
              </div>

              {form.hotel && (
                <div className="mt-4 ml-7">
                  <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">Number of Nights</label>
                  <select
                    className="border-b border-amber-300 bg-transparent py-2 outline-none"
                    value={form.hotelNights}
                    onChange={e => set('hotelNights', e.target.value)}
                  >
                    <option value="1">1 night — ₹10,000</option>
                    <option value="2">2 nights — ₹20,000</option>
                    <option value="3">3 nights — ₹30,000</option>
                  </select>
                  <p className="text-sm mt-3 font-semibold" style={{ color: '#c9a84c' }}>
                    Total: ₹{hotelTotal.toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs mt-1 opacity-50">Payment details will be sent by email after confirmation.</p>
                </div>
              )}
            </div>
          </>
        )}

        <div>
          <label className="block text-xs tracking-widest uppercase mb-2 opacity-60">Message for the couple (optional)</label>
          <textarea
            className="w-full border-b border-amber-300 bg-transparent py-2 outline-none focus:border-amber-500 resize-none"
            rows={3}
            value={form.message}
            onChange={e => set('message', e.target.value)}
            placeholder="Share your wishes..."
          />
        </div>

        <button
          type="submit"
          disabled={!form.name || !form.email || !form.attending || status === 'loading'}
          className={goldBtn}
          style={{ background: '#c9a84c' }}
        >
          {status === 'loading' ? 'Sending…' : 'Send RSVP'}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}
