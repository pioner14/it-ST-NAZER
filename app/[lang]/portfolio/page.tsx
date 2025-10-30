import { getTranslations } from 'next-intl/server'
import Card from '../../../components/Card'

export default async function PortfolioPage() {
  const t = await getTranslations('portfolio') || { title: 'Портфолио', description: 'Мои проекты и кейсы' }

  const projects = [
    {
      id: 1,
      title: 'Ремонт ноутбука Dell',
      description: 'Замена материнской платы и восстановление данных',
      image: '/images/project1.jpg',
      tags: ['ремонт', 'данные', 'ноутбук'],
      date: '2024-01'
    },
    {
      id: 2,
      title: 'Настройка офисной сети',
      description: 'Установка и конфигурация сети для малого бизнеса',
      image: '/images/project2.jpg',
      tags: ['сеть', 'бизнес', 'настройка'],
      date: '2023-12'
    },
    {
      id: 3,
      title: 'Восстановление данных с HDD',
      description: 'Спасение важных файлов с поврежденного жесткого диска',
      image: '/images/project3.jpg',
      tags: ['данные', 'HDD', 'восстановление'],
      date: '2023-11'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id}>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Изображение проекта</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project.date}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}