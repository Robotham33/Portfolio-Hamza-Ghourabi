import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { career } from "@/content/portfolio";
import { portraitDataUri } from "@/content/portrait";

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
          <aside className="ink-panel hero-scanline relative flex min-h-[520px] flex-col overflow-hidden p-6 text-white sm:p-7 lg:p-8">
            <div className="absolute top-0 right-0 h-2 w-20 bg-[var(--automotive)]" />
            <div className="absolute top-0 right-20 h-2 w-20 bg-[var(--medical)]" />

            <div className="flex items-start justify-between gap-6">
              <div className="max-w-[65%]">
                <p className="text-[9px] font-bold tracking-[0.18em] text-white/38 uppercase">
                  Mission-critical
                </p>
                <h2 className="display-title mt-2 text-4xl leading-[0.92] font-semibold tracking-[-0.055em] sm:text-[2.9rem]">
                  Systems
                </h2>
                <p className="mt-4 max-w-sm text-xs leading-5 text-white/52">
                  Intégrer, valider et automatiser pour transformer une
                  livraison en preuve exploitable.
                </p>
              </div>

              <div className="w-[108px] shrink-0 sm:w-[124px]">
                <div className="relative aspect-[4/5] overflow-hidden border border-white/14 bg-white/5 shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
                  <Image
                    src={portraitDataUri}
                    alt="Hamza Ghourabi"
                    fill
                    unoptimized
                    priority
                    sizes="124px"
                    className="object-cover object-[center_16%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,8,12,0.72)_100%)]" />
                </div>
                <div className="mt-2 border-l border-white/18 pl-2">
                  <p className="text-[10px] font-semibold text-white">
                    Hamza Ghourabi
                  </p>
                  <p className="mt-0.5 text-[8px] font-bold tracking-[0.12em] text-white/38 uppercase">
                    Profile / HG-07
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 h-px w-full bg-white/10" />

            <div className="mt-5">
              <p className="text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">
                Engineering flow
              </p>
              <ol className="mt-3 border-l border-white/15">
                {flow.map((step, index) => (
                  <li
                    key={step}
                    className="group grid grid-cols-[38px_1fr_auto] items-center gap-3 border-b border-white/10 py-2.5 pl-3"
                  >
                    <span className="text-[9px] font-bold text-white/30">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {step}
                    </span>
                    <span className="text-[10px] text-white/25 transition group-hover:translate-x-1 group-hover:text-white/70">
                      →
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex flex-wrap gap-2">
                <span className="border border-[#397ec8] px-2 py-1 text-[9px] font-bold tracking-[0.1em] text-[#72c9ef] uppercase">
                  Medical
                </span>
                <span className="border border-[#b94c15] px-2 py-1 text-[9px] font-bold tracking-[0.1em] text-[#ff8d50] uppercase">
                  Automotive
                </span>
              </div>
              <div className="mt-4 h-px w-full bg-white/10" />
              <p className="mt-3 text-[9px] leading-4 font-bold tracking-[0.14em] text-white/28 uppercase">
                Reliability · Traceability · Quality
              </p>
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
