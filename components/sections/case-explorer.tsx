"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, useRef, useState, type KeyboardEvent } from "react";

import { caseStudies } from "@/content/portfolio";
import { cn, fr } from "@/lib/utils";

const accents = ["bg-medical", "bg-auto", "bg-medical-bright"] as const;

export function CaseExplorer() {
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const current = caseStudies[selected];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = [
      "ArrowDown",
      "ArrowRight",
      "ArrowUp",
      "ArrowLeft",
      "Home",
      "End",
    ];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const last = caseStudies.length - 1;
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : event.key === "ArrowDown" || event.key === "ArrowRight"
            ? selected === last
              ? 0
              : selected + 1
            : selected === 0
              ? last
              : selected - 1;

    setSelected(next);
    tabsRef.current[next]?.focus();
  };

  const steps = [
    { label: "Problème", text: current.problem },
    { label: "Contribution", text: current.contribution },
    { label: "Valeur", text: current.result },
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
      <div
        role="tablist"
        aria-label="Cas concrets"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3"
      >
        {caseStudies.map((item, index) => {
          const active = index === selected;

          return (
            <button
              key={item.title}
              ref={(node) => {
                tabsRef.current[index] = node;
              }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`${baseId}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => setSelected(index)}
              className={cn(
                "group relative min-h-14 overflow-hidden rounded-2xl border p-3 text-left transition duration-300 sm:p-4 lg:p-6",
                active
                  ? "border-ink bg-ink text-white shadow-[0_24px_50px_-24px_rgba(7,11,16,0.6)]"
                  : "border-line bg-paper text-ink hover:border-line-strong",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-0 left-0 h-full w-1 transition-opacity",
                  accents[index],
                  active ? "opacity-100" : "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block font-mono text-[11px] tracking-[0.14em] uppercase",
                  active ? "text-white/50" : "text-muted",
                )}
              >
                Cas 0{index + 1}
              </span>
              <span
                className={cn(
                  "mt-1 block text-[11px] font-medium sm:text-xs lg:mt-3",
                  active ? "text-medical-bright" : "text-medical",
                )}
              >
                {item.eyebrow}
              </span>
              <span className="mt-2 hidden text-lg leading-snug font-semibold tracking-[-0.02em] lg:block">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${selected}`}
        className="border-line bg-paper relative overflow-hidden rounded-3xl border p-6 sm:p-9"
      >
        <div aria-hidden="true" className="blueprint-light absolute inset-0" />
        <motion.div
          key={selected}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="text-medical font-mono text-[11px] tracking-[0.14em] uppercase">
            {current.eyebrow}
          </p>
          <h3 className="mt-3 max-w-2xl text-3xl leading-[1.08] font-semibold tracking-[-0.04em] text-balance sm:text-[2.4rem]">
            {current.title}
          </h3>

          <ol className="relative mt-9 space-y-6">
            <span
              aria-hidden="true"
              className="from-medical/40 via-line-strong to-pass absolute top-3 bottom-3 left-[15px] w-px bg-gradient-to-b"
            />
            {steps.map((step, index) => (
              <li
                key={step.label}
                className="relative grid grid-cols-[32px_1fr] gap-4"
              >
                <span
                  className={cn(
                    "relative z-10 grid size-8 place-items-center rounded-full border font-mono text-[11px]",
                    index === 2
                      ? "border-[#15a46c]/30 bg-[#e3f8ee] text-[#0f7a50]"
                      : "border-line-strong bg-paper text-muted",
                  )}
                >
                  0{index + 1}
                </span>
                <div>
                  <p className="text-muted font-mono text-[11px] tracking-[0.14em] uppercase">
                    {step.label}
                  </p>
                  <p className="mt-1.5 text-[15px] leading-7 text-pretty text-[#2c3844]">
                    {fr(step.text)}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="border-line mt-8 flex flex-wrap gap-1.5 border-t pt-6">
            {current.stack.map((tag) => (
              <li
                key={tag}
                className="border-line bg-canvas rounded-md border px-2.5 py-1 font-mono text-[11px] text-[#4a5763]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
