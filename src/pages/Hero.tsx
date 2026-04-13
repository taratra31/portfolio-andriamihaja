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
  User
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

  const translations = {
    fr: {
      status: "Junior Full Stack Developer | 2 ans d'expérience",
      title: "Je transforme les idées en applications web performantes.",
      description:
        "Développeur passionné avec 2 ans d'expérience et 5+ projets livrés. Je maîtrise le développement d'applications web modernes avec React, TypeScript, et Node.js. Toujours curieux d'apprendre de nouvelles technologies pour créer des solutions innovantes.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Télécharger CV",
      contactInfo: "Me contacter",
      sendMessage: "Envoyer un message",
      specialties: "Passionné par le développement web, les interfaces modernes et les solutions innovantes.",
      role: "Développeur Full Stack Junior",
      projects: "Projets",
      experience: "Expérience",
      satisfaction: "Satisfaction",
      myProjects: "Projets récents",
      about: "À propos"
    },
    en: {
      status: "Junior Full Stack Developer | 2 years experience",
      title: "Turning ideas into performant web applications.",
      description:
        "Passionate developer with 2 years of experience and 5+ delivered projects. I master modern web application development with React, TypeScript, and Node.js. Always eager to learn new technologies to create innovative solutions.",
      ctaPrimary: "View my projects",
      ctaSecondary: "Download CV",
      contactInfo: "Contact me",
      sendMessage: "Send message",
      specialties: "Passionate about web development, modern interfaces, and innovative solutions.",
      role: "Junior Full Stack Developer",
      projects: "Projects",
      experience: "Experience",
      satisfaction: "Satisfaction",
      myProjects: "Recent projects",
      about: "About"
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
        x: (relativeX - 0.5) * 15, 
        y: (relativeY - 0.5) * 10 
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
    { name: "React", color: "text-sky-400", bg: "bg-sky-500/10" },
    { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-500/10" },
    { name: "Node.js", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { name: "Python", color: "text-amber-400", bg: "bg-amber-500/10" },
    { name: "Tailwind", color: "text-teal-400", bg: "bg-teal-500/10" },
    { name: "Git", color: "text-orange-400", bg: "bg-orange-500/10" }
  ];

  const stats = [
    { value: "5+", label: translations[lang].projects, icon: FolderGit2 },
    { value: "2", label: translations[lang].experience, icon: Briefcase },
    { value: "100%", label: translations[lang].satisfaction, icon: Award }
  ];

  // Projets réels
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
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)"
      }}
    >
      {/* Animated background effects */}
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

      <div 
        ref={containerRef}
        className="relative max-w-7xl mx-auto w-full z-10"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-sm px-4 py-2 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-200">
                {translations[lang].status}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                <User className="h-5 w-5" />
                <span className="text-sm uppercase tracking-wider">{translations[lang].about}</span>
              </div>
              <h2 className="text-2xl font-semibold text-indigo-300">
                {PROFILE_NAME}
              </h2>
            </div>

            {/* Title */}
            <h1 className="font-bold text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                {translations[lang].title}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              {translations[lang].description}
            </p>

            {/* Tech Stack with colors */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <Badge 
                  key={tech.name}
                  className={`rounded-full border ${tech.bg} backdrop-blur-sm px-3 py-1.5 text-sm font-medium shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <Code2 className={`h-3 w-3 mr-1.5 ${tech.color}`} />
                  <span className="text-slate-200">{tech.name}</span>
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild 
                size="lg"
                className="group rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:scale-105"
              >
                <a href="#projects">
                  {translations[lang].ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="rounded-full border-2 border-indigo-400/50 bg-slate-800/50 backdrop-blur-sm text-indigo-300 transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-indigo-200 hover:scale-105"
              >
                <a href={cvFile} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  {translations[lang].ctaSecondary}
                </a>
              </Button>
            </div>

            {/* Featured Projects */}
            <div className="border-t border-indigo-400/20 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                {translations[lang].myProjects}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {featuredProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-xl border border-indigo-400/20 bg-slate-800/30 backdrop-blur-sm p-3 transition-all duration-300 hover:border-indigo-400/50 hover:bg-slate-800/50 hover:scale-105 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-indigo-500/20">
                          <Icon className="h-3.5 w-3.5 text-indigo-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{project.name}</p>
                          <p className="text-xs text-slate-400 truncate">{project.tech}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Specialties */}
            <div className="border-t border-indigo-400/20 pt-6">
              <div className="flex items-center gap-2 text-indigo-400 mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Passions</span>
              </div>
              <p className="text-sm text-slate-400">
                {translations[lang].specialties}
              </p>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="relative lg:col-span-5">
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              {/* Main Profile Card */}
              <div className="relative group">
                {/* Glow effects */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 to-purple-500 blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

                {/* Profile Image Container */}
                <div className="relative rounded-[2rem] border border-indigo-400/30 bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl backdrop-blur-sm">
                  <div className="overflow-hidden rounded-[1.5rem] relative">
                    <img
                      src={profilePic}
                      alt={PROFILE_NAME}
                      className="w-full h-auto min-h-[400px] max-h-[480px] object-contain object-center transition-transform duration-700 group-hover:scale-105 lg:min-h-[450px]"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    {/* Overlay gradient pour meilleure lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating Info Card - Mipetraka tsara eo ambany */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-indigo-400/30 bg-slate-900/95 p-3 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/20">
                        <User className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-white">
                          {PROFILE_NAME}
                        </h3>
                        <p className="flex items-center gap-1.5 text-xs font-medium text-indigo-400">
                          <Briefcase className="h-3 w-3" />
                          {translations[lang].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-xl border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm p-3 text-center transition-all duration-300 hover:border-indigo-400/50 hover:bg-slate-800/70 hover:scale-105"
                    >
                      <Icon className="h-5 w-5 text-indigo-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Social Links - GitHub & LinkedIn */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-slate-800/50 backdrop-blur-sm px-4 py-2.5 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/20 hover:scale-105"
                >
                  <Globe className="h-4 w-4 text-slate-300 group-hover:text-indigo-400" />
                  <span className="text-sm font-medium text-slate-300">GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
                
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-slate-800/50 backdrop-blur-sm px-4 py-2.5 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:scale-105"
                >
                  <Link className="h-4 w-4 text-slate-300 group-hover:text-purple-400" />
                  <span className="text-sm font-medium text-slate-300">LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-2 rounded-xl border border-indigo-400/20 bg-slate-800/50 backdrop-blur-sm p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {translations[lang].contactInfo}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20">
                      <Phone className="h-3.5 w-3.5 text-indigo-400" />
                    </div>
                    <span className="text-xs font-mono">{CONTACT_PHONE_DISPLAY}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20">
                      <Mail className="h-3.5 w-3.5 text-purple-400" />
                    </div>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-xs transition-colors hover:text-indigo-400 truncate"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20">
                      <MapPin className="h-3.5 w-3.5 text-sky-400" />
                    </div>
                    <span className="text-xs">{CONTACT_LOCATION}</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Button */}
              <Button 
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:scale-105"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
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