export type SkillGroup = {
  key: string
  title: { fr: string; en: string }
  blurb: { fr: string; en: string }
  logo: string
  skills: string[]
}

/**
 * Regroupement par technolojia ampiasaina (PHP, Node, Python...) fa tsy
 * amin'ny sokajy "Framework".
 */
export const skillGroups: SkillGroup[] = [
  {
    key: 'php',
    title: { fr: 'PHP', en: 'PHP' },
    blurb: {
      fr: "Back-end PHP sy Laravel, API ary fandefasana mailaka amin'ny server.",
      en: 'PHP & Laravel back-end, APIs and server-side email delivery.',
    },
    logo: 'PHP',
    skills: ['PHP', 'Laravel', 'PHPMailer', 'SMTP', 'API REST', 'cPanel'],
  },
  {
    key: 'node',
    title: { fr: 'JavaScript / TypeScript (Node.js)', en: 'JavaScript / TypeScript (Node.js)' },
    blurb: {
      fr: 'Runtime JavaScript/TypeScript, API Node.js ary fifandraisana temps réel.',
      en: 'JavaScript/TypeScript runtime, Node.js APIs and real-time communication.',
    },
    logo: 'Node.js',
    skills: ['Node.js', 'TypeScript', 'JavaScript', 'Express', 'WebSockets', 'API REST'],
  },
  {
    key: 'python',
    title: { fr: 'Python', en: 'Python' },
    blurb: {
      fr: 'API Python, automatisation ary fanodinana sary/vision.',
      en: 'Python APIs, automation and image/vision processing.',
    },
    logo: 'Python',
    skills: ['Python', 'FastAPI', 'YOLO', 'OpenCV', 'TensorFlow'],
  },
  {
    key: 'frontend',
    title: { fr: 'Front-end & Mobile', en: 'Front-end & Mobile' },
    blurb: {
      fr: "Interfaces web sy mobile amin'ny React, Angular ary Ionic.",
      en: 'Web and mobile interfaces with React, Angular and Ionic.',
    },
    logo: 'React',
    skills: ['React', 'Angular', 'Ionic', 'Vite', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    key: 'database',
    title: { fr: 'Bases de données', en: 'Databases' },
    blurb: {
      fr: 'Fitehirizana angona SQL sy NoSQL, ary base temps réel.',
      en: 'SQL and NoSQL data storage, plus real-time databases.',
    },
    logo: 'PostgreSQL',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Supabase'],
  },
  {
    key: 'devops',
    title: { fr: 'DevOps & Outils', en: 'DevOps & Tools' },
    blurb: {
      fr: 'Déploiement, containers, serveur ary fandrindrana version.',
      en: 'Deployment, containers, servers and version control.',
    },
    logo: 'Docker',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'Nginx', 'Apache', 'VPS', 'WHM', 'FTP', 'DNS', 'SSL/TLS'],
  },
  {
    key: 'ai',
    title: { fr: 'IA & Vision', en: 'AI & Vision' },
    blurb: {
      fr: "Modely AI, traitement d'image sy détection d'objets.",
      en: 'AI models, image processing and object detection.',
    },
    logo: 'TensorFlow',
    skills: ['YOLO', 'OpenCV', 'TensorFlow', "Détection d'objets"],
  },
  {
    key: 'web',
    title: { fr: 'Web & Auth', en: 'Web & Auth' },
    blurb: {
      fr: "Fifandraisana amin'ny services web sy fiarovana.",
      en: 'Web service communication and security.',
    },
    logo: 'WebSockets',
    skills: ['API REST', 'WebSockets', 'Base temps réel', 'Auth (JWT/OAuth)'],
  },
]
