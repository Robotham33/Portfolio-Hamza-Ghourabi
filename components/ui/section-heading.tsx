import { cn, fr } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  index?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  index,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <p
        className={cn(
          "flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase",
          inverse ? "text-white/55" : "text-medical",
        )}
      >
        {index ? (
          <span className={inverse ? "text-white/30" : "text-muted/70"}>
            {index}
          </span>
        ) : null}
        <span
          aria-hidden="true"
          className={cn("h-px w-8", inverse ? "bg-white/30" : "bg-medical/50")}
        />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance",
          inverse ? "text-white" : "text-ink",
        )}
      >
        {fr(title)}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-3xl text-base leading-7 text-pretty sm:text-lg sm:leading-8",
            inverse ? "text-white/60" : "text-muted",
          )}
        >
          {fr(description)}
        </p>
      ) : null}
    </div>
  );
}
