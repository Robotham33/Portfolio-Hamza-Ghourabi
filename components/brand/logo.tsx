import { cn } from "@/lib/utils";

/** Marque « HGH. » : le point est le carré bleu du logo d'origine, posé sur la ligne de base. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline leading-none font-bold tracking-[-0.07em]",
        className,
      )}
    >
      HGH
      <span
        aria-hidden="true"
        className="bg-medical-bright ml-[0.07em] inline-block size-[0.19em]"
      />
    </span>
  );
}
