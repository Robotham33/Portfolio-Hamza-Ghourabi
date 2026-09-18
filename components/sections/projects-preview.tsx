import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/content/portfolio";

export function ProjectsPreview() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Études de cas"
          title="Mon travail expliqué par des problèmes réels."
          description="Une vitrine utile doit montrer comment je raisonne : contexte, contribution, puis valeur produite — sans exposer d’informations client confidentielles."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group flex h-full flex-col rounded-[26px] border border-[var(--border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-6 transition hover:-translate-y-1 hover:border-[var(--border-strong)]">
                <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">{item.eyebrow}</p>
                <h3 className="mt-5 text-xl font-semibold leading-7 tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">{item.contribution}</p>
                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tag) => <span key={tag} className="text-xs text-[#afbdd0]">{tag}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)]">
          Voir les études de cas <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
