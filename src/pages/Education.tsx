import {
  Award,
  Bookmark,
  Calendar,
  Code2,
  Lightbulb,
  MapPin,
  ScanSearch,
  School,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/PageHeader'
import { useApp } from '@/context/useApp'
import { education } from '@/data/education'

const focusIcons: Record<string, React.ReactNode> = {
  FastAPI: <Zap className="h-3 w-3" />,
  TypeScript: <Code2 className="h-3 w-3" />,
  Ionic: <Code2 className="h-3 w-3" />,
  Supabase: <Zap className="h-3 w-3" />,
  Docker: <Code2 className="h-3 w-3" />,
  YOLO: <ScanSearch className="h-3 w-3" />,
  React: <Code2 className="h-3 w-3" />,
  JavaScript: <Code2 className="h-3 w-3" />,
  'HTML/CSS': <Code2 className="h-3 w-3" />,
  Databases: <Bookmark className="h-3 w-3" />,
  Teamwork: <Users className="h-3 w-3" />,
  Mathematics: <Code2 className="h-3 w-3" />,
  Physics: <Zap className="h-3 w-3" />,
  Sciences: <Lightbulb className="h-3 w-3" />,
  Honors: <Award className="h-3 w-3" />,
}

export function Education() {
  const { lang } = useApp()

  const t = {
    fr: {
      section: 'Parcours',
      title: 'Formation',
      subtitle: 'Un parcours alliant formation académique, stage pratique et apprentissage autodidacte.',
      focus: 'Domaines étudiés',
      current: 'En cours',
      quote: '"L\'apprentissage continu est la clé pour rester pertinent dans le monde de la technologie."',
    },
    en: {
      section: 'Journey',
      title: 'Education',
      subtitle: 'A journey combining academic training, hands-on internships, and self-taught learning.',
      focus: 'Focus areas',
      current: 'Current',
      quote: '"Continuous learning is the key to staying relevant in the world of technology."',
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

        <div className="relative space-y-6 stagger-grid">
          <div className="absolute left-[23px] top-0 bottom-0 hidden w-px bg-gray-200 md:block dark:bg-gray-800" />

          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <div key={index} className="relative md:pl-16">
                <div className={`absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border ${accentBorder} ${accentBg} md:flex`}>
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>

                <div className={`rounded-xl border ${borderClass} bg-white p-6 transition-colors duration-300 hover:border-emerald-300 dark:bg-gray-900/40 dark:hover:border-emerald-700`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-lg p-2 ${accentBg} md:hidden`}>
                          <Icon className={`h-4 w-4 ${accent}`} />
                        </div>
                        <h2 className={`text-lg font-semibold ${textPrimary}`}>{edu.degree[lang]}</h2>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <div className={`flex items-center gap-2 text-sm ${textSecondary}`}>
                          <School className={`h-3.5 w-3.5 ${accent}`} />
                          <span className="font-medium">{lang === 'fr' ? edu.school : edu.schoolEn}</span>
                        </div>
                        <div className={`flex items-center gap-1.5 text-sm ${textTertiary}`}>
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{lang === 'fr' ? edu.faculty : edu.facultyEn}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge className={`flex items-center gap-1.5 rounded-md border ${accentBorder} ${accentBg} ${accent} px-2.5 py-1 font-medium`}>
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-xs">{lang === 'fr' ? edu.period : edu.periodEn}</span>
                      </Badge>
                      {edu.isRecent && (
                        <Badge className="flex items-center gap-1.5 rounded-md border border-emerald-600 bg-emerald-600 px-2.5 py-1 font-medium text-white">
                          <TrendingUp className="h-3.5 w-3.5" />
                          {t[lang].current}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className={`my-5 border-l border-gray-200 pl-4 text-sm leading-relaxed ${textSecondary} dark:border-gray-800`}>
                    {edu.description[lang]}
                  </p>

                  <div>
                    <p className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textTertiary}`}>
                      <Bookmark className={`h-3.5 w-3.5 ${accent}`} />
                      {t[lang].focus}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(lang === 'fr' ? edu.focus.fr : edu.focus.en).map((item, i) => (
                        <Badge key={i} className={`flex items-center gap-1.5 rounded-md border ${borderClass} ${subtleBg} px-2.5 py-1.5 text-xs font-medium cursor-default`}>
                          <span className={accent}>{focusIcons[item] || <Bookmark className="h-3 w-3" />}</span>
                          <span className={textSecondary}>{item}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`mt-12 flex items-start gap-3 rounded-xl border ${borderClass} ${subtleBg} px-6 py-5`}>
          <Lightbulb className={`mt-0.5 h-5 w-5 flex-shrink-0 ${accent}`} />
          <p className={`text-sm italic ${textSecondary}`}>{t[lang].quote}</p>
        </div>
      </div>
    </section>
  )
}
