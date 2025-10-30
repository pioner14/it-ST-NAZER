import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { LanguageProvider } from '../../contexts/LanguageContext'
import Navigation from '../../components/Navigation'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) {
  // Получаем сообщения для конкретного языка
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            <Navigation />
            <div className="min-h-screen">
              {children}
            </div>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}