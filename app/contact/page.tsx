import type { Metadata } from "next";
import Image from "next/image";

import { Logo } from "@/components/brand/logo";
import { CopyEmail } from "@/components/ui/copy-email";
import {
  ArrowUpRight,
  GitHubIcon,
  LinkedInIcon,
  Mail,
} from "@/components/ui/icons";
import { email, externalLinks } from "@/content/links";
import { portraitDataUri } from "@/content/portrait";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Hamza GHOURABI pour une mission, une opportunité ou un besoin d’intégration et de validation logicielle.",
  alternates: {
    canonical: "/contact",
  },
};

const channels = [
  { ...externalLinks.linkedin, Icon: LinkedInIcon },
  { ...externalLinks.github, Icon: GitHubIcon },
] as const;

export default function ContactPage() {
  return (
    <main
      id="contenu"
      className="bg-ink relative isolate overflow-hidden text-white"
    >
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-56 right-[-10%] -z-10 size-[720px] rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.4),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-25%] left-[-15%] -z-10 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.12),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-32 pb-24 sm:px-6 sm:pt-40 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16 lg:px-8 lg:pb-32">
        <section>
          <p className="text-medical-bright flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
            <span
              aria-hidden="true"
              className="bg-medical-bright/60 h-px w-8"
            />
            Contact
          </p>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-balance">
            Parlons du système, du test ou du problème à résoudre.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-pretty text-white/65">
            Mission freelance, opportunité, besoin d’intégration ou de
            validation&nbsp;: je peux présenter mon parcours et ma manière de
            travailler.
          </p>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <a
              href={email.href}
              className="group flex min-w-0 items-center gap-4"
            >
              <span className="bg-medical-bright text-ink grid size-12 shrink-0 place-items-center rounded-xl text-xl">
                <Mail />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase">
                  {email.label}
                </span>
                <span className="block truncate text-lg font-semibold underline-offset-4 group-hover:underline sm:text-xl">
                  {email.address}
                </span>
              </span>
            </a>
            <CopyEmail className="shrink-0" />
          </div>

          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {channels.map(({ Icon, ...channel }) => (
              <li key={channel.href}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/30 hover:bg-white/[0.07]"
                >
                  <span className="text-ink grid size-12 shrink-0 place-items-center rounded-xl bg-white text-xl">
                    <Icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold">
                      {channel.label}
                    </span>
                    <span className="block truncate font-mono text-xs text-white/50">
                      {channel.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="shrink-0 text-lg text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={portraitDataUri}
              alt="Portrait professionnel de Hamza Ghourabi"
              fill
              unoptimized
              priority
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="from-ink via-ink/60 absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-mono text-[10px] tracking-[0.18em] text-white/55 uppercase">
                Profil en bref
              </p>
              <Logo className="mt-3 text-4xl" />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 text-[13px] text-white/70">
            {[
              "Validation logicielle",
              "Intégration logicielle",
              "Automatisation des tests",
              "Médical & Automobile",
            ].map((item) => (
              <li key={item} className="bg-ink-2 px-3.5 py-3">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
