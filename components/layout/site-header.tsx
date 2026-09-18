import Link from "next/link";

import { primaryNavigation } from "@/content/home";

const navLinkClass =
  "text-sm text-[var(--muted-foreground)] transition-colors duration-200 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:text-[var(--foreground)]";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        aria-label="Navigation principale"
        className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[rgba(5,7,12,0.72)] px-3 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-4"
      >
        <Link
          href="/"
          aria-label="Hamza Ghourabi — accueil"
          className="group flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-xs font-semibold tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-200 group-hover:bg-[var(--surface-strong)]">
            HG
          </span>
          <span className="hidden text-sm font-medium tracking-[-0.01em] text-[var(--foreground)] sm:inline">
            Hamza Ghourabi
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {primaryNavigation.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] focus-visible:outline-none sm:inline-flex"
          >
            Me contacter
            <span aria-hidden="true" className="ml-2 text-[var(--accent)]">
              ↗
            </span>
          </Link>

          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-strong)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              Menu
            </summary>

            <div className="absolute top-[calc(100%+0.75rem)] right-0 w-52 rounded-2xl border border-[var(--border)] bg-[rgba(8,12,20,0.96)] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:bg-[var(--surface)] focus-visible:text-[var(--foreground)] focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
