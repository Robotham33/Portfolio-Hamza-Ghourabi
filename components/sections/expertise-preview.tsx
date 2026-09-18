import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { expertise } from "@/content/portfolio";

export function ExpertisePreview() {
  return (
    <section id="expertise" className="border-y border-[var(--border)] bg-[rgba(255,255,255,0.014)] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Expertise"
          title="Ce que je peux prendre en charge."
          description="Pas de jauges artificielles : des capacités concrètes, organisées autour du cycle réel d’un logiciel embarqué."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-[24px] border border-[var(--border)] bg-[#080d15] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--accent)]">{item.index}</span>
                  <span aria-hidden="true" className="text-[var(--muted-foreground)]">↗</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="rounded-lg bg-[var(--surface)] px-2.5 py-1.5 text-xs text-[#b7c5d8]">{tag}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Link href="/expertise" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)]">
          Explorer mes expertises <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
