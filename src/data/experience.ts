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
      fr: 'Développeur Stagiaire / Lead Tech',
      en: 'Developer Intern / Tech Lead',
    },
    company: 'TechCloud',
    period: 'Juillet 2026 - Présent',
    periodEn: 'July 2026 - Present',
    location: 'Antananarivo, Madagascar (sur site)',
    locationEn: 'Antananarivo, Madagascar (on-site)',
    type: { fr: 'Stage', en: 'Internship' },
    summary: {
      fr: "Développement full stack en stage avec une responsabilité technique (lead tech) au sein de l'équipe.",
      en: 'Full stack development as an intern with a technical leadership role (tech lead) within the team.',
    },
    highlights: {
      fr: [
        'Développement de fonctionnalités back-end et front-end (API, interfaces, base de données).',
        "Lead tech : coordination technique de l'équipe, revues de code et orientation de l'architecture.",
        'Mise en place du déploiement et de la supervision des environnements.',
        'Participation à la planification des sprints et aux réunions client.',
      ],
      en: [
        'Development of back-end and front-end features (API, interfaces, database).',
        'Tech lead: technical coordination of the team, code reviews and architecture guidance.',
        'Set up deployment and environment monitoring.',
        'Involvement in sprint planning and client meetings.',
      ],
    },
    metrics: ['Full Stack', 'Tech Lead', 'Code Review', 'Deployment'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    title: {
      fr: 'Chef de Projet & Co-fondateur',
      en: 'Project Manager & Co-founder',
    },
    company: 'Koragroup',
    period: 'Juin 2026 - Septembre 2026',
    periodEn: 'June 2026 - September 2026',
    location: 'Antananarivo, Madagascar',
    locationEn: 'Antananarivo, Madagascar',
    type: { fr: 'Co-fondation', en: 'Co-founding' },
    summary: {
      fr: "Co-fondation d'un projet : pilotage de l'équipe et coordination du développement de la solution, de la conception à la mise en production.",
      en: 'Co-founding of a project: leading the team and coordinating the solution development, from design to production.',
    },
    highlights: {
      fr: [
        'Définition de la vision produit et de la roadmap.',
        "Management de l'équipe technique et organisation des sprints.",
        'Coordination entre les profils technique, business et client.',
        'Suivi des livraisons et de la qualité du produit.',
      ],
      en: [
        'Definition of the product vision and roadmap.',
        'Technical team management and sprint organization.',
        'Coordination between technical, business and client stakeholders.',
        'Tracking of deliveries and product quality.',
      ],
    },
    metrics: ['Vision produit', 'Team management', 'Roadmap', 'Sprints'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    title: {
      fr: 'Stagiaire Développeur Full Stack',
      en: 'Full Stack Developer Intern',
    },
    company: "M'lay design",
    period: 'Mars 2026 - Juin 2026',
    periodEn: 'March 2026 - June 2026',
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