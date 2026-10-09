import madazoneImg from '@/assets/Madazone.jpg'
import madastockImg from '@/assets/Madastock.jpg'
import madacolisImg from '@/assets/Madacolis.jpg'
import visercardImg from '@/assets/Visercard.jpg'

export type Localized = { fr: string; en: string }

export type Project = {
  slug: string
  name: string
  tagline: Localized
  image: string
  type: Localized
  description: Localized
  highlights: Localized[]
  features: string[]
  technologies: string[]
  url: string
  year: string
  live: boolean
}

export const projects: Project[] = [
  {
    slug: 'madazone',
    name: 'Madazone',
    tagline: {
      fr: "Le marché de Madagascar en ligne",
      en: "Madagascar's online marketplace",
    },
    image: madazoneImg,
    type: { fr: 'Marketplace', en: 'Marketplace' },
    description: {
      fr: "Une marketplace complète qui connecte vendeurs et acheteurs partout à Madagascar. Les annonces sont classées par région, les vendeurs géolocalisés, et les transactions s'appuient sur un wallet intégré avec paiement Mobile Money. Une application Android accompagne l'interface web pour couvrir les usages mobiles.",
      en: 'A complete marketplace connecting sellers and buyers across Madagascar. Listings are organized by region, sellers geolocated, and transactions rely on a built-in wallet with Mobile Money payments. An Android app complements the web interface to cover mobile usage.',
    },
    highlights: [
      { fr: 'Marketplace multi-régions avec catégories et recherche', en: 'Multi-region marketplace with categories and search' },
      { fr: 'Géolocalisation des vendeurs et des annonces', en: 'Geolocation of sellers and listings' },
      { fr: 'Wallet intégré et paiement Mobile Money', en: 'Built-in wallet and Mobile Money payments' },
      { fr: 'Application Android + interface web responsive', en: 'Android app + responsive web interface' },
    ],
    features: ['Géolocalisation', 'Wallet & Mobile Money', 'Application Android'],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    url: 'https://madazone.duckdns.org/',
    year: '2026',
    live: false,
  },
  {
    slug: 'madastock',
    name: 'MadaStock',
    tagline: {
      fr: 'Gestion de boutique simplifiée',
      en: 'Simplified shop management',
    },
    image: madastockImg,
    type: { fr: 'Application Web', en: 'Web App' },
    description: {
      fr: "Un logiciel de gestion de boutique pensé pour les commerçants malgaches. Il centralise les ventes, le suivi du stock et la facturation, le tout piloté depuis un tableau de bord temps réel qui donne une vision claire de l'activité au quotidien.",
      en: 'Shop management software designed for Malagasy retailers. It centralizes sales, stock tracking and invoicing, all driven from a real-time dashboard that gives a clear view of day-to-day activity.',
    },
    highlights: [
      { fr: 'Enregistrement des ventes et génération de factures', en: 'Sales records and invoice generation' },
      { fr: 'Suivi du stock avec alertes de seuil', en: 'Stock tracking with threshold alerts' },
      { fr: 'Tableau de bord temps réel', en: 'Real-time dashboard' },
      { fr: 'Gestion des clients et de l\'historique', en: 'Customer and history management' },
    ],
    features: ['Ventes & stock', 'Facturation', 'Dashboard temps réel'],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    url: 'https://madastock.onrender.com/',
    year: '2026',
    live: false,
  },
  {
    slug: 'madacolis',
    name: 'MadaColis',
    tagline: {
      fr: 'Envoi de colis Madagascar ↔ France',
      en: 'Parcel shipping Madagascar ↔ France',
    },
    image: madacolisImg,
    type: { fr: 'Application Mobile + Web', en: 'Mobile & Web App' },
    description: {
      fr: "Une plateforme d'expédition de colis entre Madagascar et la France. Elle permet de créer un envoi, de suivre la livraison étape par étape et de gérer les destinataires, avec une interface web déployée et une application mobile dédiée.",
      en: 'A parcel shipping platform between Madagascar and France. It lets users create shipments, track delivery step by step and manage recipients, with a deployed web interface and a dedicated mobile app.',
    },
    highlights: [
      { fr: 'Création et suivi de colis en temps réel', en: 'Real-time parcel creation and tracking' },
      { fr: 'Gestion des destinataires et adresses', en: 'Recipient and address management' },
      { fr: 'Interface web + application mobile', en: 'Web interface + mobile app' },
      { fr: 'Notifications de changement de statut', en: 'Status change notifications' },
    ],
    features: ['Suivi de colis', 'Madagascar ↔ France', 'Mobile + Web'],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    url: 'https://frontend-client-taratra31s-projects.vercel.app/',
    year: '2026',
    live: true,
  },
  {
    slug: 'visercard',
    name: 'ViserCard',
    tagline: {
      fr: 'Cartes virtuelles & wallet en ligne',
      en: 'Virtual cards & online wallet',
    },
    image: visercardImg,
    type: { fr: 'Fintech / Cartes virtuelles', en: 'Fintech / Virtual Cards' },
    description: {
      fr: "Une plateforme fintech dédiée aux cartes virtuelles et au wallet en ligne. Elle permet de créer des cartes, d'effectuer des dépôts, de réaliser des paiements sécurisés et de suivre les transactions en temps réel.",
      en: 'A fintech platform dedicated to virtual cards and the online wallet. It lets users create cards, make top-ups, perform secure payments and track transactions in real time.',
    },
    highlights: [
      { fr: 'Création et gestion de cartes virtuelles', en: 'Virtual card creation and management' },
      { fr: 'Dépôts et wallet en ligne', en: 'Top-ups and online wallet' },
      { fr: 'Paiements sécurisés', en: 'Secure payments' },
      { fr: 'Suivi des transactions en temps réel', en: 'Real-time transaction tracking' },
    ],
    features: ['Cartes virtuelles', 'Paiements sécurisés', 'Wallet en ligne'],
    technologies: ['Laravel', 'MySQL'],
    url: 'https://script.viserlab.com/visercard/',
    year: '2026',
    live: true,
  },
]

export const getProject = (slug: string) => projects.find(project => project.slug === slug)
