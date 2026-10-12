import type { Metadata } from "next";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

/**
 * Métadonnées d'une page interne. Les objets openGraph / twitter d'une page
 * remplacent ceux du layout (pas de fusion) : on les redonne en entier pour que
 * le partage d'un lien (WhatsApp, LinkedIn…) affiche la bonne page.
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Hamza GHOURABI — Ingénieur intégration & validation logicielle",
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = `${title} — Hamza GHOURABI`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Hamza GHOURABI",
      url: path,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
