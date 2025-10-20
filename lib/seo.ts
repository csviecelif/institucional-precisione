import type { Metadata } from 'next'

const siteName = 'Precisione'
const baseUrl = 'https://precisionebr.com'
const socialImage = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Precisione – Inteligência Patrimonial para Decisões Estratégicas',
}

type PageMetadataInput = {
  title: string
  description: string
  canonicalPath: string
}

export function createPageMetadata({
  title,
  description,
  canonicalPath,
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(canonicalPath, baseUrl).toString()

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      siteName,
      url: canonicalUrl,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage.url],
    },
  }
}
