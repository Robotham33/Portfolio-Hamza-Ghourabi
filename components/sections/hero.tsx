import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { career } from "@/content/portfolio";

const quickCapabilities = [
  ["01", "Intégration logicielle", "Firmware + software + builds"],
  ["02", "Validation système", "Functional validation + SIL"],
  ["03", "Test automation", "Tests répétables + analyse"],
  ["04", "CI/CD", "Jenkins + TeamCity"],
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_15%,rgba(102,151,255,0.14),transparent_28rem),radial-gradient(circle_at_86%_20%,rgba(140,224,255,0.07),transparent_25rem)]" />
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-15" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-xs text-[var(--muted-foreground)]">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" />
              {career.years} ans · MedTech & automobile · systèmes embarqués
            </div>
          </Reveal>

          <p className="mt-7 text-sm font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">Hamza Ghourabi</p>
          <h1 className="mt-3 max-w-4xl text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--foreground)]">
            Software Integration
            <span className="block bg-[linear-gradient(110deg,#f7f9fc_10%,#9ec3ff_62%,#8ce0ff)] bg-clip-text text-transparent">
              & Validation Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#d7dfeb]">
            {career.headline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
            {career.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/experience" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[#05070c] transition hover:-translate-y-0.5">
              Voir mon parcours <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]">
              Voir mes cas concrets <span aria-hidden="true" className="ml-2 text-[var(--accent)]">↗</span>
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted-foreground)]">
            {career.core.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <Reveal delay={0.08} distance={20}>
          <aside className="overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))] shadow-[0_32px_100px_rgba(0,0,0,0.38)]">
            <div className="border-b border-[var(--border)] p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">Ce que je fais</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">Du requirement à une release vérifiable.</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                Je travaille à l’interface entre système, développement et test pour transformer une livraison en résultat exploitable.
              </p>
            </div>
            <ol className="p-3">
              {quickCapabilities.map(([index, label, detail]) => (
                <li key={label} className="grid grid-cols-[38px_1fr] gap-3 rounded-2xl px-3 py-3.5 transition hover:bg-[var(--surface)]">
                  <span className="grid size-9 place-items-center rounded-xl border border-[var(--border)] bg-[#080d15] text-[10px] font-semibold text-[var(--accent)]">{index}</span>
                  <span>
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="mt-1 block text-xs text-[var(--muted-foreground)]">{detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="grid grid-cols-3 gap-px border-t border-[var(--border)] bg-[var(--border)]">
              <div className="bg-[#080d15] p-4"><p className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Requirements</p><p className="mt-1 text-xs font-medium">DOORS</p></div>
              <div className="bg-[#080d15] p-4"><p className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">CI/CD</p><p className="mt-1 text-xs font-medium">Jenkins / TeamCity</p></div>
              <div className="bg-[#080d15] p-4"><p className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Validation</p><p className="mt-1 text-xs font-medium">Functional / SIL</p></div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
