import Link from "next/link";

const navigation = [
  { label: "Parcours", href: "/experience" },
  { label: "Expertise", href: "/expertise" },
  { label: "Cas concrets", href: "/projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Navigation principale"
        className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between border border-[var(--border)] bg-[rgba(248,250,251,0.9)] px-3 py-2.5 shadow-[0_10px_30px_rgba(10,16,23,0.08)] backdrop-blur-xl sm:px-4"
      >
        <Link
          href="/"
          aria-label="Accueil — HGH."
          data-brand="hgh"
          data-logo-version="1"
          className="flex items-center"
        >
          <img
            src="/hgh-logo.png"
            alt="HGH."
            className="block h-auto w-[92px] sm:w-[108px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#34404c] transition hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="primary-action hidden px-4 py-2 text-sm font-semibold transition sm:inline-flex"
          >
            Me contacter <span className="ml-2">↗</span>
          </Link>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none border border-[var(--border)] bg-white px-3 py-2 text-sm font-semibold [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute top-[calc(100%+0.6rem)] right-0 w-56 border border-[var(--border)] bg-white p-2 shadow-xl">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 block bg-[var(--ink)] px-3 py-2.5 text-sm font-semibold text-white"
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
