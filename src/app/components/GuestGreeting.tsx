interface Props {
  nama?: string
}

export default function GuestGreeting({ nama }: Props) {
  const displayName = nama ?? 'Bapak / Ibu Tamu Undangan'

  return (
    <p
      className="text-2xl md:text-3xl font-light tracking-wide"
      style={{
        fontFamily: 'var(--font-cormorant)',
        color: '#e8d5a3',
        fontStyle: nama ? 'normal' : 'italic',
        textShadow: '0 0 30px rgba(196,154,60,0.2)',
      }}
    >
      {displayName}
    </p>
  )
}