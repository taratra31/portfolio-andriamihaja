import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, Sigma, Code2, Trophy } from 'lucide-react'

const education = [
  {
    degree: {
      fr: 'Formation Autodidacte Full Stack',
      en: 'Self-taught Full Stack Training',
    },
    school: "En ligne / Projets personnels",
    faculty: "Remote",
    period: "2024 - 2026",
    description: {
      fr: "Apprentissage autonome des technologies modernes : FastAPI, TypeScript, Ionic, Supabase, Docker. Réalisation de projets concrets (Evolix, Scolary, Gasy Talk, Détection d'objets).",
      en: 'Self-paced learning of modern technologies: FastAPI, TypeScript, Ionic, Supabase, Docker. Built real-world projects (Evolix, Scolary, Gasy Talk, Object Detection).',
    },
    focus: ['FastAPI', 'TypeScript', 'Ionic', 'Supabase', 'Docker', 'YOLO'],
    icon: Trophy,
  },
  {
    degree: {
      fr: 'Formation Développement Web',
      en: 'Web Development Training',
    },
    school: "HOPES",
    faculty: "Antananarivo",
    period: "2023 - 2024",
    description: {
      fr: "Formation intensive en développement web moderne : HTML/CSS, JavaScript, React, et bases de données. Projets pratiques et collaboration en équipe.",
      en: 'Intensive training in modern web development: HTML/CSS, JavaScript, React, and databases. Hands-on projects and team collaboration.',
    },
    focus: ['React', 'JavaScript', 'HTML/CSS', 'Databases', 'Teamwork'],
    icon: Code2,
  },
  {
    degree: {
      fr: 'Baccalauréat',
      en: 'Science Baccalaureate',
    },
    school: 'Fianarantsoa',
    faculty: 'Lycée Raherivelo Ramamonjy',
    period: '2022 - 2023',
    description: {
      fr: 'Baccalauréat série scientifique avec mention. Formation en mathématiques, physique et sciences naturelles.',
      en: 'Scientific baccalaureate with honors. Training in mathematics, physics, and natural sciences.',
    },
    focus: ['Mathematics', 'Physics', 'Sciences', 'Honors'],
    icon: GraduationCap,
  },
]

type EducationProps = {
  lang: 'fr' | 'en'
}

export function Education({ lang }: EducationProps) {
  const t = {
    fr: {
      section: 'Parcours',
      title: 'Formation',
      subtitle: 'Un parcours alliant formation académique, stage pratique et apprentissage autodidacte.',
      focus: 'Domaines étudiés',
    },
    en: {
      section: 'Journey',
      title: 'Education',
      subtitle: 'A journey combining academic training, hands-on experience, and self-taught learning.',
      focus: 'Focus areas',
    },
  } as const

  return (
    <section id="education" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
      background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)"
    }}>
      {/* Animated background effects - mitovy amin'ny Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(99,102,241,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-indigo-400">{t[lang].section}</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              {t[lang].title}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-sm">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <Card key={index} className="group relative overflow-hidden border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-5 w-5 text-indigo-400" />
                        <CardTitle className="text-xl text-white">
                          {edu.degree[lang]}
                        </CardTitle>
                      </div>
                      <p className="text-slate-400 text-sm">
                        {edu.school} • {edu.faculty}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-slate-300 text-sm">{edu.description[lang]}</p>
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-400">
                    <Sigma className="h-3.5 w-3.5 text-indigo-400" />
                    {t[lang].focus}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((item, i) => (
                      <Badge key={i} className="border-purple-400/30 bg-purple-500/20 text-purple-300 text-[10px] py-0.5">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}