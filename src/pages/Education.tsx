import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Calendar, 
  Sigma, 
  Code2, 
  Trophy,
  Sparkles,
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
    isRecent: true,
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
    isRecent: false,
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
    isRecent: false,
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
  theme?: 'light' | 'dark'
}

export function Education({ lang, theme = 'light' }: EducationProps) {
  const isDark = theme === 'dark'

  const t = {
    fr: {
      section: 'Parcours',
      title: 'Formation',
      subtitle: 'Un parcours alliant formation académique, stage pratique et apprentissage autodidacte.',
      focus: 'Domaines étudiés',
      current: 'En cours',
      school: 'Établissement',
      period: 'Période',
      quote: '"L\'apprentissage continu est la clé pour rester pertinent dans le monde de la technologie."',
    },
    en: {
      section: 'Journey',
      title: 'Education',
      subtitle: 'A journey combining academic training, hands-on internships, and self-taught learning.',
      focus: 'Focus areas',
      current: 'Current',
      school: 'Institution',
      period: 'Period',
      quote: '"Continuous learning is the key to staying relevant in the world of technology."',
    },
  } as const

  // Classes du thème
  const bgClass = "bg-white dark:bg-gray-950"
  const textPrimary = "text-gray-900 dark:text-gray-100"
  const textSecondary = "text-gray-600 dark:text-gray-300"
  const textTertiary = "text-gray-400 dark:text-gray-500"
  const borderClass = "border border-gray-200 dark:border-gray-800"
  const subtleBg = "bg-gray-50 dark:bg-gray-900/50"
  const accent = "text-emerald-600 dark:text-emerald-400"
  const accentBg = "bg-emerald-50 dark:bg-emerald-900/20"
  const accentBorder = "border-emerald-200 dark:border-emerald-800"
  const cardBg = "bg-white dark:bg-gray-900"
  const cardBorder = "border-gray-200 dark:border-gray-800"
  const cardHover = "hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:shadow-emerald-500/5"

  return (
    <section id="education" className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}>
      
      {/* Fond subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-400/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-600/5 blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full border-2 ${accentBorder} ${accentBg} px-4 py-2 mb-6`}>
            <GraduationCap className={`h-4 w-4 ${accent}`} />
            <span className={`text-xs font-bold uppercase tracking-[0.3em] ${accent}`}>
              {t[lang].section}
            </span>
          </div>
          
          <h2 className={`mb-4 text-4xl sm:text-5xl font-black tracking-tight ${textPrimary}`}>
            {t[lang].title}
          </h2>
          <p className={`mx-auto max-w-2xl text-base ${textSecondary} font-light`}>
            {t[lang].subtitle}
          </p>
        </div>

        {/* Timeline style pour les formations */}
        <div className="space-y-6 relative">
          {/* Ligne verticale de timeline (desktop) */}
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 hidden md:block">
            <div className="h-full w-full bg-gradient-to-b from-emerald-200 via-emerald-100 to-emerald-200 dark:from-emerald-800 dark:via-emerald-900 dark:to-emerald-800" />
          </div>

          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div key={index} className="relative md:pl-16 group/timeline">
                {/* Point de timeline (desktop) */}
                <div className={`absolute left-0 top-6 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-2 ${accentBorder} bg-white dark:bg-gray-900 transition-all duration-300 group-hover/timeline:scale-110 group-hover/timeline:border-emerald-400 dark:group-hover/timeline:border-emerald-600 group-hover/timeline:shadow-lg`}>
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>

                {/* Carte de formation */}
                <Card className={`group/card relative overflow-hidden rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all duration-300 ${cardHover}`}>
                  {/* Barre supérieure */}
                  <div className="absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-60 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:h-2" />
                  
                  <CardHeader className="pb-3 pt-5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="space-y-3">
                        {/* Icon et titre */}
                        <div className="flex items-center gap-3">
                          {/* Icône mobile */}
                          <div className={`md:hidden p-2 rounded-xl ${accentBg} border-2 ${accentBorder} transition-transform duration-300 group-hover/card:scale-110`}>
                            <Icon className={`h-5 w-5 ${accent}`} />
                          </div>
                          
                          <div>
                            <CardTitle className={`text-xl font-bold ${textPrimary} transition-colors duration-300`}>
                              {edu.degree[lang]}
                            </CardTitle>
                          </div>
                        </div>

                        {/* École et lieu */}
                        <div className="flex flex-wrap items-center gap-3">
                          <div className={`flex items-center gap-2 ${textSecondary}`}>
                            <div className={`p-1 rounded-lg ${accentBg} border ${accentBorder}`}>
                              <School className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <span className="text-sm font-semibold">
                              {lang === 'fr' ? edu.school : edu.schoolEn}
                            </span>
                          </div>
                          
                          <div className={`flex items-center gap-2 ${textTertiary}`}>
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              <span className="text-sm">
                                {lang === 'fr' ? edu.faculty : edu.facultyEn}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Période */}
                      <div className="flex items-center gap-2">
                        <Badge className={`flex items-center gap-1.5 rounded-lg border-2 ${accentBorder} ${accentBg} ${accent} font-bold px-3 py-1.5 transition-all duration-300 group-hover/card:scale-105`}>
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="font-mono text-xs">
                            {lang === 'fr' ? edu.period : edu.periodEn}
                          </span>
                        </Badge>
                        
                        {edu.isRecent && (
                          <Badge className="flex items-center gap-1.5 rounded-lg border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-500 text-white font-bold px-3 py-1.5 animate-pulse">
                            <TrendingUp className="h-3.5 w-3.5" />
                            {t[lang].current}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Description */}
                    <p className={`mb-5 text-sm leading-relaxed ${textSecondary} font-light border-l-2 ${accentBorder} pl-4`}>
                      {edu.description[lang]}
                    </p>
                    
                    {/* Domaines d'étude */}
                    <div>
                      <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary}`}>
                        <Bookmark className={`h-3.5 w-3.5 ${accent}`} />
                        {t[lang].focus}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(lang === 'fr' ? edu.focus.fr : edu.focus.en).map((item, i) => (
                          <Badge 
                            key={i} 
                            className={`group/badge flex items-center gap-1.5 rounded-lg border-2 ${borderClass} ${subtleBg} text-xs py-1.5 px-3 font-medium transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 hover:shadow-md cursor-default`}
                          >
                            <span className={`${accent} transition-transform duration-300 group-hover/badge:scale-125`}>
                              {focusIcons[item] || <Bookmark className="h-3 w-3" />}
                            </span>
                            <span className={`${textSecondary} group-hover/badge:text-emerald-600 dark:group-hover/badge:text-emerald-400 transition-colors`}>
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
          <div className={`inline-flex items-center gap-3 ${subtleBg} rounded-2xl px-6 py-4 border-2 ${accentBorder} max-w-2xl mx-auto`}>
            <Lightbulb className={`h-5 w-5 ${accent} flex-shrink-0`} />
            <p className={`text-sm italic ${textSecondary} font-light`}>
              {t[lang].quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}