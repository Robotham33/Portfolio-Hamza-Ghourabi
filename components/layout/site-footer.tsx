import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { ArrowUp, ArrowUpRight } from "@/components/ui/icons";
import { externalLinks, siteNavigation } from "@/content/links";

export function SiteFooter() {
  return (
    <footer className="no-print bg-ink relative overflow-hidden px-5 pt-16 pb-8 text-white sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="text-3xl" />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
              Validation logicielle, intégration logicielle et QA Automation
              pour des systèmes complexes dans le médical et l’automobile.
            </p>
          </div>

          <nav aria-label="Pied de page">
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">
              Navigation
            </p>
            <ul className="mt-4 space-y-1">
              {[...siteNavigation, { label: "Contact", href: "/contact" }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-9 items-center text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">
              Profils
            </p>
            <ul className="mt-4 space-y-1">
              {Object.values(externalLinks).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-9 items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} HGH. Tous droits réservés.</p>
          <a
            href="#top"
            className="inline-flex min-h-9 items-center gap-2 transition-colors hover:text-white"
          >
            Haut de page <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
