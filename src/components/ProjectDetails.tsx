import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Layers,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/Reveal'
import { TechIcon } from '@/components/TechIcon'
import { LivePreview } from '@/components/LivePreview'
import { hasTechIcon } from '@/lib/tech-icons'
import type { Project } from '@/data/projects'
import type { Lang } from '@/context/app-context'

type ProjectDetailsProps = {
  project: Project
  lang: Lang
  variant?: 'page' | 'modal'
}

export function ProjectDetails({ project, lang, variant = 'page' }: ProjectDetailsProps) {
  const isModal = variant === 'modal'

  const t = {
    fr: { visit: 'Voir le site en ligne', overview: 'Aperçu', highlights: 'Points forts', stack: 'Technologies', link: 'Lien du projet' },
    en: { visit: 'Visit live site', overview: 'Overview', highlights: 'Highlights', stack: 'Technologies', link: 'Project link' },
  } as const

  const accent = 'text-emerald-600 dark:text-emerald-400'
  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'
  const borderClass = 'border-gray-200 dark:border-gray-800'
  const subtleBg = 'bg-gray-50 dark:bg-gray-900/50'
  const accentBorder = 'border-emerald-200 dark:border-emerald-800'
  const accentBg = 'bg-emerald-50 dark:bg-emerald-900/20'

  const withReveal = (node: React.ReactNode, delay?: number) =>
    isModal ? node : <Reveal delay={delay}>{node}</Reveal>

  const linkCard = (
    <div className={`${isModal ? '' : 'sticky top-24'} rounded-xl border ${borderClass} bg-white p-6 dark:bg-gray-900/40`}>
      <p className={`text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>{t[lang].link}</p>
      <p className={`mt-2 truncate text-sm ${textSecondary}`}>{project.url.replace(/^https?:\/\//, '')}</p>
      <Button asChild className="group mt-4 w-full rounded-lg bg-emerald-600 font-medium text-white transition-colors hover:bg-emerald-700">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Globe className="mr-2 h-4 w-4" />
          {t[lang].visit}
          <ArrowUpRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Button>
    </div>
  )

  return (
    <div className={isModal ? 'space-y-8' : 'space-y-10'}>
      {withReveal(
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge className={`inline-flex items-center gap-1.5 rounded-md border ${accentBorder} ${accentBg} px-2.5 py-1 font-medium ${accent}`}>
              {project.type[lang]}
            </Badge>
            <span className={`text-xs font-medium ${textTertiary}`}>{project.year}</span>
          </div>
          <h1 className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${textPrimary}`}>{project.name}</h1>
          <p className={`mt-3 max-w-2xl text-base ${textSecondary}`}>{project.tagline[lang]}</p>
        </div>,
      )}

      {withReveal(
        <div className={`relative overflow-hidden rounded-2xl border ${borderClass} bg-gray-100 dark:bg-gray-900`}>
          <img
            src={project.image}
            alt={`${project.name} — ${lang === 'fr' ? 'aperçu' : 'preview'}`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="relative aspect-[16/10] w-full">
            {project.live && <LivePreview src={project.url} title={project.name} interactive />}
          </div>
        </div>,
        80,
      )}

      <div className={isModal ? 'space-y-8' : 'grid gap-10 lg:grid-cols-3'}>
        {withReveal(
          <div className={isModal ? 'space-y-8' : 'space-y-10 lg:col-span-2'}>
            <div>
              <h2 className={`mb-3 text-lg font-semibold ${textPrimary}`}>{t[lang].overview}</h2>
              <p className={`text-sm leading-relaxed ${textSecondary}`}>{project.description[lang]}</p>
            </div>

            <div>
              <h2 className={`mb-4 flex items-center gap-2 text-lg font-semibold ${textPrimary}`}>
                <Sparkles className={`h-5 w-5 ${accent}`} />
                {t[lang].highlights}
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${textSecondary}`}>
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accent}`} />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`mb-4 text-lg font-semibold ${textPrimary}`}>{t[lang].stack}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className={`inline-flex items-center gap-1.5 rounded-md border ${borderClass} ${subtleBg} px-3 py-1.5 text-sm font-medium`}>
                    {hasTechIcon(tech) ? (
                      <TechIcon name={tech} className="h-4 w-4" />
                    ) : (
                      <span className={accent}><Layers className="h-4 w-4" /></span>
                    )}
                    <span className={textSecondary}>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>,
          120,
        )}

        {withReveal(linkCard, 160)}
      </div>
    </div>
  )
}
