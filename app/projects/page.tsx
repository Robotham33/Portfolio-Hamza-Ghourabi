import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { caseStudies, personalProjects } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
            Études de cas
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Montrer la méthode, pas seulement l’outil.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
            Ces cas résument des problématiques représentatives de mon travail.
            Ils restent volontairement génériques pour préserver les
            informations confidentielles des projets clients.
          </p>

          <div className="mt-16 space-y-6">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-8 rounded-[28px] border border-[var(--border)] bg-[linear-gradient(140deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-7 lg:grid-cols-[120px_1fr] lg:p-9"
              >
                <div>
                  <span className="text-sm font-semibold text-[var(--accent)]">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-[var(--muted-foreground)] uppercase">
                    {item.eyebrow}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {item.title}
                  </h2>
                  <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">
                        Problème
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">
                        Contribution
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                        {item.contribution}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">
                        Valeur
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                        {item.result}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[#b8c6d8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20 border-t border-[var(--border)] pt-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
              Projet personnel
            </p>
            {personalProjects.map((project) => (
              <article
                key={project.title}
                className="mt-8 rounded-[28px] border border-[var(--border)] bg-[#080d15] p-7 sm:p-9"
              >
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {project.title}
                </p>
                <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                  {project.subtitle}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
                  {project.summary}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-[#c4cede]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted-foreground)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
