'use client'

import { useState } from 'react'
import Image from 'next/image'

// ✏️ GANTI src dengan path foto kamu
// Foto lokal: taruh di /public/photos/ lalu tulis src: '/photos/nama-file.jpg'
//             JANGAN tulis /public/... — cukup /photos/...
// URL eksternal: tulis URL lengkap https://...
const PHOTOS = [
  { src: '/photos/ade-dea.jpeg',  alt: 'Foto prewedding 1' },
  { src: '/photos/ade-dea2.jpeg', alt: 'Foto prewedding 2' },
  { src: '/photos/ade-dea.jpeg',  alt: 'Foto prewedding 3' },
  { src: '/photos/ade-dea2.jpeg', alt: 'Foto prewedding 4' },
  { src: '/photos/ade-dea.jpeg',  alt: 'Foto prewedding 5' },
  { src: '/photos/ade-dea2.jpeg', alt: 'Foto prewedding 6' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="gallery-item cursor-pointer overflow-hidden"
            style={{ position: 'relative', aspectRatio: '1 / 1', width: '100%' }}
            onClick={() => setLightbox(photo.src)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{ background: 'rgba(15,10,6,0.15)' }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          style={{ background: 'rgba(15,10,6,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '768px', aspectRatio: '1 / 1' }}>
            <Image
              src={lightbox}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-3xl font-light"
            style={{ color: 'rgba(242,224,184,0.6)' }}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}