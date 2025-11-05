'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Hero() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 dark:text-gray-300 sm:max-w-3xl">
            {t('description')}
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View My Work
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}