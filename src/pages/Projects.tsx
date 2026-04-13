import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Globe, Code2, Database, Container, Brain, Smartphone, Eye } from "lucide-react"

const technologyIcons: Record<string, React.ReactNode> = {
  "FastAPI": <Code2 className="h-4 w-4" />,
  "React": <Code2 className="h-4 w-4" />,
  "Ionic": <Smartphone className="h-4 w-4" />,
  "Supabase": <Database className="h-4 w-4" />,
  "PostgreSQL": <Database className="h-4 w-4" />,
  "Docker": <Container className="h-4 w-4" />,
  "Python": <Code2 className="h-4 w-4" />,
  "TypeScript": <Code2 className="h-4 w-4" />,
  "Angular": <Code2 className="h-4 w-4" />,
  "TensorFlow": <Brain className="h-4 w-4" />,
  "YOLO": <Eye className="h-4 w-4" />,
  "OpenCV": <Eye className="h-4 w-4" />,
  "MySQL": <Database className="h-4 w-4" />,
}

const projects = [
  {
    name: "Gasy Talk",
    type: {
      fr: 'Application Mobile',
      en: 'Mobile App',
    },
    description: {
      fr: "Application de messagerie instantanée et d'appels vocaux développée avec Ionic et Supabase. Interface utilisateur fluide, notifications push et synchronisation en temps réel.",
      en: 'Instant messaging and voice calling app developed with Ionic and Supabase. Smooth UI, push notifications, and real-time synchronization.',
    },
    impact: ['Temps réel', 'Notifications push', 'Cross-platform'],
    technologies: ["Ionic", "Supabase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/taratra31/gasy-talk",
    demo: null
  },
  {
    name: "Scolary",
    type: {
      fr: 'Application Web',
      en: 'Web App',
    },
    description: {
      fr: "Système de gestion académique complet : inscriptions, notes, documents, et workflows de validation. Interface administrateur avec gestion des rôles et génération de rapports.",
      en: 'Complete academic management system: enrollment, grades, documents, and validation workflows. Admin interface with role management and report generation.',
    },
    impact: ['Gestion académique', 'Workflows', 'Génération PDF'],
    technologies: ["React", "FastAPI", "Python", "MySQL", "Docker"],
    github: "https://github.com/taratra31/scolary",
    demo: null
  },
  {
    name: "Evolix",
    type: {
      fr: 'Application Mobile',
      en: 'Mobile App',
    },
    description: {
      fr: "Application mobile cross-platform pour la gestion de projets et le suivi clients. Dashboard administrateur avec visualisation de données et synchronisation hors ligne.",
      en: 'Cross-platform mobile app for project management and client tracking. Admin dashboard with data visualization and offline sync.',
    },
    impact: ['Gestion projets', 'Hors ligne', 'Dashboard admin'],
    technologies: ["Ionic", "Supabase", "React", "TypeScript"],
    github: "https://github.com/taratra31/evolix",
    demo: null
  },
  {
    name: "Detection Objet",
    type: {
      fr: 'IA / Computer Vision',
      en: 'AI / Computer Vision',
    },
    description: {
      fr: "Système de détection d'objets en temps réel utilisant YOLO et OpenCV. Reconnaissance multi-classes avec interface web pour le téléversement et l'analyse d'images.",
      en: 'Real-time object detection system using YOLO and OpenCV. Multi-class recognition with web interface for image upload and analysis.',
    },
    impact: ['Temps réel', 'Multi-classes', 'Interface web'],
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "FastAPI"],
    github: "https://github.com/taratra31/detection-objet",
    demo: null
  }
]

type ProjectsProps = {
  lang: 'fr' | 'en'
}

export function Projects({ lang }: ProjectsProps) {
  const t = {
    fr: {
      section: 'Portfolio',
      title: 'Projets & Réalisations',
      subtitle: 'Des applications mobiles, web et des solutions basées sur l\'intelligence artificielle.',
      code: 'Code',
      demo: 'Démo',
      impact: 'Impact',
    },
    en: {
      section: 'Portfolio',
      title: 'Projects & Work',
      subtitle: 'Mobile apps, web applications, and AI-powered solutions.',
      code: 'Code',
      demo: 'Demo',
      impact: 'Impact',
    },
  } as const

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="group relative overflow-hidden border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <Badge className="border-indigo-400/30 bg-indigo-500/20 text-indigo-300">
                    {project.type[lang]}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="mb-4 text-slate-400 text-sm">
                  {project.description[lang]}
                </CardDescription>
                
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-400">{t[lang].impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.impact.map((item, i) => (
                      <Badge key={i} className="border-purple-400/30 bg-purple-500/20 text-purple-300 text-[10px] py-0.5">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} className="flex items-center gap-1.5 border-indigo-400/30 bg-slate-700/50 text-xs text-slate-300">
                      {technologyIcons[tech] || <Code2 className="h-3 w-3" />}
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild className="border border-indigo-400/50 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Globe className="h-3.5 w-3.5 mr-1" />
                        {t[lang].code}
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="sm" asChild className="border border-purple-400/50 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        {t[lang].demo}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}