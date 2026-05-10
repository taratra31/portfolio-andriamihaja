import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BriefcaseBusiness, 
  Building, 
  Calendar, 
  TrendingUp,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  Cloud,
  Database,
  Container,
  Smartphone,
  Code2,
  Globe
} from 'lucide-react'

const technologyIcons: Record<string, React.ReactNode> = {
  "React": <Code2 className="h-3.5 w-3.5" />,
  "FastAPI": <Zap className="h-3.5 w-3.5" />,
  "Python": <Code2 className="h-3.5 w-3.5" />,
  "PostgreSQL": <Database className="h-3.5 w-3.5" />,
  "Docker": <Container className="h-3.5 w-3.5" />,
  "Tailwind CSS": <Layers className="h-3.5 w-3.5" />,
  "Ionic": <Smartphone className="h-3.5 w-3.5" />,
  "Supabase": <Cloud className="h-3.5 w-3.5" />,
  "Angular": <Code2 className="h-3.5 w-3.5" />,
  "TypeScript": <Code2 className="h-3.5 w-3.5" />,
}

const technologyColors: Record<string, { color: string; bg: string; border: string }> = {
  "React": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "FastAPI": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "Python": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "PostgreSQL": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "Docker": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "Tailwind CSS": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "Ionic": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "Supabase": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "Angular": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
  "TypeScript": { color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800" },
}

const experiences = [
  {
    title: {
      fr: 'Stagiaire Développeur Full Stack',
      en: 'Full Stack Developer Intern',
    },
    company: "M'lay design",
    period: 'Mars 2026 - Présent',
    periodEn: 'March 2026 - Present',
    location: 'Antananarivo, Madagascar (sur site)',
    locationEn: 'Antananarivo, Madagascar (on-site)',
    type: {
      fr: 'Stage',
      en: 'Internship',
    },
    summary: {
      fr: "Conception et développement d'une application e-commerce complète (front-office, back-office, API).",
      en: 'Design and development of a complete e-commerce application (front-office, back-office, API).',
    },
    highlights: {
      fr: [
        'Développement d\'une API REST avec FastAPI (Python) et PostgreSQL.',
        'Création d\'un front-office React pour les clients (catalogue, panier, paiement).',
        'Mise en place d\'un back-office administrateur pour la gestion des produits, commandes et utilisateurs.',
        'Intégration d\'un système d\'authentification JWT et d\'un paiement simulé (Stripe sandbox).',
        'Déploiement de l\'application sur Docker et documentation complète.',
      ],
      en: [
        'Developed a REST API with FastAPI (Python) and PostgreSQL.',
        'Built a React front-office for customers (catalog, cart, checkout).',
        'Created an admin back-office for products, orders, and user management.',
        'Implemented JWT authentication and a simulated payment system (Stripe sandbox).',
        'Deployed the application using Docker and provided full documentation.',
      ],
    },
    metrics: ['React Frontend', 'FastAPI Backend', 'JWT Auth', 'Dockerized'],
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
  },
  {
    title: {
      fr: 'Développeur Full Stack (Freelance)',
      en: 'Full Stack Developer (Freelance)',
    },
    company: 'Evolix',
    period: 'Février 2026 - Avril 2026',
    periodEn: 'February 2026 - April 2026',
    location: 'Antananarivo, Madagascar (Remote)',
    locationEn: 'Antananarivo, Madagascar (Remote)',
    type: {
      fr: 'Freelance',
      en: 'Freelance',
    },
    summary: {
      fr: 'Développement d\'une application mobile cross-platform avec Ionic et Supabase, couplée à un dashboard d\'administration Angular.',
      en: 'Development of a cross-platform mobile app using Ionic and Supabase, coupled with an Angular admin dashboard.',
    },
    highlights: {
      fr: [
        'Création d\'une application mobile pour la gestion de projets et le suivi de clients.',
        'Intégration de Supabase pour l\'authentification, la base de données temps réel et le stockage.',
        'Dashboard administrateur Angular avec visualisation de données et gestion des utilisateurs.',
        'Mise en place de notifications push et synchronisation hors ligne.',
      ],
      en: [
        'Built a mobile app for project management and client tracking.',
        'Integrated Supabase for authentication, real-time database, and storage.',
        'Developed an Angular admin dashboard for data visualization and user management.',
        'Implemented push notifications and offline synchronization.',
      ],
    },
    metrics: ['Ionic + Supabase', 'Angular Admin', 'Real-time sync', 'Push notifications'],
    technologies: ['Ionic', 'Supabase', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
]

type ExperienceProps = {
  lang: 'fr' | 'en'
  theme?: 'light' | 'dark'
}

export function Experience({ lang, theme = 'light' }: ExperienceProps) {
  const isDark = theme === 'dark'

  const t = {
    fr: {
      section: 'Expérience',
      title: 'Parcours Professionnel',
      subtitle: 'Livraison de valeur, impact métier et exécution technique solide.',
      impact: 'Impacts clés',
      stack: 'Stack technique',
      present: 'Présent',
    },
    en: {
      section: 'Experience',
      title: 'Professional Journey',
      subtitle: 'A track record focused on business impact, delivery quality, and technical ownership.',
      impact: 'Key impact',
      stack: 'Tech stack',
      present: 'Present',
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
  const cardHover = "hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg hover:shadow-emerald-500/5"

  return (
    <section id="experience" className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}>
      
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
            <Sparkles className={`h-4 w-4 ${accent}`} />
            <span className={`text-xs font-bold uppercase tracking-[0.3em] ${accent}`}>
              {t[lang].section}
            </span>
          </div>
          
          <h2 className={`mb-4 text-4xl sm:text-5xl font-black tracking-tight ${textPrimary}`}>
            {t[lang].title}
          </h2>
          <p className={`mx-auto max-w-xl text-base ${textSecondary} font-light`}>
            {t[lang].subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-14 group/timeline">
              
              {/* Ligne de timeline */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[19px] top-14 h-[calc(100%+2rem)] w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-100 to-transparent dark:from-emerald-800 dark:via-emerald-900 dark:to-transparent" />
              )}
              
              {/* Point de timeline */}
              <div className={`absolute left-0 top-10 flex h-10 w-10 items-center justify-center rounded-full border-2 ${accentBorder} bg-white dark:bg-gray-900 transition-all duration-300 group-hover/timeline:scale-110 group-hover/timeline:border-emerald-400 dark:group-hover/timeline:border-emerald-600 group-hover/timeline:shadow-lg`}>
                <BriefcaseBusiness className={`h-4 w-4 ${accent}`} />
              </div>

              {/* Carte d'expérience */}
              <Card className={`group/card relative overflow-hidden rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all duration-300 ${cardHover}`}>
                
                {/* Barre latérale */}
                <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-l-2xl opacity-60 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:w-2`} />
                
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-3">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className={`rounded-lg border-2 ${accentBorder} ${accentBg} ${accent} font-bold px-3 py-1 transition-all duration-300 group-hover/card:scale-105`}>
                          {exp.type[lang]}
                        </Badge>
                        <Badge className={`flex items-center gap-1.5 rounded-lg border ${borderClass} ${subtleBg} text-xs font-medium ${textTertiary}`}>
                          <Globe className="h-3 w-3" />
                          <span>{lang === 'fr' ? exp.location : exp.locationEn}</span>
                        </Badge>
                      </div>

                      {/* Titre */}
                      <CardTitle className={`text-xl font-bold ${textPrimary} transition-colors duration-300`}>
                        {exp.title[lang]}
                      </CardTitle>
                      
                      {/* Entreprise */}
                      <div className={`flex items-center gap-2 ${textSecondary}`}>
                        <div className={`p-1 rounded-md ${accentBg} border ${accentBorder}`}>
                          <Building className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="font-semibold text-sm">{exp.company}</span>
                      </div>
                    </div>
                    
                    {/* Période */}
                    <div className={`flex items-center gap-2 text-sm ${textTertiary} flex-shrink-0`}>
                      <div className={`p-1.5 rounded-md ${accentBg} border ${accentBorder}`}>
                        <Calendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="font-mono text-xs font-medium">
                        {lang === 'fr' ? exp.period : exp.periodEn}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Résumé */}
                  <p className={`mb-6 text-sm leading-relaxed ${textSecondary} font-light border-l-2 ${accentBorder} pl-4`}>
                    {exp.summary[lang]}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary}`}>
                      <TrendingUp className={`h-3.5 w-3.5 ${accent}`} />
                      {t[lang].impact}
                    </p>
                    <ul className="space-y-2.5">
                      {exp.highlights[lang].map((item, i) => (
                        <li key={i} className={`flex items-start gap-3 text-sm ${textSecondary} leading-relaxed`}>
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary} flex items-center gap-2`}>
                      <Cpu className={`h-3.5 w-3.5 ${accent}`} />
                      {t[lang].stack}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => {
                        const techConfig = technologyColors[tech] || { color: "text-gray-600 dark:text-gray-300", bg: "bg-gray-50 dark:bg-gray-900/50", border: "border-gray-200 dark:border-gray-800" };
                        return (
                          <Badge 
                            key={i} 
                            className={`group/badge flex items-center gap-1.5 rounded-lg border-2 ${techConfig.border} ${techConfig.bg} text-xs font-semibold px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default`}
                          >
                            <span className={`${techConfig.color} transition-transform duration-300 group-hover/badge:scale-125`}>
                              {technologyIcons[tech] || <Code2 className="h-3.5 w-3.5" />}
                            </span>
                            <span className={`${techConfig.color}`}>
                              {tech}
                            </span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}