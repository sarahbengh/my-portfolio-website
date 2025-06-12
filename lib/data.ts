import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Epsycare from "@/public/Epsycare.png";
import EcourrierBmt from "@/public/EcourrierBmt.png";
import wordanalyticsImg from "@/public/téléchargement (1).jpg";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {

  title: "Obtention du baccalauréat",
  location: "Béjaïa, Algérie",
  description:
    "J’ai obtenu mon baccalauréat en 2022 au Lycée Taos Amrouche de Sidi Aïch, filière Mathématiques, avec la mention Très Bien.",
  icon: React.createElement(LuGraduationCap),
  date: "2022",
} ,

{
  title: "Classe préparatoire à l’École Supérieure des Technologies de l’Informatique et du Numérique (ESTIN)",
  location: "Amizour, Algérie",
  description:
    "Cette période a marqué mon initiation au monde de l’informatique. J’y ai acquis les bases fondamentales en programmation, en algorithmique ce qui a éveillé en moi une véritable passion pour ce domaine.",
  icon: React.createElement(CgWorkAlt),
  date: "2022 - 2024",
},

{
  title: "Développeuse Web",
  location: "Numilex 78, AVENUE DES CHAMPS-ÉLYSÉES, 75008",
  description:
    "Je travaille en tant que développeuse web à temps partiel pendant l’année universitaire, et à temps plein durant les vacances. Cette expérience m’a permis d’appliquer mes compétences, de travailler en équipe et de développer un sens aigu de la discipline.",
  icon: React.createElement(FaReact),
  date: "2024 - 2025",
},

] as const;

export const projectsData = [
{
  title: "projet pluridisciplinaire",
  description:
    "Création d'une plateforme web facilitant la prise de rendez-vous et les consultations psychologiques en ligne.",
  tags: ["React", "node js", "MongoDB", "Tailwind", "Prisma"],
  imageUrl: Epsycare,
},

  {
  title: "Stage au port BMT",
  description:
    "Création d'une application web pour optimiser la gestion des courriers entrants et sortants au sein de l’entreprise.",
  tags: ["React", "Flask", "MySQL", "Tailwind"],
  imageUrl: EcourrierBmt,
},

  {
    title: "to be continued",
    description:
      "to be continued.",
    tags: ["to be continued"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Php",
  "C",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "Git",
  "Python",
  "Mysql",
  "MongoDB",
  "Figma",
] as const;
