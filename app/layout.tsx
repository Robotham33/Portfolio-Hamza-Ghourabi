import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hamza Ghourabi — Software Integration & Validation Engineer",
    template: "%s — Hamza Ghourabi",
  },
  description:
    "Portfolio professionnel de Hamza Ghourabi, ingénieur en intégration logicielle, validation système et automatisation des tests.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
