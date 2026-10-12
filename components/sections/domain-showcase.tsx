import { Reveal } from "@/components/motion/reveal";
import { TraceLine } from "@/components/motion/trace-line";
import { SectionHeading } from "@/components/ui/section-heading";

const medical = [
  "Produits médicaux critiques mêlant logiciel et matériel",
  "Validation fonctionnelle, intégration et automatisation",
  "Traçabilité, protocoles, rapports et analyse des anomalies",
  "Environnement qualité structuré autour de l’ISO 13485",
] as const;

const automotive = [
  "Exigences système et couverture de test sous DOORS",
  "Tests fonctionnels et d’intégration en simulation SIL",
  "Campagnes Jenkins, diagnostic et qualification d’anomalies",
  "Culture sûreté, traçabilité et référentiel ISO 26262",
] as const;

export function DomainShowcase() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          eyebrow="Environnements critiques"
          title="Deux domaines exigeants. Une même obsession : la confiance."
          description="Le médical et l’automobile imposent des contraintes différentes, mais partagent une exigence commune : comprendre, tester, tracer et fiabiliser des systèmes complexes."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="group border-medical/15 to-medical-soft relative flex h-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-white p-7 sm:p-9">
              <p className="text-medical font-mono text-[11px] tracking-[0.18em] uppercase">
                Domaine 01
              </p>

              <TraceLine
                variant="ecg"
                className="text-medical mt-8 h-14 w-full"
              />

              <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Médical
              </h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-pretty text-[#3b4b5a]">
                Des systèmes où la validation, la robustesse et la traçabilité
                sont au cœur du produit.
              </p>
              <ul className="border-medical/15 mt-7 space-y-3 border-t pt-6">
                {medical.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-6 text-[#1f2c38]"
                  >
                    <span className="bg-medical mt-[9px] size-1.5 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-8 font-mono text-[11px] tracking-[0.14em] text-[#5b6d7d] uppercase">
                Stago · QENVI Robotics
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="group from-ink-3 to-ink relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br p-7 text-white sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.28),transparent_65%)]"
              />
              <p className="text-auto-bright relative font-mono text-[11px] tracking-[0.18em] uppercase">
                Domaine 02
              </p>

              <TraceLine
                variant="can"
                className="text-auto relative mt-8 h-14 w-full"
              />

              <h3 className="relative mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Automobile
              </h3>
              <p className="relative mt-4 max-w-lg text-base leading-7 text-pretty text-white/60">
                Des fonctions embarquées soumises à des exigences, des
                configurations et des campagnes de validation complexes.
              </p>
              <ul className="relative mt-7 space-y-3 border-t border-white/10 pt-6">
                {automotive.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-6 text-white/80"
                  >
                    <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-auto" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="relative mt-auto pt-8 font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
                Astemo · Green Control
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
