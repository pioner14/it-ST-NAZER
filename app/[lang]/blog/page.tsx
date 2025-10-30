import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function BlogPage() {
  const t = useTranslations('blog')
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            {t('description')}
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Blog post examples */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">First Blog Post</h3>
            <p className="text-gray-600 dark:text-gray-300">This is a sample blog post to demonstrate the blog functionality.</p>
            <div className="mt-4">
              <Link href={`/${locale}/blog/post-1`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Read more
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Second Blog Post</h3>
            <p className="text-gray-600 dark:text-gray-300">This is another sample blog post to demonstrate the blog functionality.</p>
            <div className="mt-4">
              <Link href={`/${locale}/blog/post-2`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Read more
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Third Blog Post</h3>
            <p className="text-gray-600 dark:text-gray-300">This is yet another sample blog post to demonstrate the blog functionality.</p>
            <div className="mt-4">
              <Link href={`/${locale}/blog/post-3`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}