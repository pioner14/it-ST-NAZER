import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')
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
        
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate developer with experience in creating beautiful, functional, and user-friendly websites and applications. 
                With a strong background in both frontend and backend technologies, I bring ideas to life with elegant and efficient solutions.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                My journey in tech started several years ago, and I've been constantly learning and adapting to new technologies and 
                methodologies. I believe in writing clean, maintainable code and creating products that make a difference.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Frontend Development (React, Next.js, TypeScript)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Backend Development (Node.js, Python)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">UI/UX Design</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Testing & Debugging</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Innovation</h4>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    I bring fresh ideas and innovative solutions to every project.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Efficiency</h4>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Efficiently delivering projects on time without compromising quality.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Quality</h4>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Focused on creating high-quality, maintainable code and user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}