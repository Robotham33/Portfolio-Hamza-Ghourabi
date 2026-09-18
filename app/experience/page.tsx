import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { experiences } from "@/content/portfolio";

export default function ExperiencePage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">Parcours</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            De la validation fonctionnelle à l’intégration logicielle.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
            Mon fil conducteur : comprendre ce qui doit fonctionner, intégrer ce qui a été livré, puis apporter une preuve exploitable que le système se comporte comme attendu.
          </p>
          <div className="mt-16 space-y-8">
            {experiences.map((item) => (
              <article key={item.company} className="grid gap-8 border-t border-[var(--border)] py-10 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">{item.period}</p>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)]">{item.domain}</p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.04em]">{item.company}</h2>
                  <p className="mt-2 text-base font-medium text-[#c8d3e1]">{item.role}</p>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">{item.summary}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-[#c4cede]">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted-foreground)]">{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
