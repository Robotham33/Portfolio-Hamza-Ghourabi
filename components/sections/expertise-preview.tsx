import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { expertise } from "@/content/portfolio";

export function ExpertisePreview() {
  return (
    <section
      id="expertise"
      className="bg-[var(--ink)] px-5 py-18 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          inverse
          eyebrow="Core expertise"
          title="Quatre briques. Un même objectif : rendre le logiciel maîtrisable."
          description="Je ne me positionne pas sur une liste d’outils, mais sur un continuum de responsabilités : comprendre, intégrer, tester, automatiser et sécuriser la livraison."
        />

        <div className="mt-10 grid gap-px bg-white/12 md:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="group h-full bg-[#0d151e] p-6 transition duration-200 hover:bg-[#131e29] sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="display-title text-4xl font-semibold tracking-[-0.06em] text-white/14 transition group-hover:text-white/22">
                    {item.index}
                  </span>
                  <span
                    className={
                      "h-2 w-2 " +
                      (index % 2 === 0
                        ? "bg-[var(--medical)]"
                        : "bg-[var(--automotive)]")
                    }
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/58">
                  {item.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/12 px-2.5 py-1 text-[11px] text-white/58"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          href="/expertise"
          className="mt-7 inline-flex border-b border-white/35 pb-1 text-sm font-semibold text-white transition hover:border-white"
        >
          Explorer l’expertise complète <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
