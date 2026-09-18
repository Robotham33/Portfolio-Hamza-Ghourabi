import { SectionHeading } from "@/components/ui/section-heading";

const medical = [
  "Produits médicaux critiques mêlant software et hardware",
  "Validation fonctionnelle et tests d’intégration",
  "Protocoles, rapports, couverture de test et RCA",
  "Automatisation TeamCity et environnements de test",
] as const;

const automotive = [
  "Exigences système et couverture de test sous DOORS",
  "Tests fonctionnels et d’intégration en simulation SIL",
  "Campagnes Jenkins, diagnostic et qualification d’anomalies",
  "Régressions, traces et collaboration software / système",
] as const;

export function DomainShowcase() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Environnements critiques"
          title="Deux domaines exigeants. Une même obsession : la confiance."
          description="Le médical et l’automobile imposent des contraintes différentes, mais partagent une exigence commune : comprendre, tester, tracer et fiabiliser des systèmes complexes."
        />

        <div className="mt-14 grid overflow-hidden border border-[var(--border-strong)] lg:grid-cols-2">
          <article className="medical-panel relative p-7 sm:p-9 lg:p-11">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[var(--medical)]" />
            <div className="flex items-center justify-between">
              <p className="tech-label text-[11px] font-bold text-[var(--medical)]">
                Domain 01
              </p>
              <span className="text-4xl font-semibold tracking-[-0.06em] text-[var(--medical)]">
                +
              </span>
            </div>
            <h3 className="display-title mt-12 text-5xl font-semibold tracking-[-0.06em]">
              Médical
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#40505e]">
              Des systèmes où la validation, la robustesse et la traçabilité
              sont au cœur du produit.
            </p>
            <ul className="mt-9 space-y-4">
              {medical.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[#24313d]"
                >
                  <span className="mt-2 size-1.5 shrink-0 bg-[var(--medical)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs font-bold tracking-[0.14em] text-[#607180] uppercase">
              Stago · QENVI Robotics
            </p>
          </article>

          <article className="automotive-panel relative p-7 sm:p-9 lg:p-11">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[var(--automotive)]" />
            <div className="flex items-center justify-between">
              <p className="tech-label text-[11px] font-bold text-[#ff9c67]">
                Domain 02
              </p>
              <span className="text-4xl font-semibold tracking-[-0.06em] text-[#ff8d50]">
                +
              </span>
            </div>
            <h3 className="display-title mt-12 text-5xl font-semibold tracking-[-0.06em] text-white">
              Automobile
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
              Des fonctions embarquées soumises à des exigences, des
              configurations et des campagnes de validation complexes.
            </p>
            <ul className="mt-9 space-y-4">
              {automotive.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-white/78"
                >
                  <span className="mt-2 size-1.5 shrink-0 bg-[var(--automotive)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs font-bold tracking-[0.14em] text-white/40 uppercase">
              Astemo · Green Control
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
