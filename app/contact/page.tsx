import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">Contact</p>
          <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Parlons intégration, validation ou automatisation.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
                Pour une mission, un poste ou simplement un échange technique, le meilleur point de départ est de me contacter via LinkedIn ou GitHub.
              </p>
            </div>
            <div className="space-y-3 lg:pt-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--border-strong)]">
                <span><span className="block text-xs text-[var(--muted-foreground)]">Réseau professionnel</span><span className="mt-1 block font-medium">LinkedIn</span></span><span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/Robotham33" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--border-strong)]">
                <span><span className="block text-xs text-[var(--muted-foreground)]">Code & projets</span><span className="mt-1 block font-medium">GitHub</span></span><span aria-hidden="true">↗</span>
              </a>
              <p className="pt-3 text-xs leading-5 text-[var(--muted-foreground)]">L’adresse e-mail publique sera ajoutée dès validation du canal de contact à afficher.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
