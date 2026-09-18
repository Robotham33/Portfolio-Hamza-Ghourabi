import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { caseStudies, personalProjects } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24 sm:pt-36">
        <section className="px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl border-t-4 border-[var(--ink)] bg-white p-7 sm:p-10 lg:p-12">
            <p className="tech-label text-[11px] font-bold text-[var(--accent)]">
              Case studies
            </p>
            <h1 className="display-title mt-6 max-w-5xl text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              La valeur n’est pas dans l’outil. Elle est dans la manière de
              résoudre le problème.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
              Des cas volontairement génériques pour préserver les informations
              confidentielles, mais suffisamment précis pour montrer ma méthode
              de travail.
            </p>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-6">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className="grid overflow-hidden border border-[var(--border-strong)] bg-white lg:grid-cols-[180px_1fr]"
              >
                <div
                  className={`flex flex-col justify-between p-6 ${
                    index === 0
                      ? "medical-panel"
                      : index === 1
                        ? "automotive-panel"
                        : "bg-[#e9edf1]"
                  }`}
                >
                  <p
                    className={`tech-label text-[10px] font-bold ${
                      index === 1
                        ? "text-white/45"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    Case 0{index + 1}
                  </p>
                  <p
                    className={`display-title mt-16 text-5xl font-semibold tracking-[-0.06em] ${
                      index === 1 ? "text-white" : "text-[var(--ink)]"
                    }`}
                  >
                    0{index + 1}
                  </p>
                </div>

                <div className="p-7 sm:p-9 lg:p-11">
                  <p className="text-xs font-bold tracking-[0.12em] text-[var(--accent)] uppercase">
                    {item.eyebrow}
                  </p>
                  <h2 className="display-title mt-4 max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em]">
                    {item.title}
                  </h2>

                  <div className="mt-10 grid gap-7 lg:grid-cols-3">
                    <div>
                      <p className="tech-label text-[10px] font-bold text-[var(--muted-foreground)]">
                        Problème
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#44515e]">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <p className="tech-label text-[10px] font-bold text-[var(--muted-foreground)]">
                        Contribution
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#44515e]">
                        {item.contribution}
                      </p>
                    </div>
                    <div>
                      <p className="tech-label text-[10px] font-bold text-[var(--muted-foreground)]">
                        Valeur
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#44515e]">
                        {item.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.stack.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[var(--border)] bg-[var(--paper)] px-2.5 py-1.5 text-xs font-medium text-[#53606c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <section className="mt-16 bg-[var(--ink)] p-7 text-white sm:p-10 lg:p-12">
              <p className="tech-label text-[10px] font-bold text-white/40">
                Personal initiative
              </p>
              {personalProjects.map((project) => (
                <div
                  key={project.title}
                  className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr]"
                >
                  <div>
                    <p className="text-sm font-bold text-[#75ddf2]">
                      {project.title}
                    </p>
                    <h2 className="display-title mt-4 text-4xl leading-[0.98] font-semibold tracking-[-0.055em]">
                      {project.subtitle}
                    </h2>
                    <p className="mt-5 text-base leading-7 text-white/58">
                      {project.summary}
                    </p>
                  </div>
                  <ul className="space-y-4 border-l border-white/12 pl-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm leading-6 text-white/68"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
