'use client'

import { useEffect, useState } from 'react'

interface Props {
  onOpen: () => void
}

export default function SplashScreen({ onOpen }: Props) {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)

  // Cegah scroll saat splash terbuka
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleOpen = () => {
    setClosing(true)
    // Tunggu animasi fade out selesai
    setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
      onOpen()
    }, 700)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0804',
        opacity: closing ? 0 : 1,
        transition: 'opacity 0.7s ease',
        cursor: 'pointer',
        padding: '2rem',
        textAlign: 'center',
      }}
      onClick={handleOpen}
    >
      {/* Orb background */}
      <div style={{
        position: 'absolute',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,154,60,0.12), transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      {/* Konten */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon bunga / ornamen */}
        <div style={{
          fontSize: '28px',
          color: 'rgba(196,154,60,0.6)',
          letterSpacing: '12px',
          marginBottom: '2rem',
          animation: 'splashFloat 3s ease-in-out infinite',
        }}>
          ✦ ✦ ✦
        </div>

        <p style={{
          fontSize: '10px',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          color: 'rgba(196,154,60,0.55)',
          marginBottom: '1rem',
        }}>
          Undangan Acara Khitan
        </p>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          fontWeight: 300,
          color: '#f2e0b8',
          lineHeight: 1.1,
          marginBottom: '0.5rem',
          textShadow: '0 0 60px rgba(196,154,60,0.2)',
        }}>
          M. Ghaisan
        </h1>

        <p style={{
          fontSize: '13px',
          color: 'rgba(232,213,163,0.45)',
          marginBottom: '3rem',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}>
          Putra dari Bapak Roni Efendi &amp; Ibu Intan Novianti
        </p>

        {/* Tombol utama */}
        <button
          onClick={handleOpen}
          style={{
            background: 'transparent',
            border: '1px solid rgba(196,154,60,0.5)',
            color: '#c49a3c',
            padding: '14px 40px',
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.3s',
            animation: 'splashPulse 2.5s ease-in-out infinite',
          }}
        >
          Buka Undangan
        </button>

        <p style={{
          marginTop: '1.5rem',
          fontSize: '10px',
          color: 'rgba(242,224,184,0.2)',
          letterSpacing: '2px',
        }}>
          Ketuk untuk membuka
        </p>
      </div>

      {/* Shimmer line bawah */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '10%', right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(196,154,60,0.3), transparent)',
      }} />

      <style>{`
        @keyframes splashFloat {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes splashPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(196,154,60,0); }
          50%       { box-shadow: 0 0 20px 2px rgba(196,154,60,0.15); }
        }
      `}</style>
    </div>
  )
}