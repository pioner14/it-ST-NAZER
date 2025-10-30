import { MetadataRoute } from 'next'
import { locales } from '../lib/i18n'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-portfolio-url.com'
  
  // Define static pages
  const staticPages = [
    '',
    'about',
    'services',
    'blog',
    'contact'
  ]
  
  // Generate sitemap entries for each locale and page
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  locales.forEach(locale => {
    staticPages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      })
    })
  })
  
  return sitemapEntries
}