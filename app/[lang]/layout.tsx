import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { LanguageProvider } from '../../contexts/LanguageContext'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) {
  // Получаем сообщения для конкретного языка
  const messages = await getMessages()

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Computer Repair Service',
    description: 'Professional computer repair and IT services',
    url: 'https://your-portfolio-url.com',
    sameAs: [
      // Add social media links if available
    ]
  }

  return (
    <html lang={locale}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}