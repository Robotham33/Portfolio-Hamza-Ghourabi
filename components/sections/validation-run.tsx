"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Check, Replay } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type ValidationRunProps = {
  eyebrow: string;
  title: string;
  steps: readonly string[];
  tagsLabel: string;
  tags: readonly string[];
};

const START_DELAY = 900;
const STEP_DURATION = 720;

/**
 * Les étapes du rôle présentées comme une campagne de validation qui s'exécute :
 * chaque étape passe de « en attente » à « validé ».
 */
export function ValidationRun({
  eyebrow,
  title,
  steps,
  tagsLabel,
  tags,
}: ValidationRunProps) {
  const shouldReduceMotion = useReducedMotion();
  const [passed, setPassed] = useState(0);
  const [run, setRun] = useState(0);
  const total = steps.length;
  const complete = passed >= total;

  useEffect(() => {
    const timers = steps.map((_, index) =>
      window.setTimeout(
        () => setPassed(index + 1),
        shouldReduceMotion ? 0 : START_DELAY + (index + 1) * STEP_DURATION,
      ),
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [run, shouldReduceMotion, steps]);

  const replay = () => {
    setPassed(0);
    setRun((value) => value + 1);
  };

  return (
    <section
      aria-labelledby="validation-run-title"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5 sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.16em] text-white/50 uppercase">
          {eyebrow}
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors duration-500",
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
          {complete ? `${total}/${total} validés` : "Exécution"}
        </span>
      </div>

      <div className="px-5 pt-6 pb-5 sm:px-6">
        <h2
          id="validation-run-title"
          className="text-[1.6rem] leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-white sm:text-[1.9rem]"
        >
          {title}
        </h2>

        <ol className="mt-6 space-y-1.5">
          {steps.map((step, index) => {
            const status =
              index < passed
                ? "passed"
                : index === passed
                  ? "running"
                  : "pending";

            return (
              <li
                key={step}
                className={cn(
                  "grid grid-cols-[28px_1fr_auto] items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors duration-500",
                  status === "running"
                    ? "border-medical-bright/25 bg-medical-bright/[0.07]"
                    : "border-transparent",
                )}
              >
                <span className="font-mono text-[11px] text-white/35">
                  0{index + 1}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-500 sm:text-[15px]",
                    status === "pending" ? "text-white/45" : "text-white",
                  )}
                >
                  {step}
                </span>
                <StepStatus status={status} />
              </li>
            );
          })}
        </ol>

        <div className="mt-5 flex items-center gap-3">
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
            <span className="sr-only">Relancer la campagne</span>
          </button>
        </div>
        <p aria-live="polite" className="sr-only">
          {complete ? `Les ${total} étapes sont validées.` : ""}
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

function StepStatus({ status }: { status: "passed" | "running" | "pending" }) {
  if (status === "passed") {
    return (
      <span className="text-pass inline-flex items-center gap-1.5 font-mono text-[11px]">
        <span className="bg-pass/15 grid size-5 place-items-center rounded-full">
          <Check className="text-[12px]" />
        </span>
        <span className="hidden sm:inline">Validé</span>
      </span>
    );
  }

  if (status === "running") {
    return (
      <span className="text-medical-bright inline-flex items-center gap-1.5 font-mono text-[11px]">
        <span className="border-medical-bright/25 border-t-medical-bright size-4 animate-spin rounded-full border-2" />
        <span className="hidden sm:inline">En cours</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/30">
      <span className="grid size-5 place-items-center">
        <span className="size-1.5 rounded-full bg-white/25" />
      </span>
      <span className="hidden sm:inline">En attente</span>
    </span>
  );
}
