import Link from "next/link";

const navigation = [
  { label: "Expérience", href: "/experience" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projets", href: "/projects" },
] as const;

const navLinkClass =
  "text-sm text-[var(--muted-foreground)] transition-colors duration-200 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:text-[var(--foreground)]";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Navigation principale"
        className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[rgba(5,7,12,0.86)] px-3 py-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-4"
      >
        <Link
          href="/"
          aria-label="Hamza Ghourabi — accueil"
          className="group flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-none"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-xs font-semibold">
            HG
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-[-0.01em]">
              Hamza Ghourabi
            </span>
            <span className="block text-[10px] text-[var(--muted-foreground)]">
              Integration & Validation
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="primary-action hidden rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Me contacter
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </Link>
          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute top-[calc(100%+0.75rem)] right-0 w-56 rounded-2xl border border-[var(--border)] bg-[#080d15] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="primary-action mt-1 block rounded-xl px-3 py-2.5 text-sm font-semibold"
              >
                Me contacter
              </Link>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
