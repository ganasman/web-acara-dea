'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const PHOTOS = [
  { src: '/photos/foto7.jpeg',  alt: 'Foto 1' },
  { src: '/photos/foto1.jpeg', alt: 'Foto 2' },
  { src: '/photos/foto2.jpeg',  alt: 'Foto 3' },
  { src: '/photos/foto3.jpeg', alt: 'Foto 4' },
  { src: '/photos/foto8.jpeg',  alt: 'Foto 5' },
  { src: '/photos/foto6.jpeg', alt: 'Foto 6' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; index: number } | null>(null)
  const [visible, setVisible] = useState(false)

  const openLightbox = (src: string, index: number) => {
    setLightbox({ src, index })
    setTimeout(() => setVisible(true), 10)
  }

  const closeLightbox = () => {
    setVisible(false)
    setTimeout(() => setLightbox(null), 300)
  }

  const navigate = (dir: 'prev' | 'next') => {
    if (!lightbox) return
    const next =
      dir === 'next'
        ? (lightbox.index + 1) % PHOTOS.length
        : (lightbox.index - 1 + PHOTOS.length) % PHOTOS.length
    setLightbox({ src: PHOTOS[next].src, index: next })
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigate('next')
      if (e.key === 'ArrowLeft') navigate('prev')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightbox) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* ── Grid ── */}
      <div className="gallery-grid">
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => openLightbox(photo.src, i)}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="gallery-img-wrap">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="gallery-img"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
                <span className="go-corner go-tl" />
                <span className="go-corner go-tr" />
                <span className="go-corner go-bl" />
                <span className="go-corner go-br" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: visible ? 'rgba(8,6,3,0.95)' : 'rgba(8,6,3,0)',
            transition: 'background 0.3s ease',
            padding: '24px',
          }}
        >
          {/* Image container */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '85vw',
              maxHeight: '85vh',
              width: '700px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'scale(1)' : 'scale(0.93)',
              transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)',
              border: '1px solid rgba(196,154,60,0.25)',
              padding: '6px',
              background: 'rgba(12,9,4,0.9)',
            }}
          >
            {/* Corner ornaments */}
            <span className="lb-corner lb-tl" />
            <span className="lb-corner lb-tr" />
            <span className="lb-corner lb-bl" />
            <span className="lb-corner lb-br" />

            {/* The actual image — uses <img> tag for reliable display */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt="Preview"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                maxHeight: 'calc(85vh - 60px)',
                objectFit: 'contain',
              }}
            />

            {/* Counter */}
            <div style={{
              textAlign: 'center',
              paddingTop: '10px',
              paddingBottom: '4px',
              fontSize: '10px',
              letterSpacing: '4px',
              color: 'rgba(196,154,60,0.5)',
            }}>
              {lightbox.index + 1} / {PHOTOS.length}
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); navigate('prev') }}
            style={{
              position: 'fixed',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(196,154,60,0.08)',
              border: '1px solid rgba(196,154,60,0.28)',
              color: 'rgba(242,224,184,0.8)',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(196,154,60,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(196,154,60,0.08)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); navigate('next') }}
            style={{
              position: 'fixed',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(196,154,60,0.08)',
              border: '1px solid rgba(196,154,60,0.28)',
              color: 'rgba(242,224,184,0.8)',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(196,154,60,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(196,154,60,0.08)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              top: '16px',
              right: '16px',
              background: 'rgba(196,154,60,0.06)',
              border: '1px solid rgba(196,154,60,0.25)',
              color: 'rgba(242,224,184,0.7)',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(196,154,60,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(196,154,60,0.06)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}