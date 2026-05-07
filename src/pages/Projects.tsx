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
  Cloud
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

const technologyColors: Record<string, { color: string; bg: string; border: string }> = {
  "FastAPI": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  "React": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  "Ionic": { color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  "Supabase": { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  "PostgreSQL": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  "Docker": { color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  "Python": { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  "TypeScript": { color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  "Angular": { color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30" },
  "TensorFlow": { color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  "YOLO": { color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  "OpenCV": { color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  "MySQL": { color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  "Tailwind CSS": { color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/30" },
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
    github: "https://github.com/taratra31/gasy-talk",
    demo: null,
    gradient: "from-cyan-500 to-blue-500",
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
    github: "https://github.com/taratra31/scolary",
    demo: null,
    gradient: "from-emerald-500 to-teal-500",
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
    github: "https://github.com/taratra31/evolix",
    demo: null,
    gradient: "from-rose-500 to-purple-500",
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
    gradient: "from-amber-500 to-orange-500",
    icon: Brain
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

      <div className="relative max-w-6xl mx-auto z-10">
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <Card 
                key={project.name} 
                className="group relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Barre latérale avec dégradé */}
                <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${project.gradient} rounded-l-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:w-2`} />
                
                <CardHeader className="pb-3 relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
                        <ProjectIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                      </div>
                      <Badge className={`border border-indigo-500/30 bg-gradient-to-r from-indigo-950/90 to-purple-950/90 backdrop-blur-md text-indigo-300 font-medium px-3 py-1 group-hover:border-indigo-500/50 transition-all duration-300`}>
                        {project.type[lang]}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 relative">
                  <CardDescription className="mb-5 text-slate-400/90 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
                    {project.description[lang]}
                  </CardDescription>
                  
                  {/* Impact Section */}
                  <div className="mb-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80">
                      {t[lang].impact}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.impact.map((item, i) => (
                        <Badge 
                          key={i} 
                          className="flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 backdrop-blur-sm text-purple-300 text-[11px] py-1 px-2.5 font-medium transition-all duration-300 hover:border-purple-500/50 hover:scale-105"
                        >
                          {impactIcons[item] || <Sparkles className="h-3 w-3" />}
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies Section */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => {
                      const colors = technologyColors[tech] || { color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/30" };
                      return (
                        <Badge 
                          key={i} 
                          className={`group/badge relative flex items-center gap-1.5 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm text-xs font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default overflow-hidden`}
                        >
                          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity"></span>
                          <span className={`relative ${colors.color} transition-transform duration-300 group-hover/badge:rotate-12`}>
                            {technologyIcons[tech] || <Cpu className="h-3.5 w-3.5" />}
                          </span>
                          <span className="relative text-slate-300 group-hover/badge:text-white transition-colors">
                            {tech}
                          </span>
                        </Badge>
                      );
                    })}
                  </div>
                  
                  {/* Actions Buttons */}
                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild 
                        className="group/btn relative overflow-hidden rounded-xl border border-indigo-500/40 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 backdrop-blur-md text-indigo-300 font-medium transition-all duration-500 hover:border-indigo-400/60 hover:from-indigo-900/50 hover:to-purple-900/50 hover:text-indigo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
                      >
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          <span className="relative flex items-center">
                            <Globe className="h-4 w-4 mr-1.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            {t[lang].code}
                            <ArrowUpRight className="h-3 w-3 ml-1 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                          </span>
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild 
                        className="group/btn relative overflow-hidden rounded-xl border border-purple-500/40 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 backdrop-blur-md text-purple-300 font-medium transition-all duration-500 hover:border-purple-400/60 hover:from-purple-900/50 hover:to-indigo-900/50 hover:text-purple-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                      >
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                          <span className="relative flex items-center">
                            <ExternalLink className="h-4 w-4 mr-1.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            {t[lang].demo}
                            <ArrowUpRight className="h-3 w-3 ml-1 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                          </span>
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