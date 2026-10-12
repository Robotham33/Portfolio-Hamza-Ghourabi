import type { ReactNode } from "react";

import { cn, fr } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="bg-ink relative isolate overflow-hidden text-white">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-56 right-[-10%] -z-10 size-[680px] rounded-full bg-[radial-gradient(circle,rgba(23,105,194,0.38),transparent_62%)]"
      />
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-10 px-5 pt-32 pb-16 sm:px-6 sm:pt-40 lg:px-8 lg:pb-24",
          aside ? "lg:grid-cols-[1fr_340px] lg:items-end" : "",
        )}
      >
        <div>
          <p className="text-medical-bright flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
            <span
              aria-hidden="true"
              className="bg-medical-bright/60 h-px w-8"
            />
            {eyebrow}
          </p>
          <h1 className="mt-7 max-w-5xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-balance">
            {fr(title)}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-pretty text-white/65">
            {fr(description)}
          </p>
        </div>
        {aside}
      </div>
    </section>
  );
}
