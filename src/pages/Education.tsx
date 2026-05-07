import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Calendar, 
  Sigma, 
  Code2, 
  Trophy,
  Sparkles,
  BookOpen,
  Zap,
  Globe,
  School,
  MapPin,
  Award,
  Star,
  TrendingUp,
  Lightbulb,
  Target,
  Bookmark,
  Cpu
} from 'lucide-react'

const education = [
  {
    degree: {
      fr: 'Formation Autodidacte Full Stack',
      en: 'Self-taught Full Stack Training',
    },
    school: "En ligne / Projets personnels",
    schoolEn: "Online / Personal Projects",
    faculty: "Remote",
    facultyEn: "Remote",
    period: "2024 - 2026",
    periodEn: "2024 - 2026",
    description: {
      fr: "Apprentissage autonome des technologies modernes : FastAPI, TypeScript, Ionic, Supabase, Docker. Réalisation de projets concrets (Evolix, Scolary, Gasy Talk, Détection d'objets).",
      en: 'Self-paced learning of modern technologies: FastAPI, TypeScript, Ionic, Supabase, Docker. Built real-world projects (Evolix, Scolary, Gasy Talk, Object Detection).',
    },
    focus: {
      fr: ['FastAPI', 'TypeScript', 'Ionic', 'Supabase', 'Docker', 'YOLO'],
      en: ['FastAPI', 'TypeScript', 'Ionic', 'Supabase', 'Docker', 'YOLO'],
    },
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500",
    typeColor: "border-amber-500/40 bg-amber-500/20 text-amber-300",
  },
  {
    degree: {
      fr: 'Formation Développement Web',
      en: 'Web Development Training',
    },
    school: "HOPES",
    schoolEn: "HOPES",
    faculty: "Antananarivo",
    facultyEn: "Antananarivo",
    period: "2023 - 2024",
    periodEn: "2023 - 2024",
    description: {
      fr: "Formation intensive en développement web moderne : HTML/CSS, JavaScript, React, et bases de données. Projets pratiques et collaboration en équipe.",
      en: 'Intensive training in modern web development: HTML/CSS, JavaScript, React, and databases. Hands-on projects and team collaboration.',
    },
    focus: {
      fr: ['React', 'JavaScript', 'HTML/CSS', 'Databases', 'Teamwork'],
      en: ['React', 'JavaScript', 'HTML/CSS', 'Databases', 'Teamwork'],
    },
    icon: Code2,
    gradient: "from-emerald-500 to-teal-500",
    typeColor: "border-emerald-500/40 bg-emerald-500/20 text-emerald-300",
  },
  {
    degree: {
      fr: 'Baccalauréat',
      en: 'Science Baccalaureate',
    },
    school: 'Fianarantsoa',
    schoolEn: 'Fianarantsoa',
    faculty: 'Lycée Raherivelo Ramamonjy',
    facultyEn: 'Raherivelo Ramamonjy High School',
    period: '2022 - 2023',
    periodEn: '2022 - 2023',
    description: {
      fr: 'Baccalauréat série scientifique avec mention. Formation en mathématiques, physique et sciences naturelles.',
      en: 'Scientific baccalaureate with honors. Training in mathematics, physics, and natural sciences.',
    },
    focus: {
      fr: ['Mathematics', 'Physics', 'Sciences', 'Honors'],
      en: ['Mathematics', 'Physics', 'Sciences', 'Honors'],
    },
    icon: GraduationCap,
    gradient: "from-purple-500 to-indigo-500",
    typeColor: "border-purple-500/40 bg-purple-500/20 text-purple-300",
  },
]

// Icônes personnalisées pour les domaines d'étude
const focusIcons: Record<string, React.ReactNode> = {
  "FastAPI": <Zap className="h-3 w-3" />,
  "TypeScript": <Code2 className="h-3 w-3" />,
  "Ionic": <Globe className="h-3 w-3" />,
  "Supabase": <Cpu className="h-3 w-3" />,
  "Docker": <Cpu className="h-3 w-3" />,
  "YOLO": <Target className="h-3 w-3" />,
  "React": <Code2 className="h-3 w-3" />,
  "JavaScript": <Code2 className="h-3 w-3" />,
  "HTML/CSS": <Code2 className="h-3 w-3" />,
  "Databases": <Cpu className="h-3 w-3" />,
  "Teamwork": <Star className="h-3 w-3" />,
  "Mathematics": <Sigma className="h-3 w-3" />,
  "Physics": <Zap className="h-3 w-3" />,
  "Sciences": <Lightbulb className="h-3 w-3" />,
  "Honors": <Award className="h-3 w-3" />,
}

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
      current: 'En cours',
      school: 'Établissement',
      period: 'Période',
    },
    en: {
      section: 'Journey',
      title: 'Education',
      subtitle: 'A journey combining academic training, hands-on internships, and self-taught learning.',
      focus: 'Focus areas',
      current: 'Current',
      school: 'Institution',
      period: 'Period',
    },
  } as const

  return (
    <section id="education" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
      background: "linear-gradient(135deg, #0b0f19 0%, #131127 30%, #1a1030 60%, #0b0f19 100%)"
    }}>
      {/* Enhanced Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-rose-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-emerald-600/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-rose-500/10 blur-3xl"></div>
        
        {/* Particles subtiles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-cyan-400 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 h-1 w-1 rounded-full bg-rose-400 animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/3 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse delay-500"></div>
          <div className="absolute top-1/5 right-1/5 h-1 w-1 rounded-full bg-amber-400 animate-pulse delay-200"></div>
        </div>
        
        {/* Grid pattern amélioré */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='url(%23gradient)' stroke-width='0.8'/%3E%3C/pattern%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(99,102,241,0.3)'/%3E%3Cstop offset='100%25' stop-color='rgba(236,72,153,0.3)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header - Style amélioré */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 backdrop-blur-md px-5 py-2.5 shadow-lg shadow-indigo-500/10 mb-6">
            <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent uppercase tracking-[0.2em]">
              {t[lang].section}
            </span>
          </div>
          
          <h2 className="mb-4 font-extrabold text-4xl leading-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t[lang].title}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400/90 text-base font-light">
            {t[lang].subtitle}
          </p>
        </div>

        {/* Timeline style pour les formations */}
        <div className="space-y-6 relative">
          {/* Ligne verticale de timeline */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px hidden md:block">
            <div className="h-full w-full bg-gradient-to-b from-amber-500/30 via-emerald-500/30 to-purple-500/30" />
          </div>

          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div key={index} className="relative md:pl-16 group/timeline">
                {/* Point de timeline (desktop) */}
                <div className="absolute left-0 top-6 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-500/40 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg shadow-indigo-500/10 backdrop-blur-sm transition-all duration-500 group-hover/timeline:scale-110 group-hover/timeline:border-indigo-400/60 group-hover/timeline:shadow-xl group-hover/timeline:shadow-indigo-500/20">
                  <Icon className="h-5 w-5 text-indigo-400 group-hover/timeline:text-indigo-300 transition-colors duration-300" />
                </div>

                {/* Carte de formation améliorée */}
                <Card className="group/card relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-[1.01] hover:shadow-2xl hover:shadow-indigo-500/10">
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  {/* Barre latérale avec dégradé personnalisé */}
                  <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${edu.gradient} rounded-l-2xl opacity-60 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:w-2`} />
                  
                  <CardHeader className="pb-3 relative">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="space-y-3">
                        {/* Icon et titre */}
                        <div className="flex items-center gap-3">
                          {/* Icône mobile */}
                          <div className={`md:hidden p-2 rounded-xl bg-gradient-to-br ${edu.gradient} bg-opacity-20 border border-indigo-500/20 group-hover/card:scale-110 transition-transform duration-300`}>
                            <Icon className="h-5 w-5 text-indigo-300" />
                          </div>
                          
                          <div>
                            <CardTitle className="text-xl font-bold text-white group-hover/card:text-indigo-200 transition-colors duration-300">
                              {edu.degree[lang]}
                            </CardTitle>
                          </div>
                        </div>

                        {/* École et lieu */}
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-slate-300 transition-colors duration-300">
                            <div className="p-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                              <School className="h-3.5 w-3.5 text-indigo-400" />
                            </div>
                            <span className="text-sm font-medium">
                              {lang === 'fr' ? edu.school : edu.schoolEn}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-slate-300 transition-colors duration-300">
                            <div className="p-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
                              <MapPin className="h-3.5 w-3.5 text-purple-400" />
                            </div>
                            <span className="text-sm">
                              {lang === 'fr' ? edu.faculty : edu.facultyEn}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Période */}
                      <div className="flex items-center gap-2">
                        <Badge className={`rounded-xl border ${edu.typeColor} backdrop-blur-md font-medium px-3 py-1.5 transition-all duration-300 group-hover/card:scale-105`}>
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          <span className="font-mono text-xs">
                            {lang === 'fr' ? edu.period : edu.periodEn}
                          </span>
                        </Badge>
                        
                        {index === 0 && (
                          <Badge className="rounded-xl border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 backdrop-blur-md font-medium px-3 py-1.5 animate-pulse">
                            <TrendingUp className="h-3.5 w-3.5 mr-1.5" />
                            {t[lang].current}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-slate-400/90 font-light group-hover/card:text-slate-300 transition-colors duration-300">
                      {edu.description[lang]}
                    </p>
                    
                    {/* Domaines d'étude */}
                    <div>
                      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80">
                        <Bookmark className="h-3.5 w-3.5 text-indigo-400" />
                        {t[lang].focus}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(lang === 'fr' ? edu.focus.fr : edu.focus.en).map((item, i) => (
                          <Badge 
                            key={i} 
                            className="group/badge relative flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 backdrop-blur-sm text-purple-300 text-xs py-1.5 px-3 font-medium transition-all duration-300 hover:border-purple-500/50 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/10 cursor-default overflow-hidden"
                          >
                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity"></span>
                            <span className="relative transition-transform duration-300 group-hover/badge:rotate-12">
                              {focusIcons[item] || <Bookmark className="h-3 w-3" />}
                            </span>
                            <span className="relative text-slate-300 group-hover/badge:text-white transition-colors">
                              {item}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Citation inspirante en bas */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-slate-500 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-indigo-500/10 max-w-2xl">
            <Lightbulb className="h-5 w-5 text-amber-400 flex-shrink-0" />
            <p className="text-sm italic text-slate-400 font-light">
              {lang === 'fr' 
                ? '"L\'apprentissage continu est la clé pour rester pertinent dans le monde de la technologie."' 
                : '"Continuous learning is the key to staying relevant in the world of technology."'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}