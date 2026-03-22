'use client'

interface Props {
  bank: string
  noRek: string
  atas: string
}

export default function RekeningCard({ bank, noRek, atas }: Props) {
  return (
    <div
      className="flex-1 border border-[rgba(196,154,60,0.2)] p-5 text-center"
      style={{ background: 'rgba(196,154,60,0.04)' }}
    >
      <p className="text-xs tracking-[4px] uppercase mb-3" style={{ color: 'rgba(196,154,60,0.55)' }}>
        {bank}
      </p>
      <p
        className="text-2xl font-light mb-1"
        style={{ fontFamily: 'var(--font-cormorant)', color: '#e8d5a3', letterSpacing: '2px' }}
      >
        {noRek}
      </p>
      <p className="text-xs mt-1" style={{ color: 'rgba(242,224,184,0.40)' }}>
        a.n. {atas}
      </p>
      <button
        onClick={() => navigator.clipboard.writeText(noRek)}
        className="mt-4 text-[10px] tracking-[3px] uppercase px-4 py-2 border border-[rgba(196,154,60,0.25)] transition-all hover:border-[rgba(196,154,60,0.5)]"
        style={{ color: 'rgba(196,154,60,0.6)', background: 'transparent', cursor: 'pointer' }}
      >
        Salin Nomor
      </button>
    </div>
  )
}