import type { MetadataRoute } from 'next'

const baseUrl = 'https://precisionebr.com'

const routes = [
  '/',
  '/busca-ativos',
  '/due-diligence',
  '/localizacao-rapida',
  '/ocultacao-patrimonio',
  '/sobre-nos',
  '/contato',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))
}
