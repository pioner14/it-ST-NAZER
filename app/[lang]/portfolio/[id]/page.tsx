import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { getPortfolioProjectById } from '../../../../../../lib/projects'

export default async function PortfolioItemPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const t = useTranslations('services') // Using services translations for now
  const locale = useLocale()
  
  const project = await getPortfolioProjectById(params.id)

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Project Not Found
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              The project you are looking for does not exist.
            </p>
            <div className="mt-6">
              <Link 
                href={`/${locale}/portfolio`} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href={`/${locale}/portfolio`} 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
        
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {project.title}
            </h1>
          </header>
          
          <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Project Image</span>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-500 dark:text-gray-300">
              {project.description}
            </p>
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h2>
              <p>{project.details}</p>
            </section>
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Challenges</h2>
              <p>{project.challenges}</p>
            </section>
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solution</h2>
              <p>{project.solution}</p>
            </section>
            
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
              <p>{project.results}</p>
            </section>
          </div>
        </article>
        
        <div className="mt-12">
          <Link 
            href={`/${locale}/portfolio`} 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  )
}