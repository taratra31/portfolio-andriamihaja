import {
  BriefcaseBusiness,
  Building,
  Calendar,
  Code2,
  Container,
  Cpu,
  Database,
  Globe,
  Layers,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/PageHeader'
import { useApp } from '@/context/useApp'
import { experiences } from '@/data/experience'

const technologyIcons: Record<string, React.ReactNode> = {
  React: <Code2 className="h-3.5 w-3.5" />,
  FastAPI: <Zap className="h-3.5 w-3.5" />,
  Python: <Code2 className="h-3.5 w-3.5" />,
  PostgreSQL: <Database className="h-3.5 w-3.5" />,
  Docker: <Container className="h-3.5 w-3.5" />,
  'Tailwind CSS': <Layers className="h-3.5 w-3.5" />,
  Ionic: <Smartphone className="h-3.5 w-3.5" />,
  Supabase: <Zap className="h-3.5 w-3.5" />,
  Angular: <Code2 className="h-3.5 w-3.5" />,
  TypeScript: <Code2 className="h-3.5 w-3.5" />,
}

export function Experience() {
  const { lang } = useApp()

  const t = {
    fr: {
      section: 'Expérience',
      title: 'Parcours professionnel',
      subtitle: 'Livraison de valeur, impact métier et exécution technique solide.',
      impact: 'Impacts clés',
      stack: 'Stack technique',
    },
    en: {
      section: 'Experience',
      title: 'Professional journey',
      subtitle: 'A track record focused on business impact, delivery quality, and technical ownership.',
      impact: 'Key impact',
      stack: 'Tech stack',
    },
  } as const

  const accent = 'text-emerald-600 dark:text-emerald-400'
  const textPrimary = 'text-gray-900 dark:text-white'
  const textSecondary = 'text-gray-600 dark:text-gray-300'
  const textTertiary = 'text-gray-500 dark:text-gray-400'
  const borderClass = 'border-gray-200 dark:border-gray-800'
  const subtleBg = 'bg-gray-50 dark:bg-gray-900/50'
  const accentBorder = 'border-emerald-200 dark:border-emerald-800'
  const accentBg = 'bg-emerald-50 dark:bg-emerald-900/20'

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <PageHeader eyebrow={t[lang].section} title={t[lang].title} subtitle={t[lang].subtitle} />

        <div className="space-y-8 stagger-grid">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="relative pl-14">
              {index < experiences.length - 1 && (
                <div className="absolute left-[19px] top-14 h-[calc(100%+2rem)] w-px bg-gray-200 dark:bg-gray-800" />
              )}

              <div className={`absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border ${accentBorder} ${accentBg}`}>
                <BriefcaseBusiness className={`h-4 w-4 ${accent}`} />
              </div>

              <div className={`rounded-xl border ${borderClass} bg-white p-6 transition-colors duration-300 hover:border-emerald-300 dark:bg-gray-900/40 dark:hover:border-emerald-700`}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={`rounded-md border ${accentBorder} ${accentBg} ${accent} px-2.5 py-1 font-medium`}>
                        {exp.type[lang]}
                      </Badge>
                      <Badge className={`flex items-center gap-1.5 rounded-md border ${borderClass} ${subtleBg} text-xs font-normal ${textTertiary}`}>
                        <Globe className="h-3 w-3" />
                        <span>{lang === 'fr' ? exp.location : exp.locationEn}</span>
                      </Badge>
                    </div>

                    <h2 className={`text-lg font-semibold ${textPrimary}`}>{exp.title[lang]}</h2>

                    <div className={`flex items-center gap-2 text-sm ${textSecondary}`}>
                      <Building className={`h-3.5 w-3.5 ${accent}`} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <div className={`flex flex-shrink-0 items-center gap-2 text-sm ${textTertiary}`}>
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">{lang === 'fr' ? exp.period : exp.periodEn}</span>
                  </div>
                </div>

                <p className={`mt-5 mb-6 border-l border-gray-200 pl-4 text-sm leading-relaxed ${textSecondary} dark:border-gray-800`}>
                  {exp.summary[lang]}
                </p>

                <div className="mb-6">
                  <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
                    <TrendingUp className={`h-3.5 w-3.5 ${accent}`} />
                    {t[lang].impact}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.highlights[lang].map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${textSecondary}`}>
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
                    <Cpu className={`h-3.5 w-3.5 ${accent}`} />
                    {t[lang].stack}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <Badge
                        key={tech}
                        className={`flex items-center gap-1.5 rounded-md border ${borderClass} ${subtleBg} px-2.5 py-1.5 text-xs font-medium cursor-default`}
                      >
                        <span className={accent}>{technologyIcons[tech] || <Code2 className="h-3.5 w-3.5" />}</span>
                        <span className={textSecondary}>{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
