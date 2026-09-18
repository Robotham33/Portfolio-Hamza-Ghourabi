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
    <section className="px-5 pt-32 pb-16 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="flex flex-col justify-between border-t-4 border-[var(--ink)] bg-[var(--paper)] p-6 sm:p-8 lg:p-10">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold tracking-[0.15em] text-[var(--muted-foreground)] uppercase">
                <span>7+ ans d’expérience</span>
                <span className="text-[var(--medical)]">Médical</span>
                <span className="text-[var(--automotive)]">Automobile</span>
              </div>
            </Reveal>

            <p className="mt-10 text-sm font-bold tracking-[0.14em] text-[var(--accent)] uppercase">
              Hamza Ghourabi
            </p>
            <h1 className="display-title mt-3 max-w-4xl text-[clamp(3.6rem,7vw,7.4rem)] leading-[0.82] font-semibold tracking-[-0.075em]">
              Validation.
              <span className="block">Integration.</span>
              <span className="block text-[var(--accent)]">QA Automation.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 font-medium text-[#1b2631]">
              J’interviens sur des logiciels et systèmes embarqués complexes,
              dans des environnements où la fiabilité, la traçabilité et la
              qualité ne sont pas négociables.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
              De l’analyse des exigences aux campagnes automatisées, de
              l’intégration software / firmware au diagnostic des anomalies.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/experience"
              className="primary-action inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold transition"
            >
              Explorer mon parcours <span className="ml-2">→</span>
            </Link>
            <Link
              href="/projects"
              className="secondary-action inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold transition"
            >
              Voir mes cas concrets <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        <Reveal delay={0.08} distance={20}>
          <aside className="ink-panel hero-scanline relative flex min-h-[600px] flex-col justify-between overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute top-0 right-0 h-2 w-24 bg-[var(--automotive)]" />
            <div className="absolute top-0 right-24 h-2 w-24 bg-[var(--medical)]" />

            <div>
              <div className="flex items-center justify-between gap-4 text-[11px] font-bold tracking-[0.16em] text-white/45 uppercase">
                <span>Mission-critical systems</span>
                <span>Profile / HG-07</span>
              </div>

              <h2 className="display-title mt-16 max-w-lg text-4xl leading-[0.95] font-semibold tracking-[-0.055em] text-white sm:text-5xl">
                Faire passer un système du “ça devrait fonctionner” au “on peut
                le démontrer”.
              </h2>
            </div>

            <div className="mt-14">
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
                Engineering flow
              </p>
              <ol className="mt-5 border-l border-white/15">
                {flow.map((step, index) => (
                  <li
                    key={step}
                    className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-white/10 py-4 pl-4"
                  >
                    <span className="text-xs font-bold text-white/35">
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

            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
              <div className="bg-[#0b1118] p-4">
                <p className="text-[10px] tracking-[0.14em] text-white/40 uppercase">
                  Medical
                </p>
                <p className="mt-2 text-sm font-semibold text-[#7eddf0]">
                  Fiabilité · Validation
                </p>
              </div>
              <div className="bg-[#0b1118] p-4">
                <p className="text-[10px] tracking-[0.14em] text-white/40 uppercase">
                  Automotive
                </p>
                <p className="mt-2 text-sm font-semibold text-[#ff8d50]">
                  SIL · Regression
                </p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <div className="mx-auto mt-5 flex max-w-7xl flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-4 text-xs font-medium text-[var(--muted-foreground)]">
        {career.core.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
