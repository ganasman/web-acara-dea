'use client'

import { useEffect, useRef, useState } from 'react'
import type { Wish } from '@/lib/supabase'

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (diff < 60) return 'baru saja'
  if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`
  return `${Math.floor(diff / 86400)} hari lalu`
}

function initials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0]?.toUpperCase() ?? '').join('')
}

const AVATAR_COLORS = [
  'rgba(196,154,60,0.15)',
  'rgba(160,120,48,0.15)',
  'rgba(180,140,55,0.15)',
  'rgba(140,100,40,0.15)',
]
function avatarColor(name: string) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]
}

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  const fetchWishes = async () => {
    try {
      const res = await fetch('/api/wishes')
      const data = await res.json()
      if (Array.isArray(data)) setWishes(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWishes()
  }, [])

  const handleSubmit = async () => {
    setError('')
    setSuccess(false)
    if (!name.trim() || !message.trim()) {
      setError('Nama dan ucapan wajib diisi.')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Terjadi kesalahan.'); return }

      setWishes(prev => [data, ...prev])
      setName('')
      setMessage('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
      listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch {
      setError('Gagal mengirim. Cek koneksi kamu.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="relative py-28 px-6 z-10">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-14">
          <div className="section-badge mb-4">Doa &amp; Harapan</div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ucapan Tamu
          </h2>
          <p className="text-sm mt-3" style={{ color: 'rgba(242,224,184,0.30)' }}>
            Tinggalkan doa dan ucapan terbaikmu untuk Ghaisan
          </p>
        </div>

        {/* Form */}
        <div
          className="border border-[rgba(196,154,60,0.18)] p-7 mb-10 relative"
          style={{ background: 'rgba(196,154,60,0.03)' }}
        >
          <span className="corner corner-tl" /><span className="corner corner-tr" />
          <span className="corner corner-bl" /><span className="corner corner-br" />

          <div className="mb-5">
            <label className="block text-[10px] tracking-[4px] uppercase mb-3" style={{ color: 'rgba(196,154,60,0.55)' }}>
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={80}
              placeholder="Nama kamu"
              className="w-full bg-transparent border-b py-2 text-sm outline-none placeholder:opacity-20"
              style={{ borderColor: 'rgba(196,154,60,0.25)', color: '#f2e0b8', caretColor: '#c49a3c' }}
            />
          </div>

          <div className="mb-5">
            <label className="block text-[10px] tracking-[4px] uppercase mb-3" style={{ color: 'rgba(196,154,60,0.55)' }}>
              Ucapan &amp; Doa
            </label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              maxLength={400}
              rows={4}
              placeholder="Tuliskan doa dan ucapan terbaikmu..."
              className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none placeholder:opacity-20"
              style={{ borderColor: 'rgba(196,154,60,0.25)', color: '#f2e0b8', caretColor: '#c49a3c' }}
            />
            <p className="text-right text-[10px] mt-1" style={{ color: 'rgba(242,224,184,0.2)' }}>
              {message.length}/400
            </p>
          </div>

          {error && <p className="text-xs mb-3" style={{ color: '#e57373' }}>{error}</p>}
          {success && (
            <p className="text-xs mb-3" style={{ color: 'rgba(196,154,60,0.8)' }}>
              ✦ Ucapan kamu telah terkirim. Terima kasih!
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={sending}
            className="w-full py-3 text-[10px] tracking-[5px] uppercase transition-all"
            style={{
              background: sending ? 'rgba(196,154,60,0.04)' : 'rgba(196,154,60,0.08)',
              border: '1px solid rgba(196,154,60,0.3)',
              color: sending ? 'rgba(196,154,60,0.35)' : 'rgba(196,154,60,0.85)',
              cursor: sending ? 'not-allowed' : 'pointer',
            }}
          >
            {sending ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </div>

        {/* Daftar ucapan */}
        <div ref={listRef}>
          {loading ? (
            <p className="text-center italic" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(242,224,184,0.25)', fontSize: '1.1rem' }}>
              Memuat ucapan...
            </p>
          ) : wishes.length === 0 ? (
            <p className="text-center italic" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(242,224,184,0.25)', fontSize: '1.1rem' }}>
              Jadilah yang pertama mengucapkan selamat ✦
            </p>
          ) : (
            <div className="space-y-4">
              {wishes.map((wish, i) => (
                <div
                  key={wish.id}
                  className="flex gap-4 p-5 border border-[rgba(196,154,60,0.1)]"
                  style={{ background: 'rgba(196,154,60,0.03)', animation: `fadeUp 0.5s ease ${i * 0.05}s both` }}
                >
                  <div
                    className="shrink-0 w-10 h-10 flex items-center justify-center text-xs font-medium"
                    style={{ background: avatarColor(wish.name), color: '#c49a3c', border: '1px solid rgba(196,154,60,0.2)' }}
                  >
                    {initials(wish.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                      <p className="text-sm font-medium" style={{ color: '#e8d5a3' }}>{wish.name}</p>
                      <p className="text-[10px]" style={{ color: 'rgba(242,224,184,0.25)' }}>{timeAgo(wish.created_at)}</p>
                    </div>
                    <p style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(242,224,184,0.55)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      {wish.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}