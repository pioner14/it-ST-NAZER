import { MetadataRoute } from 'next'
import { locales } from '../lib/i18n'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: locales.map(locale => `https://your-portfolio-url.com/${locale}/sitemap.xml`),
  }
}