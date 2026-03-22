'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
    const elements = document.querySelectorAll<HTMLElement>(selectors)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Render null — tidak ada DOM element, tidak ada scrollbar
  return null
}