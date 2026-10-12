import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ValidationRun } from "@/components/sections/validation-run";
import {
  ArrowRight,
  GitHubIcon,
  LinkedInIcon,
  Mail,
} from "@/components/ui/icons";
import { email, externalLinks } from "@/content/links";
import { career } from "@/content/portfolio";
import { portraitDataUri } from "@/content/portrait";
import { fr } from "@/lib/utils";

const roleSteps = [
  "Comprendre les exigences",
  "Intégrer les composants",
  "Automatiser les contrôles",
  "Analyser les anomalies",
  "Sécuriser la validation",
] as const;

const roleTags = [
  "Exigences",
  "Intégration",
  "Automatisation des tests",
  "CI/CD",
  "Débogage",
] as const;

const highlights = [
  "7+ ans d’expérience",
  "Validation logicielle",
  "Intégration logicielle",
  "Automatisation des tests",
] as const;

const signals = [
  { value: "7+", label: "ans", detail: "validation & intégration" },
  { value: "02", label: "domaines critiques", detail: "médical + automobile" },
  { value: "I→V", label: "continuum", detail: "exigences → livraison" },
  { value: "CI/CD", label: "automatisation", detail: "Jenkins + TeamCity" },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-ink relative isolate overflow-hidden text-white"
    >
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-56 right-[-12%] -z-10 size-[760px] rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.42),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-[-15%] -z-10 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.12),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-28 pb-14 sm:px-6 sm:pt-36 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:px-8 lg:pt-36 lg:pb-20">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 sm:size-16">
              <Image
                src={portraitDataUri}
                alt="Portrait de Hamza Ghourabi"
                fill
                unoptimized
                priority
                sizes="64px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                Hamza Ghourabi
              </p>
              <p className="text-sm text-white/60">{career.role}</p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] tracking-[0.08em] text-white/50 uppercase">
            {highlights.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-white/25"
                  />
                ) : null}
                <span
                  className={
                    index === highlights.length - 1 ? "text-medical-bright" : ""
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[clamp(2.6rem,5.3vw,4.9rem)] leading-[0.96] font-semibold tracking-[-0.05em]"
          >
            Fiabiliser le logiciel,{" "}
            <span className="text-white/50">de l’exigence jusqu’à</span>{" "}
            <span className="text-gradient">la validation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-7 text-pretty text-white/75 sm:text-lg sm:leading-8">
            {fr(
              "J’interviens sur l’ensemble du cycle de validation et d’intégration : exigences, logiciel / firmware, automatisation des tests et CI/CD. Cette approche s’étend aujourd’hui de l’embarqué aux interfaces web et aux parcours utilisateur.",
            )}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/experience"
              className="group text-ink inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold shadow-[0_12px_40px_rgba(90,166,255,0.25)] transition hover:bg-white/90"
            >
              Explorer mon parcours
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              Voir mes cas concrets
              <ArrowRight className="text-white/50 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <div className="flex gap-2 sm:ml-2">
              <a
                href={email.href}
                className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 text-lg text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <Mail />
                <span className="sr-only">E-mail : {email.address}</span>
              </a>
              <a
                href={externalLinks.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 text-lg text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <LinkedInIcon />
                <span className="sr-only">LinkedIn (nouvel onglet)</span>
              </a>
              <a
                href={externalLinks.github.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 text-lg text-white/60 transition hover:border-white/30 hover:text-white"
              >
                <GitHubIcon />
                <span className="sr-only">GitHub (nouvel onglet)</span>
              </a>
            </div>
          </div>

          <div className="border-medical-bright/60 mt-10 max-w-2xl border-l pl-4">
            <p className="text-sm font-semibold text-white sm:text-base">
              Une expertise construite dans des environnements exigeants.
            </p>
            <p className="mt-1.5 text-sm leading-6 text-pretty text-white/55 sm:text-[15px]">
              Le médical et l’automobile m’ont appris à travailler avec de
              fortes exigences de fiabilité, de traçabilité et de qualité. Des
              compétences que je souhaite aujourd’hui mettre au service d’autres
              secteurs et de nouveaux défis techniques.
            </p>
          </div>
        </div>

        <Reveal delay={0.1} distance={24}>
          <ValidationRun
            eyebrow="Mon rôle dans un projet"
            title="Relier le besoin, l’intégration et la validation pour sécuriser la livraison logicielle."
            steps={roleSteps}
            tagsLabel="Outils & pratiques"
            tags={roleTags}
          />
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <ul
          aria-label="Profil en un coup d’œil"
          className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4"
        >
          {signals.map((item, index) => (
            <li
              key={item.label}
              className={`px-5 py-7 sm:px-6 lg:px-8 ${
                index % 2 === 1 ? "border-l border-white/10" : ""
              } ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${
                index === 2 ? "lg:border-l" : ""
              }`}
            >
              <p className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/45">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/10 bg-white/[0.02]">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 px-5 py-4 font-mono text-[11px] tracking-[0.06em] text-white/45 uppercase sm:px-6 lg:px-8">
          {career.core.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="bg-medical-bright size-1 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
