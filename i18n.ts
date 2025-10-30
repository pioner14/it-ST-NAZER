import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Define the supported locales
const locales = ['en', 'fr', 'ru']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../locales/${locale}/common.json`)).default
  }
})