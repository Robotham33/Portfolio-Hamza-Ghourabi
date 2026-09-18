import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { career } from "@/content/portfolio";

const flow = [
  "Requirements",
  "Validation",
  "Integration",
  "QA Automation",
  "Release",
] as const;

export function Hero() {
  return (
    <section className="px-5 pt-28 pb-10 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="flex flex-col justify-between border-t-4 border-[var(--ink)] bg-[var(--paper)] p-6 sm:p-7 lg:p-8">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold tracking-[0.15em] text-[var(--muted-foreground)] uppercase">
                <span>7+ ans d’expérience</span>
                <span className="text-[var(--medical)]">Médical</span>
                <span className="text-[var(--automotive)]">Automobile</span>
              </div>
            </Reveal>

            <p className="mt-7 text-sm font-bold tracking-[0.14em] text-[var(--accent)] uppercase">
              Hamza Ghourabi
            </p>
            <h1 className="display-title mt-3 max-w-4xl text-[clamp(3.4rem,6.4vw,6.5rem)] leading-[0.84] font-semibold tracking-[-0.072em]">
              Validation.
              <span className="block">Integration.</span>
              <span className="block text-[var(--accent)]">QA Automation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-7 font-medium text-[#1b2631]">
              J’interviens sur des logiciels et systèmes embarqués complexes,
              dans des environnements où la fiabilité, la traçabilité et la
              qualité ne sont pas négociables.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)] sm:text-base">
              De l’analyse des exigences aux campagnes automatisées, de
              l’intégration software / firmware au diagnostic des anomalies.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/experience"
              className="primary-action inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold transition"
            >
              Explorer mon parcours <span className="ml-2">→</span>
            </Link>
            <Link
              href="/projects"
              className="secondary-action inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold transition"
            >
              Voir mes cas concrets <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        <Reveal delay={0.08} distance={20}>
          <aside className="ink-panel hero-scanline relative flex min-h-[520px] flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8">
            <div className="absolute top-0 right-0 h-2 w-20 bg-[var(--automotive)]" />
            <div className="absolute top-0 right-20 h-2 w-20 bg-[var(--medical)]" />

            <div>
              <div className="flex items-center justify-between gap-4 text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">
                <span>Mission-critical systems</span>
                <span>Profile / HG-07</span>
              </div>

              <h2 className="display-title mt-10 max-w-lg text-4xl leading-[0.95] font-semibold tracking-[-0.055em] text-white sm:text-[2.7rem]">
                Faire passer un système du “ça devrait fonctionner” au “on peut
                le démontrer”.
              </h2>
            </div>

            <div className="mt-9">
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
                Engineering flow
              </p>
              <ol className="mt-3 border-l border-white/15">
                {flow.map((step, index) => (
                  <li
                    key={step}
                    className="group grid grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/10 py-3 pl-3"
                  >
                    <span className="text-[11px] font-bold text-white/35">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {step}
                    </span>
                    <span className="text-xs text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-px bg-white/10">
              <div className="bg-[#0b1118] p-3.5">
                <p className="text-[9px] tracking-[0.14em] text-white/40 uppercase">
                  Medical
                </p>
                <p className="mt-1.5 text-xs font-semibold text-[#7eddf0]">
                  Fiabilité · Validation
                </p>
              </div>
              <div className="bg-[#0b1118] p-3.5">
                <p className="text-[9px] tracking-[0.14em] text-white/40 uppercase">
                  Automotive
                </p>
                <p className="mt-1.5 text-xs font-semibold text-[#ff8d50]">
                  SIL · Regression
                </p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <div className="mx-auto mt-4 flex max-w-7xl flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-3 text-[11px] font-medium text-[var(--muted-foreground)]">
        {career.core.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
