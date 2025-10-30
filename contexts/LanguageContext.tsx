'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
import { useLocale } from 'next-intl'

// Define the shape of our context
interface LanguageContextType {
  locale: string
  setLocale: (locale: string) => void
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const initialLocale = useLocale()
  const [locale, setLocale] = useState(initialLocale)

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}