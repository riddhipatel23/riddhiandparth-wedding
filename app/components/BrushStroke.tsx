'use client'
import { useEffect, useRef } from 'react'

const STROKES = {
  divider: {
    viewBox: '0 0 600 28',
    d: 'M 5,16 C 100,6 200,26 310,14 C 420,4 500,22 595,12',
    strokeWidth: 2.5,
  },
  underline: {
    viewBox: '0 0 500 18',
    d: 'M 5,10 C 80,3 180,17 280,8 C 350,2 420,14 495,8',
    strokeWidth: 2,
  },
  swirl: {
    viewBox: '0 0 220 30',
    d: 'M 10,18 C 55,5 115,26 165,13 C 190,6 205,18 195,24 C 188,28 178,22 188,16',
    strokeWidth: 2.5,
  },
}

type Variant = keyof typeof STROKES

interface Props {
  variant?: Variant
  color?: string
  className?: string
  delay?: number
  duration?: number
}

export function BrushStroke({
  variant = 'divider',
  color = '#b09a78',
  className = '',
  delay = 0,
  duration = 1400,
}: Props) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    path.style.opacity = '0'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            path.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 400ms ease`
            path.style.strokeDashoffset = '0'
            path.style.opacity = '1'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(path)
    return () => observer.disconnect()
  }, [delay, duration])

  const stroke = STROKES[variant]

  return (
    <svg viewBox={stroke.viewBox} className={`overflow-visible ${className}`} aria-hidden>
      <path
        ref={pathRef}
        d={stroke.d}
        fill="none"
        stroke={color}
        strokeWidth={stroke.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
