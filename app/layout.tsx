import type { Metadata, Viewport } from 'next'
import { Cinzel, Cormorant_Garamond, Great_Vibes, Pinyon_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './enhancements.css'

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel'
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
})

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-pinyon'
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-great-vibes'
})

export const metadata: Metadata = {
  title: 'Sanduni & Waruna Wedding',
  description: 'Join us as we celebrate the wedding of Sanduni and Waruna on Saturday, December 12, 2026 at Sea Gates Hotel, Kaluthara.',
  generator: 'v0.app',
  icons: {
    icon: '/monogram-sw.svg',
    apple: '/monogram-sw.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#d8d1bf',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} ${pinyonScript.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
