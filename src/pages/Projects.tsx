import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ExternalLink, 
  Globe, 
  Code2, 
  Database, 
  Container, 
  Brain, 
  Smartphone, 
  Eye,
  Sparkles,
  ArrowUpRight,
  Zap,
  Layers,
  Cpu,
  Wifi,
  FileText,
  Users,
  BarChart3,
  Cloud,
} from "lucide-react"

const technologyIcons: Record<string, React.ReactNode> = {
  "FastAPI": <Zap className="h-4 w-4" />,
  "React": <Code2 className="h-4 w-4" />,
  "Ionic": <Smartphone className="h-4 w-4" />,
  "Supabase": <Cloud className="h-4 w-4" />,
  "PostgreSQL": <Database className="h-4 w-4" />,
  "Docker": <Container className="h-4 w-4" />,
  "Python": <Code2 className="h-4 w-4" />,
  "TypeScript": <Code2 className="h-4 w-4" />,
  "Angular": <Code2 className="h-4 w-4" />,
  "TensorFlow": <Brain className="h-4 w-4" />,
  "YOLO": <Eye className="h-4 w-4" />,
  "OpenCV": <Eye className="h-4 w-4" />,
  "MySQL": <Database className="h-4 w-4" />,
  "Tailwind CSS": <Layers className="h-4 w-4" />,
}

const projectTypeIcons: Record<string, React.ReactNode> = {
  "Application Mobile": <Smartphone className="h-4 w-4" />,
  "Mobile App": <Smartphone className="h-4 w-4" />,
  "Application Web": <Globe className="h-4 w-4" />,
  "Web App": <Globe className="h-4 w-4" />,
  "IA / Computer Vision": <Brain className="h-4 w-4" />,
  "AI / Computer Vision": <Brain className="h-4 w-4" />,
}

const impactIcons: Record<string, React.ReactNode> = {
  "Temps réel": <Wifi className="h-3 w-3" />,
  "Real-time": <Wifi className="h-3 w-3" />,
  "Notifications push": <Zap className="h-3 w-3" />,
  "Push notifications": <Zap className="h-3 w-3" />,
  "Cross-platform": <Smartphone className="h-3 w-3" />,
  "Gestion académique": <Users className="h-3 w-3" />,
  "Academic management": <Users className="h-3 w-3" />,
  "Workflows": <Layers className="h-3 w-3" />,
  "Génération PDF": <FileText className="h-3 w-3" />,
  "PDF generation": <FileText className="h-3 w-3" />,
  "Gestion projets": <BarChart3 className="h-3 w-3" />,
  "Project management": <BarChart3 className="h-3 w-3" />,
  "Hors ligne": <Cloud className="h-3 w-3" />,
  "Offline": <Cloud className="h-3 w-3" />,
  "Dashboard admin": <BarChart3 className="h-3 w-3" />,
  "Admin dashboard": <BarChart3 className="h-3 w-3" />,
  "Multi-classes": <Eye className="h-3 w-3" />,
  "Multi-class": <Eye className="h-3 w-3" />,
  "Interface web": <Globe className="h-3 w-3" />,
  "Web interface": <Globe className="h-3 w-3" />,
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
    github: "https://github.com/taratra31/Gasy-Talk",
    demo: null,
    icon: Smartphone
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
    github: "https://github.com/taratra31/Visercard",
    demo: null,
    icon: Users
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
    github: "https://www.mediafire.com/file/fcgv9vg3hoe0mrk/Evolix.apk/file",
    demo: null,
    icon: BarChart3
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
    demo: null,
    icon: Brain
  }
]

type ProjectsProps = {
  lang: 'fr' | 'en'
  theme?: 'light' | 'dark'
}

export function Projects({ lang, theme = 'light' }: ProjectsProps) {
  const isDark = theme === 'dark'

  const t = {
    fr: {
      section: 'Portfolio',
      title: 'Projets & Réalisations',
      subtitle: 'Des applications mobiles, web et des solutions basées sur l\'intelligence artificielle.',
      code: 'Code source',
      demo: 'Démo',
      impact: 'Impact',
      technologies: 'Technologies',
    },
    en: {
      section: 'Portfolio',
      title: 'Projects & Work',
      subtitle: 'Mobile apps, web applications, and AI-powered solutions.',
      code: 'Source code',
      demo: 'Demo',
      impact: 'Impact',
      technologies: 'Technologies',
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
    <section id="projects" className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}>
      
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

      <div className="relative max-w-6xl mx-auto z-10">
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
          <p className={`mx-auto max-w-2xl text-base ${textSecondary} font-light`}>
            {t[lang].subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <Card 
                key={project.name} 
                className={`group/card relative overflow-hidden rounded-2xl border-2 ${cardBorder} ${cardBg} transition-all duration-300 ${cardHover}`}
              >
                {/* Barre supérieure */}
                <div className="absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-60 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:h-2" />
                
                <CardHeader className="pb-3 pt-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${accentBg} border-2 ${accentBorder} transition-transform duration-300 group-hover/card:scale-110 group-hover/card:shadow-md`}>
                        <ProjectIcon className={`h-5 w-5 ${accent}`} />
                      </div>
                      <Badge className={`flex items-center gap-1.5 rounded-lg border-2 ${accentBorder} ${accentBg} ${accent} font-bold px-3 py-1.5`}>
                        {projectTypeIcons[project.type[lang]] || <Code2 className="h-3.5 w-3.5" />}
                        {project.type[lang]}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className={`text-xl font-bold ${textPrimary} transition-colors duration-300`}>
                    {project.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <CardDescription className={`mb-5 text-sm leading-relaxed ${textSecondary} font-light border-l-2 ${accentBorder} pl-4`}>
                    {project.description[lang]}
                  </CardDescription>
                  
                  {/* Impact Section */}
                  <div className="mb-5">
                    <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary} flex items-center gap-2`}>
                      <Sparkles className={`h-3 w-3 ${accent}`} />
                      {t[lang].impact}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.impact.map((item, i) => (
                        <Badge 
                          key={i} 
                          className={`flex items-center gap-1.5 rounded-lg border-2 ${borderClass} ${subtleBg} text-xs py-1 px-2.5 font-medium transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 cursor-default`}
                        >
                          <span className={accent}>
                            {impactIcons[item] || <Sparkles className="h-3 w-3" />}
                          </span>
                          <span className={textSecondary}>{item}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies Section */}
                  <div>
                    <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${textTertiary} flex items-center gap-2`}>
                      <Cpu className={`h-3 w-3 ${accent}`} />
                      {t[lang].technologies}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, i) => {
                        return (
                          <Badge 
                            key={i} 
                            className={`group/badge flex items-center gap-1.5 rounded-lg border-2 ${borderClass} ${subtleBg} text-xs py-1.5 px-3 font-medium transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:scale-105 hover:shadow-md cursor-default`}
                          >
                            <span className={`${accent} transition-transform duration-300 group-hover/badge:scale-125`}>
                              {technologyIcons[tech] || <Cpu className="h-3.5 w-3.5" />}
                            </span>
                            <span className={`${textSecondary} group-hover/badge:text-emerald-600 dark:group-hover/badge:text-emerald-400 transition-colors`}>
                              {tech}
                            </span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Actions Buttons */}
                  <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild 
                        className={`group/btn flex items-center gap-2 rounded-xl border-2 ${accentBorder} ${accentBg} ${accent} font-semibold text-xs uppercase tracking-wider px-4 py-2.5 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 dark:hover:bg-emerald-600 dark:hover:border-emerald-600`}
                      >
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Globe className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                          {t[lang].code}
                          <ArrowUpRight className="h-3 w-3 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild 
                        className={`group/btn flex items-center gap-2 rounded-xl border-2 ${accentBorder} ${accentBg} ${accent} font-semibold text-xs uppercase tracking-wider px-4 py-2.5 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 dark:hover:bg-emerald-600 dark:hover:border-emerald-600`}
                      >
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                          {t[lang].demo}
                          <ArrowUpRight className="h-3 w-3 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}