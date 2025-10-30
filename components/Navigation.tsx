'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Navigation() {
  const pathname = usePathname()
  const t = useTranslations('navigation')
  
  // Extract the locale from the pathname
  const locale = pathname.split('/')[1]
  
  const navItems = [
    { key: 'about', label: t('about'), path: `/${locale}/about` },
    { key: 'services', label: t('services'), path: `/${locale}/services` },
    { key: 'portfolio', label: t('portfolio'), path: `/${locale}/portfolio` },
    { key: 'blog', label: t('blog'), path: `/${locale}/blog` },
    { key: 'contact', label: t('contact'), path: `/${locale}/contact` },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white">
                Portfolio
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? 'border-indigo-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-3">
              <Link href={`/${locale}/contact`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.path}
              className={`${
                pathname === item.path
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="pt-2 pb-3 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/${locale}/contact`}
            className="border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Let's talk
          </Link>
        </div>
      </div>
    </nav>
  )
}