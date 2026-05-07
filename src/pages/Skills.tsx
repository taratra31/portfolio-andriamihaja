import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Network, 
  Settings,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Cloud,
  Smartphone,
  Container,
  Eye,
  GitBranch,
  Terminal,
  Workflow,
  MessageSquare,
  Server,
  Shield,
  HardDrive,
  Upload,
  Mail,
  Wifi
} from 'lucide-react'

const skillCategories = [
  {
    title: {
      fr: 'Langages',
      en: 'Languages',
    },
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
    skills: {
      fr: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
      en: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
    },
  },
  {
    title: {
      fr: 'Frameworks',
      en: 'Frameworks',
    },
    icon: Layout,
    gradient: "from-purple-500 to-pink-500",
    skills: {
      fr: ['FastAPI', 'React', 'Ionic', 'Angular', 'Vite', 'Tailwind CSS', 'Laravel'],
      en: ['FastAPI', 'React', 'Ionic', 'Angular', 'Vite', 'Tailwind CSS', 'Laravel'],
    },
  },
  {
    title: {
      fr: 'Bases de données',
      en: 'Databases',
    },
    icon: Database,
    gradient: "from-emerald-500 to-teal-500",
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
    gradient: "from-amber-500 to-orange-500",
    skills: {
      fr: ['YOLO', 'OpenCV', 'TensorFlow', 'Détection objets'],
      en: ['YOLO', 'OpenCV', 'TensorFlow', 'Object Detection'],
    },
  },
  {
    title: {
      fr: 'DevOps & Outils',
      en: 'DevOps & Tools',
    },
    icon: Settings,
    gradient: "from-rose-500 to-red-500",
    skills: {
      fr: ['Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'Nginx'],
      en: ['Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'Nginx'],
    },
  },
  {
    title: {
      fr: 'Hébergement & Déploiement',
      en: 'Hosting & Deployment',
    },
    icon: Cloud,
    gradient: "from-sky-500 to-indigo-500",
    skills: {
      fr: ['cPanel', 'VPS', 'CPanel', 'WHM', 'FTP', 'DNS', 'SSL/TLS', 'Apache', 'Nginx'],
      en: ['cPanel', 'VPS', 'WHM', 'FTP', 'DNS', 'SSL/TLS', 'Apache', 'Nginx'],
    },
  },
  {
    title: {
      fr: 'Services Web',
      en: 'Web Services',
    },
    icon: Globe,
    gradient: "from-violet-500 to-purple-500",
    skills: {
      fr: ['API REST', 'WebSockets', 'Base de données temps réel', 'Auth (JWT/OAuth)'],
      en: ['REST API', 'WebSockets', 'Real-time DB', 'Auth (JWT/OAuth)'],
    },
  },
  {
    title: {
      fr: 'Méthodes & Gestion',
      en: 'Methods & Management',
    },
    icon: Workflow,
    gradient: "from-teal-500 to-cyan-500",
    skills: {
      fr: ['Workflows', 'Git Flow', 'Automatisation', 'Documentation', 'Tests'],
      en: ['Workflows', 'Git Flow', 'Automation', 'Documentation', 'Tests'],
    },
  },
  {
    title: {
      fr: 'Email & Communication',
      en: 'Email & Communication',
    },
    icon: Mail,
    gradient: "from-blue-500 to-cyan-500",
    skills: {
      fr: ['cPanel Email', 'SMTP', 'Webmail', 'DNS (MX/SPF/DKIM)', 'PHPMailer'],
      en: ['cPanel Email', 'SMTP', 'Webmail', 'DNS (MX/SPF/DKIM)', 'PHPMailer'],
    },
  },
  {
    title: {
      fr: 'Langues',
      en: 'Languages',
    },
    icon: MessageSquare,
    gradient: "from-pink-500 to-rose-500",
    skills: {
      fr: ['Français (B2)', 'Anglais (B1 technique)', 'Malgache (natif)'],
      en: ['French (B2)', 'English (B1 technical)', 'Malagasy (native)'],
    },
  },
]

// Icônes personnalisées pour certaines compétences
const skillIcons: Record<string, React.ReactNode> = {
  "Python": <Code2 className="h-3 w-3" />,
  "TypeScript": <Code2 className="h-3 w-3" />,
  "JavaScript": <Code2 className="h-3 w-3" />,
  "SQL": <Database className="h-3 w-3" />,
  "PHP": <Code2 className="h-3 w-3" />,
  "PHP Mailer": <Mail className="h-3 w-3" />,
  "FastAPI": <Zap className="h-3 w-3" />,
  "React": <Code2 className="h-3 w-3" />,
  "Ionic": <Smartphone className="h-3 w-3" />,
  "Angular": <Code2 className="h-3 w-3" />,
  "Vite": <Zap className="h-3 w-3" />,
  "Tailwind CSS": <Layers className="h-3 w-3" />,
  "Laravel": <Code2 className="h-3 w-3" />,
  "PostgreSQL": <Database className="h-3 w-3" />,
  "Supabase": <Cloud className="h-3 w-3" />,
  "MySQL": <Database className="h-3 w-3" />,
  "MongoDB": <Database className="h-3 w-3" />,
  "YOLO": <Eye className="h-3 w-3" />,
  "OpenCV": <Eye className="h-3 w-3" />,
  "TensorFlow": <Brain className="h-3 w-3" />,
  "Détection objets": <Eye className="h-3 w-3" />,
  "Object Detection": <Eye className="h-3 w-3" />,
  "Docker": <Container className="h-3 w-3" />,
  "Git": <GitBranch className="h-3 w-3" />,
  "GitHub": <GitBranch className="h-3 w-3" />,
  "Linux": <Terminal className="h-3 w-3" />,
  "CI/CD": <Workflow className="h-3 w-3" />,
  "Nginx": <Server className="h-3 w-3" />,
  "cPanel": <Server className="h-3 w-3" />,
  "VPS": <HardDrive className="h-3 w-3" />,
  "WHM": <Server className="h-3 w-3" />,
  "FTP": <Upload className="h-3 w-3" />,
  "DNS": <Network className="h-3 w-3" />,
  "SSL/TLS": <Shield className="h-3 w-3" />,
  "Apache": <Server className="h-3 w-3" />,
  "API REST": <Globe className="h-3 w-3" />,
  "REST API": <Globe className="h-3 w-3" />,
  "WebSockets": <Wifi className="h-3 w-3" />,
  "Base de données temps réel": <Database className="h-3 w-3" />,
  "Real-time DB": <Database className="h-3 w-3" />,
  "Auth (JWT/OAuth)": <Shield className="h-3 w-3" />,
  "Workflows": <Workflow className="h-3 w-3" />,
  "Git Flow": <GitBranch className="h-3 w-3" />,
  "Automatisation": <Settings className="h-3 w-3" />,
  "Automation": <Settings className="h-3 w-3" />,
  "Documentation": <Layout className="h-3 w-3" />,
  "Tests": <Shield className="h-3 w-3" />,
  "cPanel Email": <Mail className="h-3 w-3" />,
  "SMTP": <Mail className="h-3 w-3" />,
  "Webmail": <Mail className="h-3 w-3" />,
  "DNS (MX/SPF/DKIM)": <Shield className="h-3 w-3" />,
  "Français (B2)": <MessageSquare className="h-3 w-3" />,
  "French (B2)": <MessageSquare className="h-3 w-3" />,
  "Anglais (B1 technique)": <MessageSquare className="h-3 w-3" />,
  "English (B1 technical)": <MessageSquare className="h-3 w-3" />,
  "Malgache (natif)": <MessageSquare className="h-3 w-3" />,
  "Malagasy (native)": <MessageSquare className="h-3 w-3" />,
}

type SkillsProps = {
  lang: 'fr' | 'en'
}

export function Skills({ lang }: SkillsProps) {
  const t = {
    fr: {
      section: 'Compétences',
      title: 'Stack Technique',
      subtitle: 'Technologies, outils et services maîtrisés pour des projets complets, du développement au déploiement.',
      categoryCount: 'catégories',
      skillCount: 'compétences',
    },
    en: {
      section: 'Skills',
      title: 'Tech Stack',
      subtitle: 'Technologies, tools, and services mastered for complete projects, from development to deployment.',
      categoryCount: 'categories',
      skillCount: 'skills',
    },
  } as const

  // Calculer le nombre total de compétences
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills[lang].length, 0)

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" style={{
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

      <div className="relative max-w-7xl mx-auto z-10">
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
          
          {/* Stats rapides */}
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Layout className="h-4 w-4 text-indigo-400" />
              </div>
              <span className="text-sm">
                <strong className="text-white">{skillCategories.length}</strong> {t[lang].categoryCount}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                <Cpu className="h-4 w-4 text-purple-400" />
              </div>
              <span className="text-sm">
                <strong className="text-white">{totalSkills}</strong> {t[lang].skillCount}
              </span>
            </div>
          </div>
        </div>

        {/* Grille de compétences */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title.en} 
                className="group/card relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/10"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                {/* Barre supérieure avec dégradé */}
                <div className={`absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r ${category.gradient} opacity-60 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:h-2`} />
                
                <CardHeader className="pb-3 pt-5 relative">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold text-white group-hover/card:text-indigo-200 transition-colors duration-300">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-20 border border-indigo-500/20 group-hover/card:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5 text-indigo-300 group-hover/card:text-white transition-colors" />
                    </div>
                    {category.title[lang]}
                  </CardTitle>
                  <div className="mt-2">
                    <Badge className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 text-indigo-400/60 text-[10px] font-normal">
                      {category.skills[lang].length} {lang === 'fr' ? 'outils' : 'tools'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative pb-5">
                  <div className="flex flex-wrap gap-2">
                    {category.skills[lang].map((skill, i) => (
                      <Badge 
                        key={i} 
                        className="group/badge relative flex items-center gap-1.5 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 to-purple-950/30 backdrop-blur-sm text-indigo-300 text-xs py-1.5 px-3 font-medium transition-all duration-300 hover:border-indigo-500/50 hover:from-indigo-900/40 hover:to-purple-900/40 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/10 cursor-default overflow-hidden"
                      >
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity"></span>
                        <span className="relative transition-transform duration-300 group-hover/badge:rotate-12">
                          {skillIcons[skill] || <Code2 className="h-3 w-3" />}
                        </span>
                        <span className="relative text-slate-300 group-hover/badge:text-white transition-colors">
                          {skill}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Note en bas */}
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-500/10">
            <Zap className="h-3 w-3 text-indigo-400" />
            {lang === 'fr' 
              ? 'Stack évolutive — toujours en apprentissage de nouvelles technologies' 
              : 'Evolving stack — always learning new technologies'}
          </p>
        </div>
      </div>
    </section>
  )
}