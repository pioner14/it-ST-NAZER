import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { getBlogPostBySlug, BlogPost } from '../../../../../../lib/blog'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const t = useTranslations('blog')
  const locale = useLocale()
  
  const post: BlogPost | undefined = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound() // This will render the not-found page
  }

  // Simple function to convert markdown-like content to HTML
  // In a real application, you'd want to use a proper markdown parser
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{paragraph.substring(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('\`\`\`')) {
        // Simple code block rendering
        const lines = paragraph.split('\n');
        const language = lines[0].substring(3);
        const code = lines.slice(1, -1).join('\n');
        return (
          <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
            <code className={`language-${language} text-sm`}>{code}</code>
          </pre>
        );
      } else {
        return <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">{paragraph}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">{post.author.charAt(0)}</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {post.author}
                </p>
                <div className="flex text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="mx-1">
                    &middot;
                  </span>
                  <span>
                    {post.readTime} min read
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </article>
        
        <div className="mt-12">
          <Link 
            href={`/${locale}/blog`} 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </main>
    </div>
  )
}