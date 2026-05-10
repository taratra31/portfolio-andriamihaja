import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  ChevronDown,
  Copy,
  Check,
  Crown,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import cvFile from "@/assets/AndriamihajaCV.pdf";
import profilePic from "@/assets/Taratra2.png";

type HeroProps = {
  lang: "fr" | "en";
  theme?: "light" | "dark";
};

const PROFILE_NAME = import.meta.env.VITE_PROFILE_NAME || "Andriamihaja Taratra";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "andriamtaratra@gmail.com";
const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || "+261 38 05 431 68";
const CONTACT_LOCATION = import.meta.env.VITE_CONTACT_LOCATION || "Antananarivo, Madagascar";
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "https://github.com/taratra31";
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/taratra-andriam";

// Liens spécifiques pour chaque projet
const EVOLIX_APK_URL = "https://www.mediafire.com/file/fcgv9vg3hoe0mrk/Evolix.apk/file";
const SCOLARY_GITHUB_URL = "https://github.com/taratra31/Visercard";
const GASY_TALK_GITHUB_URL = "https://github.com/taratra31/Gasy-Talk";

export function Hero({ lang, theme = "light" }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  const translations = {
    fr: {
      greeting: "Bonjour, je suis",
      status: "Junior Full Stack Developer",
      experience: "2 ans d'expérience",
      title: "Je transforme les idées",
      titleHighlight: "en applications web performantes",
      description:
        "Développeur passionné avec 5+ projets livrés. Je maîtrise React, TypeScript, Laravel et Node.js pour créer des solutions innovantes et sur mesure.",
      ctaPrimary: "Découvrir mes projets",
      ctaSecondary: "Télécharger mon CV",
      contactInfo: "Coordonnées",
      sendMessage: "M'envoyer un message",
      specialties:
        "Passionné par le développement web, les APIs RESTful et les architectures modernes.",
      role: "Développeur Full Stack Junior",
      projects: "Projets",
      experience: "Expérience",
      satisfaction: "Satisfaction",
      myProjects: "Projets récents",
      about: "À propos",
      yearsExp: "ans",
      copyEmail: "Copier l'email",
      emailCopied: "Email copié !",
      downloadApk: "Télécharger APK",
      viewCode: "Voir le code",
      evolixDesc: "Application mobile de rencontre",
      scolaryDesc: "Carte de visite numérique",
      gasyTalkDesc: "Chat instantané malagasy",
      networks: "Réseaux",
      stack: "Stack",
      passions: "Passions",
      scroll: "Défiler",
    },
    en: {
      greeting: "Hello, I'm",
      status: "Junior Full Stack Developer",
      experience: "2 years experience",
      title: "Turning ideas",
      titleHighlight: "into performant web apps",
      description:
        "Passionate developer with 5+ delivered projects. I master React, TypeScript, Laravel, and Node.js to build innovative, tailor-made solutions.",
      ctaPrimary: "Discover my projects",
      ctaSecondary: "Download my CV",
      contactInfo: "Contact details",
      sendMessage: "Send me a message",
      specialties:
        "Passionate about web development, RESTful APIs, and modern architectures.",
      role: "Junior Full Stack Developer",
      projects: "Projects",
      experience: "Experience",
      satisfaction: "Satisfaction",
      myProjects: "Recent projects",
      about: "About",
      yearsExp: "years",
      copyEmail: "Copy email",
      emailCopied: "Email copied!",
      downloadApk: "Download APK",
      viewCode: "View code",
      evolixDesc: "Dating mobile app",
      scolaryDesc: "Digital business card",
      gasyTalkDesc: "Malagasy instant chat",
      networks: "Networks",
      stack: "Stack",
      passions: "Passions",
      scroll: "Scroll",
    },
  } as const;

  const techStack = [
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Layers },
    { name: "Node.js", icon: Zap },
    { name: "Laravel", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "Tailwind", icon: Layers },
    { name: "Git", icon: FolderGit2 },
  ];

  const stats = [
    { value: "5+", label: translations[lang].projects, icon: FolderGit2 },
    { value: "2", label: translations[lang].experience + " " + translations[lang].yearsExp, icon: Briefcase },
    { value: "100%", label: translations[lang].satisfaction, icon: Award },
  ];

  const featuredProjects = [
    { 
      name: "Evolix", 
      tech: "Ionic, Supabase",
      description: translations[lang].evolixDesc,
      icon: Smartphone, 
      link: EVOLIX_APK_URL,
      linkLabel: translations[lang].downloadApk,
      linkIcon: Download,
      external: true 
    },
    { 
      name: "Visercard", 
      tech: "Laravel, javascript, MySQL",
      description: translations[lang].scolaryDesc,
      icon: Star, 
      link: SCOLARY_GITHUB_URL,
      linkLabel: translations[lang].viewCode,
      linkIcon: Code2,
      external: true 
    },
    { 
      name: "Gasy Talk", 
      tech: "Ionic, Supabase",
      description: translations[lang].gasyTalkDesc,
      icon: Globe, 
      link: GASY_TALK_GITHUB_URL,
      linkLabel: translations[lang].viewCode,
      linkIcon: Code2,
      external: true 
    },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = CONTACT_EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const bgClass = "bg-white dark:bg-gray-950";
  const textPrimary = "text-gray-900 dark:text-gray-100";
  const textSecondary = "text-gray-600 dark:text-gray-300";
  const textTertiary = "text-gray-400 dark:text-gray-500";
  const borderClass = "border border-gray-200 dark:border-gray-800";
  const subtleBg = "bg-gray-50 dark:bg-gray-900/50";
  const accent = "text-emerald-600 dark:text-emerald-400";
  const accentBg = "bg-emerald-50 dark:bg-emerald-900/20";
  const accentBorder = "border-emerald-200 dark:border-emerald-800";
  const buttonPrimary =
    "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30";
  const buttonSecondary =
    "border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20";

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}
    >
      {/* Fond décoratif subtil */}
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

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Layout en deux colonnes sur desktop */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Colonne gauche : Photo + Badge (5 colonnes) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-8">
            
            {/* Photo dans un cadre design amélioré */}
            <div className="relative group">
              {/* Effet de lueur au survol */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-emerald-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Cadre décoratif double */}
              <div className="absolute -inset-4 border-2 border-dashed border-emerald-200/60 dark:border-emerald-700/40 rounded-3xl transition-all duration-500 group-hover:border-solid group-hover:border-emerald-400 dark:group-hover:border-emerald-500 group-hover:-inset-5" />
              <div className="absolute -inset-2 border border-emerald-100 dark:border-emerald-800/50 rounded-[22px] transition-all duration-500 group-hover:border-emerald-300 dark:group-hover:border-emerald-600" />
              
              {/* Badge statut avec couronne */}
              <div className="absolute -top-5 -right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-2xl shadow-emerald-500/30">
                <Crown className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{translations[lang].status}</span>
              </div>

              {/* Image */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl shadow-gray-200 dark:shadow-black/30 transition-all duration-500 group-hover:shadow-emerald-500/20 group-hover:ring-emerald-200 dark:group-hover:ring-emerald-800">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="h-10 w-10 border-3 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={profilePic}
                  alt={PROFILE_NAME}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  } group-hover:scale-[1.03]`}
                  style={{ objectPosition: "center 30%" }}
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>

            {/* Stats en cartes design */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group/card relative flex flex-col items-center p-4 rounded-2xl border-2 ${borderClass} ${subtleBg} transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10`}
                  >
                    <div className={`p-2 rounded-xl ${accentBg} border ${accentBorder} mb-2 transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-lg group-hover/card:shadow-emerald-500/10`}>
                      <Icon className={`h-5 w-5 ${accent}`} />
                    </div>
                    <p className={`text-2xl font-black ${textPrimary} transition-colors group-hover/card:text-emerald-600 dark:group-hover/card:text-emerald-400`}>
                      {stat.value}
                    </p>
                    <p className={`text-[10px] mt-1 uppercase tracking-wider font-semibold ${textTertiary} text-center leading-tight`}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne droite : Texte + Projets (7 colonnes) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Salutation avec ligne décorative */}
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
              <span className={`text-sm font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-300`}>
                {translations[lang].greeting}
              </span>
            </div>

            {/* Nom principal avec effet */}
            <div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1] ${textPrimary}`}>
                {PROFILE_NAME.split(" ")[0]}
              </h1>
              <h2 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1] ${accent} -mt-1`}>
                {PROFILE_NAME.split(" ")[1]}
              </h2>
            </div>

            {/* Titre accrocheur avec soulignement SVG */}
            <div className="space-y-1">
              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold leading-tight ${textPrimary}`}>
                {translations[lang].title}{" "}
                <span className={`relative inline-block ${accent}`}>
                  {translations[lang].titleHighlight}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 sm:h-4"
                    viewBox="0 0 250 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 9C75 1 175 16 245 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-emerald-400/60"
                    />
                  </svg>
                </span>
              </h3>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${textSecondary} font-light`}>
              {translations[lang].description}
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className={`group rounded-2xl px-8 py-7 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:translate-y-[-3px] ${buttonPrimary}`}
              >
                <a href="#projects">
                  {translations[lang].ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className={`group rounded-2xl px-8 py-7 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:translate-y-[-3px] ${buttonSecondary}`}
              >
                <a href={cvFile} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  {translations[lang].ctaSecondary}
                </a>
              </Button>
            </div>

            {/* Projets récents avec liens */}
            <div className="border-t pt-6 border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-xl ${accentBg} border ${accentBorder}`}>
                  <Rocket className={`h-4 w-4 ${accent}`} />
                </div>
                <p className={`text-xs font-bold uppercase tracking-[0.3em] ${textTertiary}`}>
                  {translations[lang].myProjects}
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-200 to-transparent dark:from-emerald-800" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProjects.map((project, index) => {
                  const Icon = project.icon;
                  const LinkIcon = project.linkIcon;
                  return (
                    <div
                      key={index}
                      className={`group/project relative flex flex-col p-5 rounded-2xl border-2 ${borderClass} ${subtleBg} transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10`}
                    >
                      {/* Icône projet */}
                      <div className={`inline-flex p-3 rounded-xl ${accentBg} border ${accentBorder} mb-3 transition-all duration-300 group-hover/project:scale-110 group-hover/project:shadow-lg group-hover/project:shadow-emerald-500/10`}>
                        <Icon className={`h-6 w-6 ${accent}`} />
                      </div>
                      
                      {/* Titre projet */}
                      <h4 className={`text-base font-bold ${textPrimary} mb-1 transition-colors group-hover/project:text-emerald-600 dark:group-hover/project:text-emerald-400`}>
                        {project.name}
                      </h4>
                      
                      {/* Description */}
                      <p className={`text-xs ${textTertiary} mb-1`}>
                        {project.description}
                      </p>
                      
                      {/* Tech utilisée */}
                      <p className={`text-xs font-mono ${textSecondary} mb-4 opacity-75`}>
                        {project.tech}
                      </p>
                      
                      {/* Bouton lien */}
                      <a
                        href={project.link}
                        target={project.external ? "_blank" : undefined}
                        rel={project.external ? "noopener noreferrer" : undefined}
                        className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 ${accentBorder} ${accentBg} hover:bg-emerald-600 hover:text-white hover:border-emerald-600 dark:hover:border-emerald-500 dark:hover:bg-emerald-600 group/link`}
                      >
                        <LinkIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:scale-110" />
                        {project.linkLabel}
                        {project.external && (
                          <ExternalLink className="h-3 w-3 opacity-60 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        )}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Section inférieure : Contact + Réseaux + Passion */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Contact */}
          <div className={`rounded-2xl border-2 ${borderClass} ${subtleBg} p-6 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/5`}>
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-2 rounded-xl ${accentBg} border ${accentBorder}`}>
                <Mail className={`h-4 w-4 ${accent}`} />
              </div>
              <p className={`text-xs font-bold uppercase tracking-[0.3em] ${textTertiary}`}>
                {translations[lang].contactInfo}
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Email avec copie */}
              <div className="flex items-center justify-between group/item p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className={`text-sm font-medium truncate ${textSecondary} hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors`}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className={`p-2 rounded-lg transition-all duration-300 ${textTertiary} hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400`}
                  title={translations[lang].copyEmail}
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Téléphone */}
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800/50 transition-colors">
                <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className={`text-sm font-mono ${textSecondary}`}>
                  {CONTACT_PHONE_DISPLAY}
                </span>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800/50 transition-colors">
                <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className={`text-sm ${textSecondary}`}>
                  {CONTACT_LOCATION}
                </span>
              </div>
            </div>

            <Button
              asChild
              className={`w-full mt-5 rounded-2xl px-6 py-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:translate-y-[-2px] ${buttonPrimary}`}
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                {translations[lang].sendMessage}
              </a>
            </Button>
          </div>

          {/* Réseaux */}
          <div className={`rounded-2xl border-2 ${borderClass} ${subtleBg} p-6 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/5`}>
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-2 rounded-xl ${accentBg} border ${accentBorder}`}>
                <Globe className={`h-4 w-4 ${accent}`} />
              </div>
              <p className={`text-xs font-bold uppercase tracking-[0.3em] ${textTertiary}`}>
                {translations[lang].networks}
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-4 rounded-xl border-2 ${borderClass} transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-x-0.5 hover:bg-white dark:hover:bg-gray-800/50`}
              >
                <span className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${accentBg}`}>
                    <FolderGit2 className={`h-5 w-5 ${accent}`} />
                  </div>
                  <span className={`text-sm font-bold ${textSecondary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                    GitHub
                  </span>
                </span>
                <ArrowUpRight className={`h-4 w-4 ${textTertiary} transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400`} />
              </a>
              
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-4 rounded-xl border-2 ${borderClass} transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-x-0.5 hover:bg-white dark:hover:bg-gray-800/50`}
              >
                <span className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${accentBg}`}>
                    <Link className={`h-5 w-5 ${accent}`} />
                  </div>
                  <span className={`text-sm font-bold ${textSecondary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                    LinkedIn
                  </span>
                </span>
                <ArrowUpRight className={`h-4 w-4 ${textTertiary} transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400`} />
              </a>
            </div>
          </div>

          {/* Passion + Tech stack */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            {/* Passion */}
            <div className={`rounded-2xl border-2 ${borderClass} ${subtleBg} p-6 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl ${accentBg} border ${accentBorder}`}>
                  <Sparkles className={`h-4 w-4 ${accent}`} />
                </div>
                <p className={`text-xs font-bold uppercase tracking-[0.3em] ${textTertiary}`}>
                  {translations[lang].passions}
                </p>
              </div>
              <p className={`text-sm ${textSecondary} leading-relaxed`}>
                {translations[lang].specialties}
              </p>
            </div>

            {/* Tech stack */}
            <div className={`rounded-2xl border-2 ${borderClass} ${subtleBg} p-6 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/5`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl ${accentBg} border ${accentBorder}`}>
                  <Code2 className={`h-4 w-4 ${accent}`} />
                </div>
                <p className={`text-xs font-bold uppercase tracking-[0.3em] ${textTertiary}`}>
                  {translations[lang].stack}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className={`group flex items-center gap-2 px-3 py-2 border ${borderClass} rounded-lg ${subtleBg} transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 cursor-default`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${accent} transition-transform duration-300 group-hover:scale-125`} />
                      <span className={`text-xs font-bold ${textSecondary} group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors`}>
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] ${textTertiary}`}>
            {translations[lang].scroll}
          </span>
          <ChevronDown className={`h-5 w-5 ${accent}`} />
        </div>
      </div>
    </section>
  );
}