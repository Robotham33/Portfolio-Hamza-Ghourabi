import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HGH. — Ingénieur intégration & validation logicielle",
    template: "%s — HGH.",
  },
  description:
    "Portfolio professionnel spécialisé en intégration logicielle, validation système et automatisation des tests.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
