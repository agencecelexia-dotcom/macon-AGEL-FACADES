# CLAUDE.md — Conventions & Setup du projet Maçonnerie

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Style** : Tailwind CSS v4 (CSS-first config via `@theme inline`)
- **Language** : TypeScript 5
- **Package manager** : npm
- **Node** : v24.x
- **Form** : react-hook-form + zod v4
- **Animations** : CSS animations + IntersectionObserver (ScrollReveal)
- **Icônes** : lucide-react

## Structure du projet

```
macon/
├── app/                          # App Router (pages, layouts, API routes)
│   ├── layout.tsx               # Root layout (fonts, nav, footer, cookie)
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Tailwind + design system
│   ├── fonts.ts                 # Montserrat + Inter
│   ├── api/quote/route.ts       # API formulaire → n8n webhook
│   ├── services/                # Page listing services
│   ├── construction-neuve/      # Page SEO construction
│   ├── renovation-maconnerie/   # Page SEO rénovation
│   ├── extension-surelevation/  # Page SEO extension
│   ├── realisations/            # Portfolio avant/après
│   ├── avis-clients/            # Avis Google
│   ├── a-propos/                # À propos
│   ├── contact/                 # Formulaire devis
│   ├── blog/                    # Blog listing + [slug]
│   └── mentions-legales/        # Pages légales
├── components/
│   ├── layout/                  # NavBar, Footer, SectionWrapper
│   ├── ui/                      # Button, Badge, Card, StarRating, etc.
│   ├── sections/                # HeroSection, CTABanner, etc.
│   ├── forms/                   # QuoteForm multi-étapes
│   ├── templates/               # ServicePageTemplate (partagé)
│   └── seo/                     # JsonLdScript, BreadcrumbJsonLd
├── lib/
│   ├── data/                    # Données statiques TypeScript
│   ├── schemas/                 # Schémas Zod
│   └── utils.ts                 # cn(), formatPhone()
├── public/images/               # Assets (voir section Images ci-dessous)
└── PROMPTS-IMAGES.md            # Prompts de génération IA pour les 20 images
```

## Design system

### Couleurs (définies dans globals.css @theme)
- **Primary** : `#2C3E50` (bleu acier) → `bg-primary`, `text-primary`
- **Accent** : `#E67E22` (orange) → `bg-accent`, `text-accent`
- **Neutral** : `#ECF0F1` (gris clair) → `bg-neutral`, `bg-neutral-50`

### Typographie
- Titres : `font-heading` (Montserrat Bold)
- Corps : `font-body` (Inter)
- Mobile : 16px base | Desktop : 18px base

## Conventions de code

### TypeScript
- Toujours typer les props avec interface
- Pas de `any`
- Named exports pour les composants UI, default exports pour les pages

### Composants React
- Un composant = un fichier en PascalCase
- `"use client"` uniquement si nécessaire (useState, useEffect, event handlers)
- Composants serveur par défaut

### Tailwind CSS v4
- Utiliser les classes utilitaires en priorité
- Design system dans `globals.css` via `@theme inline { }`
- Pas de `tailwind.config.ts` (Tailwind v4 = CSS-first)

## Images (20 au total)

> Prompts détaillés dans `PROMPTS-IMAGES.md`. Format JPEG, pas de texte/logo/watermark.

### Services (`public/images/services/`) — 3 images, 1800×1200

| Fichier | Description |
|---------|-------------|
| `construction-neuve.jpg` | Maison neuve terminée, crépi blanc, tuiles, pelouse |
| `renovation.jpg` | Maçon rejointoyant un mur en pierres dorées lyonnaises |
| `extension.jpg` | Extension toit plat + baies vitrées accolée à maison pierre |

### Blog (`public/images/blog/`) — 5 images, 1800×1200

| Fichier | Description |
|---------|-------------|
| `prix-maconnerie.jpg` | Flat lay bureau : calculatrice, devis, mètre, échantillons |
| `choisir-macon.jpg` | Artisan serrant la main de clients devant maison |
| `extension-permis.jpg` | Plans archi + permis de construire sur bureau |
| `renovation-facade.jpg` | Façade lyonnaise en cours de ravalement, échafaudage |
| `aides-financieres.jpg` | Tirelire maison + billets + maquette bois |

### Portfolio (`public/images/portfolio/`) — 12 images (6 projets × avant/après), 1200×900

| Projet | Fichiers |
|--------|----------|
| Maison plain-pied 120m² | `maison-plainpied-avant.jpg`, `maison-plainpied-apres.jpg` |
| Ravalement façade | `facade-avant.jpg`, `facade-apres.jpg` |
| Extension latérale 35m² | `extension-avant.jpg`, `extension-apres.jpg` |
| Surélévation R+1 | `surelevation-avant.jpg`, `surelevation-apres.jpg` |
| Ouverture mur porteur | `mur-porteur-avant.jpg`, `mur-porteur-apres.jpg` |
| Garage double | `garage-avant.jpg`, `garage-apres.jpg` |

## Commandes

```bash
npm run dev          # Dev server (Turbopack) → http://localhost:3000
npm run build        # Build production + sitemap
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## Workflow Git

- Commits conventionnels : `feat:`, `fix:`, `style:`, `refactor:`, `chore:`
- Git config : Thomas / agence.celexia@gmail.com
