import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/content/portfolio";

export function ProjectsPreview() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cas concrets"
          title="Pas seulement ce que j’utilise. Comment je raisonne."
          description="Trois situations représentatives : sécuriser une intégration, qualifier une régression et industrialiser une campagne de tests."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="card-lift flex h-full flex-col border border-[var(--border-strong)] bg-white p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <p className="tech-label text-[10px] font-bold text-[var(--muted-foreground)]">
                    Cas 0{index + 1}
                  </p>
                  <span
                    className={`h-2.5 w-2.5 ${
                      index === 0
                        ? "bg-[var(--medical)]"
                        : "bg-[var(--automotive)]"
                    }`}
                  />
                </div>

                <p className="mt-8 text-xs font-bold text-[var(--accent)] uppercase">
                  {item.eyebrow}
                </p>
                <h3 className="display-title mt-3 text-3xl leading-[1.02] font-semibold tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
                  {item.contribution}
                </p>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-[var(--border)]" />
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#576470]">
                    {item.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          href="/projects"
          className="primary-action mt-9 inline-flex px-4 py-3 text-sm font-semibold transition"
        >
          Ouvrir les études de cas <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
