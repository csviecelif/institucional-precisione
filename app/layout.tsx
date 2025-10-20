import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutShell from '@/components/LayoutShell'
import WhatsappButton from '@/components/WhatsappButton'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://precisionebr.com'),
  title: {
    default: 'Precisione – Inteligência Patrimonial para Decisões Estratégicas',
    template: '%s | Precisione',
  },
  description:
    'Consultoria investigativa em rastreamento patrimonial, due diligence e localização de ativos com rigor jurídico e cobertura nacional.',
  keywords: [
    'investigação patrimonial',
    'due diligence',
    'busca de ativos',
    'localização de pessoas',
    'ocultação de bens',
    'consultoria jurídica',
    'inteligência patrimonial',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Precisione Consultoria' }],
  creator: 'Precisione Consultoria',
  publisher: 'Precisione Consultoria',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://precisionebr.com',
    title: 'Precisione – Inteligência Patrimonial para Decisões Estratégicas',
    description:
      'Consultoria investigativa em rastreamento patrimonial, due diligence e localização de ativos com rigor jurídico e cobertura nacional.',
    siteName: 'Precisione',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Precisione – Inteligência Patrimonial para Decisões Estratégicas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precisione – Inteligência Patrimonial para Decisões Estratégicas',
    description:
      'Consultoria investigativa em rastreamento patrimonial, due diligence e localização de ativos com rigor jurídico e cobertura nacional.',
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
        <WhatsappButton />
      </body>
    </html>
  )
}
