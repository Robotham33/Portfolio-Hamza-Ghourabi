import Link from "next/link";

import { CaseExplorer } from "@/components/sections/case-explorer";
import { ArrowRight } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsPreview() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="04"
            eyebrow="Cas concrets"
            title="Pas seulement ce que j’utilise. Comment je raisonne."
            description="Trois situations représentatives : sécuriser une intégration, qualifier une régression et industrialiser une campagne de tests."
          />
          <Link
            href="/projects"
            className="group bg-ink hover:bg-ink-3 inline-flex min-h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition"
          >
            Ouvrir les études de cas
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14">
          <CaseExplorer />
        </div>
      </div>
    </section>
  );
}
