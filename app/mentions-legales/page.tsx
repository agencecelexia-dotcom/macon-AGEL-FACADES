import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Mentions L\u00e9gales & Politique de Confidentialit\u00e9",
  description: `Mentions l\u00e9gales, politique de confidentialit\u00e9 et conditions g\u00e9n\u00e9rales d'utilisation du site ${company.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Mentions l\u00e9gales
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Informations l\u00e9gales, politique de confidentialit\u00e9 et conditions
            d&apos;utilisation.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 mb-16">
            <h2 className="text-2xl font-bold text-primary">
              1. Mentions l\u00e9gales
            </h2>
            <div className="space-y-4 text-neutral-600">
              <div>
                <h3 className="font-semibold text-primary mb-2">\u00c9diteur du site</h3>
                <p>
                  Le site est \u00e9dit\u00e9 par <strong>{company.name}</strong> (Groupe FCP),
                  SARL sp\u00e9cialis\u00e9e en ravalement de fa\u00e7ade et isolation thermique.
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li><strong>Raison sociale :</strong> Groupe FCP (AGEL Facades)</li>
                  <li><strong>Forme juridique :</strong> SARL</li>
                  <li><strong>Adresse :</strong> {company.address.street}, {company.address.postalCode} {company.address.city}</li>
                  <li><strong>T\u00e9l\u00e9phone :</strong> {company.phone}</li>
                  <li><strong>Email :</strong> {company.email}</li>
                  <li><strong>SIREN :</strong> 927 788 828</li>
                  <li><strong>SIRET :</strong> 927 788 828 00022</li>
                  <li><strong>RCS :</strong> Reims</li>
                  <li><strong>Code APE :</strong> 4399D \u2014 Autres travaux sp\u00e9cialis\u00e9s de construction</li>
                  <li><strong>Directeur de la publication :</strong> Aydin Elitas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">H\u00e9bergeur</h3>
                <p>Le site est h\u00e9berg\u00e9 par <strong>Vercel Inc.</strong></p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, \u00c9tats-Unis</li>
                  <li><strong>Site web :</strong> https://vercel.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Propri\u00e9t\u00e9 intellectuelle</h3>
                <p>
                  L&apos;ensemble du contenu du site (textes, images, logos,
                  graphismes) est la propri\u00e9t\u00e9 exclusive de {company.name} ou de
                  ses partenaires. Toute reproduction, m\u00eame partielle, est
                  interdite sans autorisation pr\u00e9alable \u00e9crite.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-16">
            <h2 className="text-2xl font-bold text-primary">2. Politique de confidentialit\u00e9 (RGPD)</h2>
            <div className="space-y-4 text-neutral-600">
              <div>
                <h3 className="font-semibold text-primary mb-2">Responsable du traitement</h3>
                <p>Le responsable du traitement des donn\u00e9es personnelles est {company.name}, joignable \u00e0 l&apos;adresse {company.email}.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Donn\u00e9es collect\u00e9es</h3>
                <p>Nous collectons les donn\u00e9es suivantes dans le cadre du formulaire de contact et de demande de devis :</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li>Nom et pr\u00e9nom</li>
                  <li>Adresse email</li>
                  <li>Num\u00e9ro de t\u00e9l\u00e9phone</li>
                  <li>Adresse postale (si n\u00e9cessaire pour le devis)</li>
                  <li>Description du projet</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Finalit\u00e9 du traitement</h3>
                <p>Les donn\u00e9es collect\u00e9es sont utilis\u00e9es exclusivement pour :</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li>R\u00e9pondre \u00e0 vos demandes de contact et de devis</li>
                  <li>Vous envoyer des informations relatives \u00e0 votre projet</li>
                  <li>Am\u00e9liorer la qualit\u00e9 de nos services</li>
                </ul>
                <p className="mt-2">Vos donn\u00e9es ne sont jamais vendues ni transmises \u00e0 des tiers \u00e0 des fins commerciales.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Dur\u00e9e de conservation</h3>
                <p>Les donn\u00e9es personnelles sont conserv\u00e9es pendant une dur\u00e9e maximale de 3 ans \u00e0 compter du dernier contact, conform\u00e9ment aux recommandations de la CNIL.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Cookies</h3>
                <p>Le site utilise des cookies strictement n\u00e9cessaires au fonctionnement du site. Des cookies de mesure d&apos;audience (anonymis\u00e9s) peuvent \u00eatre utilis\u00e9s pour am\u00e9liorer l&apos;exp\u00e9rience utilisateur. Vous pouvez g\u00e9rer vos pr\u00e9f\u00e9rences via le bandeau cookies affich\u00e9 lors de votre premi\u00e8re visite.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Vos droits</h3>
                <p>Conform\u00e9ment au R\u00e8glement G\u00e9n\u00e9ral sur la Protection des Donn\u00e9es (RGPD) et \u00e0 la loi Informatique et Libert\u00e9s, vous disposez des droits suivants :</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li><strong>Droit d&apos;acc\u00e8s :</strong> obtenir la confirmation que vos donn\u00e9es sont trait\u00e9es et en demander une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de donn\u00e9es inexactes</li>
                  <li><strong>Droit \u00e0 l&apos;effacement :</strong> demander la suppression de vos donn\u00e9es</li>
                  <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donn\u00e9es</li>
                  <li><strong>Droit \u00e0 la portabilit\u00e9 :</strong> r\u00e9cup\u00e9rer vos donn\u00e9es dans un format structur\u00e9</li>
                </ul>
                <p className="mt-2">
                  Pour exercer ces droits, contactez-nous \u00e0{" "}
                  <a href={`mailto:${company.email}`} className="text-accent hover:underline">{company.email}</a>
                  . Vous pouvez \u00e9galement introduire une r\u00e9clamation aupr\u00e8s de la CNIL (www.cnil.fr).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">3. Conditions G\u00e9n\u00e9rales d&apos;Utilisation</h2>
            <div className="space-y-4 text-neutral-600">
              <div>
                <h3 className="font-semibold text-primary mb-2">Objet du site</h3>
                <p>Le pr\u00e9sent site a pour objet de pr\u00e9senter les activit\u00e9s de {company.name} et de permettre aux visiteurs de demander des devis pour des travaux de ravalement de fa\u00e7ade, d&apos;isolation thermique et de peinture.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Acc\u00e8s au site</h3>
                <p>L&apos;acc\u00e8s au site est gratuit. Les frais de connexion \u00e0 Internet sont \u00e0 la charge de l&apos;utilisateur. {company.name} met tout en \u0153uvre pour assurer l&apos;accessibilit\u00e9 du site 24h/24 et 7j/7, mais ne peut garantir une disponibilit\u00e9 sans interruption.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Responsabilit\u00e9</h3>
                <p>Les informations fournies sur le site le sont \u00e0 titre indicatif. Bien que nous nous effor\u00e7ons de maintenir des informations exactes et \u00e0 jour, {company.name} ne saurait \u00eatre tenu responsable des erreurs, omissions ou des r\u00e9sultats obtenus suite \u00e0 l&apos;utilisation de ces informations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Liens hypertextes</h3>
                <p>Le site peut contenir des liens vers d&apos;autres sites web. {company.name} ne peut \u00eatre tenu responsable du contenu de ces sites externes ni des \u00e9ventuels dommages d\u00e9coulant de leur utilisation.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Droit applicable</h3>
                <p>Les pr\u00e9sentes conditions sont r\u00e9gies par le droit fran\u00e7ais. Tout litige relatif \u00e0 l&apos;utilisation du site sera soumis \u00e0 la comp\u00e9tence des tribunaux fran\u00e7ais comp\u00e9tents.</p>
              </div>
              <div className="pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-400">Derni\u00e8re mise \u00e0 jour : f\u00e9vrier 2026</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
