import { Training, TrainingSession } from "@/types";

export const trainings: Training[] = [
  {
    id: "t-1",
    slug: "management-de-projet",
    title: "Management de projet",
    shortDescription: "Piloter vos projets avec méthode, visibilité et impact.",
    description: "Une formation structurée pour renforcer les fondamentaux du pilotage projet, de la planification à la gouvernance.",
    objectives: [
      "Structurer un projet de bout en bout",
      "Maîtriser budget, délais et qualité",
      "Communiquer efficacement avec les parties prenantes"
    ],
    program: [
      "Cadrage et gouvernance",
      "Planification et gestion des risques",
      "Pilotage opérationnel et reporting",
      "Clôture et amélioration continue"
    ],
    duration: "3 jours",
    price: "1 490 €",
    level: "Intermédiaire",
    category: "Management",
    prerequisites: "Avoir déjà participé à un projet ou à une équipe transverse.",
    targetAudience: "Chefs de projet, managers, coordinateurs.",
    active: true
  },
  {
    id: "t-2",
    slug: "excel-avance-et-reporting",
    title: "Excel avancé et reporting",
    shortDescription: "Construire des tableaux de bord fiables, rapides et lisibles.",
    description: "Une montée en compétence concrète sur Excel avancé, avec des cas métier orientés productivité et reporting.",
    objectives: [
      "Maîtriser les fonctions avancées",
      "Créer des tableaux de bord opérationnels",
      "Automatiser des tâches répétitives"
    ],
    program: [
      "Formules avancées",
      "Nettoyage de données",
      "Tableaux croisés dynamiques",
      "Visualisation et reporting"
    ],
    duration: "2 jours",
    price: "990 €",
    level: "Intermédiaire",
    category: "Bureautique",
    prerequisites: "Bonne maîtrise des bases Excel.",
    targetAudience: "Assistants, contrôleurs, analystes, fonctions support.",
    active: true
  },
  {
    id: "t-3",
    slug: "cybersecurite-pour-entreprises",
    title: "Cybersécurité pour entreprises",
    shortDescription: "Réduire les risques humains et renforcer les bons réflexes.",
    description: "Une formation pragmatique pour sensibiliser les équipes aux menaces actuelles et aux mesures de protection essentielles.",
    objectives: [
      "Identifier les risques principaux",
      "Prévenir phishing et fuites de données",
      "Adopter les bons réflexes de sécurité"
    ],
    program: [
      "Panorama des menaces",
      "Hygiène numérique",
      "Sécurisation des accès",
      "Réaction en cas d’incident"
    ],
    duration: "1 jour",
    price: "690 €",
    level: "Débutant",
    category: "IT",
    prerequisites: "Aucun prérequis.",
    targetAudience: "Collaborateurs, managers, RH, services support.",
    active: true
  }
];

export const sessions: TrainingSession[] = [
  {
    id: "s-1",
    trainingId: "t-1",
    trainingTitle: "Management de projet",
    date: "2026-05-12",
    time: "09:00",
    location: "Tunis Lac 2",
    mode: "Présentiel",
    availableSeats: 12,
    status: "Ouverte"
  },
  {
    id: "s-2",
    trainingId: "t-2",
    trainingTitle: "Excel avancé et reporting",
    date: "2026-05-19",
    time: "09:30",
    location: "En ligne",
    mode: "Distanciel",
    availableSeats: 18,
    status: "Ouverte"
  },
  {
    id: "s-3",
    trainingId: "t-3",
    trainingTitle: "Cybersécurité pour entreprises",
    date: "2026-05-27",
    time: "10:00",
    location: "Tunis Centre Urbain Nord",
    mode: "Présentiel",
    availableSeats: 6,
    status: "Ouverte"
  }
];

export const testimonials = [
  {
    author: "Sonia K.",
    company: "Groupe Atlas",
    quote: "Une organisation sérieuse, des intervenants solides et une vraie montée en compétence pour nos équipes."
  },
  {
    author: "Mourad B.",
    company: "Nova Services",
    quote: "Le niveau de finition est excellent, avec un accompagnement très professionnel du cadrage jusqu’au suivi."
  },
  {
    author: "Leila M.",
    company: "Digital Core",
    quote: "Pentagone Formations a su adapter le contenu à nos enjeux métier et à nos contraintes opérationnelles."
  }
];
