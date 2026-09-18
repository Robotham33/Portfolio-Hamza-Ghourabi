import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/portfolio";

export function ExperiencePreview() {
  const featuredExperiences = experiences.slice(0, 2);

  return (
    <section id="experience" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Parcours"
              title="De la validation terrain à l’intégration industrialisée."
              description="Une progression construite sur des systèmes réels, des campagnes réelles et des contraintes de qualité réelles."
            />
            <Link
              href="/experience"
              className="secondary-action mt-8 inline-flex px-4 py-3 text-sm font-semibold transition"
            >
              Voir tout le parcours <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="border-t border-[var(--border-strong)]">
            {featuredExperiences.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.05}>
                <article className="group grid gap-6 border-b border-[var(--border)] py-8 sm:grid-cols-[140px_1fr] sm:py-10">
                  <div>
                    <p className="text-xs font-bold tracking-[0.13em] text-[var(--muted-foreground)] uppercase">
                      {item.period}
                    </p>
                    <div
                      className={`mt-4 h-1.5 w-12 ${
                        item.domain.includes("Médical")
                          ? "bg-[var(--medical)]"
                          : "bg-[var(--automotive)]"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h3 className="display-title text-3xl font-semibold tracking-[-0.045em]">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#44515e]">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {item.location}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
                      {item.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tools.slice(0, 5).map((tool) => (
                        <span
                          key={tool}
                          className="border border-[var(--border)] bg-white px-2.5 py-1.5 text-xs font-medium text-[#53606c]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
