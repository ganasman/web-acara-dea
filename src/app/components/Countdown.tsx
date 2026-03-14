'use client'

import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-04-04T10:00:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)
  const [flipping, setFlipping] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setMounted(true)

    const calculate = () => {
      const now = new Date()
      const diff = EVENT_DATE.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const next = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }

      setTimeLeft(prev => {
        const changed: Record<string, boolean> = {}
        if (prev.seconds !== next.seconds) changed['Detik'] = true
        if (prev.minutes !== next.minutes) changed['Menit'] = true
        if (prev.hours !== next.hours) changed['Jam'] = true
        if (prev.days !== next.days) changed['Hari'] = true
        if (Object.keys(changed).length) {
          setFlipping(changed)
          setTimeout(() => setFlipping({}), 400)
        }
        return next
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const units = [
    { label: 'Hari',  value: timeLeft.days },
    { label: 'Jam',   value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
      {units.map(({ label, value }) => (
        <div key={label} className="countdown-unit">
          <div className={`countdown-box${flipping[label] ? ' flip' : ''}`}>
            <div className="countdown-top">
              <span
                className="countdown-num"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <div className="countdown-bottom">
              <span
                className="countdown-num"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <div className="countdown-seam" />
            <span className="cd-corner cd-tl" />
            <span className="cd-corner cd-tr" />
            <span className="cd-corner cd-bl" />
            <span className="cd-corner cd-br" />
          </div>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}