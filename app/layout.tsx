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
    default: 'Precisione - Investigação Patrimonial Profissional',
    template: '%s | Precisione'
  },
  description:
    'Especialistas em investigação patrimonial com atuação nacional, entregas ágeis e rigor jurídico. Inteligência para decisões estratégicas.',
  keywords: [
    'investigação patrimonial',
    'due diligence',
    'busca de ativos',
    'advogados',
    'recuperação de crédito',
    'Curitiba',
    'Brasil'
  ],
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
    title: 'Precisione - Investigação Patrimonial',
    description: 'Metodologia exclusiva em investigação patrimonial, com confidencialidade e suporte consultivo.',
    siteName: 'Precisione',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Precisione - Investigação Patrimonial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precisione - Investigação Patrimonial',
    description: 'Investigação patrimonial com entregas ágeis, precisão jurídica e cobertura nacional.',
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
