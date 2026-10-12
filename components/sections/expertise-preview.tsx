import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { ArrowRight } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { expertise } from "@/content/portfolio";
import { fr } from "@/lib/utils";

export function ExpertisePreview() {
  return (
    <section
      id="expertise"
      className="bg-ink relative isolate overflow-hidden px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          inverse
          index="03"
          eyebrow="Expertises clés"
          title="Quatre briques. Un même objectif : rendre le logiciel maîtrisable."
          description="Je ne me positionne pas sur une liste d’outils, mais sur un continuum de responsabilités : comprendre, intégrer, tester, automatiser et sécuriser la livraison."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.06}>
              <Spotlight className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/20 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-white/35">
                    {item.index}
                  </span>
                  <span
                    className={`h-px w-12 ${
                      index % 2 === 0 ? "bg-medical-bright" : "bg-auto"
                    }`}
                  />
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] sm:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-pretty text-white/60">
                  {fr(item.text)}
                </p>
                <ul className="mt-7 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/65"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Link
          href="/expertise"
          className="group mt-10 inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-semibold transition hover:border-white/35 hover:bg-white/[0.04]"
        >
          Explorer l’expertise complète
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
