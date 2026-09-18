import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[var(--foreground)]">Hamza Ghourabi</p>
          <p className="mt-1">Software Integration & Validation Engineer</p>
        </div>
        <nav
          aria-label="Navigation secondaire"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          <Link href="/experience" className="hover:text-[var(--foreground)]">
            Expérience
          </Link>
          <Link href="/expertise" className="hover:text-[var(--foreground)]">
            Expertise
          </Link>
          <Link href="/projects" className="hover:text-[var(--foreground)]">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-[var(--foreground)]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
