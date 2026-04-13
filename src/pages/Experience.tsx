import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BriefcaseBusiness, Building, Calendar, TrendingUp } from 'lucide-react'

const experiences = [
{
    title: {
      fr: 'Stagiaire Développeur Full Stack',
      en: 'Full Stack Developer Intern',
    },
    company: "M'lay design",
    period: 'Mars 2026 - Présent',
    location: 'Antananarivo, Madagascar (sur site)',
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
        'Développement d’une API REST avec FastAPI (Python) et PostgreSQL.',
        'Création d’un front-office React pour les clients (catalogue, panier, paiement).',
        'Mise en place d’un back-office administrateur pour la gestion des produits, commandes et utilisateurs.',
        'Intégration d’un système d’authentification JWT et d’un paiement simulé (Stripe sandbox).',
        'Déploiement de l’application sur Docker et documentation complète.',
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
    location: 'Antananarivo, Madagascar (Remote)',
    type: {
      fr: 'Freelance',
      en: 'Freelance',
    },
    summary: {
      fr: 'Développement d’une application mobile cross-platform avec Ionic et Supabase, couplée à un dashboard d’administration Angular.',
      en: 'Development of a cross-platform mobile app using Ionic and Supabase, coupled with an Angular admin dashboard.',
    },
    highlights: {
      fr: [
        'Création d’une application mobile pour la gestion de projets et le suivi de clients.',
        'Intégration de Supabase pour l’authentification, la base de données temps réel et le stockage.',
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
}

export function Experience({ lang }: ExperienceProps) {
  const t = {
    fr: {
      section: 'Expérience',
      title: 'Parcours Professionnel',
      subtitle: 'Livraison de valeur, impact métier et exécution technique solide.',
      impact: 'Impacts clés',
      stack: 'Stack',
    },
    en: {
      section: 'Experience',
      title: 'Professional Experience',
      subtitle: 'A track record focused on business impact, delivery quality, and technical ownership.',
      impact: 'Key impact',
      stack: 'Stack',
    },
  } as const

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
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

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-indigo-400">{t[lang].section}</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
              {t[lang].title}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            {t[lang].subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8" style={{ animationDelay: `${index * 120 + 90}ms` }}>
              {index < experiences.length - 1 && (
                <div className="absolute left-[9px] top-9 h-[calc(100%+1.8rem)] w-px bg-gradient-to-b from-indigo-500/50 to-purple-500/50" />
              )}
              <div className="absolute left-0 top-7 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/20 shadow-sm backdrop-blur-sm">
                <BriefcaseBusiness className="h-3 w-3 text-indigo-400" />
              </div>

              <Card className="relative overflow-hidden border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="border-indigo-400/50 bg-indigo-500/20 text-indigo-300">
                          {exp.type[lang]}
                        </Badge>
                        <Badge variant="secondary" className="border border-indigo-400/30 bg-slate-700/50 text-xs text-slate-300">
                          {exp.location}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl text-white">
                        {exp.title[lang]}
                      </CardTitle>
                      <div className="mt-1 flex items-center gap-2 text-slate-400">
                        <Building className="h-4 w-4 text-indigo-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm leading-relaxed text-slate-300">
                    {exp.summary[lang]}
                  </p>

                  <div className="mb-5">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-400">
                      <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
                      {t[lang].impact}
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      {exp.highlights[lang].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {exp.metrics.map((metric, i) => (
                      <Badge key={i} variant="outline" className="border-purple-400/50 bg-purple-500/20 text-purple-300">
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="border border-indigo-400/30 bg-slate-700/50 text-xs text-slate-300">
                        {tech}
                      </Badge>
                    ))}
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