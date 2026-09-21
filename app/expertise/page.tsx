import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { expertise, toolGroups } from "@/content/portfolio";

export default function ExpertisePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24 sm:pt-36">
        <section className="px-5 sm:px-6 lg:px-8">
          <div className="ink-panel mx-auto max-w-7xl p-7 text-white sm:p-10 lg:p-14">
            <p className="tech-label text-[11px] font-bold text-white/42">
              Cartographie des compétences
            </p>
            <h1 className="display-title mt-7 max-w-5xl text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Comprendre. Intégrer. Tester. Automatiser.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
              Mon rôle se situe à l’interface entre système, logiciel, QA et
              validation. De l’embarqué au web, l’objectif reste le même :
              obtenir un résultat reproductible, traçable et exploitable.
            </p>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2">
              {expertise.map((item, index) => (
                <article
                  key={item.title}
                  className="card-lift border border-[var(--border-strong)] bg-white p-7 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="display-title text-5xl font-semibold tracking-[-0.06em] text-[#d5dce2]">
                      {item.index}
                    </span>
                    <span
                      className={`h-3 w-3 ${
                        index % 2 === 0
                          ? "bg-[var(--medical)]"
                          : "bg-[var(--automotive)]"
                      }`}
                    />
                  </div>
                  <h2 className="mt-9 text-2xl font-semibold tracking-[-0.035em]">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
                    {item.text}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[var(--border)] bg-[var(--paper)] px-3 py-1.5 text-xs font-medium text-[#52606c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-24">
              <div className="flex items-end justify-between gap-6 border-b border-[var(--border-strong)] pb-6">
                <div>
                  <p className="tech-label text-[10px] font-bold text-[var(--accent)]">
                    Outils & environnements
                  </p>
                  <h2 className="display-title mt-3 text-4xl font-semibold tracking-[-0.055em]">
                    Environnements & outils
                  </h2>
                </div>
                <p className="hidden text-sm text-[var(--muted-foreground)] md:block">
                  Outils & pratiques réellement utilisés
                </p>
              </div>

              <div className="grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
                {toolGroups.map((group) => (
                  <article key={group.label} className="bg-white p-6">
                    <p className="tech-label text-[10px] font-bold text-[var(--muted-foreground)]">
                      {group.label}
                    </p>
                    <div className="mt-6 space-y-2">
                      {group.items.map((item) => (
                        <p
                          key={item}
                          className="text-sm font-semibold text-[#27333e]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
