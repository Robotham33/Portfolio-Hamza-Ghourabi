"use client";

import { motion, useReducedMotion } from "motion/react";

const traces = {
  // Tracé d'électrocardiogramme : onde P, complexe QRS, onde T.
  ecg: [
    "M0 34 H46 q6 -8 12 0 H70 l5 5 l7 -30 l7 40 l5 -15 H112 q12 -14 24 0 H178 q6 -8 12 0 H202 l5 5 l7 -30 l7 40 l5 -15 H244 q12 -14 24 0 H310 q6 -8 12 0 H334 l5 5 l7 -30 l7 40 l5 -15 H376 q12 -14 24 0 H420",
  ],
  // Bus CAN : CAN_H et CAN_L en miroir.
  can: [
    "M0 30 H34 V12 H58 V30 H76 V12 H118 V30 H136 V12 H154 V30 H190 V12 H226 V30 H244 V12 H262 V30 H298 V12 H340 V30 H358 V12 H376 V30 H420",
    "M0 38 H34 V56 H58 V38 H76 V56 H118 V38 H136 V56 H154 V38 H190 V56 H226 V38 H244 V56 H262 V38 H298 V56 H340 V38 H358 V56 H376 V38 H420",
  ],
} as const;

type TraceLineProps = {
  variant: keyof typeof traces;
  className?: string;
};

export function TraceLine({ variant, className }: TraceLineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 420 68"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {traces[variant].map((d, index) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={index === 0 ? 1 : 0.45}
          initial={shouldReduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2.2,
            delay: index * 0.15,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </svg>
  );
}
