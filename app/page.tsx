import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { DomainShowcase } from "@/components/sections/domain-showcase";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { ExpertisePreview } from "@/components/sections/expertise-preview";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { TechStrip } from "@/components/sections/tech-strip";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main id="contenu">
      <Hero />
      <DomainShowcase />
      <TechStrip />
      <ExperiencePreview />
      <ExpertisePreview />
      <ProjectsPreview />
      <ContactCta />
    </main>
  );
}
