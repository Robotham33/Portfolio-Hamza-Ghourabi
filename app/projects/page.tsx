import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { caseStudies } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">Études de cas</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Montrer la méthode, pas seulement l’outil.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
            Ces cas résument des problématiques représentatives de mon travail. Ils restent volontairement génériques pour préserver les informations confidentielles des projets clients.
          </p>
          <div className="mt-16 space-y-6">
            {caseStudies.map((item, index) => (
              <article key={item.title} className="grid gap-8 rounded-[28px] border border-[var(--border)] bg-[linear-gradient(140deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-7 lg:grid-cols-[120px_1fr] lg:p-9">
                <div><span className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</span></div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-[var(--muted-foreground)] uppercase">{item.eyebrow}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{item.title}</h2>
                  <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    <div><p className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">Problème</p><p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.problem}</p></div>
                    <div><p className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">Contribution</p><p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.contribution}</p></div>
                    <div><p className="text-xs font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">Valeur</p><p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.result}</p></div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.stack.map((tag) => <span key={tag} className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[#b8c6d8]">{tag}</span>)}
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
