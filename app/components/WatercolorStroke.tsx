'use client'
import { useEffect, useRef } from 'react'

interface Props {
  className?: string
  /** Must match the section background so the reveal cover blends in */
  bgColor?: string
  delay?: number
  duration?: number
}

export function WatercolorStroke({
  className = '',
  bgColor = '#ffffff',
  delay = 300,
  duration = 2400,
}: Props) {
  const coverRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cover = coverRef.current
    const root = rootRef.current
    if (!cover || !root) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cover.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
            cover.style.transform = 'scaleX(0)'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [delay, duration])

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <svg
        viewBox="0 0 1000 280"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ overflow: 'visible' }}
        aria-hidden
      >
        <defs>
          <filter id="wc" x="-20%" y="-50%" width="140%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.032 0.048"
              numOctaves="5"
              seed="12"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        {/* Wide organic stroke — tapers at both ends, bulges in the middle */}
        <path
          d="M 38,140 C 110,62 295,40 520,70 C 700,96 845,58 962,136 C 845,208 700,228 520,205 C 295,178 110,212 38,140 Z"
          fill="rgba(200, 196, 220, 0.36)"
          filter="url(#wc)"
        />
      </svg>

      {/*
        Solid cover that hides the stroke on load.
        transform-origin: right → scaleX(0) shrinks it toward the right,
        revealing the stroke from left to right (like a brush moving across).
      */}
      <div
        ref={coverRef}
        className="absolute inset-0"
        style={{
          backgroundColor: bgColor,
          transformOrigin: 'right center',
          transform: 'scaleX(1)',
        }}
      />
    </div>
  )
}
