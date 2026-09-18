import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { portraitDataUri } from "@/content/portrait";

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
    <section className="px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_170px] lg:items-end">
          <SectionHeading
            eyebrow="Environnements critiques"
            title="Deux domaines exigeants. Une même obsession : la confiance."
            description="Le médical et l’automobile imposent des contraintes différentes, mais partagent une exigence commune : comprendre, tester, tracer et fiabiliser des systèmes complexes."
          />

          <aside className="hidden lg:block">
            <div className="ml-auto w-[148px]">
              <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border-strong)] bg-white shadow-[0_18px_50px_rgba(10,16,23,0.08)]">
                <Image
                  src={portraitDataUri}
                  alt="Hamza Ghourabi"
                  fill
                  unoptimized
                  sizes="148px"
                  className="object-cover object-[center_16%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(10,16,23,0.55))]" />
              </div>
              <div className="mt-2 border-l-2 border-[var(--accent)] pl-2.5">
                <p className="text-[11px] font-semibold text-[var(--foreground)]">
                  Hamza Ghourabi
                </p>
                <p className="mt-0.5 text-[9px] font-bold tracking-[0.12em] text-[var(--muted-foreground)] uppercase">
                  Validation · Integration · QA
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid overflow-hidden border border-[var(--border-strong)] lg:grid-cols-2">
          <article className="medical-panel relative p-7 sm:p-8 lg:p-9">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[var(--medical)]" />
            <div className="flex items-center justify-between">
              <p className="tech-label text-[10px] font-bold text-[var(--medical)]">
                Domain 01
              </p>
              <span className="text-3xl font-semibold tracking-[-0.06em] text-[var(--medical)]">
                +
              </span>
            </div>
            <h3 className="display-title mt-8 text-5xl font-semibold tracking-[-0.06em]">
              Médical
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#40505e] sm:text-base">
              Des systèmes où la validation, la robustesse et la traçabilité
              sont au cœur du produit.
            </p>
            <ul className="mt-6 space-y-3">
              {medical.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-5 text-[#24313d]"
                >
                  <span className="mt-2 size-1.5 shrink-0 bg-[var(--medical)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[11px] font-bold tracking-[0.14em] text-[#607180] uppercase">
              Stago · QENVI Robotics
            </p>
          </article>

          <article className="automotive-panel relative p-7 sm:p-8 lg:p-9">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[var(--automotive)]" />
            <div className="flex items-center justify-between">
              <p className="tech-label text-[10px] font-bold text-[#ff9c67]">
                Domain 02
              </p>
              <span className="text-3xl font-semibold tracking-[-0.06em] text-[#ff8d50]">
                +
              </span>
            </div>
            <h3 className="display-title mt-8 text-5xl font-semibold tracking-[-0.06em] text-white">
              Automobile
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
              Des fonctions embarquées soumises à des exigences, des
              configurations et des campagnes de validation complexes.
            </p>
            <ul className="mt-6 space-y-3">
              {automotive.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-5 text-white/78"
                >
                  <span className="mt-2 size-1.5 shrink-0 bg-[var(--automotive)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[11px] font-bold tracking-[0.14em] text-white/40 uppercase">
              Astemo · Green Control
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
