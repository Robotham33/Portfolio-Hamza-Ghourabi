import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { career } from "@/content/portfolio";

const roleSteps = [
  "Comprendre les exigences",
  "Intégrer les composants",
  "Automatiser les contrôles",
  "Analyser les anomalies",
  "Sécuriser la validation",
] as const;

const roleTags = [
  "Exigences",
  "Intégration",
  "Automatisation des tests",
  "CI/CD",
  "Débogage",
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
                <span>Validation logicielle</span>
                <span>Intégration logicielle</span>
                <span className="text-[var(--accent)]">
                  Automatisation des tests
                </span>
              </div>
            </Reveal>

            <h1 className="display-title mt-3 max-w-4xl text-[clamp(3rem,5.7vw,5.7rem)] leading-[0.9] font-semibold tracking-[-0.065em]">
              Fiabiliser le logiciel,
              <span className="block">de l’exigence jusqu’à</span>
              <span className="block text-[var(--accent)]">la validation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-7 font-medium text-[#1b2631]">
              J’interviens sur l’ensemble du cycle de validation et
              d’intégration : compréhension des exigences, intégration
              logicielle / firmware, automatisation des tests, CI/CD, analyse
              des anomalies et sécurisation des livraisons.
            </p>

            <div className="mt-5 max-w-2xl border-l-2 border-[var(--accent)] pl-4">
              <p className="text-sm font-semibold text-[#1b2631] sm:text-base">
                Une expertise construite dans des environnements exigeants.
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--muted-foreground)] sm:text-base">
                Le médical et l’automobile m’ont appris à travailler avec de
                fortes exigences de fiabilité, de traçabilité et de qualité. Des
                compétences que je souhaite aujourd’hui mettre au service
                d’autres secteurs et de nouveaux défis techniques.
              </p>
            </div>
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
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/45 uppercase">
                Mon rôle dans un projet
              </p>

              <h2 className="display-title mt-8 max-w-lg text-4xl leading-[0.95] font-semibold tracking-[-0.055em] text-white sm:text-[2.7rem]">
                Relier le besoin, l’intégration et la validation pour sécuriser
                la livraison logicielle.
              </h2>
            </div>

            <div className="mt-9">
              <ol className="border-l border-white/15">
                {roleSteps.map((step, index) => (
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

            <div className="mt-7">
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
                Outils & pratiques
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {roleTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-white/70 uppercase"
                  >
                    {tag}
                  </span>
                ))}
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
