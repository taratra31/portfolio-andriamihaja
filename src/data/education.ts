import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Code2, Trophy } from 'lucide-react'

export type EducationItem = {
  degree: { fr: string; en: string }
  school: string
  schoolEn: string
  faculty: string
  facultyEn: string
  period: string
  periodEn: string
  description: { fr: string; en: string }
  focus: { fr: string[]; en: string[] }
  icon: LucideIcon
  isRecent: boolean
}

export const education: EducationItem[] = [
  {
    degree: {
      fr: 'Formation Autodidacte Full Stack',
      en: 'Self-taught Full Stack Training',
    },
    school: 'En ligne / Projets personnels',
    schoolEn: 'Online / Personal Projects',
    faculty: 'Remote',
    facultyEn: 'Remote',
    period: '2024 - 2026',
    periodEn: '2024 - 2026',
    description: {
      fr: 'Apprentissage autonome des technologies modernes : React, Node.js, PostgreSQL, Laravel, MySQL. Réalisation de projets concrets (Madazone, MadaStock, MadaColis, ViserCard).',
      en: 'Self-paced learning of modern technologies: React, Node.js, PostgreSQL, Laravel, MySQL. Built real-world projects (Madazone, MadaStock, MadaColis, ViserCard).',
    },
    focus: {
      fr: ['FastAPI', 'TypeScript', 'Ionic', 'Supabase', 'Docker', 'YOLO'],
      en: ['FastAPI', 'TypeScript', 'Ionic', 'Supabase', 'Docker', 'YOLO'],
    },
    icon: Trophy,
    isRecent: true,
  },
  {
    degree: {
      fr: 'Formation Développement Web',
      en: 'Web Development Training',
    },
    school: 'HOPES',
    schoolEn: 'HOPES',
    faculty: 'Antananarivo',
    facultyEn: 'Antananarivo',
    period: '2023 - 2024',
    periodEn: '2023 - 2024',
    description: {
      fr: 'Formation intensive en développement web moderne : HTML/CSS, JavaScript, React, et bases de données. Projets pratiques et collaboration en équipe.',
      en: 'Intensive training in modern web development: HTML/CSS, JavaScript, React, and databases. Hands-on projects and team collaboration.',
    },
    focus: {
      fr: ['React', 'JavaScript', 'HTML/CSS', 'Databases', 'Teamwork'],
      en: ['React', 'JavaScript', 'HTML/CSS', 'Databases', 'Teamwork'],
    },
    icon: Code2,
    isRecent: false,
  },
  {
    degree: {
      fr: 'Baccalauréat',
      en: 'Science Baccalaureate',
    },
    school: 'Fianarantsoa',
    schoolEn: 'Fianarantsoa',
    faculty: 'Lycée Raherivelo Ramamonjy',
    facultyEn: 'Raherivelo Ramamonjy High School',
    period: '2022 - 2023',
    periodEn: '2022 - 2023',
    description: {
      fr: 'Baccalauréat série scientifique avec mention. Formation en mathématiques, physique et sciences naturelles.',
      en: 'Scientific baccalaureate with honors. Training in mathematics, physics, and natural sciences.',
    },
    focus: {
      fr: ['Mathematics', 'Physics', 'Sciences', 'Honors'],
      en: ['Mathematics', 'Physics', 'Sciences', 'Honors'],
    },
    icon: GraduationCap,
    isRecent: false,
  },
]
