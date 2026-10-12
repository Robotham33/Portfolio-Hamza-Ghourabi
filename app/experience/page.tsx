import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { CareerTimeline } from "@/components/sections/career-timeline";
import { ContactCta } from "@/components/sections/contact-cta";
import { education, experiences } from "@/content/portfolio";
import { cn, fr, slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Parcours de Hamza GHOURABI : validation système chez Astemo, validation et intégration chez Stago, robotique chez QENVI Robotics, diagnostic automobile chez Green Control.",
  alternates: {
    canonical: "/experience",
  },
};

const brief = [
  "Médical + automobile",
  "Validation + intégration",
  "Automatisation des tests + CI/CD",
  "Systèmes embarqués",
] as const;

export default function ExperiencePage() {
  return (
    <main id="contenu">
      <PageHero
        eyebrow="Parcours professionnel"
        title="Un parcours construit sur des systèmes qu’il faut prouver, pas simplement livrer."
        description="Informatique industrielle, robotique, validation fonctionnelle, intégration logicielle, SIL et automatisation : chaque étape a renforcé ma capacité à relier exigences, produit et preuve de conformité."
        aside={
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase">
              Profil en bref
            </p>
            <p className="mt-8 text-6xl font-semibold tracking-[-0.06em]">7+</p>
            <p className="mt-1 text-sm font-semibold">années d’expérience</p>
            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/65">
              {brief.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="bg-medical-bright size-1 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        }
      />

      <section className="px-5 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <CareerTimeline />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ol className="relative mx-auto max-w-7xl">
          {experiences.map((item, index) => {
            const isMedical = item.domain.includes("Médical");

            return (
              <li
                key={item.company}
                id={slugify(item.company)}
                className="border-line grid scroll-mt-28 gap-6 border-t py-12 first:border-t-0 first:pt-0 lg:grid-cols-[240px_1fr] lg:gap-12"
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p className="text-muted font-mono text-[11px] tracking-[0.16em] uppercase">
                    Expérience 0{index + 1}
                  </p>
                  <p className="text-ink mt-4 font-mono text-sm">
                    {item.period}
                  </p>
                  <p className="text-muted mt-1 text-sm">{item.location}</p>
                  <span
                    className={cn(
                      "mt-5 inline-flex rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.1em] uppercase",
                      isMedical
                        ? "bg-medical-soft text-medical"
                        : "bg-auto-soft text-[#b14608]",
                    )}
                  >
                    {item.domain}
                  </span>
                </div>

                <Reveal>
                  <article className="border-line bg-paper relative overflow-hidden rounded-3xl border p-7 sm:p-10">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-y-0 left-0 w-1",
                        isMedical ? "bg-medical" : "bg-auto",
                      )}
                    />
                    <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                      {item.company}
                    </h2>
                    <p className="mt-2 text-base font-semibold text-[#34404c] sm:text-lg">
                      {item.role}
                    </p>

                    <p className="text-muted mt-6 max-w-3xl text-base leading-7 text-pretty sm:text-[17px] sm:leading-8">
                      {fr(item.summary)}
                    </p>

                    <ul className="border-line mt-8 grid gap-x-8 gap-y-4 border-t pt-7 md:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-[15px] leading-6 text-[#2c3844]"
                        >
                          <span
                            className={cn(
                              "mt-[9px] size-1.5 shrink-0 rounded-full",
                              isMedical ? "bg-medical" : "bg-auto",
                            )}
                          />
                          {fr(highlight)}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-8 flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <li
                          key={tool}
                          className="border-line bg-canvas rounded-md border px-2.5 py-1 font-mono text-[11px] text-[#4a5763]"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="bg-ink relative isolate overflow-hidden px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-white/55 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-white/30" />
            Formation
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
              >
                <p className="font-mono text-5xl font-medium tracking-[-0.04em] text-white/20">
                  {item.year}
                </p>
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                  {fr(item.degree)}
                </h2>
                <p className="mt-3 text-sm text-white/55">
                  {item.school} · {item.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24 lg:pt-32">
        <ContactCta />
      </div>
    </main>
  );
}
