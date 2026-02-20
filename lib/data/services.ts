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
    id: "construction-neuve",
    slug: "construction-neuve",
    title: "Construction Neuve",
    shortDescription: "Construction de maisons individuelles et bâtiments, du terrassement aux finitions gros œuvre.",
    longDescription: "Nous prenons en charge l'intégralité du gros œuvre pour vos projets de construction neuve. De la réalisation des fondations à la pose de la charpente, notre équipe expérimentée garantit une construction solide, conforme aux normes en vigueur et adaptée à vos besoins. Chaque projet est étudié en amont pour s'adapter à la nature de votre terrain et respecter les exigences du PLU de votre commune. Nous travaillons avec des matériaux durables et certifiés, dans le respect des normes RT 2020, pour vous offrir un bâti performant sur le plan énergétique. Notre accompagnement inclut également le suivi administratif des autorisations d'urbanisme nécessaires.",
    icon: "Building2",
    image: "/images/services/construction-neuve.jpg",
    features: [
      { title: "Fondations et terrassement", description: "Préparation du terrain, étude de sol et coulage des fondations adaptées à la nature de votre parcelle." },
      { title: "Élévation des murs", description: "Construction en parpaing, brique ou pierre selon votre projet, avec isolation intégrée si nécessaire." },
      { title: "Dalles et planchers", description: "Réalisation de dalles béton armé et planchers hourdis pour tous niveaux de votre construction." },
      { title: "Charpente et toiture", description: "Pose de charpente traditionnelle ou fermette, couverture tuiles ou ardoises selon vos préférences." },
      { title: "Murs de refend et cloisons", description: "Construction des murs intérieurs porteurs et cloisons de distribution pour structurer vos espaces." },
      { title: "Assainissement et VRD", description: "Raccordements aux réseaux (eau, électricité, tout-à-l'égout) et voiries d'accès à votre parcelle." },
    ],
    process: [
      { step: 1, title: "Étude du projet", description: "Visite sur site, analyse des plans, étude de sol si nécessaire et devis détaillé gratuit." },
      { step: 2, title: "Préparation du terrain", description: "Terrassement, implantation du bâtiment, fondations et mise en conformité du sol." },
      { step: 3, title: "Gros œuvre", description: "Élévation des murs, dalles, planchers, escaliers béton et charpente." },
      { step: 4, title: "Réception", description: "Vérification de conformité, levée des réserves éventuelles et remise des clés." },
    ],
    faqs: [
      { question: "Combien de temps dure une construction neuve ?", answer: "En moyenne 8 à 12 mois selon la complexité du projet, la taille de la construction et les conditions météorologiques. Nous établissons un planning détaillé dès le début du chantier." },
      { question: "Quelles garanties proposez-vous ?", answer: "Nous offrons une garantie décennale couvrant tous les dommages structurels pendant 10 ans après livraison, une garantie de parfait achèvement d'un an, et une garantie biennale sur les équipements." },
      { question: "Travaillez-vous avec des architectes ?", answer: "Oui, nous collaborons régulièrement avec des architectes et bureaux d'études pour les projets nécessitant un permis de construire. Nous pouvons aussi vous recommander des partenaires de confiance." },
      { question: "Quels matériaux utilisez-vous pour les murs ?", answer: "Selon votre projet et votre budget, nous proposons du parpaing (le plus courant), de la brique monomur (excellente isolation), de la brique traditionnelle ou de la pierre. Nous vous conseillons le matériau le plus adapté." },
      { question: "Pouvez-vous construire sur un terrain en pente ?", answer: "Absolument. Nous avons l'expérience des terrains complexes dans la région lyonnaise. Un terrassement adapté et des fondations spécifiques (semelles filantes, radier) permettent de construire sur tous types de terrains." },
    ],
    seoTitle: "Construction Neuve à Lyon | Maçonnerie Durand",
    seoDescription: "Construction de maison neuve à Lyon et environs. Fondations, gros œuvre, murs porteurs. Artisan maçon qualifié, garantie décennale. Devis gratuit sous 48h.",
  },
  {
    id: "renovation-maconnerie",
    slug: "renovation-maconnerie",
    title: "Rénovation",
    shortDescription: "Rénovation de façades, murs porteurs, joints et structures anciennes pour redonner vie à votre bâti.",
    longDescription: "La rénovation en maçonnerie demande un savoir-faire spécifique pour respecter le bâti existant tout en le modernisant. Nous intervenons sur tous types de rénovation : ravalement de façade, reprise de murs porteurs, réfection des joints et consolidation des structures. Notre expertise du bâti ancien lyonnais — immeubles en pierre dorée, maisons de village, copropriétés haussmanniennes — nous permet d'adapter nos techniques à chaque situation. Nous réalisons un diagnostic complet et gratuit avant chaque intervention pour identifier précisément les travaux nécessaires et vous proposer les solutions les plus adaptées en termes de coût et de durabilité.",
    icon: "Hammer",
    image: "/images/services/renovation.jpg",
    features: [
      { title: "Ravalement de façade", description: "Nettoyage haute pression, réparation des fissures, enduit de finition et peinture pour embellir vos façades." },
      { title: "Reprise de murs porteurs", description: "Ouverture, renforcement ou démolition partielle avec pose d'IPN et étude structurelle préalable." },
      { title: "Réfection des joints", description: "Rejointoiement en pierre, brique ou parpaing pour améliorer l'étanchéité et l'esthétique de vos murs." },
      { title: "Consolidation structurelle", description: "Renforcement des fondations fragilisées, reprise en sous-œuvre et traitement des fissures structurelles." },
      { title: "Traitement de l'humidité", description: "Injection de résine hydrophobe, drainage périphérique et cuvelage pour stopper les remontées capillaires." },
      { title: "Démolition et évacuation", description: "Démolition contrôlée de cloisons, murs et structures, tri des gravats et évacuation en déchetterie agréée." },
    ],
    process: [
      { step: 1, title: "Diagnostic", description: "Visite technique approfondie, évaluation de l'état du bâti et identification précise des travaux nécessaires." },
      { step: 2, title: "Proposition technique", description: "Devis détaillé avec solutions adaptées, planning prévisionnel et choix des matériaux." },
      { step: 3, title: "Travaux de rénovation", description: "Intervention soignée dans le respect du bâti existant, avec protection des parties non concernées." },
      { step: 4, title: "Finitions et nettoyage", description: "Finitions soignées, vérification de la qualité et nettoyage complet du chantier." },
    ],
    faqs: [
      { question: "Faut-il un permis pour rénover une façade ?", answer: "Un ravalement de façade nécessite généralement une déclaration préalable de travaux auprès de votre mairie. Dans certains secteurs protégés de Lyon, un accord des Architectes des Bâtiments de France peut être requis." },
      { question: "Peut-on ouvrir un mur porteur ?", answer: "Oui, avec une étude structurelle préalable obligatoire réalisée par un bureau d'études agréé. Nous posons des IPN ou poutres de renfort adaptées au calcul de charges. L'intervention est minutieusement planifiée pour garantir la sécurité." },
      { question: "Quel est le coût moyen d'une rénovation de façade ?", answer: "Le prix varie de 30 à 100 €/m² selon l'état de la façade, le type de traitement choisi (nettoyage, enduit, peinture) et la hauteur du bâtiment nécessitant un échafaudage." },
      { question: "Comment traiter les fissures sur un mur ?", answer: "Tout dépend de la nature de la fissure. Les microfissures superficielles se traitent par simple rebouchage. Les fissures structurelles nécessitent un diagnostic approfondi, parfois un renforcement des fondations ou la pose d'agrafes métalliques." },
      { question: "Intervenez-vous en copropriété ?", answer: "Oui, nous intervenons régulièrement en copropriété pour des ravalements de façade, des réparations de parties communes ou des travaux votés en assemblée générale. Nous présentons nos devis au syndic et adaptons notre planning aux contraintes de l'immeuble." },
    ],
    seoTitle: "Rénovation Maçonnerie à Lyon | Maçonnerie Durand",
    seoDescription: "Rénovation maçonnerie à Lyon. Ravalement façade, murs porteurs, joints, consolidation. Artisan qualifié, devis gratuit sous 48h.",
  },
  {
    id: "extension-surelevation",
    slug: "extension-surelevation",
    title: "Extension & Surélévation",
    shortDescription: "Agrandissez votre maison avec une extension au sol ou une surélévation pour gagner en surface habitable.",
    longDescription: "Besoin de plus d'espace ? L'extension ou la surélévation de votre maison est souvent la solution la plus économique et la plus rapide par rapport à un déménagement. Nous réalisons tous types d'agrandissements, de la simple véranda maçonnée à la surélévation complète d'un étage. Notre priorité est d'assurer un raccordement parfait entre la structure existante et la nouvelle construction, tant sur le plan esthétique que technique. Nous vérifions systématiquement le PLU de votre commune et la capacité portante de vos fondations avant de démarrer. Un projet d'extension bien conçu peut augmenter la valeur de votre bien de 15 à 30 %.",
    icon: "Maximize2",
    image: "/images/services/extension.jpg",
    features: [
      { title: "Extension latérale", description: "Agrandissement au sol avec raccordement parfait à l'existant, idéal pour ajouter une pièce de vie ou un garage." },
      { title: "Surélévation", description: "Ajout d'un étage complet ou partiel sur votre maison existante après étude de la capacité portante des fondations." },
      { title: "Aménagement de combles", description: "Transformation de combles perdus en espace habitable avec renforcement du plancher et création d'ouvertures." },
      { title: "Véranda maçonnée", description: "Construction de véranda en dur avec murets maçonnés, baies vitrées et toiture intégrée à votre habitation." },
      { title: "Garage et annexes", description: "Construction de garage attenant ou indépendant, abri de jardin maçonné, local technique ou pool house." },
      { title: "Terrasse et aménagements extérieurs", description: "Création de terrasse en béton, murs de soutènement, escaliers extérieurs et murets de clôture." },
    ],
    process: [
      { step: 1, title: "Faisabilité", description: "Étude de faisabilité technique, vérification du PLU, analyse de la structure existante et de la capacité des fondations." },
      { step: 2, title: "Conception", description: "Plans détaillés en collaboration avec un architecte si nécessaire, choix des matériaux et dépôt des autorisations." },
      { step: 3, title: "Construction", description: "Travaux de gros œuvre, raccordement soigné à la structure existante et intégration à la toiture." },
      { step: 4, title: "Livraison", description: "Finitions gros œuvre, vérification de l'étanchéité aux points de jonction et réception des travaux." },
    ],
    faqs: [
      { question: "Faut-il un permis de construire pour une extension ?", answer: "Une extension de moins de 20 m² (ou 40 m² en zone urbaine avec PLU) nécessite une simple déclaration préalable. Au-delà, un permis de construire est requis. Si la surface totale dépasse 150 m², le recours à un architecte est obligatoire." },
      { question: "Peut-on surélever n'importe quelle maison ?", answer: "Non, il faut vérifier que les fondations et la structure existante peuvent supporter le poids supplémentaire. Une étude structurelle par un bureau d'études est indispensable avant tout projet de surélévation." },
      { question: "Combien coûte une extension de maison ?", answer: "Le coût varie de 1 200 à 2 500 €/m² pour une extension classique et de 1 500 à 3 000 €/m² pour une surélévation, selon les matériaux choisis et la complexité du raccordement à l'existant." },
      { question: "Combien de temps durent les travaux d'extension ?", answer: "Une extension simple de 20 à 40 m² prend en général 3 à 5 mois. Une surélévation complète peut nécessiter 5 à 8 mois. Nous établissons un planning précis en amont pour minimiser les désagréments." },
      { question: "L'extension sera-t-elle visible de l'extérieur ?", answer: "Notre objectif est toujours d'intégrer l'extension harmonieusement à l'existant. Nous utilisons les mêmes matériaux et le même style architectural pour un rendu homogène. Le raccordement de toiture est particulièrement soigné." },
    ],
    seoTitle: "Extension & Surélévation Maison à Lyon | Maçonnerie Durand",
    seoDescription: "Extension et surélévation de maison à Lyon. Agrandissement, aménagement combles, véranda. Artisan maçon qualifié. Devis gratuit.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
