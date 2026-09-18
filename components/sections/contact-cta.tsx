import Link from "next/link";

export function ContactCta() {
  return (
    <section className="px-5 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-[var(--border-strong)] lg:grid-cols-[1fr_280px]">
        <div className="bg-white p-7 sm:p-10 lg:p-14">
          <p className="tech-label text-[11px] font-bold text-[var(--accent)]">
            Next mission
          </p>
          <h2 className="display-title mt-6 max-w-4xl text-4xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Vous cherchez un profil capable de relier validation, intégration et automatisation ?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
            Mon terrain de jeu : des systèmes exigeants, des équipes
            pluridisciplinaires et des problèmes qu’il faut rendre mesurables,
            reproductibles et compréhensibles.
          </p>
          <Link
            href="/contact"
            className="primary-action mt-8 inline-flex px-5 py-3 text-sm font-semibold transition"
          >
            Échanger avec moi <span className="ml-2">↗</span>
          </Link>
        </div>

        <div className="relative flex min-h-[260px] flex-col justify-between bg-[var(--ink)] p-7 text-white">
          <div className="absolute top-0 left-0 h-1.5 w-1/2 bg-[var(--medical)]" />
          <div className="absolute top-0 right-0 h-1.5 w-1/2 bg-[var(--automotive)]" />
          <p className="tech-label text-[10px] font-bold text-white/38">
            Availability / Contact
          </p>
          <div>
            <p className="display-title text-5xl font-semibold tracking-[-0.06em]">
              HG
            </p>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Software Integration
              <br />
              Validation
              <br />
              QA Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
