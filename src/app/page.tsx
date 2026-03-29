import GuestGreeting from './components/GuestGreeting'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import WishesSection from './components/WishesSection'
import RekeningCard from './components/rekeningcard'
import ScrollReveal from './components/ScrollReveal'
import './invitation.css'

interface PageProps {
  searchParams: Promise<{ nama?: string }>
}

export default async function Home({ searchParams }: PageProps) {
  const { nama } = await searchParams
  return (
    <main className="min-h-screen bg-[#0a0804] overflow-x-hidden">

      <ScrollReveal />

      {/* ─── ANIMATED BACKGROUND ─────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #c49a3c 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            animation: 'gridDrift 20s ease-in-out infinite alternate',
          }}
        />
        <div className="grain-overlay" />
      </div>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 z-10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,154,60,0.10) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto hero-card">
          <div className="card-glow-ring" />
          <div
            className="relative border border-[rgba(196,154,60,0.22)] p-10 md:p-16 backdrop-blur-sm"
            style={{ background: 'rgba(10,8,4,0.6)' }}
          >
            <span className="corner corner-tl" /><span className="corner corner-tr" />
            <span className="corner corner-bl" /><span className="corner corner-br" />
            <div className="shimmer-line mb-8" />
            <p className="label-tag animate-fade-up" style={{ animationDelay: '0.2s' }}>Undangan Acara</p>

            <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm tracking-widest mb-1 italic" style={{ color: 'rgba(242,224,184,0.40)', fontFamily: 'var(--font-cormorant)' }}>
                Kepada Yang Terhormat
              </p>
              <p className="text-base tracking-widest mb-1" style={{ color: 'rgba(196,154,60,0.75)', fontFamily: 'var(--font-cormorant)' }}>
                Bapak &amp; Ibu
              </p>
              <GuestGreeting nama={nama} />
            </div>

            <div className="animated-divider my-7 animate-fade-up" style={{ animationDelay: '0.5s' }} />

            <div className="animate-fade-up" style={{ animationDelay: '0.6s', fontFamily: 'var(--font-cormorant)' }}>
              <p className="text-sm tracking-[6px] uppercase mb-1" style={{ color: 'rgba(196,154,60,0.55)' }}>Acara Khitan</p>
              <p className="text-sm tracking-[2px] mb-2" style={{ color: 'rgba(242,224,184,0.35)' }}>Ananda</p>
              <h1 className="text-5xl md:text-7xl font-light leading-none name-glow" style={{ color: '#f2e0b8' }}>
                M. Ghaisan
              </h1>
              <p className="text-sm mt-5 tracking-widest" style={{ color: 'rgba(242,224,184,0.35)' }}>Putra dari</p>
              <p className="text-lg font-light mt-1" style={{ color: 'rgba(232,213,163,0.70)', letterSpacing: '0.04em' }}>
                Bapak Roni Efendi &amp; Ibu Intan Novianti
              </p>
            </div>

            <div className="animated-divider my-7 animate-fade-up" style={{ animationDelay: '0.7s' }} />

            <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-2xl font-light mb-1" style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3', letterSpacing: '0.05em' }}>
                Sabtu, 04 April 2026
              </p>
              <p className="text-xs tracking-[4px] uppercase mt-2" style={{ color: 'rgba(196,154,60,0.55)' }}>Pukul 10.00 – 16.00 WIB</p>
              <p className="text-xs tracking-[2px] mt-2" style={{ color: 'rgba(242,224,184,0.30)' }}>
                Aula Rahmat Yasin Bilabong Jln. Pinus 2 Blok G1 No 24
              </p>
            </div>
            <div className="shimmer-line mt-8" />
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 opacity-50 scroll-hint">
            <span className="text-[10px] tracking-[5px] uppercase" style={{ color: '#c49a3c' }}>Scroll</span>
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
              <line x1="7" y1="0" x2="7" y2="18" stroke="#c49a3c" strokeWidth="1"/>
              <path d="M1 12l6 7 6-7" stroke="#c49a3c" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ─── COUNTDOWN ────────────────────────────────────────── */}
      <section className="relative py-28 px-6 z-10 scroll-reveal">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-badge mb-4">Menuju Hari Acara</div>
          <h2 className="section-title mb-16" style={{ fontFamily: 'var(--font-cormorant)' }}>Hitung Mundur</h2>
          <Countdown />
        </div>
      </section>

      <div className="px-12 z-10 relative scroll-reveal"><div className="fancy-divider" /></div>

      {/* ─── JADWAL & LOKASI ──────────────────────────────────── */}
      <section className="relative py-28 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <div className="section-badge mb-4">Rangkaian Acara</div>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-cormorant)' }}>Jadwal &amp; Lokasi</h2>
          </div>

          <div
            className="border border-[rgba(196,154,60,0.18)] p-10 text-center relative overflow-hidden scroll-reveal reveal-delay-2"
            style={{ background: 'rgba(196,154,60,0.03)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,154,60,0.06), transparent)' }} />
            <span className="corner corner-tl" /><span className="corner corner-tr" />
            <span className="corner corner-bl" /><span className="corner corner-br" />
            <p className="text-3xl md:text-4xl font-light mb-3" style={{ fontFamily: 'var(--font-cormorant)', color: '#f2e0b8' }}>
              Sabtu, 04 April 2026
            </p>
            <p className="text-sm mb-6" style={{ color: 'rgba(242,224,184,0.45)' }}>Pukul 10.00 – 16.00 WIB</p>
            <div className="animated-divider my-6" />
            <p className="text-xl font-light mt-6" style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3' }}>Aula Rahmat Yasin</p>
            <p className="text-xs mt-2 tracking-widest" style={{ color: 'rgba(242,224,184,0.30)' }}>Bilabong Jln. Pinus 2 Blok G1 No 24</p>
          </div>

          <div className="text-center mt-12 scroll-reveal reveal-delay-3">
            <a href="https://maps.app.goo.gl/26pRDP8s9Jq1jP7c8" target="_blank" rel="noopener noreferrer" className="maps-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      <div className="px-12 z-10 relative scroll-reveal"><div className="fancy-divider" /></div>

      {/* ─── GALLERY ──────────────────────────────────────────── */}
      <section className="relative py-28 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <div className="section-badge mb-4">Gallery Foto</div>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-cormorant)' }}>Galeri Ghaisan</h2>
          </div>
          <div className="scroll-reveal reveal-delay-2">
            <Gallery />
          </div>
        </div>
      </section>

      <div className="px-12 z-10 relative scroll-reveal"><div className="fancy-divider" /></div>

      {/* ─── KEHADIRAN & AMPLOP DIGITAL ───────────────────────── */}
      <section className="relative py-28 px-6 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="scroll-reveal">
            <div className="section-badge mb-4">Kehadiran &amp; Doa</div>
            <h2 className="section-title mb-10" style={{ fontFamily: 'var(--font-cormorant)' }}>Bentuk Kasih Sayang</h2>
          </div>

          <div
            className="border border-[rgba(196,154,60,0.18)] p-8 md:p-12 text-center relative scroll-reveal reveal-delay-2"
            style={{ background: 'rgba(196,154,60,0.03)' }}
          >
            <span className="corner corner-tl" /><span className="corner corner-tr" />
            <span className="corner corner-bl" /><span className="corner corner-br" />

            <p className="font-light leading-loose mb-6" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(242,224,184,0.75)', fontSize: '1.15rem' }}>
              Kehadiran Bapak dan Ibu menjadi kehormatan bagi kami sekeluarga sebagai bentuk doa dan restu agar kelak
              ananda <span style={{ color: '#e8d5a3' }}>M. Ghaisan</span> menjadi anak yang sholeh dan berbakti kepada orang tuanya.
            </p>

            <div className="animated-divider my-7" />

            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(242,224,184,0.40)' }}>
              Restu dan doa Anda merupakan hadiah yang sangat berarti bagi kami. Namun, jika pemberian tersebut
              merupakan ungkapan kasih sayang Anda, Anda dapat memberikannya secara elektronik di bawah ini:
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <RekeningCard bank="BCA" noRek="0350947329" atas="Roni Efendi" />
              <RekeningCard bank="BCA" noRek="3020379137" atas="Intan Novianti" />
            </div>
          </div>
        </div>
      </section>

      <div className="px-12 z-10 relative scroll-reveal"><div className="fancy-divider" /></div>

      {/* ─── UCAPAN & DOA ─────────────────────────────────────── */}
      <WishesSection />

      <div className="px-12 z-10 relative scroll-reveal"><div className="fancy-divider" /></div>

      {/* ─── CLOSING ──────────────────────────────────────────── */}
      <section className="relative py-28 px-6 text-center z-10 scroll-reveal">
        <div className="max-w-lg mx-auto">
          <div className="fancy-divider mb-14" />

          <svg className="mx-auto mb-8" width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ opacity: 0.9 }}>
            <path d="M0 20V12C0 5.373 4.477 1.12 13.43 0l1.14 2.2C9.763 3.24 7.48 5.747 6.86 9.6H12V20H0zm16 0V12C16 5.373 20.477 1.12 29.43 0l1.14 2.2C25.763 3.24 23.48 5.747 22.86 9.6H28V20H16z" fill="rgba(196,154,60,0.25)"/>
          </svg>

          <p className="text-xl md:text-2xl italic font-light mb-5" style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3', lineHeight: 1.8 }}>
            &quot;Fitrah itu ada lima: khitan, mencukur rambut kemaluan, mencabut bulu ketiak, memotong kuku, dan memotong kumis.&quot;
                  </p>
          <p className="text-[10px] tracking-[4px] uppercase mb-12" style={{ color: 'rgba(196,154,60,0.45)' }}>
             (HR. Bukhari no. 5891 dan Muslim no. 257)
          </p>

          <p className="text-xs tracking-[3px] uppercase" style={{ color: 'rgba(242,224,184,0.25)' }}>
            Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="mt-3 text-sm" style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(232,213,163,0.5)', fontSize: '1.1rem' }}>
            Roni Efendi &amp; Intan Novianti
          </p>

          <div className="fancy-divider mt-14" />
        </div>
      </section>

    </main>
  )
}