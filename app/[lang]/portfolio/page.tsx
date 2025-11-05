import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { getPortfolioProjects, PortfolioProject } from '../../../../lib/projects'

// This component will be rendered server-side to fetch data
export default async function PortfolioPage() {
  const t = useTranslations('services') // Using services translations for now
  const locale = useLocale()
  const projects: PortfolioProject[] = await getPortfolioProjects()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            A showcase of my recent projects and work
          </p>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg transform transition duration-500 hover:scale-105">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Link 
                      href={`/${locale}/portfolio/${project.id}`}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 font-medium"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}