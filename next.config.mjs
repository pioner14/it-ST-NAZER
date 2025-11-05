// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable react strict mode
  reactStrictMode: true,
  
  // Configure internationalization
  i18n: {
    locales: ['en', 'fr', 'ru'],
    defaultLocale: 'fr',
  },
  
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig