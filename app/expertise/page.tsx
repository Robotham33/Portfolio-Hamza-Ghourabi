import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { expertise, toolGroups } from "@/content/portfolio";
import { cn, fr } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Expertise de Hamza GHOURABI : validation & QA, automatisation des tests, intégration & CI/CD, qualité et traçabilité en environnements normés.",
  alternates: {
    canonical: "/expertise",
  },
};

export default function ExpertisePage() {
  return (
    <main id="contenu">
      <PageHero
        eyebrow="Cartographie des compétences"
        title="Comprendre. Intégrer. Tester. Automatiser."
        description="Mon rôle se situe à l’interface entre système, logiciel, QA et validation. L’objectif reste le même : transformer des exigences en contrôles reproductibles, traçables et exploitables."
      />

      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {expertise.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.06}>
                <article className="group border-line bg-paper hover:border-line-strong relative h-full overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(7,11,16,0.25)] sm:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-6xl font-semibold tracking-[-0.06em] text-[#dfe3e8] transition-colors group-hover:text-[#cfd6dd]">
                      {item.index}
                    </span>
                    <span
                      className={cn(
                        "mt-3 h-1 w-12 rounded-full",
                        index % 2 === 0 ? "bg-medical" : "bg-auto",
                      )}
                    />
                  </div>
                  <h2 className="mt-10 text-3xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h2>
                  <p className="text-muted mt-4 max-w-xl text-base leading-7 text-pretty">
                    {fr(item.text)}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border-line bg-canvas rounded-md border px-2.5 py-1 font-mono text-[11px] text-[#4a5763]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <section aria-labelledby="outils-title" className="mt-24 lg:mt-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-medical flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
                  <span aria-hidden="true" className="bg-medical/50 h-px w-8" />
                  Outils & environnements
                </p>
                <h2
                  id="outils-title"
                  className="mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] font-semibold tracking-[-0.045em]"
                >
                  Environnements & outils
                </h2>
              </div>
              <p className="text-muted text-sm">
                Outils & pratiques réellement utilisés
              </p>
            </div>

            <div className="border-line bg-line mt-10 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-2 lg:grid-cols-3">
              {toolGroups.map((group, index) => (
                <article key={group.label} className="bg-paper p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-muted font-mono text-[11px] tracking-[0.14em] uppercase">
                      {group.label}
                    </p>
                    <span className="text-muted/60 font-mono text-[11px]">
                      0{index + 1}
                    </span>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-line bg-canvas rounded-lg border px-3 py-1.5 text-sm font-medium text-[#27333e]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
