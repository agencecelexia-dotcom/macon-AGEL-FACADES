export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  projectType: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Pierre et Catherine M.",
    initials: "PM",
    location: "Reims (51)",
    rating: 5,
    text: "Ravalement complet de notre maison réalisé avec un grand professionnalisme. L'équipe d'AGEL Facades a été ponctuelle, soignée et le résultat est magnifique. Notre façade a retrouvé tout son éclat !",
    date: "2025-12-15",
    projectType: "Ravalement de façade",
  },
  {
    id: "2",
    name: "Nathalie L.",
    initials: "NL",
    location: "Bezannes (51)",
    rating: 5,
    text: "Isolation thermique par l'extérieur de notre pavillon. Travail impeccable, nous avons déjà constaté une nette différence sur notre facture de chauffage. L'accompagnement pour les aides MaPrimeRénov' a été très appréciable.",
    date: "2025-11-20",
    projectType: "Isolation thermique (ITE)",
  },
  {
    id: "3",
    name: "Jean-Marc D.",
    initials: "JD",
    location: "Tinqueux (51)",
    rating: 5,
    text: "Enduit de façade gratté sur notre construction neuve. Finition parfaite, coloris conforme à notre choix. Équipe sérieuse et respectueuse de notre propriété. Je recommande vivement !",
    date: "2025-10-08",
    projectType: "Enduit de façade",
  },
  {
    id: "4",
    name: "Sophie et Marc R.",
    initials: "SR",
    location: "Cormontreuil (51)",
    rating: 5,
    text: "Ravalement de la façade de notre immeuble en copropriété. AGEL Facades a su s'adapter aux contraintes de l'immeuble et le résultat est superbe. Les voisins sont tous ravis.",
    date: "2025-09-12",
    projectType: "Ravalement de façade",
  },
  {
    id: "5",
    name: "Philippe B.",
    initials: "PB",
    location: "Épernay (51)",
    rating: 5,
    text: "Peinture extérieure complète de notre maison. Préparation minutieuse des supports et application soignée. Le rendu est professionnel et la tenue dans le temps est excellente.",
    date: "2025-08-25",
    projectType: "Peinture de façade",
  },
  {
    id: "6",
    name: "Isabelle C.",
    initials: "IC",
    location: "Saint-Brice-Courcelles (51)",
    rating: 5,
    text: "ITE complète avec finition enduit taloché. L'équipe est très compétente et le chantier a été livré dans les délais. Notre maison est plus belle et mieux isolée.",
    date: "2025-07-18",
    projectType: "Isolation thermique (ITE)",
  },
  {
    id: "7",
    name: "François G.",
    initials: "FG",
    location: "Witry-lès-Reims (51)",
    rating: 5,
    text: "Traitement de fissures et ravalement de notre façade en pierre. Le travail de rejointoiement est remarquable, on voit le savoir-faire. Devis respecté au centime près.",
    date: "2025-06-30",
    projectType: "Ravalement de façade",
  },
  {
    id: "8",
    name: "Laurent P.",
    initials: "LP",
    location: "Bétheny (51)",
    rating: 5,
    text: "Crépi de façade sur notre maison neuve. Finition grattée parfaite, application régulière et propre. Très satisfait du résultat et du rapport qualité-prix. Merci AGEL !",
    date: "2025-05-22",
    projectType: "Enduit de façade",
  },
];

export const aggregateRating = {
  average: 5.0,
  count: 12,
  distribution: {
    5: 12,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
};
