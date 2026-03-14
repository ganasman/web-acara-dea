import { Suspense } from 'react'

// ✅ Ini Server Component — bisa baca searchParams langsung
// Next.js 14: searchParams diterima via props di page, lalu diteruskan ke sini

interface Props {
  nama?: string
}

export default function GuestGreeting({ nama }: Props) {
  const displayName = nama ?? 'Bapak / Ibu Tamu Undangan'

  return (
    <p
      className="text-2xl md:text-3xl font-light"
      style={{
        fontFamily: 'var(--font-cormorant)',
        color: '#e8d5a3',
        fontStyle: nama ? 'normal' : 'italic',
      }}
    >
      {displayName}
    </p>
  )
}