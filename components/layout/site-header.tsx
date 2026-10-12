"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { openCommandPalette } from "@/components/layout/command-palette";
import {
  ArrowRight,
  ArrowUpRight,
  Close,
  Menu,
  Search,
} from "@/components/ui/icons";
import { externalLinks, siteNavigation } from "@/content/links";
import { useIsApplePlatform } from "@/lib/use-platform";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isApple = useIsApplePlatform();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Navigation principale"
        className="bg-ink/80 relative mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 py-1.5 pr-1.5 pl-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:pl-5"
      >
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Accueil — Hamza Ghourabi"
          className="flex min-h-11 items-center gap-3"
        >
          <Logo className="text-[1.5rem]" />
          <span className="hidden border-l border-white/15 pl-3 text-[13px] font-medium text-white/70 sm:block">
            Hamza Ghourabi
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {siteNavigation.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex min-h-10 items-center rounded-lg px-3.5 text-sm font-medium transition-colors",
                  active ? "text-white" : "text-white/60 hover:text-white",
                )}
              >
                {item.label}
                {active ? (
                  <span className="bg-medical-bright absolute inset-x-3.5 -bottom-px h-px" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={openCommandPalette}
            className="hidden min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-white/55 transition-colors hover:border-white/20 hover:text-white md:inline-flex"
          >
            <Search className="text-sm" />
            <span className="sr-only">Ouvrir la navigation rapide</span>
            <kbd className="font-mono text-[11px] tracking-wide">
              {isApple ? "⌘ K" : "Ctrl K"}
            </kbd>
          </button>
          <Link
            href="/contact"
            className="text-ink hidden min-h-10 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold transition hover:bg-white/90 sm:inline-flex"
          >
            Me contacter <ArrowRight className="text-[15px]" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 text-xl text-white md:hidden"
          >
            {menuOpen ? <Close /> : <Menu />}
            <span className="sr-only">
              {menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
          </button>
        </div>

        <span
          aria-hidden="true"
          className="scroll-progress from-medical-bright via-medical-bright to-auto absolute inset-x-0 bottom-0 h-px bg-gradient-to-r"
        />
      </nav>

      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="bg-ink/95 mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 p-2 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
      >
        {siteNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            className="flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-medium text-white/85 aria-[current=page]:bg-white/[0.06] aria-[current=page]:text-white"
          >
            {item.label}
            <ArrowRight className="text-white/35" />
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={closeMenu}
          className="text-ink mt-1 flex min-h-12 items-center justify-between rounded-xl bg-white px-4 text-base font-semibold"
        >
          Me contacter <ArrowRight />
        </Link>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {Object.values(externalLinks).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 text-sm text-white/70"
            >
              {link.label} <ArrowUpRight className="text-white/40" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
