"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Replay } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Step = {
  label: string;
  /** Outil ou livrable qui prouve l'étape, révélé quand elle aboutit. */
  proof: string;
};

type ValidationRunProps = {
  eyebrow: string;
  title: string;
  steps: readonly Step[];
  outcome: string;
  tagsLabel: string;
  tags: readonly string[];
};

const START_DELAY = 500;
const STEP_DURATION = 650;

/**
 * Les étapes du rôle déroulées comme un pipeline : chaque étape s'exécute,
 * puis affiche l'outil réellement utilisé pour la mener.
 */
export function ValidationRun({
  eyebrow,
  title,
  steps,
  outcome,
  tagsLabel,
  tags,
}: ValidationRunProps) {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLElement>(null);
  // Sur mobile le panneau est sous la ligne de flottaison : on attend qu'il soit visible.
  const inView = useInView(panelRef, { once: true, amount: 0.35 });
  const [passed, setPassed] = useState(0);
  const [run, setRun] = useState(0);
  const total = steps.length;
  const complete = passed >= total;

  useEffect(() => {
    if (!inView) return;

    const timers = steps.map((_, index) =>
      window.setTimeout(
        () => setPassed(index + 1),
        shouldReduceMotion ? 0 : START_DELAY + (index + 1) * STEP_DURATION,
      ),
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [inView, run, shouldReduceMotion, steps]);

  const replay = () => {
    setPassed(0);
    setRun((value) => value + 1);
  };

  return (
    <section
      ref={panelRef}
      aria-labelledby="validation-run-title"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-white/10 px-5 py-3.5 sm:px-6">
        <p className="font-mono text-[10px] tracking-[0.12em] text-white/50 uppercase sm:text-[11px] sm:tracking-[0.16em]">
          {eyebrow}
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] whitespace-nowrap transition-colors duration-500",
            complete
              ? "border-pass/30 bg-pass/10 text-pass"
              : "border-medical-bright/30 bg-medical-bright/10 text-medical-bright",
          )}
        >
          <span className="relative flex size-1.5">
            {!complete ? (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-60" />
            ) : null}
            <span className="relative inline-flex size-1.5 rounded-full bg-current" />
          </span>
          {complete ? outcome : `Étape ${Math.min(passed + 1, total)}/${total}`}
        </span>
      </div>

      <div className="px-5 pt-6 pb-5 sm:px-6">
        <h2
          id="validation-run-title"
          className="text-[1.6rem] leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-white sm:text-[1.9rem]"
        >
          {title}
        </h2>

        <ol className="relative mt-6">
          {/* Rail du pipeline : il se remplit au fil des étapes. */}
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-[13px] w-px bg-white/10"
          />
          <span
            aria-hidden="true"
            className="bg-pass/70 absolute top-5 left-[13px] w-px transition-[height] duration-700 ease-out"
            style={{
              height: `calc((100% - 2.5rem) * ${Math.max(passed - 1, 0) / (total - 1)})`,
            }}
          />

          {steps.map((step, index) => {
            const status =
              index < passed
                ? "passed"
                : index === passed
                  ? "running"
                  : "pending";

            return (
              <li
                key={step.label}
                className="relative grid grid-cols-[28px_auto_minmax(12px,1fr)_auto] items-center gap-3 py-2"
              >
                <span
                  className={cn(
                    "bg-ink-2 grid size-7 place-items-center rounded-md border font-mono text-[11px] transition-colors duration-500",
                    status === "passed" && "border-pass/50 text-pass",
                    status === "running" &&
                      "border-medical-bright text-medical-bright shadow-[0_0_0_4px_rgba(90,166,255,0.12)]",
                    status === "pending" && "border-white/15 text-white/35",
                  )}
                >
                  0{index + 1}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-500 sm:text-[15px]",
                    status === "pending" ? "text-white/45" : "text-white",
                  )}
                >
                  {step.label}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px self-center border-b border-dotted border-white/15"
                />
                <StepOutput status={status} proof={step.proof} />
              </li>
            );
          })}
        </ol>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className={cn(
                "ease-out-expo h-full rounded-full transition-[width,background-color] duration-700",
                complete ? "bg-pass" : "bg-medical-bright",
              )}
              style={{ width: `${(passed / total) * 100}%` }}
            />
          </div>
          <span className="w-12 text-right font-mono text-[11px] text-white/50 tabular-nums">
            {Math.round((passed / total) * 100)} %
          </span>
          <button
            type="button"
            onClick={replay}
            disabled={!complete}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-white/25 hover:text-white disabled:pointer-events-none disabled:opacity-0"
          >
            <Replay className="text-[15px]" />
            <span className="sr-only">Relancer le déroulé</span>
          </button>
        </div>
        <p aria-live="polite" className="sr-only">
          {complete ? `Les ${total} étapes sont terminées : ${outcome}.` : ""}
        </p>
      </div>

      <div className="border-t border-white/10 px-5 py-4 sm:px-6">
        <p className="font-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
          {tagsLabel}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StepOutput({
  status,
  proof,
}: {
  status: "passed" | "running" | "pending";
  proof: string;
}) {
  if (status === "passed") {
    return (
      <span className="animate-[proof-in_420ms_ease-out] rounded-md border border-white/12 bg-white/[0.05] px-2 py-0.5 font-mono text-[11px] whitespace-nowrap text-white/85">
        {proof}
      </span>
    );
  }

  if (status === "running") {
    return (
      <span className="relative block h-[3px] w-14 overflow-hidden rounded-full bg-white/10">
        <span className="scan-bar bg-medical-bright absolute inset-y-0 left-0 w-1/2 rounded-full" />
        <span className="sr-only">en cours</span>
      </span>
    );
  }

  return (
    <span className="font-mono text-[11px] text-white/20">
      <span aria-hidden="true">· · ·</span>
      <span className="sr-only">à venir</span>
    </span>
  );
}
