import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/portfolio";

export function ExperiencePreview() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Expérience"
          title="Un parcours qui relie validation, intégration et industrialisation."
          description="Deux secteurs très différents, un même fil conducteur : rendre une livraison logicielle compréhensible, testable et fiable."
        />
        <div className="mt-12 space-y-4">
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.06}>
              <article className="grid gap-7 rounded-[26px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-6 transition hover:border-[var(--border-strong)] sm:p-8 lg:grid-cols-[180px_1fr]">
                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">{item.period}</p>
                  <p className="mt-2 text-xs tracking-[0.16em] text-[var(--muted-foreground)] uppercase">{item.domain}</p>
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.company}</h3>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)]">{item.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[#c5cfdd]">{item.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Link href="/experience" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)]">
          Voir le parcours détaillé <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
