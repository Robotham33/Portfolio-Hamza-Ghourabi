"use client";

import type { PointerEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Carte dont le halo suit le pointeur (souris uniquement). */
export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <div onPointerMove={onPointerMove} className={cn("spotlight", className)}>
      {children}
    </div>
  );
}
