type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3">
        <span
          className={`h-px w-9 ${inverse ? "bg-white/45" : "bg-[var(--accent)]"}`}
        />
        <p
          className={`tech-label text-[11px] font-bold ${
            inverse ? "text-white/65" : "text-[var(--accent)]"
          }`}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={`display-title mt-5 text-4xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl ${
          inverse ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-3xl text-base leading-7 sm:text-lg ${
            inverse ? "text-white/62" : "text-[var(--muted-foreground)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
