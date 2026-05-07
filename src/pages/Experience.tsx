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
  "React": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  "FastAPI": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  "Python": { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  "PostgreSQL": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  "Docker": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  "Tailwind CSS": { color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/30" },
  "Ionic": { color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  "Supabase": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  "Angular": { color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30" },
  "TypeScript": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
}

const metricIcons: Record<string, React.ReactNode> = {
  "React Frontend": <Code2 className="h-3 w-3" />,
  "FastAPI Backend": <Zap className="h-3 w-3" />,
  "JWT Auth": <Globe className="h-3 w-3" />,
  "Dockerized": <Container className="h-3 w-3" />,
  "Ionic + Supabase": <Smartphone className="h-3 w-3" />,
  "Angular Admin": <Code2 className="h-3 w-3" />,
  "Real-time sync": <Cloud className="h-3 w-3" />,
  "Push notifications": <Zap className="h-3 w-3" />,
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
    gradient: "from-emerald-500 to-teal-500",
    typeColor: "border-emerald-500/40 bg-emerald-500/20 text-emerald-300",
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
    gradient: "from-rose-500 to-purple-500",
    typeColor: "border-rose-500/40 bg-rose-500/20 text-rose-300",
  },
]

type ExperienceProps = {
  lang: 'fr' | 'en'
}

export function Experience({ lang }: ExperienceProps) {
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

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
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

      <div className="relative max-w-5xl mx-auto z-10">
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

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-12 group/timeline"
              style={{ animationDelay: `${index * 120 + 90}ms` }}
            >
              {/* Ligne de timeline améliorée */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[19px] top-12 h-[calc(100%+2rem)] w-px">
                  <div className={`h-full w-full bg-gradient-to-b ${exp.gradient} opacity-30 group-hover/timeline:opacity-60 transition-opacity duration-500`} />
                </div>
              )}
              
              {/* Point de timeline amélioré */}
              <div className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-500/40 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg shadow-indigo-500/10 backdrop-blur-sm transition-all duration-500 group-hover/timeline:scale-110 group-hover/timeline:border-indigo-400/60 group-hover/timeline:shadow-xl group-hover/timeline:shadow-indigo-500/20">
                <BriefcaseBusiness className="h-4 w-4 text-indigo-400 group-hover/timeline:text-indigo-300 transition-colors duration-300" />
              </div>

              {/* Carte d'expérience améliorée */}
              <Card className="group/card relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-[1.01] hover:shadow-2xl hover:shadow-indigo-500/10">
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Barre latérale avec dégradé personnalisé */}
                <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${exp.gradient} rounded-l-2xl opacity-60 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:w-2`} />
                
                <CardHeader className="pb-3 relative">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-3">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className={`rounded-xl border ${exp.typeColor} backdrop-blur-md font-medium px-3 py-1 transition-all duration-300 group-hover/card:scale-105`}>
                          {exp.type[lang]}
                        </Badge>
                        <Badge className="flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 backdrop-blur-md text-indigo-300 text-xs font-medium">
                          <Globe className="h-3 w-3" />
                          <span>{lang === 'fr' ? exp.location : exp.locationEn}</span>
                        </Badge>
                      </div>

                      {/* Titre */}
                      <CardTitle className="text-xl font-bold text-white group-hover/card:text-indigo-200 transition-colors duration-300">
                        {exp.title[lang]}
                      </CardTitle>
                      
                      {/* Entreprise */}
                      <div className="flex items-center gap-2 text-slate-400 group-hover/card:text-slate-300 transition-colors duration-300">
                        <div className="p-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                          <Building className="h-3.5 w-3.5 text-indigo-400" />
                        </div>
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    
                    {/* Période */}
                    <div className="flex items-center gap-2 text-sm text-slate-400 group-hover/card:text-slate-300 transition-colors duration-300">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <Calendar className="h-3.5 w-3.5 text-purple-400" />
                      </div>
                      <span className="font-mono text-xs">
                        {lang === 'fr' ? exp.period : exp.periodEn}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  {/* Résumé */}
                  <p className="mb-5 text-sm leading-relaxed text-slate-400/90 font-light group-hover/card:text-slate-300 transition-colors duration-300">
                    {exp.summary[lang]}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5">
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80">
                      <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
                      {t[lang].impact}
                    </p>
                    <ul className="space-y-2.5">
                      {exp.highlights[lang].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed group-hover/card:text-slate-200 transition-colors duration-300">
                          <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-b ${exp.gradient}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {exp.metrics.map((metric, i) => (
                      <Badge 
                        key={i} 
                        className="flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 backdrop-blur-sm text-purple-300 text-[11px] py-1 px-2.5 font-medium transition-all duration-300 hover:border-purple-500/50 hover:scale-105"
                      >
                        {metricIcons[metric] || <Zap className="h-3 w-3" />}
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80 flex items-center gap-2">
                      <Cpu className="h-3.5 w-3.5" />
                      {t[lang].stack}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => {
                        const techConfig = technologyColors[tech] || { color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/30" };
                        return (
                          <Badge 
                            key={i} 
                            className={`group/badge relative flex items-center gap-1.5 rounded-xl border ${techConfig.border} ${techConfig.bg} backdrop-blur-sm text-xs font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default overflow-hidden`}
                          >
                            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity"></span>
                            <span className={`relative ${techConfig.color} transition-transform duration-300 group-hover/badge:rotate-12`}>
                              {technologyIcons[tech] || <Code2 className="h-3.5 w-3.5" />}
                            </span>
                            <span className="relative text-slate-300 group-hover/badge:text-white transition-colors">
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