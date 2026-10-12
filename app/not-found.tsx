import Link from "next/link";

import { ArrowRight } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <main
      id="contenu"
      className="bg-ink relative isolate flex min-h-[80vh] items-center overflow-hidden px-5 pt-32 pb-24 text-white sm:px-6 lg:px-8"
    >
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-auto-bright font-mono text-[11px] tracking-[0.18em] uppercase">
          Erreur 404
        </p>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-semibold tracking-[-0.05em]">
          Cette page n’existe pas.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
          Le lien est peut-être ancien. L’accueil et le parcours sont toujours
          là.
        </p>
        <Link
          href="/"
          className="group text-ink mt-10 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold transition hover:bg-white/90"
        >
          Revenir à l’accueil
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </main>
  );
}
