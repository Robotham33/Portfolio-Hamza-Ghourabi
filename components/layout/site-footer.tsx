import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[-0.03em]">Hamza Ghourabi</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
            Validation logicielle, intégration logicielle et QA Automation pour des systèmes complexes dans le médical et l’automobile.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
          <Link href="/experience" className="hover:text-white">Parcours</Link>
          <Link href="/expertise" className="hover:text-white">Expertise</Link>
          <Link href="/projects" className="hover:text-white">Projets</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
