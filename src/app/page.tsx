import { Suspense } from 'react'
import GuestGreeting from './components/GuestGreeting'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'

interface PageProps {
  searchParams: { nama?: string }
}

export default function Home({ searchParams }: PageProps) {
  const nama = searchParams?.nama
  return (
    <main className="min-h-screen bg-dark-900">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

        {/* Background texture dots */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #c49a3c 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,154,60,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Corner ornaments */}
          <div className="relative border border-gold-500/20 p-10 md:p-16">
            <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold-400/60" />
            <span className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gold-400/60" />
            <span className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gold-400/60" />
            <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold-400/60" />

            <p
              className="text-xs tracking-[5px] uppercase mb-6"
              style={{ color: 'rgba(196,154,60,0.6)' }}
            >
              Undangan Acara
            </p>

            {/* Guest name — dinamis dari URL */}
            <div className="mb-8">
              <p
                className="text-sm tracking-widest mb-1"
                style={{ color: 'rgba(242,224,184,0.45)', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}
              >
                Kepada Yang Terhormat
              </p>
              <GuestGreeting nama={nama} />
            </div>

            {/* Gold line */}
            <div className="gold-line my-6" />

            {/* Couple names */}
            <div
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              <h1 className="text-6xl md:text-7xl font-light leading-none" style={{ color: '#f2e0b8' }}>
                Deandra
              </h1>
            </div>

            {/* Gold line */}
            <div className="gold-line my-6" />

            {/* Date & venue */}
            <p
              className="text-xl font-light mb-1"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3' }}
            >
              Sabtu, 14 Juni 2025
            </p>
            <p
              className="text-xs tracking-[3px] uppercase"
              style={{ color: 'rgba(196,154,60,0.55)' }}
            >
              Pukul 10.00 – 14.00 WIB
            </p>
            <p
              className="text-xs tracking-[3px] uppercase mt-1"
              style={{ color: 'rgba(242,224,184,0.35)' }}
            >
              Kediaman Pak Roni - Jl. Giri Pakem No.31
            </p>
          </div>

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce opacity-40">
            <span className="text-xs tracking-widest uppercase" style={{ color: '#c49a3c' }}>Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path d="M8 0v20M1 13l7 7 7-7" stroke="#c49a3c" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── COUNTDOWN ────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs tracking-[5px] uppercase mb-3"
            style={{ color: 'rgba(196,154,60,0.6)' }}
          >
            Menuju Hari Acara
          </p>
          <h2
            className="text-4xl font-light mb-12"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#f2e0b8' }}
          >
            Hitung Mundur
          </h2>
          <Countdown />
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────── */}
      <div className="px-12">
        <div className="gold-line" />
      </div>

      {/* ─── AKAD & RESEPSI ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[5px] uppercase mb-3"
              style={{ color: 'rgba(196,154,60,0.6)' }}
            >
              Rangkaian Acara
            </p>
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2e0b8' }}
            >
              Jadwal & Lokasi
            </h2>
          </div>

          <div className="items-center">

            {/* Resepsi */}
            <div
              className="border border-gold-500/20 p-8 text-center"
              style={{ background: 'rgba(196,154,60,0.04)' }}
            >
              <p
                className="text-3xl font-light mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#f2e0b8' }}
              >
                Sabtu, 14 Juni 2025
              </p>
              <p className="text-sm mb-4" style={{ color: 'rgba(242,224,184,0.5)' }}>
                Pukul 10.00 – 14.00 WIB
              </p>
              <div className="gold-line my-4" />
              <p
                className="text-sm font-light"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3', fontSize: '1.1rem' }}
              >
                Kediaman Pak Roni
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'rgba(242,224,184,0.35)' }}
              >
                JJl. Giri Pakem No.31
              </p>
            </div>
          </div>

          {/* Maps button */}
          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/3YtFvNrXShfXf2Ft9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold-500/40 px-8 py-3 text-xs tracking-[3px] uppercase transition-all hover:bg-gold-500/10"
              style={{ color: '#c49a3c' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────── */}
      <div className="px-12">
        <div className="gold-line" />
      </div>

      {/* ─── GALLERY ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[5px] uppercase mb-3"
              style={{ color: 'rgba(196,154,60,0.6)' }}
            >
              Momen Keluarga
            </p>
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#f2e0b8' }}
            >
              Galeri Foto
            </h2>
          </div>
          <Gallery />
        </div>
      </section>

      {/* ─── CLOSING ──────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <div className="gold-line mb-12" />
          <p
            className="text-2xl italic font-light mb-6"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3' }}
          >
            (Nabi) Ibrahim berkhitan setelah berusia delapan puluh tahun dan beliau khitan dengan menggunakan sejenis pisau
          </p>
          <p
            className="text-xs tracking-widest mb-12"
            style={{ color: 'rgba(196,154,60,0.5)' }}
          >
            (Hadist Riwayat Bukhori 5824)
          </p>
          <div className="gold-line mt-12" />
        </div>
      </section>

    </main>
  )
}