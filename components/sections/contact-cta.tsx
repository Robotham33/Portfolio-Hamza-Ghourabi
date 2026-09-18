import Link from "next/link";

export function ContactCta() {
  return (
    <section className="px-5 pt-8 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <div className="interactive-card mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-[var(--border-strong)] bg-[radial-gradient(circle_at_80%_20%,rgba(102,151,255,0.16),transparent_32%),linear-gradient(135deg,#0b111c,#070b12)] p-7 sm:p-10 lg:p-14">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
          Échangeons
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Besoin d’un profil capable de relier intégration, validation et
              automatisation ?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
              Je peux présenter mon parcours, mes méthodes de travail et les
              environnements sur lesquels j’ai évolué.
            </p>
          </div>
          <Link
            href="/contact"
            className="primary-action inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
          >
            Me contacter
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
