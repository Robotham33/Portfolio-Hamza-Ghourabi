import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { expertise, toolGroups } from "@/content/portfolio";

export default function ExpertisePage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
            Expertise
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Un profil transverse, du requirement au résultat de test.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
            Je me positionne à l’interface entre développement, système et
            validation : là où il faut comprendre les livraisons, les intégrer,
            les tester et rendre le résultat lisible.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-[var(--border)] bg-[#080d15] p-7"
              >
                <p className="text-xs font-semibold text-[var(--accent)]">
                  {item.index}
                </p>
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {item.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[var(--surface)] px-3 py-1.5 text-xs text-[#b9c6d8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">
              Environnements & outils
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {toolGroups.map((group) => (
                <div
                  key={group.label}
                  className="border-t border-[var(--border)] pt-5"
                >
                  <p className="text-xs font-semibold tracking-[0.14em] text-[var(--muted-foreground)] uppercase">
                    {group.label}
                  </p>
                  <div className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <p
                        key={item}
                        className="text-sm text-[var(--foreground)]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
