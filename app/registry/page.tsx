'use client'
import { useState } from 'react'

export default function RegistryPage() {
  const [copied, setCopied] = useState<string | null>(null)

  function copy(text: string, label: string) {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <p className="tracking-widest uppercase text-xs mb-3 text-center" style={{ color: '#c9a84c' }}>
        Wedding Registry
      </p>
      <h1 className="text-4xl text-center mb-4">Gifts & Registry</h1>
      <p className="text-center opacity-60 mb-12 max-w-md mx-auto">
        Your presence is the greatest gift. If you'd like to celebrate us with a gift, we've set up a few options below.
      </p>

      <div className="flex flex-col gap-6">

        {/* Honeymoon Fund */}
        <div className="border border-amber-200 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌴</span>
            <div className="flex-1">
              <h2 className="text-2xl mb-2">Honeymoon Fund</h2>
              <p className="text-sm opacity-60 mb-4 leading-relaxed">
                We're dreaming of a honeymoon adventure and would love your contribution toward our trip — flights, a special dinner, a day excursion, or just the memories.
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-xs tracking-widest uppercase opacity-50">Send via Zelle — use either:</p>
                <div className="flex items-center gap-3">
                  <code className="text-sm bg-amber-50 px-3 py-2 rounded flex-1">riddhipatel2224@gmail.com</code>
                  <button onClick={() => copy('riddhipatel2224@gmail.com', 'email')} className="text-xs tracking-widest uppercase px-4 py-2 border transition-all flex-shrink-0" style={{ borderColor: '#c9a84c', color: '#c9a84c' }}>
                    {copied === 'email' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <code className="text-sm bg-amber-50 px-3 py-2 rounded flex-1">+1 (737) 274-2145</code>
                  <button onClick={() => copy('+17372742145', 'phone')} className="text-xs tracking-widest uppercase px-4 py-2 border transition-all flex-shrink-0" style={{ borderColor: '#c9a84c', color: '#c9a84c' }}>
                    {copied === 'phone' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs opacity-40">Add "Honeymoon" in the memo so we know what it's for 🌸</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cash Gift via Zelle */}
        <div className="border border-amber-200 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💛</span>
            <div className="flex-1">
              <h2 className="text-2xl mb-2">Cash Gift</h2>
              <p className="text-sm opacity-60 mb-4 leading-relaxed">
                Prefer to give a general gift? We'll use it toward our new home, future adventures, or whatever life brings our way.
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-xs tracking-widest uppercase opacity-50">Send via Zelle — use either:</p>
                <div className="flex items-center gap-3">
                  <code className="text-sm bg-amber-50 px-3 py-2 rounded flex-1">riddhipatel2224@gmail.com</code>
                  <button onClick={() => copy('riddhipatel2224@gmail.com', 'email2')} className="text-xs tracking-widest uppercase px-4 py-2 border transition-all flex-shrink-0" style={{ borderColor: '#c9a84c', color: '#c9a84c' }}>
                    {copied === 'email2' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <code className="text-sm bg-amber-50 px-3 py-2 rounded flex-1">+1 (737) 274-2145</code>
                  <button onClick={() => copy('+17372742145', 'phone2')} className="text-xs tracking-widest uppercase px-4 py-2 border transition-all flex-shrink-0" style={{ borderColor: '#c9a84c', color: '#c9a84c' }}>
                    {copied === 'phone2' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs opacity-40">Add "Wedding Gift" in the memo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Gifts Note */}
        <div className="bg-amber-50 rounded-lg p-6 text-center">
          <p className="text-sm opacity-60">
            Prefer to give a physical gift? Please bring it to the venue or contact us directly and we'll arrange pickup.
          </p>
        </div>

        <p className="text-center text-xs opacity-40 mt-4">
          Thank you for your generosity and love. We're so grateful to share this day with you. 💕
        </p>
      </div>
    </div>
  )
}
