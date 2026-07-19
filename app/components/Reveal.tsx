'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: 'div' | 'blockquote'
}

export function Reveal({ children, className = '', delay = 0, duration = 900, as = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    transitionDelay: `${delay}ms`,
  }

  const Tag = as
  return (
    // @ts-expect-error -- ref type is shared across the small set of allowed tags
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
}
