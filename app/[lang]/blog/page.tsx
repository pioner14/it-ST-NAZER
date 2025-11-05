import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { getBlogPosts, BlogPost } from '../../../../lib/blog'

export default async function BlogPage() {
  const t = useTranslations('blog')
  const locale = useLocale()
  const posts: BlogPost[] = await getBlogPosts()

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
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime} min read
                </div>
              </div>
              <div className="mt-4">
                <Link href={`/${locale}/blog/${post.slug}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}