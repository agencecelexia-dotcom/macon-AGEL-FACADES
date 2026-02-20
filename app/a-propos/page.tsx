import type { Metadata } from "next";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { company } from "@/lib/data/company";
import {
  Shield,
  Users,
  Eye,
  ThumbsUp,
  Award,
  Leaf,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "\u00c0 Propos | Notre Entreprise de Fa\u00e7ade",
  description: `D\u00e9couvrez ${company.name}, sp\u00e9cialiste du ravalement de fa\u00e7ade et de l'isolation thermique \u00e0 Reims. ${company.yearsExperience} ans d'exp\u00e9rience, ${company.projectsCompleted}+ chantiers r\u00e9alis\u00e9s. Qualit\u00e9, proximit\u00e9 et transparence.`,
};

const values = [
  {
    icon: CheckCircle,
    title: "Qualit\u00e9",
    description:
      "Nous utilisons des mat\u00e9riaux de premier choix et appliquons les techniques les plus rigoureuses pour garantir la durabilit\u00e9 de chaque ouvrage.",
  },
  {
    icon: Users,
    title: "Proximit\u00e9",
    description:
      "Artisan local bas\u00e9 \u00e0 Bezannes, nous connaissons parfaitement les sp\u00e9cificit\u00e9s de la r\u00e9gion r\u00e9moise et restons disponibles et r\u00e9actifs.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Devis d\u00e9taill\u00e9s, suivi de chantier r\u00e9gulier, communication claire. Pas de mauvaise surprise, vous savez exactement o\u00f9 en est votre projet.",
  },
  {
    icon: ThumbsUp,
    title: "Fiabilit\u00e9",
    description:
      "Respect des d\u00e9lais, des engagements et du budget. Notre r\u00e9putation repose sur la confiance que nos clients nous accordent.",
  },
];

const certifications = [
  {
    icon: Shield,
    title: "Garantie D\u00e9cennale",
    description:
      "Assurance d\u00e9cennale couvrant tous nos travaux pendant 10 ans apr\u00e8s r\u00e9ception du chantier.",
  },
  {
    icon: Leaf,
    title: "RGE",
    description:
      "Reconnu Garant de l'Environnement, qualification attestant de notre comp\u00e9tence en mati\u00e8re d'efficacit\u00e9 \u00e9nerg\u00e9tique.",
  },
  {
    icon: Award,
    title: "Qualibat",
    description:
      "Certification Qualibat attestant de notre capacit\u00e9 technique, de nos moyens humains et financiers.",
  },
];

const teamMembers = [
  {
    name: "Aydin Elitas",
    role: "Dirigeant",
    description:
      "\u00c0 la t\u00eate d'AGEL Facades, Aydin apporte son expertise et sa passion pour le m\u00e9tier de fa\u00e7adier. Son exigence de qualit\u00e9 guide chaque chantier.",
  },
  {
    name: "Chef d'\u00e9quipe",
    role: "Chef de Chantier",
    description:
      "Sp\u00e9cialiste du ravalement et de l'ITE, il encadre les \u00e9quipes sur le terrain et veille au respect des d\u00e9lais et de la qualit\u00e9.",
  },
  {
    name: "\u00c9quipe de fa\u00e7adiers",
    role: "Fa\u00e7adiers Qualifi\u00e9s",
    description:
      "Une \u00e9quipe de professionnels exp\u00e9riment\u00e9s ma\u00eetrisant toutes les techniques d'enduit, de peinture et d'isolation thermique.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,126,34,0.12),transparent_60%)]" />
        <div className="absolute inset-0 grain overflow-hidden" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            \u00c0 propos de {company.name}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Sp\u00e9cialiste du ravalement de fa\u00e7ade et de l&apos;isolation thermique
            \u00e0 Reims et dans toute la Marne.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionTitle
              title="Notre histoire"
              subtitle="Un savoir-faire au service de vos fa\u00e7ades."
              align="left"
            />
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Fort d&apos;une exp\u00e9rience de plus de{" "}
                <strong>{company.yearsExperience} ans</strong> dans le secteur du
                b\u00e2timent, AGEL Facades s&apos;est sp\u00e9cialis\u00e9 dans le ravalement de
                fa\u00e7ade, l&apos;isolation thermique par l&apos;ext\u00e9rieur (ITE) et les
                travaux de peinture et d&apos;enduits dans la r\u00e9gion de Reims.
              </p>
              <p>
                Filiale du <strong>Groupe FCP</strong>, notre entreprise allie
                l&apos;expertise d&apos;un groupe structur\u00e9 \u00e0 la r\u00e9activit\u00e9 d&apos;un
                artisan local. Nous intervenons aussi bien pour les particuliers que
                pour les copropri\u00e9t\u00e9s et les professionnels du Grand Est.
              </p>
              <p>
                Notre certification <strong>RGE</strong> et <strong>Qualibat</strong>{" "}
                atteste de notre savoir-faire et vous permet de b\u00e9n\u00e9ficier des aides
                financi\u00e8res pour vos travaux d&apos;isolation. Avec plus de{" "}
                <strong>{company.projectsCompleted} chantiers r\u00e9alis\u00e9s</strong>, notre
                r\u00e9putation s&apos;est construite sur la qualit\u00e9 de nos finitions et le
                respect de nos engagements.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/images/about/equipe.jpg"
                alt="L'\u00e9quipe AGEL Facades sur chantier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Nos valeurs"
            subtitle="Les principes qui guident chacune de nos interventions."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-premium border border-neutral-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-accent flex items-center justify-center mx-auto mb-4 border border-accent/10">
                  <value.icon size={24} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <SectionTitle
            title="Notre \u00e9quipe"
            subtitle="Des professionnels passionn\u00e9s \u00e0 votre service."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-primary/5 mx-auto mb-5 flex items-center justify-center text-primary-300 shadow-premium">
                  <Users size={36} />
                </div>
                <h3 className="font-bold text-primary text-lg tracking-tight">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto leading-relaxed">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Nos certifications"
            subtitle="Des qualifications reconnues pour votre tranquillit\u00e9 d'esprit."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-premium border border-neutral-100 hover:shadow-premium-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/10">
                  <cert.icon size={28} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title="Envie de travailler avec nous ?"
        subtitle="Contactez-nous pour discuter de votre projet. Devis gratuit et sans engagement."
      />
    </>
  );
}
