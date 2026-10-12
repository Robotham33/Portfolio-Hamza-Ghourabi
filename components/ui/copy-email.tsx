"use client";

import { useState } from "react";

import { Check, Copy } from "@/components/ui/icons";
import { email } from "@/content/links";
import { cn } from "@/lib/utils";

/** Copie l'adresse : utile quand « mailto » n'ouvre pas la bonne messagerie. */
export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = email.href;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold transition",
        copied
          ? "border-pass/40 bg-pass/10 text-pass"
          : "border-white/15 text-white/80 hover:border-white/35 hover:text-white",
        className,
      )}
    >
      {copied ? <Check /> : <Copy />}
      <span aria-live="polite">{copied ? "Adresse copiée" : "Copier"}</span>
    </button>
  );
}
