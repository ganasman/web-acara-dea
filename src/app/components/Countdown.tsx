'use client'

import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2026-05-03T10:00:00')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculate = () => {
      const now = new Date()
      const diff = WEDDING_DATE.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div
            className="w-20 h-20 md:w-24 md:h-24 border border-gold-500/30 flex items-center justify-center mb-2"
            style={{ background: 'rgba(196,154,60,0.07)' }}
          >
            <span
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3' }}
            >
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs tracking-[3px] uppercase text-gold-500/60">{label}</span>
        </div>
      ))}
    </div>
  )
}