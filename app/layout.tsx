import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Navigation } from './navigation'
import { Footer } from './footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4f3ef',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.damsith.com/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Damsith Adikari — Portfolio',
    template: '%s | Damsith Adikari',
  },
  description:
    'Electronic & Telecommunication Engineering undergraduate at University of Moratuwa with experience in software engineering, AI/ML, and embedded systems.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navigation />
        <main className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
