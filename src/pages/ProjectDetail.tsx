import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { ProjectDetails } from '@/components/ProjectDetails'
import { ProjectCard } from '@/components/ProjectCard'
import { useApp } from '@/context/useApp'
import { getProject, projects } from '@/data/projects'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useApp()
  const project = slug ? getProject(slug) : undefined

  const t = {
    fr: {
      back: 'Tous les projets',
      notFound: 'Projet introuvable',
      notFoundDesc: "Ce projet n'existe pas ou a été déplacé.",
      others: 'Autres projets',
    },
    en: {
      back: 'All projects',
      notFound: 'Project not found',
      notFoundDesc: 'This project does not exist or has been moved.',
      others: 'Other projects',
    },
  } as const

  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'

  if (!project) {
    return (
      <section className="px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={`text-3xl font-semibold ${textPrimary}`}>{t[lang].notFound}</h1>
          <p className={`mt-3 ${textSecondary}`}>{t[lang].notFoundDesc}</p>
          <Button asChild className="mt-8 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t[lang].back}
            </Link>
          </Button>
        </div>
      </section>
    )
  }

  const others = projects.filter(item => item.slug !== project.slug).slice(0, 2)

  return (
    <article className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Link to="/projects" className={`inline-flex items-center gap-2 text-sm font-medium ${textTertiary} transition-colors hover:text-emerald-600 dark:hover:text-emerald-400`}>
            <ArrowLeft className="h-4 w-4" />
            {t[lang].back}
          </Link>
        </Reveal>

        <div className="mt-6">
          <ProjectDetails project={project} lang={lang} />
        </div>

        <div className="mt-20">
          <h2 className={`mb-6 text-2xl font-semibold tracking-tight ${textPrimary}`}>{t[lang].others}</h2>
          <div className="grid gap-6 md:grid-cols-2 stagger-grid">
            {others.map(item => (
              <ProjectCard key={item.slug} project={item} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
