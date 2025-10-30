import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function PortfolioItemPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const t = useTranslations('services') // Using services translations for now
  const locale = useLocale()
  
  // Sample portfolio data - in a real app this might come from a CMS or database
  const project = {
    id: params.id,
    title: "Sample Project",
    description: "This is a sample project description. In a real application, this would be loaded from a database or CMS.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    imageUrl: "/placeholder-project.jpg",
    details: "This project involved implementing complex features and solving challenging problems. We used modern development practices to deliver a high-quality, scalable solution that met our client's requirements.",
    challenges: "The main challenge was optimizing performance for large datasets while maintaining a responsive user interface.",
    solution: "We implemented a caching layer and optimized our database queries to achieve the desired performance.",
    results: "The project was delivered on time and received positive feedback from the client. Performance metrics showed a 40% improvement in page load times."
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