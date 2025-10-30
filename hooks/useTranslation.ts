'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useLanguage } from '../contexts/LanguageContext'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

// Custom hook for translations
export function useTranslation() {
  const t = useTranslations()
  const locale = useLocale()
  const { setLocale } = useLanguage()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  // Function to change language
  const changeLanguage = (newLocale: string) => {
    // Update the locale in context
    setLocale(newLocale)
    
    // Set the locale cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
    
    // Navigate to the same page with the new locale
    startTransition(() => {
      router.replace(`/${newLocale}`)
    })
  }

  return { t, locale, changeLanguage, isPending }
}