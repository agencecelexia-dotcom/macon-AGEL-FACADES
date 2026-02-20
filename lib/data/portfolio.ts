export type PortfolioCategory = "ravalement" | "isolation" | "peinture";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  location: string;
  year: number;
  imageBefore: string;
  imageAfter: string;
  duration: string;
  surface?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ravalement-immeuble-reims",
    title: "Ravalement façade immeuble",
    description: "Ravalement complet d'un immeuble de 3 étages en centre-ville de Reims. Nettoyage haute pression, traitement des fissures, enduit de finition taloché.",
    category: "ravalement",
    location: "Reims (51)",
    year: 2025,
    imageBefore: "/images/portfolio/maison-plainpied-avant.jpg",
    imageAfter: "/images/portfolio/maison-plainpied-apres.jpg",
    duration: "4 semaines",
    surface: "320 m²",
  },
  {
    id: "ite-pavillon-bezannes",
    title: "ITE pavillon individuel",
    description: "Isolation thermique par l'extérieur d'un pavillon des années 80. Pose de 14 cm de PSE, sous-enduit armé et finition grattée. Économie d'énergie estimée à 30 %.",
    category: "isolation",
    location: "Bezannes (51)",
    year: 2025,
    imageBefore: "/images/portfolio/facade-avant.jpg",
    imageAfter: "/images/portfolio/facade-apres.jpg",
    duration: "3 semaines",
    surface: "140 m²",
  },
  {
    id: "peinture-facade-tinqueux",
    title: "Peinture de façade maison",
    description: "Peinture siloxane complète d'une maison individuelle après préparation des supports : décapage, traitement anti-mousse et application de deux couches.",
    category: "peinture",
    location: "Tinqueux (51)",
    year: 2025,
    imageBefore: "/images/portfolio/extension-avant.jpg",
    imageAfter: "/images/portfolio/extension-apres.jpg",
    duration: "10 jours",
    surface: "95 m²",
  },
  {
    id: "ravalement-copro-cormontreuil",
    title: "Ravalement copropriété",
    description: "Ravalement de façade d'une résidence de 24 logements. Sous-enduit et finition grattée sur l'ensemble des façades avec traitement des balcons.",
    category: "ravalement",
    location: "Cormontreuil (51)",
    year: 2024,
    imageBefore: "/images/portfolio/surelevation-avant.jpg",
    imageAfter: "/images/portfolio/surelevation-apres.jpg",
    duration: "6 semaines",
    surface: "850 m²",
  },
  {
    id: "enduit-maison-neuve-betheny",
    title: "Enduit maison neuve",
    description: "Application d'enduit monocouche finition grattée sur construction neuve. Choix de coloris personnalisé avec traitement soigné des points singuliers.",
    category: "peinture",
    location: "Bétheny (51)",
    year: 2025,
    imageBefore: "/images/portfolio/mur-porteur-avant.jpg",
    imageAfter: "/images/portfolio/mur-porteur-apres.jpg",
    duration: "2 semaines",
    surface: "180 m²",
  },
  {
    id: "ite-immeuble-epernay",
    title: "ITE immeuble collectif",
    description: "Isolation thermique par l'extérieur d'un immeuble collectif de 16 logements. Laine de roche 12 cm, sous-enduit armé et finition talochée.",
    category: "isolation",
    location: "Épernay (51)",
    year: 2024,
    imageBefore: "/images/portfolio/garage-avant.jpg",
    imageAfter: "/images/portfolio/garage-apres.jpg",
    duration: "8 semaines",
    surface: "600 m²",
  },
];

export const portfolioCategories: { value: PortfolioCategory | "all"; label: string }[] = [
  { value: "all", label: "Tous les projets" },
  { value: "ravalement", label: "Ravalement" },
  { value: "isolation", label: "Isolation (ITE)" },
  { value: "peinture", label: "Peinture & Enduits" },
];
