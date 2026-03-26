import { Project, Service, Skill, ProcessStep } from "./types";
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Globe, 
  Zap,
  Search,
  PenTool,
  Terminal,
  Rocket
} from "lucide-react";

export const PROJECTS: Project[] = [
  {
    id: "usct-sarl",
    title: "USCT SARL",
    description: "Site corporate et e-commerce pour une entreprise de construction.",
    longDescription: "Développement d'une plateforme complète alliant présentation institutionnelle et catalogue de produits pour une entreprise leader dans le secteur de la construction.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/usct-sarl-6f48309e-1774486884348.webp",
    tags: ["React", "Tailwind CSS", "Node.js", "E-commerce"],
    link: "https://usct-corporate.vercel.app/",
    github: "https://github.com/jonathanmyinda/usct-corporate",
    type: "Full-stack",
    category: "Corporate & E-commerce",
    challenge: "Créer une interface qui reflète la robustesse de l'entreprise tout en offrant une expérience d'achat fluide.",
    solution: "Utilisation de React pour une interface réactive et une architecture modulaire pour faciliter la maintenance.",
    result: "Une augmentation significative de la visibilité en ligne et une gestion simplifiée du catalogue produit."
  },
  {
    id: "irma-congo",
    title: "IRMA Congo",
    description: "Site professionnel pour un cabinet de conseil en affaires.",
    longDescription: "Conception d'une vitrine digitale élégante pour un cabinet de conseil stratégique opérant en Afrique centrale.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/irma-congo-7b6b11f6-1774486877907.webp",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://jonathanmyinda.github.io/Projet_IRMA/",
    github: "https://github.com/jonathanmyinda/Projet_IRMA",
    type: "Web",
    category: "Consulting",
    challenge: "Transmettre la crédibilité et le sérieux du cabinet à travers un design sobre et professionnel.",
    solution: "Focus sur la typographie et une mise en page aérée pour mettre en avant l'expertise du cabinet.",
    result: "Un site vitrine performant qui sert d'outil de réassurance majeur pour les clients potentiels."
  },
  {
    id: "smarttask-mobile",
    title: "SmartTask Mobile",
    description: "Application mobile intuitive de gestion de productivité.",
    longDescription: "Une application mobile moderne permettant de gérer ses tâches quotidiennes avec une interface fluide et une navigation optimisée.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/smarttask-mobile-ba0c818e-1774486877592.webp",
    tags: ["React Native", "Mobile UI", "Productivité"],
    type: "Mobile",
    category: "Productivité",
    challenge: "Concevoir une UX mobile capable de gérer des priorités complexes tout en restant simple d'utilisation.",
    solution: "Mise en œuvre d'une navigation par onglets intuitive et d'un système de gestion d'état performant.",
    result: "Un projet personnel avancé démontrant une maîtrise complète du développement mobile cross-platform."
  },
  {
    id: "mydigit-agency",
    title: "myDigit Agency",
    description: "Concept d'agence digitale futuriste et créative.",
    longDescription: "Une exploration design pour une agence digitale mettant l'accent sur l'innovation et l'esthétique haut de gamme.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/mydigit-agency-ec91bdc0-1774486877216.webp",
    tags: ["UI/UX", "Framer Motion", "Design Premium"],
    type: "Web",
    category: "Concept / Design",
    challenge: "Repousser les limites du design web traditionnel pour créer une expérience immersive.",
    solution: "Utilisation intensive d'animations subtiles et de glassmorphism pour un rendu ultra-moderne.",
    result: "Un showcase visuel qui démontre ma capacité à concevoir des interfaces à fort impact émotionnel."
  },
  {
    id: "business-dashboard",
    title: "Business Dashboard",
    description: "Interface d'analyse et de gestion de données d'entreprise.",
    longDescription: "Dashboard complexe permettant la visualisation de KPIs en temps réel avec une ergonomie pensée pour la prise de décision.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/a3142cc8-827c-459f-9922-3e21faeb540d/business-dashboard-de065057-1774486878033.webp",
    tags: ["React", "Data Viz", "SaaS"],
    type: "Web",
    category: "Application Métier",
    challenge: "Rendre digestes des volumes de données importants à travers des visualisations claires.",
    solution: "Architecture orientée composants pour une gestion efficace des graphiques et des filtres.",
    result: "Une interface professionnelle prête pour une intégration en environnement SaaS réel."
  }
];

export const SERVICES: Service[] = [
  {
    title: "Création de sites web",
    description: "Développement de sites vitrines et corporate optimisés pour le SEO et la conversion.",
    icon: Globe
  },
  {
    title: "Développement Mobile",
    description: "Conception d'applications mobiles performantes et intuitives pour iOS et Android.",
    icon: Smartphone
  },
  {
    title: "Interfaces React / Web Apps",
    description: "Applications web complexes et interactives utilisant les dernières technologies.",
    icon: Code2
  },
  {
    title: "Refonte UI/UX",
    description: "Modernisation de vos interfaces existantes pour améliorer l'expérience utilisateur.",
    icon: Layout
  },
  {
    title: "Solutions Digitales",
    description: "Accompagnement technique sur mesure pour transformer vos idées en produits réels.",
    icon: Zap
  },
  {
    title: "Audit & Conseil",
    description: "Analyse de vos projets pour optimiser la performance et la qualité du code.",
    icon: Search
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "Web" },
  { name: "Tailwind CSS", level: 90, category: "Web" },
  { name: "Node.js", level: 85, category: "Web" },
  { name: "JavaScript / TS", level: 90, category: "Web" },
  { name: "SQL", level: 80, category: "Web" },
  { name: "React Native", level: 85, category: "Mobile" },
  { name: "Cross-platform", level: 80, category: "Mobile" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Framer Motion", level: 80, category: "Design" },
  { name: "Git / GitHub", level: 90, category: "Outils" },
  { name: "API REST", level: 85, category: "Outils" },
  { name: "Vite / Webpack", level: 85, category: "Outils" }
];

export const PROCESS: ProcessStep[] = [
  {
    title: "Analyse",
    description: "Compréhension de vos besoins, de vos objectifs et de votre cible pour définir la stratégie.",
    icon: Search
  },
  {
    title: "Conception",
    description: "Création des wireframes et du design UI/UX pour une expérience utilisateur optimale.",
    icon: PenTool
  },
  {
    title: "Développement",
    description: "Codage propre, performant et scalable utilisant les meilleures pratiques du secteur.",
    icon: Terminal
  },
  {
    title: "Livraison",
    description: "Tests rigoureux, déploiement et accompagnement pour le lancement de votre projet.",
    icon: Rocket
  }
];