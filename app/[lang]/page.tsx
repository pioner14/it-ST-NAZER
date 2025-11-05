import { useTranslations } from 'next-intl'
import Hero from '../../../components/sections/Hero'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Hero />
      </main>
    </div>
  )
}