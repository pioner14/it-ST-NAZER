import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Define the supported locales (fr as primary, en as secondary)
const locales = ['fr', 'en']

// Function to load translations
export default getRequestConfig(async ({ locale }) => {
  // Validate the locale
  if (!locales.includes(locale as any)) notFound()

  // Load the translation file
  const translations = await import(`../locales/${locale}/common.json`)

  return {
    messages: translations.default,
  }
})