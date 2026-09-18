import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { HeroPipeline } from "@/components/sections/hero-pipeline";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pt-36 pb-16 sm:px-6 sm:pt-40 sm:pb-20 lg:px-8 lg:pt-44 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(102,151,255,0.12),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(140,224,255,0.08),transparent_26%)]" />
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-20" />

      <div className="mx-auto grid min-h-[70svh] w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs text-[var(--muted-foreground)] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(138,180,255,0.75)]" />
              Software Integration · Validation · Embedded Systems
            </div>
          </Reveal>

          <Reveal delay={0.07}>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.15rem,7vw,5.5rem)] leading-[0.96] font-semibold tracking-[-0.062em] text-[var(--foreground)]">
              De l’intégration logicielle à la{" "}
              <span className="bg-[linear-gradient(120deg,#f7f9fc_15%,#9ec3ff_64%,#8ce0ff)] bg-clip-text text-transparent">
                validation système.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              Ingénieur Software Integration & Validation, spécialisé en
              systèmes embarqués, intégration firmware / software,
              automatisation des tests et CI/CD dans des environnements MedTech
              et automobile.
            </p>
          </Reveal>

          <Reveal delay={0.21}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/experience"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)] shadow-[0_12px_32px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none"
              >
                Explorer mon parcours
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-medium text-[var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none"
              >
                Voir mes projets
                <span aria-hidden="true" className="ml-2 text-[var(--accent)]">
                  ↗
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted-foreground)]">
              <span>Jenkins</span>
              <span>TeamCity</span>
              <span>DOORS</span>
              <span>Test Automation</span>
              <span>CI/CD</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} distance={24} className="lg:pl-2">
          <HeroPipeline />
        </Reveal>
      </div>
    </section>
  );
}
