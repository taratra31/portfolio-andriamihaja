import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Code2, Database, Globe, Layout, Network, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: {
      fr: 'Langages',
      en: 'Languages',
    },
    icon: Code2,
    skills: {
      fr: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
      en: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
    },
  },
  {
    title: {
      fr: 'Frameworks',
      en: 'Frameworks',
    },
    icon: Layout,
    skills: {
      fr: ['FastAPI', 'React', 'Ionic', 'Vite', 'Tailwind CSS'],
      en: ['FastAPI', 'React', 'Ionic', 'Vite', 'Tailwind CSS'],
    },
  },
  {
    title: {
      fr: 'Bases de données',
      en: 'Databases',
    },
    icon: Database,
    skills: {
      fr: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB'],
      en: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB'],
    },
  },
  {
    title: {
      fr: 'IA & Vision',
      en: 'AI & Vision',
    },
    icon: Brain,
    skills: {
      fr: ['YOLO', 'OpenCV', 'TensorFlow', 'Détection objets'],
      en: ['YOLO', 'OpenCV', 'TensorFlow', 'Object Detection'],
    },
  },
  {
    title: {
      fr: 'DevOps & Outils',
      en: 'DevOps & Tooling',
    },
    icon: Settings,
    skills: {
      fr: ['Docker', 'Git', 'Linux', 'CI/CD', 'Nginx'],
      en: ['Docker', 'Git', 'Linux', 'CI/CD', 'Nginx'],
    },
  },
  {
    title: {
      fr: 'Méthodes',
      en: 'Methods',
    },
    icon: Network,
    skills: {
      fr: ['API REST', 'Workflows', 'Base de données temps réel', 'Automatisation'],
      en: ['REST API', 'Workflows', 'Real-time DB', 'Automation'],
    },
  },
  {
    title: {
      fr: 'Langues',
      en: 'Languages',
    },
    icon: Globe,
    skills: {
      fr: ['Français (B2)', 'Anglais (B1 technique)', 'Malgache (natif)'],
      en: ['French (B2)', 'English (B1 technical)', 'Malagasy (native)'],
    },
  },
]

type SkillsProps = {
  lang: 'fr' | 'en'
}

export function Skills({ lang }: SkillsProps) {
  const t = {
    fr: {
      section: 'Compétences',
      title: 'Stack Technique',
      subtitle: 'Technologies et méthodes maîtrisées pour des projets exigeants.',
    },
    en: {
      section: 'Skills',
      title: 'Tech Stack',
      subtitle: 'Technologies and methods mastered for demanding projects.',
    },
  } as const

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
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

      <div className="relative max-w-6xl mx-auto z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, _index) => (
            <Card key={category.title.en} className="group relative overflow-hidden border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <category.icon className="h-5 w-5 text-indigo-400" />
                  {category.title[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills[lang].map((skill, i) => (
                    <Badge key={i} className="border-indigo-400/30 bg-indigo-500/20 text-indigo-300 text-[11px] py-0.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}