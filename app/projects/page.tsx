import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { ArrowRight, ArrowUpRight, GitHubIcon } from "@/components/ui/icons";
import { externalLinks } from "@/content/links";
import { caseStudies, personalProjects } from "@/content/portfolio";
import { cn, fr } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cas concrets",
  description:
    "Études de cas de Hamza GHOURABI : chaîne d’intégration logiciel + firmware, qualification de régressions SIL, industrialisation de campagnes de tests. Projets personnels EyeeMee et Blassa.fr.",
  alternates: {
    canonical: "/projects",
  },
};

const caseAccents = [
  { bar: "bg-medical", text: "text-medical" },
  { bar: "bg-auto", text: "text-[#b14608]" },
  { bar: "bg-ink", text: "text-medical" },
] as const;

export default function ProjectsPage() {
  return (
    <main id="contenu">
      <PageHero
        eyebrow="Études de cas"
        title="La valeur n’est pas dans l’outil. Elle est dans la manière de résoudre le problème."
        description="Des cas volontairement génériques pour préserver les informations confidentielles, mais suffisamment précis pour montrer ma méthode de travail."
      />

      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-6">
          {caseStudies.map((item, index) => {
            const steps = [
              { label: "Problème", text: item.problem },
              { label: "Contribution", text: item.contribution },
              { label: "Valeur", text: item.result },
            ];

            return (
              <Reveal key={item.title}>
                <article
                  id={`cas-0${index + 1}`}
                  className="border-line bg-paper relative scroll-mt-28 overflow-hidden rounded-3xl border"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 top-0 h-1",
                      caseAccents[index].bar,
                    )}
                  />
                  <div className="grid gap-6 p-7 sm:p-10 lg:grid-cols-[200px_1fr] lg:gap-12 lg:p-12">
                    <div>
                      <p className="text-muted font-mono text-[11px] tracking-[0.16em] uppercase">
                        Cas 0{index + 1}
                      </p>
                      <p className="mt-3 text-7xl font-semibold tracking-[-0.06em] text-[#e2e6ea]">
                        0{index + 1}
                      </p>
                    </div>

                    <div>
                      <p
                        className={cn(
                          "font-mono text-[11px] tracking-[0.14em] uppercase",
                          caseAccents[index].text,
                        )}
                      >
                        {item.eyebrow}
                      </p>
                      <h2 className="mt-4 max-w-3xl text-3xl leading-[1.06] font-semibold tracking-[-0.04em] text-balance sm:text-[2.6rem]">
                        {item.title}
                      </h2>

                      <ol className="mt-10 grid gap-4 lg:grid-cols-3">
                        {steps.map((step, stepIndex) => (
                          <li
                            key={step.label}
                            className={cn(
                              "relative rounded-2xl border p-5 sm:p-6",
                              stepIndex === 2
                                ? "border-[#15a46c]/25 bg-[#f1fbf6]"
                                : "border-line bg-canvas/60",
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-muted font-mono text-[11px] tracking-[0.14em] uppercase">
                                {step.label}
                              </p>
                              <span
                                className={cn(
                                  "font-mono text-[11px]",
                                  stepIndex === 2
                                    ? "text-[#0f7a50]"
                                    : "text-muted/60",
                                )}
                              >
                                0{stepIndex + 1}
                              </span>
                            </div>
                            <p className="mt-3 text-[15px] leading-7 text-pretty text-[#2c3844]">
                              {fr(step.text)}
                            </p>
                            {stepIndex < 2 ? (
                              <ArrowRight
                                aria-hidden="true"
                                className="border-line bg-paper text-muted absolute top-1/2 -right-[22px] z-10 hidden -translate-y-1/2 rounded-full border p-1 text-[22px] lg:block"
                              />
                            ) : null}
                          </li>
                        ))}
                      </ol>

                      <ul className="mt-8 flex flex-wrap gap-1.5">
                        {item.stack.map((tag) => (
                          <li
                            key={tag}
                            className="border-line bg-canvas rounded-md border px-2.5 py-1 font-mono text-[11px] text-[#4a5763]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink relative isolate overflow-hidden px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-white/55 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-white/30" />
            Projets personnels
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-pretty text-white/60">
            Des projets utilisés comme terrain d’expérimentation produit, web et
            automatisation.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {personalProjects.map((project) => (
              <Reveal key={project.title}>
                <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
                  <p className="text-medical-bright font-mono text-sm font-medium">
                    {project.title}
                  </p>
                  <h2 className="mt-4 text-3xl leading-[1.08] font-semibold tracking-[-0.04em] text-balance">
                    {project.subtitle}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-pretty text-white/60">
                    {fr(project.summary)}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[15px] leading-6 text-white/75"
                      >
                        <span className="bg-medical-bright mt-[9px] size-1.5 shrink-0 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-8">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/60"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <a
            href={externalLinks.github.href}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-white/15 px-5 text-sm font-semibold transition hover:border-white/35 hover:bg-white/[0.04]"
          >
            <GitHubIcon className="text-base" />
            Voir mes projets sur GitHub
            <ArrowUpRight className="text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </div>
      </section>

      <div className="pt-24 lg:pt-32">
        <ContactCta />
      </div>
    </main>
  );
}
