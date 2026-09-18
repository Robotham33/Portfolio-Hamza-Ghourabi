import Image from "next/image";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { portraitDataUri } from "@/content/portrait";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-32 pb-24 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[var(--border-strong)] lg:grid-cols-[1fr_390px]">
          <section className="bg-white p-7 sm:p-10 lg:p-12">
            <p className="tech-label text-[11px] font-bold text-[var(--accent)]">
              Contact
            </p>
            <h1 className="display-title mt-6 max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl lg:text-[4.75rem]">
              Parlons du système, du test ou du problème à résoudre.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              Mission freelance, opportunité, besoin d’intégration ou de
              validation : je peux présenter mon parcours et ma manière de
              travailler.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a
                href="https://github.com/Robotham33"
                target="_blank"
                rel="noreferrer"
                className="secondary-action flex items-center justify-between px-5 py-4 text-sm font-semibold transition"
              >
                GitHub <span>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-ghourabi-7a0566106/"
                target="_blank"
                rel="noreferrer"
                className="secondary-action flex items-center justify-between px-5 py-4 text-sm font-semibold transition"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>
          </section>

          <aside className="ink-panel flex flex-col p-7 text-white sm:p-8">
            <div>
              <p className="tech-label text-[10px] font-bold text-white/38">
                Profile signal
              </p>
              <div className="signal-line mt-5 h-1.5 w-28" />
            </div>

            <div className="mt-6 grid grid-cols-[118px_1fr] items-end gap-5">
              <div>
                <div className="relative aspect-[4/5] overflow-hidden border border-white/14 bg-white/5">
                  <Image
                    src={portraitDataUri}
                    alt="Hamza Ghourabi"
                    fill
                    unoptimized
                    priority
                    sizes="118px"
                    className="object-cover object-[center_16%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(180deg,transparent,rgba(5,8,12,0.7))]" />
                </div>
                <p className="mt-2 text-[9px] font-bold tracking-[0.12em] text-white/38 uppercase">
                  Hamza Ghourabi
                </p>
              </div>

              <div className="pb-1">
                <p className="display-title text-4xl font-semibold tracking-[-0.07em]">
                  HG
                </p>
                <p className="mt-3 text-[13px] leading-6 text-white/58">
                  Validation logicielle
                  <br />
                  Intégration logicielle
                  <br />
                  QA Automation
                  <br />
                  Médical & Automobile
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-white/12 pt-6">
              <p className="mb-3 text-[9px] font-bold tracking-[0.16em] text-white/30 uppercase">
                Personal note
              </p>
              <img
                src="/signature-contact.png"
                alt="Des systèmes fiables pour un monde plus sûr — Hamza Ghourabi"
                className="block h-auto w-full"
              />
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
