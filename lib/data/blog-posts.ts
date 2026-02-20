export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readingTime: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "prix-maconnerie-2026",
    title: "Quel est le prix au m² pour de la maçonnerie en 2026 ?",
    excerpt: "Découvrez les tarifs moyens pour vos travaux de maçonnerie : construction, rénovation, extension. Guide complet des prix actualisés.",
    content: `## Les prix de la maçonnerie en 2026

Les tarifs de la maçonnerie varient selon le type de travaux, les matériaux utilisés et la complexité du chantier.

### Construction neuve

Pour une construction neuve en gros œuvre, comptez en moyenne :

- **Fondations** : 100 à 200 €/m²
- **Élévation des murs** : 40 à 80 €/m²
- **Dalle béton** : 50 à 100 €/m²
- **Charpente** : 60 à 130 €/m²

### Rénovation

Les travaux de rénovation en maçonnerie se situent généralement entre :

- **Ravalement de façade** : 30 à 100 €/m²
- **Rejointoiement** : 25 à 60 €/m²
- **Ouverture mur porteur** : 1 500 à 5 000 € selon la portée

### Extension

L'extension de maison coûte en moyenne :

- **Extension classique** : 1 200 à 2 500 €/m²
- **Surélévation** : 1 500 à 3 000 €/m²
- **Véranda maçonnée** : 1 000 à 2 000 €/m²

### Comment obtenir le meilleur prix ?

1. Demandez plusieurs devis pour comparer
2. Privilégiez un artisan local avec garantie décennale
3. Prévoyez les travaux hors période hivernale si possible
4. Groupez les travaux pour réduire les coûts de déplacement

**Besoin d'un devis précis pour votre projet ?** [Contactez-nous](/contact) pour un devis gratuit sous 48h.`,
    author: "Maçonnerie Durand",
    date: "2026-02-01",
    category: "Prix & Tarifs",
    image: "/images/blog/prix-maconnerie.jpg",
    readingTime: 5,
    tags: ["prix", "tarifs", "maçonnerie", "devis"],
  },
  {
    slug: "choisir-son-macon",
    title: "Comment choisir son maçon : 7 critères essentiels",
    excerpt: "Ne vous trompez pas dans le choix de votre maçon. Voici les 7 critères indispensables pour trouver un professionnel fiable.",
    content: `## 7 critères pour bien choisir son maçon

Choisir le bon maçon est crucial pour la réussite de votre projet. Voici les critères à vérifier.

### 1. La garantie décennale

C'est le critère n°1. Tout maçon doit être couvert par une assurance décennale. Demandez une copie de l'attestation avant de signer le devis.

### 2. Les références et réalisations

Un bon maçon sera fier de vous montrer ses réalisations précédentes. Demandez des photos et si possible les coordonnées de clients précédents.

### 3. Les avis clients

Consultez les avis Google, les témoignages sur le site web. Un artisan avec de nombreux avis positifs et vérifiés est un gage de confiance.

### 4. Le devis détaillé

Méfiez-vous des devis trop vagues. Un bon devis doit détailler :
- Les matériaux utilisés avec les quantités
- La main d'œuvre
- Les délais prévisionnels
- Les conditions de paiement

### 5. Les qualifications

Les labels comme **RGE** ou **Qualibat** attestent d'un niveau de compétence vérifié par un organisme indépendant.

### 6. La proximité géographique

Un artisan local connaît les spécificités du sol, le PLU de votre commune, et sera plus réactif en cas de besoin.

### 7. Le relationnel

Le chantier va durer plusieurs semaines voire mois. Le courant doit bien passer avec votre maçon pour une collaboration sereine.

**Vous cherchez un maçon de confiance ?** [Demandez votre devis gratuit](/contact) et jugez par vous-même notre sérieux.`,
    author: "Maçonnerie Durand",
    date: "2026-01-15",
    category: "Conseils",
    image: "/images/blog/choisir-macon.jpg",
    readingTime: 4,
    tags: ["conseils", "maçon", "choix", "qualité"],
  },
  {
    slug: "extension-maison-permis-construire",
    title: "Extension maison : permis de construire ou déclaration préalable ?",
    excerpt: "Quelle autorisation d'urbanisme pour votre extension de maison ? Permis de construire ou déclaration préalable ? On vous explique tout.",
    content: `## Quelle autorisation pour votre extension ?

Avant de commencer des travaux d'extension, il est essentiel de savoir quelle autorisation d'urbanisme vous devez obtenir.

### Déclaration préalable de travaux

La déclaration préalable (DP) suffit dans ces cas :
- Extension de **moins de 20 m²** de surface de plancher
- En zone urbaine avec PLU : extension de **moins de 40 m²**
- À condition que la surface totale après travaux ne dépasse pas 150 m²

### Permis de construire

Le permis de construire (PC) est obligatoire quand :
- L'extension dépasse **20 m²** (ou 40 m² en zone urbaine avec PLU)
- La surface totale après travaux dépasse **150 m²**
- Le projet modifie la structure porteuse ou la façade

### Cas particulier : le recours à un architecte

Si la surface totale de votre maison après extension dépasse **150 m²**, le recours à un architecte est **obligatoire**.

### Les délais d'instruction

- **Déclaration préalable** : 1 mois
- **Permis de construire** : 2 mois (3 mois si secteur protégé)

### Notre conseil

Avant tout projet d'extension, consultez le PLU de votre commune et rapprochez-vous du service urbanisme de votre mairie. Nous pouvons également vous accompagner dans ces démarches.

**Vous avez un projet d'extension ?** [Contactez-nous](/contact) pour une étude de faisabilité gratuite.`,
    author: "Maçonnerie Durand",
    date: "2025-12-20",
    category: "Réglementation",
    image: "/images/blog/extension-permis.jpg",
    readingTime: 4,
    tags: ["extension", "permis de construire", "déclaration préalable", "urbanisme"],
  },
  {
    slug: "renovation-facade-etapes-erreurs",
    title: "Rénovation de façade : étapes clés et erreurs à éviter",
    excerpt: "Un ravalement de façade bien mené protège votre maison et lui redonne de la valeur. Découvrez le déroulement complet et les pièges à éviter.",
    content: `## Rénovation de façade : le guide complet

La façade est la première chose que l'on voit de votre maison. Au-delà de l'esthétique, elle joue un rôle crucial dans l'isolation thermique et la protection contre les intempéries. Voici comment réussir votre ravalement.

### Pourquoi rénover sa façade ?

Avec le temps, les façades subissent les agressions du climat : pluie, gel, pollution, UV. Des fissures apparaissent, l'enduit se décolle, des traces de mousse ou de salpêtre se développent. Outre l'aspect visuel, ces dégradations peuvent entraîner des infiltrations d'eau et des ponts thermiques.

Rénover sa façade, c'est :
- **Protéger le bâti** contre l'humidité et les infiltrations
- **Améliorer l'isolation** thermique (jusqu'à 25 % d'économies d'énergie avec un ITE)
- **Augmenter la valeur** de votre bien immobilier
- **Respecter la loi** : le ravalement est obligatoire tous les 10 ans dans certaines communes

### Les 6 étapes d'un ravalement réussi

#### 1. Le diagnostic initial

Un professionnel inspecte la façade pour repérer fissures, décollements, traces d'humidité et problèmes structurels. Ce diagnostic détermine les traitements nécessaires.

#### 2. La préparation du chantier

Mise en place de l'échafaudage, bâchage pour protéger les ouvertures et le sol. En copropriété, la déclaration préalable en mairie est obligatoire.

#### 3. Le nettoyage

Selon l'état de la façade : nettoyage haute pression, sablage, gommage ou traitement chimique. L'objectif est d'obtenir un support propre et sain.

#### 4. La réparation

Traitement des fissures (pontage, injection de résine), rebouchage des trous, reprise des joints dégradés, consolidation des parties fragilisées.

#### 5. Le traitement

Application d'un hydrofuge, d'un anti-mousse ou d'un fixateur selon les besoins identifiés lors du diagnostic. Cette étape assure la longévité du ravalement.

#### 6. La finition

Application de l'enduit de finition ou de la peinture. C'est ce qui donnera à votre façade son aspect final : lisse, gratté, taloché, ou imitation pierre.

### Les 5 erreurs les plus courantes

1. **Négliger le diagnostic** : chaque façade est unique, un traitement standard ne convient pas toujours
2. **Peindre sur un support dégradé** : la peinture ne masque pas les fissures, elle les aggrave
3. **Choisir un enduit incompatible** : un enduit ciment sur un mur en pierre ancienne empêche le mur de respirer
4. **Oublier le traitement anti-mousse** : les mousses et lichens reviendront en quelques mois
5. **Faire l'impasse sur l'échafaudage** : travailler sur une échelle est dangereux et ne permet pas un travail de qualité

### Quel budget prévoir ?

Les prix varient de **30 à 100 €/m²** selon l'état de la façade, le type de finition et la difficulté d'accès :

| Type de travaux | Prix moyen au m² |
|---|---|
| Nettoyage simple | 15 à 30 € |
| Ravalement avec enduit | 40 à 70 € |
| Ravalement avec ITE | 80 à 150 € |
| Peinture de façade | 20 à 45 € |

### Notre conseil

Ne repoussez pas un ravalement de façade. Plus vous attendez, plus les dégradations s'aggravent et plus le chantier sera coûteux. Un ravalement préventif coûte toujours moins cher qu'une réparation lourde.

**Votre façade a besoin d'un coup de jeune ?** [Demandez votre devis gratuit](/contact) et bénéficiez d'un diagnostic offert.`,
    author: "Maçonnerie Durand",
    date: "2026-02-10",
    category: "Conseils",
    image: "/images/blog/renovation-facade.jpg",
    readingTime: 7,
    tags: ["façade", "ravalement", "rénovation", "enduit", "conseils"],
  },
  {
    slug: "aides-financieres-travaux-maconnerie-2026",
    title: "Quelles aides financières pour vos travaux de maçonnerie en 2026 ?",
    excerpt: "MaPrimeRénov', éco-PTZ, TVA réduite, aides locales… Tour d'horizon complet des dispositifs pour financer vos travaux de maçonnerie.",
    content: `## Aides financières pour la maçonnerie en 2026

Bonne nouvelle : de nombreuses aides existent pour alléger le coût de vos travaux de maçonnerie, surtout lorsqu'ils améliorent la performance énergétique de votre logement.

### MaPrimeRénov'

Le dispositif phare de l'État reste **MaPrimeRénov'**, accessible à tous les propriétaires sans condition de revenus (le montant varie en fonction des ressources).

**Travaux de maçonnerie éligibles :**
- Isolation thermique par l'extérieur (ITE) — jusqu'à **75 €/m²** pour les ménages modestes
- Isolation des murs par l'intérieur (ITI) — jusqu'à **25 €/m²**
- Isolation des planchers bas — jusqu'à **10 €/m²**

**Conditions :**
- Logement de plus de 15 ans
- Résidence principale
- Travaux réalisés par un artisan RGE
- Devis signé après la demande en ligne

### L'éco-prêt à taux zéro (éco-PTZ)

L'éco-PTZ permet d'emprunter **jusqu'à 50 000 €** sans payer d'intérêts pour financer des travaux de rénovation énergétique.

**Avantages :**
- Aucun intérêt à rembourser
- Durée de remboursement jusqu'à 20 ans
- Cumulable avec MaPrimeRénov'
- Pas de conditions de revenus

### La TVA à taux réduit

Pour les travaux de rénovation sur des logements de plus de 2 ans :
- **TVA à 5,5 %** pour les travaux d'amélioration énergétique (ITE, isolation)
- **TVA à 10 %** pour les autres travaux de rénovation (ravalement, ouverture mur porteur, rejointoiement)

Cet avantage est appliqué directement sur le devis, sans démarche particulière de votre part.

### Les Certificats d'Économies d'Énergie (CEE)

Les fournisseurs d'énergie (EDF, Engie, TotalÉnergies…) financent une partie de vos travaux via les CEE, aussi appelés "primes énergie".

**Montants indicatifs :**
- ITE : **10 à 20 €/m²** de prime
- Isolation planchers : **5 à 12 €/m²** de prime
- Cumulables avec MaPrimeRénov'

### Les aides locales dans la métropole de Lyon

La Métropole de Lyon et la Région Auvergne-Rhône-Alpes proposent des aides complémentaires :

- **Écoréno'v** (Métropole de Lyon) : accompagnement et aides financières pour la rénovation globale, jusqu'à **15 000 €** de subventions
- **Région Auvergne-Rhône-Alpes** : aides spécifiques pour l'isolation et le chauffage, selon les programmes en vigueur
- **ANAH** (Agence Nationale de l'Habitat) : financement jusqu'à **50 % du montant des travaux** pour les ménages très modestes

### Comment cumuler les aides ?

Il est possible de cumuler plusieurs dispositifs. Voici un exemple concret :

**Projet : ITE d'une maison de 100 m² de façade**
| Poste | Montant |
|---|---|
| Coût total des travaux | 12 000 € |
| MaPrimeRénov' (revenus intermédiaires) | - 4 000 € |
| CEE (prime énergie) | - 1 500 € |
| TVA 5,5 % au lieu de 20 % | - 1 660 € économisés |
| **Reste à charge** | **~4 840 €** |

Soit une économie de **près de 60 %** sur le coût total !

### Les démarches en pratique

1. **Identifiez les travaux éligibles** avec un professionnel RGE
2. **Faites vos demandes d'aides AVANT de signer le devis** (obligatoire pour MaPrimeRénov')
3. **Signez le devis** et démarrez les travaux
4. **Transmettez les factures** pour déclencher le versement des aides

### Notre accompagnement

Chez Maçonnerie Durand, nous connaissons parfaitement ces dispositifs et nous vous aidons à y voir clair. Lors de l'établissement de votre devis, nous identifions les aides auxquelles vous avez droit et nous vous orientons dans vos démarches.

**Envie de connaître les aides disponibles pour votre projet ?** [Contactez-nous](/contact) pour un devis détaillé avec estimation des aides.`,
    author: "Maçonnerie Durand",
    date: "2026-01-28",
    category: "Aides & Financements",
    image: "/images/blog/aides-financieres.jpg",
    readingTime: 8,
    tags: ["aides", "MaPrimeRénov", "éco-PTZ", "TVA", "financement", "CEE"],
  },
];

export const blogCategories = ["Tous", "Prix & Tarifs", "Conseils", "Réglementation", "Aides & Financements"];
