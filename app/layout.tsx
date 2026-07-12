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
    default: 'Damsith Adikari',
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
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} tracking-tight antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col">
          <Navigation />
          <div className="relative mx-auto w-full max-w-screen-xl flex-1 px-4">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
