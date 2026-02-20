export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "ravalement-facade",
    slug: "ravalement-facade",
    title: "Ravalement de Façade",
    shortDescription: "Ravalement complet de façades : nettoyage, réparation, enduit de finition et peinture pour redonner vie à votre bâti.",
    longDescription: "Le ravalement de façade est notre spécialité principale. Nous prenons en charge l'intégralité de votre projet, du diagnostic initial à la finition. Nos équipes expérimentées interviennent sur tous types de façades — immeubles, maisons individuelles, copropriétés et bâtiments commerciaux — dans la région de Reims et dans tout le Grand Est. Chaque chantier fait l'objet d'un diagnostic complet et gratuit permettant d'identifier les pathologies (fissures, décollements, infiltrations) et de proposer les traitements les plus adaptés. Nous travaillons dans le respect des normes en vigueur et des réglementations locales d'urbanisme.",
    icon: "Building2",
    image: "/images/services/construction-neuve.jpg",
    features: [
      { title: "Nettoyage de façade", description: "Nettoyage haute pression, sablage, gommage ou traitement chimique selon le support pour un résultat impeccable." },
      { title: "Traitement des fissures", description: "Diagnostic et réparation des fissures superficielles et structurelles par pontage, agrafage ou injection de résine." },
      { title: "Enduit de façade", description: "Application d'enduits traditionnels ou monocouches : finition grattée, talochée, lissée ou imitation pierre selon vos préférences." },
      { title: "Peinture de façade", description: "Application de peintures minérales, siloxanes ou pliolites adaptées à votre support pour une protection durable." },
      { title: "Rejointoiement", description: "Réfection des joints en pierre, brique ou parpaing pour améliorer l'étanchéité et l'esthétique de vos murs." },
      { title: "Traitement anti-humidité", description: "Hydrofugation, traitement anti-mousse et protection contre les remontées capillaires pour préserver votre façade." },
    ],
    process: [
      { step: 1, title: "Diagnostic gratuit", description: "Visite technique approfondie, évaluation de l'état de la façade et identification des pathologies et traitements nécessaires." },
      { step: 2, title: "Devis détaillé", description: "Proposition technique complète avec solutions adaptées, choix des matériaux, planning prévisionnel et estimation des aides financières." },
      { step: 3, title: "Travaux de ravalement", description: "Installation de l'échafaudage, nettoyage, réparations, traitement et application de l'enduit ou peinture de finition." },
      { step: 4, title: "Réception du chantier", description: "Vérification de la qualité des finitions, nettoyage complet du chantier et remise du procès-verbal de réception." },
    ],
    faqs: [
      { question: "Faut-il un permis pour un ravalement de façade ?", answer: "Un ravalement de façade nécessite généralement une déclaration préalable de travaux auprès de votre mairie. Dans certains secteurs protégés de Reims, un accord des Architectes des Bâtiments de France peut être requis." },
      { question: "Combien coûte un ravalement de façade ?", answer: "Le prix varie de 30 à 100 €/m² selon l'état de la façade, le type de traitement choisi (nettoyage, enduit, peinture) et la hauteur du bâtiment nécessitant un échafaudage. Nous établissons un devis gratuit et détaillé." },
      { question: "Tous les combien faut-il ravaler sa façade ?", answer: "Il est recommandé de ravaler sa façade tous les 10 à 15 ans. Dans certaines communes, le ravalement est obligatoire tous les 10 ans. Un ravalement préventif coûte toujours moins cher qu'une réparation lourde." },
      { question: "Intervenez-vous en copropriété ?", answer: "Oui, nous intervenons régulièrement en copropriété pour des ravalements de façade votés en assemblée générale. Nous présentons nos devis au syndic et adaptons notre planning aux contraintes de l'immeuble." },
      { question: "Quelles aides financières pour un ravalement ?", answer: "Selon les travaux réalisés, vous pouvez bénéficier de la TVA à 10 %, de MaPrimeRénov' (si ITE associée), de l'éco-PTZ et de subventions locales. Nous vous accompagnons dans vos démarches." },
    ],
    seoTitle: "Ravalement de Façade à Reims | AGEL Facades",
    seoDescription: "Ravalement de façade à Reims et environs. Nettoyage, enduit, peinture, traitement fissures. Artisan qualifié RGE, garantie décennale. Devis gratuit sous 48h.",
  },
  {
    id: "isolation-thermique",
    slug: "isolation-thermique",
    title: "Isolation Thermique (ITE)",
    shortDescription: "Isolation thermique par l'extérieur pour améliorer la performance énergétique de votre bâtiment tout en embellissant vos façades.",
    longDescription: "L'isolation thermique par l'extérieur (ITE) est la solution la plus performante pour réduire les déperditions énergétiques de votre bâtiment sans perdre de surface habitable. Notre entreprise certifiée RGE réalise des chantiers d'ITE complets, du diagnostic thermique à la pose de l'enduit de finition. Nous utilisons des matériaux isolants certifiés (polystyrène expansé, laine de roche, fibre de bois) et appliquons les techniques les plus rigoureuses pour garantir une isolation durable et performante. Grâce à notre certification RGE, vos travaux sont éligibles aux aides financières de l'État (MaPrimeRénov', CEE, éco-PTZ).",
    icon: "Hammer",
    image: "/images/services/renovation.jpg",
    features: [
      { title: "Diagnostic thermique", description: "Analyse des déperditions énergétiques de votre bâtiment et identification des zones prioritaires à isoler." },
      { title: "Pose de l'isolant", description: "Fixation mécanique et/ou collage de panneaux isolants (PSE, laine de roche, fibre de bois) selon vos besoins." },
      { title: "Sous-enduit armé", description: "Application du sous-enduit avec treillis d'armature en fibre de verre pour une résistance mécanique optimale." },
      { title: "Enduit de finition", description: "Large choix de finitions (grattée, talochée, ribbée) et de coloris pour personnaliser l'aspect de votre façade." },
      { title: "Traitement des points singuliers", description: "Soins particuliers aux angles, tableaux de fenêtres, soubassements et jonctions pour une isolation sans pont thermique." },
      { title: "Accompagnement aides", description: "Montage complet de vos dossiers MaPrimeRénov', CEE et éco-PTZ grâce à notre certification RGE." },
    ],
    process: [
      { step: 1, title: "Audit énergétique", description: "Visite technique, analyse thermique du bâtiment et estimation des économies d'énergie réalisables avec l'ITE." },
      { step: 2, title: "Conception du projet", description: "Choix de l'isolant et de l'épaisseur, sélection de la finition, montage des dossiers d'aides et devis détaillé." },
      { step: 3, title: "Travaux d'isolation", description: "Installation de l'échafaudage, pose de l'isolant, application du sous-enduit armé et de l'enduit de finition." },
      { step: 4, title: "Contrôle et réception", description: "Vérification de la conformité thermique, contrôle des finitions et remise des attestations pour les aides." },
    ],
    faqs: [
      { question: "Quelles économies d'énergie avec une ITE ?", answer: "L'ITE permet de réduire les pertes de chaleur de 25 à 40 % par les murs, soit une économie de 15 à 25 % sur votre facture de chauffage annuelle. Le retour sur investissement se situe entre 8 et 15 ans selon votre situation." },
      { question: "Quelle épaisseur d'isolant choisir ?", answer: "L'épaisseur dépend du niveau de performance visé et du type d'isolant. En général, 12 à 16 cm de polystyrène expansé ou 10 à 14 cm de laine de roche suffisent pour atteindre les exigences de la RT 2020." },
      { question: "L'ITE modifie-t-elle l'aspect de ma maison ?", answer: "L'ITE ajoute une surépaisseur aux murs (12 à 20 cm) mais permet de choisir parmi de nombreuses finitions et coloris. C'est l'occasion de moderniser l'aspect de votre façade tout en l'isolant." },
      { question: "Quelles aides pour une ITE en 2026 ?", answer: "En tant qu'artisan RGE, nos travaux sont éligibles à MaPrimeRénov' (jusqu'à 75 €/m²), aux CEE (10 à 20 €/m²), à la TVA à 5,5 % et à l'éco-PTZ (jusqu'à 50 000 €). Le cumul peut couvrir 40 à 60 % du coût total." },
      { question: "Peut-on faire une ITE sur tous les bâtiments ?", answer: "L'ITE est possible sur la plupart des bâtiments, sauf ceux classés monuments historiques ou situés dans certains périmètres protégés. Une étude de faisabilité permet de vérifier la compatibilité avec votre bâti." },
    ],
    seoTitle: "Isolation Thermique par l'Extérieur (ITE) à Reims | AGEL Facades",
    seoDescription: "ITE à Reims et environs. Isolation thermique par l'extérieur, économies d'énergie, aides MaPrimeRénov'. Artisan RGE certifié. Devis gratuit.",
  },
  {
    id: "peinture-enduits",
    slug: "peinture-enduits",
    title: "Peinture & Enduits",
    shortDescription: "Peinture intérieure et extérieure, enduits décoratifs et de protection pour embellir et protéger vos surfaces.",
    longDescription: "Notre expertise en peinture et enduits s'étend aux travaux intérieurs comme extérieurs. Que ce soit pour une rénovation complète, un rafraîchissement ou une mise en beauté, nous proposons des solutions adaptées à chaque support et à chaque budget. Nos peintres-façadiers qualifiés maîtrisent toutes les techniques d'application : rouleau, airless, taloche, projection. Nous travaillons avec des produits de marques reconnues (Weber, Parex, PRB, Tollens) pour garantir un résultat durable et esthétique. Chaque chantier bénéficie d'une préparation minutieuse des supports, gage d'une finition impeccable et pérenne.",
    icon: "Maximize2",
    image: "/images/services/extension.jpg",
    features: [
      { title: "Peinture extérieure", description: "Application de peintures de façade (siloxane, pliolite, acrylique) pour protéger et embellir vos murs extérieurs durablement." },
      { title: "Peinture intérieure", description: "Travaux de peinture intérieure pour particuliers et professionnels : murs, plafonds, boiseries et éléments décoratifs." },
      { title: "Enduit monocouche", description: "Application d'enduits monocouches en finition grattée, talochée ou écrasée, idéale pour les constructions neuves et rénovations." },
      { title: "Enduit traditionnel", description: "Enduits à la chaux ou au ciment en deux ou trois couches pour les bâtiments anciens, dans le respect du bâti existant." },
      { title: "Crépi de façade", description: "Projection de crépi décoratif avec choix de grain et de coloris pour personnaliser l'aspect extérieur de votre bâtiment." },
      { title: "Préparation des supports", description: "Décapage, ponçage, rebouchage, application de fixateur et sous-couche pour garantir l'adhérence et la durabilité des finitions." },
    ],
    process: [
      { step: 1, title: "Visite et diagnostic", description: "Évaluation de l'état des supports, identification des traitements préparatoires nécessaires et choix des produits adaptés." },
      { step: 2, title: "Devis et colorimétrie", description: "Proposition de devis détaillé avec échantillons de couleurs et de finitions pour valider votre choix esthétique." },
      { step: 3, title: "Préparation et application", description: "Préparation soignée des supports, protection des zones adjacentes et application des couches de peinture ou d'enduit." },
      { step: 4, title: "Finitions et contrôle", description: "Retouches de finition, contrôle qualité de l'ensemble du chantier et nettoyage complet avant réception." },
    ],
    faqs: [
      { question: "Quelle peinture choisir pour ma façade ?", answer: "Le choix dépend du support et de l'exposition. La peinture siloxane offre la meilleure durabilité (10-15 ans), la pliolite est idéale pour les façades légèrement fissurées, et l'acrylique convient aux supports neufs ou en bon état." },
      { question: "Quelle différence entre enduit gratté et taloché ?", answer: "L'enduit gratté présente un aspect strié obtenu en grattant la surface avec une taloche à clous. L'enduit taloché offre un aspect plus lisse et uniforme, obtenu par lissage à la taloche. Le choix est essentiellement esthétique." },
      { question: "Faut-il traiter les murs avant de peindre ?", answer: "Oui, la préparation des supports est essentielle. Selon l'état des murs, il faudra décaper l'ancienne peinture, traiter les fissures, appliquer un fixateur ou un anti-mousse. Une bonne préparation garantit un résultat durable." },
      { question: "Combien coûte une peinture de façade ?", answer: "Le prix d'une peinture de façade varie de 20 à 45 €/m² selon le type de peinture, l'état du support et la difficulté d'accès. L'enduit monocouche se situe entre 25 et 50 €/m². Nous établissons un devis gratuit et personnalisé." },
      { question: "Quelle est la durée de vie d'un enduit de façade ?", answer: "Un enduit de façade bien réalisé dure entre 15 et 30 ans selon le type d'enduit, l'exposition et l'entretien. Un entretien régulier (nettoyage, traitement anti-mousse) prolonge significativement sa durée de vie." },
    ],
    seoTitle: "Peinture & Enduits de Façade à Reims | AGEL Facades",
    seoDescription: "Peinture et enduits de façade à Reims. Peinture intérieure/extérieure, enduit monocouche, crépi. Artisan qualifié, devis gratuit sous 48h.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
