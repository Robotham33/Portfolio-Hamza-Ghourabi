import { Reveal } from "@/components/motion/reveal";
import { proofPoints } from "@/content/home";

export function ProofPoints() {
  return (
    <section
      aria-labelledby="proof-points-title"
      className="border-y border-[var(--border)] bg-[rgba(255,255,255,0.012)] px-5 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 id="proof-points-title" className="sr-only">
          Repères professionnels
        </h2>

        <div className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
          {proofPoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.06}>
              <article className="group h-full bg-[var(--background-elevated)] px-5 py-5 transition-colors duration-200 hover:bg-[#0d1420] sm:px-6 sm:py-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.16em] text-[var(--muted-foreground)] uppercase">
                      {point.label}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                      {point.detail}
                    </p>
                  </div>

                  <p className="text-2xl font-semibold tracking-[-0.045em] text-[var(--accent)] sm:text-[1.7rem]">
                    {point.value}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
