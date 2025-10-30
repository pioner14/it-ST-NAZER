import { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

// Define the supported locales
const locales = ['en', 'fr', 'ru']
const defaultLocale = 'en'

// Function to get the locale from the request
function getLocale(request: NextRequest): string {
  // Check if there's a locale cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')
  if (localeCookie && locales.includes(localeCookie.value)) {
    return localeCookie.value
  }

  // Try to get locale from Accept-Language header
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value
  })
  
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const locale = matchLocale(languages, locales, defaultLocale)
  
  return locale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the pathname is already prefixed with a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // If the pathname is missing a locale, redirect to the default locale
  if (pathnameIsMissingLocale) {
    // For the root path, redirect to the default locale
    if (pathname === '/') {
      return NextResponse.redirect(
        new URL(`/${defaultLocale}`, request.url)
      )
    }
    
    // For other paths, try to detect the locale
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: enable for public files
    '/((?!api|_next|favicon.ico).*)',
  ],
}