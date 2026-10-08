export type ExperienceItem = {
  title: { fr: string; en: string }
  company: string
  period: string
  periodEn: string
  location: string
  locationEn: string
  type: { fr: string; en: string }
  summary: { fr: string; en: string }
  highlights: { fr: string[]; en: string[] }
  metrics: string[]
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
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
    type: { fr: 'Stage', en: 'Internship' },
    summary: {
      fr: "Conception et développement d'une application e-commerce complète (front-office, back-office, API).",
      en: 'Design and development of a complete e-commerce application (front-office, back-office, API).',
    },
    highlights: {
      fr: [
        "Développement d'une API REST avec FastAPI (Python) et PostgreSQL.",
        "Création d'un front-office React pour les clients (catalogue, panier, paiement).",
        "Mise en place d'un back-office administrateur pour la gestion des produits, commandes et utilisateurs.",
        "Intégration d'un système d'authentification JWT et d'un paiement simulé (Stripe sandbox).",
        "Déploiement de l'application sur Docker et documentation complète.",
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
    type: { fr: 'Freelance', en: 'Freelance' },
    summary: {
      fr: "Développement d'une application mobile cross-platform avec Ionic et Supabase, couplée à un dashboard d'administration Angular.",
      en: 'Development of a cross-platform mobile app using Ionic and Supabase, coupled with an Angular admin dashboard.',
    },
    highlights: {
      fr: [
        "Création d'une application mobile pour la gestion de projets et le suivi de clients.",
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
