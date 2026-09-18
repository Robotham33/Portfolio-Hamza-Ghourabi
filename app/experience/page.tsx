import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { education, experiences } from "@/content/portfolio";

export default function ExperiencePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 sm:pt-36">
        <section className="px-5 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_340px]">
            <div className="border-t-4 border-[var(--ink)] bg-white p-7 sm:p-10 lg:p-12">
              <p className="tech-label text-[11px] font-bold text-[var(--accent)]">
                Career dossier
              </p>
              <h1 className="display-title mt-6 max-w-5xl text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                Un parcours construit sur des systèmes qu’il faut prouver, pas simplement livrer.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
                Informatique industrielle, robotique, validation fonctionnelle,
                intégration logicielle, SIL et automatisation : chaque étape a
                renforcé ma capacité à relier exigences, produit et preuve de
                conformité.
              </p>
            </div>
            <div className="ink-panel p-7 text-white sm:p-9">
              <p className="tech-label text-[10px] font-bold text-white/40">
                Profile summary
              </p>
              <p className="display-title mt-12 text-6xl font-semibold tracking-[-0.07em]">
                7+
              </p>
              <p className="mt-2 text-sm font-semibold">années d’expérience</p>
              <div className="mt-10 space-y-4 border-t border-white/12 pt-6 text-sm text-white/62">
                <p>Médical + automobile</p>
                <p>Validation + intégration</p>
                <p>QA Automation + CI/CD</p>
                <p>Systèmes embarqués</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="border-t border-[var(--border-strong)]">
              {experiences.map((item, index) => {
                const isMedical = item.domain.includes("Médical");

                return (
                  <article
                    key={item.company}
                    className="grid gap-8 border-b border-[var(--border)] py-10 lg:grid-cols-[190px_1fr]"
                  >
                    <div>
                      <p className="text-xs font-bold tracking-[0.13em] text-[var(--muted-foreground)] uppercase">
                        {item.period}
                      </p>
                      <p className="mt-3 text-sm text-[#44515e]">
                        {item.location}
                      </p>
                      <span
                        className={`mt-5 inline-flex px-2.5 py-1.5 text-[10px] font-bold tracking-[0.12em] uppercase ${
                          isMedical
                            ? "bg-[#e4f4ff] text-[var(--medical)]"
                            : "bg-[var(--signal-soft)] text-[#b4470c]"
                        }`}
                      >
                        {item.domain}
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <p className="tech-label text-[10px] font-bold text-[var(--muted-foreground)]">
                            Experience 0{index + 1}
                          </p>
                          <h2 className="display-title mt-3 text-4xl font-semibold tracking-[-0.055em]">
                            {item.company}
                          </h2>
                          <p className="mt-1 text-base font-semibold text-[#34404c]">
                            {item.role}
                          </p>
                        </div>
                        <div
                          className={`h-2 w-16 ${
                            isMedical
                              ? "bg-[var(--medical)]"
                              : "bg-[var(--automotive)]"
                          }`}
                        />
                      </div>

                      <p className="mt-6 max-w-4xl text-base leading-7 text-[var(--muted-foreground)]">
                        {item.summary}
                      </p>

                      <ul className="mt-7 grid gap-3 md:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-6 text-[#34404c]"
                          >
                            <span
                              className={`mt-2 size-1.5 shrink-0 ${
                                isMedical
                                  ? "bg-[var(--medical)]"
                                  : "bg-[var(--automotive)]"
                              }`}
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className="border border-[var(--border)] bg-white px-2.5 py-1.5 text-xs font-medium text-[#53606c]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--ink)] px-5 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="tech-label text-[11px] font-bold text-white/45">
              Education
            </p>
            <div className="mt-10 grid gap-px bg-white/12 md:grid-cols-2">
              {education.map((item) => (
                <article key={item.degree} className="bg-[#0d151e] p-7 sm:p-9">
                  <p className="display-title text-5xl font-semibold tracking-[-0.06em] text-white/20">
                    {item.year}
                  </p>
                  <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em]">
                    {item.degree}
                  </h2>
                  <p className="mt-3 text-sm text-white/55">
                    {item.school} · {item.location}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
