import { cn } from "@/lib/utils";

/** Marque « HGH. » : le point est le carré bleu du logo d'origine. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-end leading-none font-bold tracking-[-0.07em]",
        className,
      )}
    >
      HGH
      <span
        aria-hidden="true"
        className="bg-medical-bright mb-[0.06em] ml-[0.1em] inline-block size-[0.26em]"
      />
    </span>
  );
}
