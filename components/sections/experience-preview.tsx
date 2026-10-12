import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { CareerTimeline } from "@/components/sections/career-timeline";
import { ArrowRight } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/portfolio";
import { cn, fr, slugify } from "@/lib/utils";

export function ExperiencePreview() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="02"
            eyebrow="Parcours"
            title="De la validation terrain à l’intégration industrialisée."
            description="Une progression construite sur des systèmes réels, des campagnes réelles et des contraintes de qualité réelles."
          />
          <Link
            href="/experience"
            className="group border-line-strong bg-paper hover:border-ink inline-flex min-h-12 items-center gap-2 rounded-xl border px-5 text-sm font-semibold transition"
          >
            Voir tout le parcours
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Reveal className="mt-14">
          <CareerTimeline />
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {experiences.map((item, index) => {
            const isMedical = item.domain.includes("Médical");

            return (
              <Reveal key={item.company} delay={(index % 2) * 0.06}>
                <Link
                  href={`/experience#${slugify(item.company)}`}
                  className="group border-line bg-paper hover:border-line-strong flex h-full flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(7,11,16,0.25)] sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <p className="text-muted font-mono text-[11px] tracking-[0.08em] whitespace-nowrap">
                      {item.period}
                    </p>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] uppercase",
                        isMedical
                          ? "bg-medical-soft text-medical"
                          : "bg-auto-soft text-[#b14608]",
                      )}
                    >
                      {item.domain}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-[15px] font-medium text-[#34404c]">
                    {item.role}
                    <span className="text-muted"> · {item.location}</span>
                  </p>
                  <p className="text-muted mt-4 text-[15px] leading-7 text-pretty">
                    {fr(item.summary)}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <ul className="flex flex-wrap gap-1.5">
                      {item.tools.slice(0, 5).map((tool) => (
                        <li
                          key={tool}
                          className="border-line bg-canvas rounded-md border px-2 py-1 text-[11px] font-medium text-[#4a5763]"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                    <ArrowRight className="text-muted group-hover:text-ink shrink-0 text-lg transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
