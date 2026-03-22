'use client'

import { useRef, useState } from 'react'
import SplashScreen from './SplashScreen'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [splashDone, setSplashDone] = useState(false)

  const handleOpen = () => {
    setSplashDone(true)
    const audio = audioRef.current
    if (!audio) return
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/backsound.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />

      {!splashDone && <SplashScreen onOpen={handleOpen} />}

      {splashDone && (
        <button
          onClick={toggle}
          aria-label={playing ? 'Pause musik' : 'Play musik'}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid rgba(196,154,60,0.4)',
            background: 'rgba(15,12,6,0.92)',  // solid, tidak pakai blur
            color: '#c49a3c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            outline: 'none',
            boxShadow: playing
              ? '0 0 16px rgba(196,154,60,0.2)'
              : '0 2px 8px rgba(0,0,0,0.5)',
            transition: 'box-shadow 0.3s',
          }}
        >
          {playing ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}

          {playing && (
            <span style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '50%',
              border: '1px solid rgba(196,154,60,0.25)',
              animation: 'musicRing 2s ease-out infinite',
              pointerEvents: 'none',
            }} />
          )}
        </button>
      )}

      <style>{`
        @keyframes musicRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  )
}