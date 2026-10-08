import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/context/useApp'

export function NotFound() {
  const { lang } = useApp()

  const t = {
    fr: { title: 'Page introuvable', desc: "La page que vous cherchez n'existe pas ou a été déplacée.", back: "Retour à l'accueil" },
    en: { title: 'Page not found', desc: 'The page you are looking for does not exist or has been moved.', back: 'Back home' },
  } as const

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-32 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-900/20">
          <Compass className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">404</h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{t[lang].title}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t[lang].desc}</p>
        <Button asChild className="mt-8 rounded-lg bg-emerald-600 font-medium text-white hover:bg-emerald-700">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t[lang].back}
          </Link>
        </Button>
      </div>
    </section>
  )
}
