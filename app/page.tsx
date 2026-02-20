import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBar } from "@/components/sections/ReassuranceBar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { portfolioItems } from "@/lib/data/portfolio";
import {
  Award,
  Clock,
  ShieldCheck,
  Users,
  Handshake,
  Sparkles,
  MapPin,
} from "lucide-react";

const stats = [
  { value: "8+", label: "ann\u00e9es d\u2019exp\u00e9rience" },
  { value: "150+", label: "chantiers r\u00e9alis\u00e9s" },
  { value: "120+", label: "clients satisfaits" },
  { value: "5/5", label: "note Google" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Garantie d\u00e9cennale",
    description:
      "Tous nos ouvrages sont couverts par une assurance d\u00e9cennale pour votre tranquillit\u00e9.",
  },
  {
    icon: Clock,
    title: "Devis gratuit sous 48h",
    description:
      "Recevez un devis d\u00e9taill\u00e9 et transparent en 48 heures apr\u00e8s votre demande.",
  },
  {
    icon: MapPin,
    title: "Artisan local Reims",
    description:
      "Bas\u00e9s \u00e0 Bezannes pr\u00e8s de Reims, nous connaissons le terrain et les r\u00e9glementations locales.",
  },
  {
    icon: Users,
    title: "\u00c9quipe qualifi\u00e9e",
    description:
      "Des fa\u00e7adiers exp\u00e9riment\u00e9s form\u00e9s aux techniques traditionnelles et modernes.",
  },
  {
    icon: Handshake,
    title: "Certifi\u00e9 RGE",
    description:
      "Notre certification RGE vous ouvre l\u2019acc\u00e8s aux aides financi\u00e8res pour vos travaux d\u2019isolation.",
  },
  {
    icon: Sparkles,
    title: "Chantier propre",
    description:
      "Nous respectons votre espace de vie : protection, nettoyage quotidien et \u00e9vacuation des gravats.",
  },
];

const interventionCities = [
  "Reims",
  "Bezannes",
  "Tinqueux",
  "Cormontreuil",
  "Saint-Brice-Courcelles",
  "B\u00e9theny",
  "Witry-l\u00e8s-Reims",
  "\u00c9pernay",
  "Cernay-l\u00e8s-Reims",
  "Taissy",
  "Fismes",
  "Gueux",
  "Muizon",
  "Ch\u00e2lons-en-Champagne",
  "Rilly-la-Montagne",
  "Ay-Champagne",
];

export default function Home() {
  const featuredPortfolio = portfolioItems.slice(0, 3);

  return (
    <>
      <HeroSection />
      <ReassuranceBar />

      <section className="relative bg-primary py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block mt-2 text-sm md:text-base text-primary-200 font-medium">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper id="services">
        <ScrollReveal>
          <SectionTitle
            title="Nos services de fa\u00e7ade"
            subtitle="Du ravalement \u00e0 l\u2019isolation thermique, nous intervenons sur tous vos projets de fa\u00e7ade avec expertise et professionnalisme."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="pourquoi-nous" background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Pourquoi nous choisir"
            subtitle="Des valeurs fortes et un engagement qualit\u00e9 qui font la diff\u00e9rence sur chaque chantier."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-8 shadow-premium hover:shadow-premium-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="realisations">
        <ScrollReveal>
          <SectionTitle
            title="Nos r\u00e9alisations"
            subtitle="D\u00e9couvrez nos chantiers r\u00e9cents et la qualit\u00e9 de notre travail \u00e0 travers nos photos avant/apr\u00e8s."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPortfolio.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <div>
                <BeforeAfterSlider
                  beforeImage={item.imageBefore}
                  afterImage={item.imageAfter}
                  beforeAlt={`${item.title} \u2014 Avant`}
                  afterAlt={`${item.title} \u2014 Apr\u00e8s`}
                />
                <h3 className="font-bold text-primary mt-4 mb-1 tracking-tight">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.location} \u2014 {item.duration}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center">
            <Button href="/realisations" variant="outline">
              Voir toutes nos r\u00e9alisations
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper id="temoignages" background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre meilleure carte de visite."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <TestimonialCarousel />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button href="/avis-clients" variant="outline">
              Voir tous les avis
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper id="zone-intervention">
        <ScrollReveal>
          <SectionTitle
            title="Notre zone d\u2019intervention"
            subtitle="Nous intervenons \u00e0 Reims et dans toute la Marne, dans un rayon de 30 \u00e0 50 km autour de Reims."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {interventionCities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-sm font-medium text-primary hover:bg-accent/5 hover:border-accent/30 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {city}
                </span>
              ))}
            </div>
            <p className="text-center text-neutral-400 text-sm mt-8">
              Votre ville ne figure pas dans la liste ? Contactez-nous, nous intervenons peut-\u00eatre chez vous.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
