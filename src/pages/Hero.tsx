import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { 
  ArrowRight, 
  ArrowUpRight, 
  Briefcase, 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  Code2,
  Sparkles,
  Award,
  FolderGit2,
  Star,
  Rocket,
  Globe,
  Link,
  User,
  Layers,
  Zap,
  Command
} from "lucide-react";
import cvFile from "@/assets/AndriamihajaCV.pdf";
import profilePic from "@/assets/Taratra2.png";

type HeroProps = {
  lang: "fr" | "en";
};

const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || 'Andriamihaja Taratra';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'andriamtaratra@gmail.com';
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '+261 38 05 431 68';
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || 'Antananarivo, Madagascar';
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/taratra31';
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/taratra-andriam';

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const translations = {
    fr: {
      status: "Junior Full Stack Developer | 2 ans d'expérience",
      title: "Je transforme les idées en applications web performantes.",
      description:
        "Développeur passionné avec 2 ans d'expérience et 5+ projets livrés. Je maîtrise le développement d'applications web modernes avec React, TypeScript, Laravel et Node.js. Toujours curieux d'apprendre de nouvelles technologies pour créer des solutions innovantes.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Télécharger CV",
      contactInfo: "Me contacter",
      sendMessage: "Envoyer un message",
      specialties: "Passionné par le développement web, les APIs RESTful et les architectures modernes.",
      role: "Développeur Full Stack Junior",
      projects: "Projets",
      experience: "Expérience",
      satisfaction: "Satisfaction",
      myProjects: "Projets récents",
      about: "À propos",
      yearsExp: "ans"
    },
    en: {
      status: "Junior Full Stack Developer | 2 years experience",
      title: "Turning ideas into performant web applications.",
      description:
        "Passionate developer with 2 years of experience and 5+ delivered projects. I master modern web application development with React, TypeScript, Laravel, and Node.js. Always eager to learn new technologies to create innovative solutions.",
      ctaPrimary: "View my projects",
      ctaSecondary: "Download CV",
      contactInfo: "Contact me",
      sendMessage: "Send message",
      specialties: "Passionate about web development, RESTful APIs, and modern architectures.",
      role: "Junior Full Stack Developer",
      projects: "Projects",
      experience: "Experience",
      satisfaction: "Satisfaction",
      myProjects: "Recent projects",
      about: "About",
      yearsExp: "years"
    },
  } as const;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isDesktop || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
      
      setMousePosition({ 
        x: (relativeX - 0.5) * 12, 
        y: (relativeY - 0.5) * 8 
      });
    };

    const resetPosition = () => setMousePosition({ x: 0, y: 0 });

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetPosition);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  const techStack = [
    { name: "React", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: Code2 },
    { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", icon: Command },
    { name: "Node.js", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: Layers },
    { name: "Laravel", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", icon: Zap },
    { name: "Python", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", icon: Code2 },
    { name: "Tailwind", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30", icon: Layers },
    { name: "Git", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", icon: Code2 }
  ];

  const stats = [
    { value: "5+", label: translations[lang].projects, icon: FolderGit2, gradient: "from-cyan-500 to-blue-500" },
    { value: "2", label: translations[lang].experience + " " + translations[lang].yearsExp, icon: Briefcase, gradient: "from-rose-500 to-amber-500" },
    { value: "100%", label: translations[lang].satisfaction, icon: Award, gradient: "from-emerald-500 to-teal-500" }
  ];

  const featuredProjects = [
    { name: "Evolix", tech: "Ionic, Supabase", icon: Rocket },
    { name: "Scolary", tech: "React, FastAPI, MySQL", icon: Star },
    { name: "Gasy Talk", tech: "Ionic, Supabase", icon: Code2 }
  ];

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #0b0f19 0%, #131127 30%, #1a1030 60%, #0b0f19 100%)"
      }}
    >
      {/* Enhanced Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbes animées plus prononcées */}
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

      <div 
        ref={containerRef}
        className="relative max-w-7xl mx-auto w-full z-10"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:col-span-7">
            {/* Status Badge - Amélioré */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 backdrop-blur-md px-5 py-2.5 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-lg shadow-emerald-500/50"></span>
              </span>
              <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                {translations[lang].status}
              </span>
            </div>

            {/* Name - Style amélioré */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-indigo-400/90">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">{translations[lang].about}</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {PROFILE_NAME}
              </h2>
            </div>

            {/* Title - Plus impactant */}
            <h1 className="font-extrabold text-4xl leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {translations[lang].title}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-300/90 font-light">
              {translations[lang].description}
            </p>

            {/* Tech Stack - Style amélioré avec bordures et animations */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <Badge 
                    key={tech.name}
                    className={`group relative rounded-xl border ${tech.border} ${tech.bg} backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-${tech.color.split('-')[1]}-500/20 cursor-default`}
                  >
                    <Icon className={`h-3.5 w-3.5 mr-2 ${tech.color} transition-transform duration-300 group-hover:rotate-12`} />
                    <span className="text-slate-200 group-hover:text-white transition-colors">{tech.name}</span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Badge>
                );
              })}
            </div>

            {/* CTA Buttons - Style amélioré */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild 
                size="lg"
                className="group relative rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 px-8 py-6 text-white shadow-xl shadow-indigo-500/25 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 hover:from-indigo-500 hover:via-purple-500 hover:to-rose-500"
              >
                <a href="#projects">
                  <span className="relative z-10 flex items-center font-semibold">
                    {translations[lang].ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="group rounded-2xl border-2 border-indigo-500/50 bg-slate-900/50 backdrop-blur-md px-8 py-6 text-indigo-300 font-semibold transition-all duration-300 hover:bg-indigo-950/50 hover:border-indigo-400 hover:text-indigo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <a href={cvFile} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  {translations[lang].ctaSecondary}
                </a>
              </Button>
            </div>

            {/* Featured Projects - Style amélioré */}
            <div className="border-t border-indigo-500/20 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80 mb-4">
                {translations[lang].myProjects}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md p-4 transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <Icon className="h-4 w-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white truncate group-hover:text-indigo-200 transition-colors">{project.name}</p>
                          <p className="text-xs text-slate-400 truncate group-hover:text-slate-300 transition-colors">{project.tech}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Specialties - Style amélioré */}
            <div className="border-t border-indigo-500/20 pt-6">
              <div className="flex items-center gap-2.5 text-indigo-400 mb-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.25em]">Passions</span>
              </div>
              <p className="text-sm text-slate-400/90 leading-relaxed font-light">
                {translations[lang].specialties}
              </p>
            </div>
          </div>

          {/* Right Column - Profile Card améliorée */}
          <div className="relative lg:col-span-5">
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {/* Main Profile Card */}
              <div className="relative group">
                {/* Glow effects améliorés */}
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-rose-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 blur opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

                {/* Profile Image Container - Style amélioré */}
                <div className="relative rounded-[2.5rem] border border-indigo-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm overflow-hidden">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="overflow-hidden rounded-[2rem] relative bg-gradient-to-b from-slate-900 to-black">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                        <div className="h-8 w-8 border-2 border-indigo-500/30 border-t-indigo-400 rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={profilePic}
                      alt={PROFILE_NAME}
                      onLoad={() => setImageLoaded(true)}
                      className={`w-full h-auto min-h-[400px] max-h-[480px] object-contain object-center transition-all duration-1000 group-hover:scale-105 lg:min-h-[450px] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      style={{ objectPosition: 'center 30%' }}
                    />
                    {/* Overlay gradient amélioré */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
                    
                    {/* Effet de bordure lumineuse au survol */}
                    <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 group-hover:ring-indigo-500/20 transition-all duration-700"></div>
                  </div>

                  {/* Floating Info Card - Améliorée */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-slate-950/95 to-indigo-950/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-500 group-hover:border-indigo-500/60 group-hover:shadow-indigo-500/20">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-indigo-500/20">
                        <User className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {PROFILE_NAME}
                        </h3>
                        <p className="flex items-center gap-1.5 text-xs font-medium text-indigo-400/90">
                          <Briefcase className="h-3 w-3" />
                          {translations[lang].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section - Améliorée */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md p-4 text-center transition-all duration-500 hover:border-indigo-500/50 hover:from-slate-800/90 hover:to-indigo-950/80 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className="inline-flex p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                        </div>
                        <p className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1 group-hover:text-slate-300 transition-colors leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links - Améliorés */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-center gap-2.5 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md px-5 py-3.5 transition-all duration-500 hover:border-indigo-400/60 hover:from-indigo-950/80 hover:to-purple-950/80 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-2.5">
                    <Globe className="h-4 w-4 text-slate-300 group-hover:text-indigo-400 transition-colors duration-300" />
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">GitHub</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </a>
                
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-center gap-2.5 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md px-5 py-3.5 transition-all duration-500 hover:border-purple-400/60 hover:from-purple-950/80 hover:to-indigo-950/80 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-2.5">
                    <Link className="h-4 w-4 text-slate-300 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </a>
              </div>

              {/* Contact Info - Améliorée */}
              <div className="mt-6 space-y-2.5 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md p-5 transition-all duration-500 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400/80">
                  {translations[lang].contactInfo}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300 group/item">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border border-indigo-500/20 group-hover/item:from-indigo-500/30 group-hover/item:to-indigo-600/30 transition-all duration-300">
                      <Phone className="h-3.5 w-3.5 text-indigo-400 group-hover/item:text-indigo-300 transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover/item:text-slate-200 transition-colors">{CONTACT_PHONE_DISPLAY}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-300 group/item">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20 group-hover/item:from-purple-500/30 group-hover/item:to-purple-600/30 transition-all duration-300">
                      <Mail className="h-3.5 w-3.5 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
                    </div>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-xs transition-all duration-300 hover:text-indigo-400 truncate text-slate-400 hover:text-indigo-300"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-300 group/item">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/20 group-hover/item:from-cyan-500/30 group-hover/item:to-cyan-600/30 transition-all duration-300">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors" />
                    </div>
                    <span className="text-xs text-slate-400 group-hover/item:text-slate-200 transition-colors">{CONTACT_LOCATION}</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Button - Amélioré */}
              <Button 
                className="mt-5 w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 py-6 text-white font-semibold shadow-xl shadow-indigo-500/25 transition-all duration-500 hover:from-indigo-500 hover:via-purple-500 hover:to-rose-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  {translations[lang].sendMessage}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}