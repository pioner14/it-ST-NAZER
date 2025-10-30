import { Metadata } from 'next'
import { locales } from '../lib/i18n'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  // Define titles and descriptions for each language
  const metadata = {
    en: {
      title: 'Portfolio - Home',
      description: 'Welcome to my professional portfolio website'
    },
    fr: {
      title: 'Portfolio - Accueil',
      description: 'Bienvenue sur mon site de portfolio professionnel'
    },
    ru: {
      title: 'Портфолио - Главная',
      description: 'Добро пожаловать на мой профессиональный сайт портфолио'
    }
  }

  return {
    title: metadata[locale as keyof typeof metadata]?.title || metadata.en.title,
    description: metadata[locale as keyof typeof metadata]?.description || metadata.en.description,
    alternates: {
      canonical: `https://your-portfolio-url.com/${locale}`,
      languages: Object.fromEntries(
        locales.map(loc => [loc, `https://your-portfolio-url.com/${loc}`])
      )
    },
    openGraph: {
      title: metadata[locale as keyof typeof metadata]?.title || metadata.en.title,
      description: metadata[locale as keyof typeof metadata]?.description || metadata.en.description,
      locale: locale,
      url: `https://your-portfolio-url.com/${locale}`
    }
  }
}