import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hamza GHOURABI — Ingénieur intégration & validation logicielle",
    short_name: "HGH.",
    description:
      "Portfolio de Hamza GHOURABI : intégration logicielle, validation système, QA, automatisation des tests et CI/CD.",
    lang: "fr",
    start_url: "/",
    display: "browser",
    background_color: "#070b10",
    theme_color: "#070b10",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
