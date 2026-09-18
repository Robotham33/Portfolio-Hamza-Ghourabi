import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-32 pb-24 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[var(--border-strong)] lg:grid-cols-[1fr_420px]">
          <section className="bg-white p-7 sm:p-10 lg:p-14">
            <p className="tech-label text-[11px] font-bold text-[var(--accent)]">
              Contact
            </p>
            <h1 className="display-title mt-7 max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Parlons du système, du test ou du problème à résoudre.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              Mission freelance, opportunité, besoin d’intégration ou de
              validation : je peux présenter mon parcours et ma manière de
              travailler.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <a
                href="https://github.com/Robotham33"
                target="_blank"
                rel="noreferrer"
                className="secondary-action flex items-center justify-between px-5 py-4 text-sm font-semibold transition"
              >
                GitHub <span>↗</span>
              </a>
              <div className="border border-[var(--border)] bg-[var(--paper)] px-5 py-4">
                <p className="text-[10px] font-bold tracking-[0.12em] text-[var(--muted-foreground)] uppercase">
                  LinkedIn
                </p>
                <p className="mt-1 text-sm font-semibold text-[#44515e]">
                  Lien à renseigner
                </p>
              </div>
            </div>
          </section>

          <aside className="ink-panel flex flex-col justify-between p-7 text-white sm:p-10">
            <div>
              <p className="tech-label text-[10px] font-bold text-white/38">
                Profile signal
              </p>
              <div className="signal-line mt-10 h-1.5 w-24" />
            </div>
            <div className="mt-24">
              <p className="display-title text-7xl font-semibold tracking-[-0.07em]">
                HG
              </p>
              <p className="mt-5 text-sm leading-7 text-white/55">
                Validation logicielle
                <br />
                Intégration logicielle
                <br />
                QA Automation
                <br />
                Médical & Automobile
              </p>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
