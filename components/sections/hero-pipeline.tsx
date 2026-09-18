"use client";

import { motion, useReducedMotion } from "motion/react";

import { pipelineSteps } from "@/content/home";

export function HeroPipeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.018))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:p-6"
      aria-label="Flux conceptuel d'intégration et de validation"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[rgba(102,151,255,0.16)] blur-3xl" />

      <div className="relative">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-[var(--accent)] uppercase">
              System flow
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-[var(--foreground)]">
              Integration → Validation
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.035)] px-3 py-1.5 text-[11px] text-[var(--muted-foreground)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-[var(--accent)] opacity-30" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
            </span>
            Workflow
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-6 bottom-6 left-[17px] w-px bg-[linear-gradient(to_bottom,transparent,var(--border-strong)_12%,var(--border-strong)_88%,transparent)]" />

          {!shouldReduceMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute top-4 left-[14px] z-20 size-[7px] rounded-full bg-[var(--accent-cyan)] shadow-[0_0_18px_rgba(140,224,255,0.8)]"
              animate={{
                y: [0, 250],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4.2,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.9,
              }}
            />
          )}

          <ol className="relative space-y-2.5">
            {pipelineSteps.map((step, index) => (
              <motion.li
                key={step.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 12,
                      }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : 0.28 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 3,
                      }
                }
                className="group grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-2xl border border-transparent px-1 py-2 transition-colors duration-200 hover:border-[var(--border)] hover:bg-[rgba(255,255,255,0.028)]"
              >
                <span
                  className={
                    step.emphasis
                      ? "relative z-10 grid size-9 place-items-center rounded-xl border border-[rgba(138,180,255,0.38)] bg-[rgba(102,151,255,0.16)] text-[10px] font-semibold text-[var(--accent)] shadow-[0_0_24px_rgba(102,151,255,0.12)]"
                      : "relative z-10 grid size-9 place-items-center rounded-xl border border-[var(--border)] bg-[rgba(8,12,20,0.92)] text-[10px] font-semibold text-[var(--muted-foreground)]"
                  }
                >
                  {step.index}
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-medium tracking-[-0.01em] text-[var(--foreground)]">
                    {step.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-[var(--muted-foreground)]">
                    {step.detail}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="text-sm text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--accent)]"
                >
                  →
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-5">
          <div>
            <p className="text-[10px] tracking-[0.18em] text-[var(--muted-foreground)] uppercase">
              Focus
            </p>
            <p className="mt-1.5 text-xs font-medium text-[var(--foreground)]">
              Repeatable integration
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] text-[var(--muted-foreground)] uppercase">
              Outcome
            </p>
            <p className="mt-1.5 text-xs font-medium text-[var(--foreground)]">
              Verifiable software
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
