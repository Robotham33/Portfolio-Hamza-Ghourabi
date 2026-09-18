import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/portfolio";

export function ExperiencePreview() {
  const featuredExperiences = experiences.slice(0, 2);

  return (
    <section id="experience" className="px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Parcours"
              title="De la validation terrain à l’intégration industrialisée."
              description="Une progression construite sur des systèmes réels, des campagnes réelles et des contraintes de qualité réelles."
            />
            <Link
              href="/experience"
              className="secondary-action mt-6 inline-flex px-4 py-2.5 text-sm font-semibold transition"
            >
              Voir tout le parcours <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="border-t border-[var(--border-strong)]">
            {featuredExperiences.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.05}>
                <article className="group grid gap-5 border-b border-[var(--border)] py-6 sm:grid-cols-[128px_1fr] sm:py-7">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.13em] text-[var(--muted-foreground)] uppercase">
                      {item.period}
                    </p>
                    <div
                      className={
                        "mt-3 h-1.5 w-10 " +
                        (item.domain.includes("Médical")
                          ? "bg-[var(--medical)]"
                          : "bg-[var(--automotive)]")
                      }
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h3 className="display-title text-[1.7rem] font-semibold tracking-[-0.045em]">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#44515e]">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-[11px] text-[var(--muted-foreground)]">
                        {item.location}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted-foreground)] sm:text-base">
                      {item.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tools.slice(0, 5).map((tool) => (
                        <span
                          key={tool}
                          className="border border-[var(--border)] bg-white px-2.5 py-1 text-[11px] font-medium text-[#53606c]"
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
