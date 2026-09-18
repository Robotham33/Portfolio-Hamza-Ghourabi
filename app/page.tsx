import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { ExpertisePreview } from "@/components/sections/expertise-preview";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { RecruiterSnapshot } from "@/components/sections/recruiter-snapshot";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RecruiterSnapshot />
        <ExperiencePreview />
        <ExpertisePreview />
        <ProjectsPreview />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
