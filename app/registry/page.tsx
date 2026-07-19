'use client'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'

export default function RegistryPage() {
  const [copied, setCopied] = useState<string | null>(null)

  function copy(text: string, label: string) {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="px-6 pt-20 pb-14 text-center bg-white border-b border-[var(--line)]">
        <Reveal className="flex flex-col items-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--muted)] mb-4">Wedding Registry</p>
          <h1 className="text-6xl md:text-7xl [font-family:var(--font-script)] mb-3">Gifts & Registry</h1>
          <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-7">
            Your presence is the greatest gift. If you'd like to celebrate us with something more, we've made it simple.
          </p>
        </Reveal>
      </section>

      <div className="max-w-2xl mx-auto w-full px-6 py-16 flex flex-col gap-6">

        {/* Honeymoon Fund */}
        <Reveal className="border border-[var(--line)] bg-white">
          <div className="px-8 pt-8 pb-6 border-b border-[var(--line)]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--muted)] mb-2">Contribution</p>
            <h2 className="text-2xl [font-family:var(--font-display)]">Honeymoon Fund</h2>
            <p className="text-sm text-[var(--muted)] mt-3 leading-7">
              We're dreaming of a honeymoon adventure and would love your contribution toward the trip — flights, a special dinner, a day excursion, or simply the memories.
            </p>
          </div>

          <div className="px-8 py-6 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">Send via Zelle</p>
            <CopyRow
              value="riddhipatel2224@gmail.com"
              label="email"
              copied={copied}
              onCopy={copy}
            />
            <CopyRow
              value="+1 (737) 274-2145"
              copyValue="+17372742145"
              label="phone"
              copied={copied}
              onCopy={copy}
            />
            <p className="text-[10px] text-[var(--muted)] opacity-60 mt-1">
              Add "Honeymoon" in the memo so we know what it's for.
            </p>
          </div>
        </Reveal>

        {/* Cash Gift */}
        <Reveal className="border border-[var(--line)] bg-white">
          <div className="px-8 pt-8 pb-6 border-b border-[var(--line)]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--muted)] mb-2">Contribution</p>
            <h2 className="text-2xl [font-family:var(--font-display)]">Cash Gift</h2>
            <p className="text-sm text-[var(--muted)] mt-3 leading-7">
              Prefer a general gift? We'll put it toward our new home, future adventures, or whatever life brings our way.
            </p>
          </div>

          <div className="px-8 py-6 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">Send via Zelle</p>
            <CopyRow
              value="riddhipatel2224@gmail.com"
              label="email2"
              copied={copied}
              onCopy={copy}
            />
            <CopyRow
              value="+1 (737) 274-2145"
              copyValue="+17372742145"
              label="phone2"
              copied={copied}
              onCopy={copy}
            />
            <p className="text-[10px] text-[var(--muted)] opacity-60 mt-1">
              Add "Wedding Gift" in the memo.
            </p>
          </div>
        </Reveal>

        {/* Physical gifts */}
        <Reveal className="border border-[var(--line)] bg-[var(--surface)] px-8 py-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mb-2">Physical Gifts</p>
          <p className="text-sm text-[var(--muted)] leading-7">
            Please bring gifts to the venue or contact us directly and we'll arrange pickup.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] opacity-50 mt-2">
            Thank you for your generosity and love.
          </p>
        </Reveal>

      </div>
    </div>
  )
}

function CopyRow({
  value,
  copyValue,
  label,
  copied,
  onCopy,
}: {
  value: string
  copyValue?: string
  label: string
  copied: string | null
  onCopy: (text: string, label: string) => void
}) {
  return (
    <div className="flex items-center gap-3">
      <code className="flex-1 bg-[var(--surface)] border border-[var(--line)] px-4 py-2 text-sm text-[var(--foreground)]">
        {value}
      </code>
      <button
        onClick={() => onCopy(copyValue ?? value, label)}
        className="flex-shrink-0 border border-[var(--foreground)] px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-[var(--foreground)] hover:text-white"
      >
        {copied === label ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}
