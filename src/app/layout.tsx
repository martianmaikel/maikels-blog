import Navbar from '@/components/Navbar'
import '../assets/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maikels Blog - Tech, Studium und Programmierung',
  description: 'Maikels Blog - Tech, Studium und Programmierung',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
