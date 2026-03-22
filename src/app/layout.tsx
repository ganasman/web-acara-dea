import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Undangan Khitan M. Ghaisan',
  description: 'Undangan Acara Khitan Ananda M. Ghaisan Putra dari Bapak Roni Efendi & Ibu Intan Novianti',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }}>
      <body style={{ overflowX: 'hidden', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}