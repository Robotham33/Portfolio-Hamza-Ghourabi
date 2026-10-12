import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { CommandPalette } from "@/components/layout/command-palette";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const siteUrl = "https://www.hamzaghourabi.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamza GHOURABI — Ingénieur intégration & validation logicielle",
    template: "%s — Hamza GHOURABI",
  },
  description:
    "Portfolio de Hamza GHOURABI, ingénieur spécialisé en intégration logicielle, validation système, QA, automatisation des tests et CI/CD.",
  authors: [{ name: "Hamza GHOURABI", url: siteUrl }],
  creator: "Hamza GHOURABI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Hamza GHOURABI",
    title: "Hamza GHOURABI — Ingénieur intégration & validation logicielle",
    description:
      "Portfolio professionnel de Hamza GHOURABI : intégration logicielle, validation système, QA, automatisation des tests et CI/CD.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza GHOURABI — Ingénieur intégration & validation logicielle",
    description:
      "Portfolio professionnel de Hamza GHOURABI : intégration logicielle, validation système, QA, automatisation des tests et CI/CD.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Hamza GHOURABI",
      url: siteUrl,
      jobTitle: "Ingénieur intégration & validation logicielle",
      email: "contact@hamzaghourabi.fr",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "ISTQB Certified Tester Foundation Level (CTFL)",
        credentialCategory: "certification",
        recognizedBy: {
          "@type": "Organization",
          name: "ISTQB",
        },
      },
      sameAs: [
        "https://www.linkedin.com/in/hamza-ghourabi-7a0566106/",
        "https://github.com/Robotham33",
      ],
      knowsAbout: [
        "Intégration logicielle",
        "Validation système",
        "QA",
        "Automatisation des tests",
        "CI/CD",
        "SIL",
        "Systèmes embarqués",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Hamza GHOURABI",
      alternateName: "HGH.",
      inLanguage: "fr-FR",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#070b10",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body id="top">
        <a
          href="#contenu"
          className="focus:text-ink sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CommandPalette />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
