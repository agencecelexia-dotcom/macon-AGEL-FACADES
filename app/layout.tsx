import type { Metadata } from "next";
import { montserrat, inter } from "./fonts";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ClickToCall } from "@/components/ui/ClickToCall";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { AnalyticsTracker } from "@/components/features/AnalyticsTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agelfacades.fr"),
  title: {
    default: "AGEL Facades | Ravalement de Façade & ITE à Reims",
    template: "%s | AGEL Facades",
  },
  description:
    "Spécialiste du ravalement de façade à Reims et environs. Ravalement, isolation thermique (ITE), peinture, enduits. Devis gratuit sous 48h. Garantie décennale, RGE.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AGEL Facades",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLdScript />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <ClickToCall />
        <CookieConsent />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
