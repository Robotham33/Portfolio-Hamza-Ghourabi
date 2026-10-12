import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { ArrowRight, LinkedInIcon } from "@/components/ui/icons";
import { externalLinks } from "@/content/links";
import { portraitDataUri } from "@/content/portrait";

export function ContactCta() {
  return (
    <section className="px-5 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <div className="bg-ink relative isolate mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] text-white lg:grid-cols-[1fr_340px]">
        <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-24 -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.35),transparent_62%)]"
        />

        <div className="p-7 sm:p-10 lg:p-14">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-white/55 uppercase">
            <span className="h-px w-8 bg-white/30" />
            Prochaine mission
          </p>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
            Vous cherchez un profil capable de relier validation, intégration et
            automatisation&nbsp;?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-white/60 sm:text-lg sm:leading-8">
            Mon terrain de jeu&nbsp;: des systèmes exigeants, des équipes
            pluridisciplinaires et des problèmes qu’il faut rendre mesurables,
            reproductibles et compréhensibles.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group text-ink inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold transition hover:bg-white/90"
            >
              Échanger avec moi
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={externalLinks.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 text-sm font-semibold transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              <LinkedInIcon className="text-base text-white/70" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-8 border-t border-white/10 p-7 sm:p-10 lg:border-t-0 lg:border-l">
          <div className="absolute inset-x-0 top-0 flex h-1">
            <span className="bg-medical flex-1" />
            <span className="flex-1 bg-auto" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-white/40 uppercase">
            Disponibilité / Contact
          </p>
          <div className="flex items-end gap-5">
            <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15">
              <Image
                src={portraitDataUri}
                alt=""
                fill
                unoptimized
                sizes="96px"
                className="object-cover object-[center_18%]"
              />
            </div>
            <div>
              <Logo className="text-4xl" />
              <p className="mt-3 text-[13px] leading-6 text-white/55">
                Intégration logicielle
                <br />
                Validation
                <br />
                Automatisation des tests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
