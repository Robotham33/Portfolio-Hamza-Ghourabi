const technologies = [
  "Python",
  "Robot Framework",
  "Playwright",
  "Jenkins",
  "TeamCity",
  "DOORS",
  "SIL",
  "Git",
  "Tests E2E",
  "Non-régression",
  "C / C++",
  "CI/CD",
] as const;

export function TechStrip() {
  const repeated = [...technologies, ...technologies];

  return (
    <section
      aria-label="Technologies principales"
      className="overflow-hidden border-y border-[var(--border)] bg-white py-3"
    >
      <div className="tech-marquee gap-8 px-4">
        {repeated.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-3 text-xs font-semibold tracking-[0.08em] text-[#4c5966] uppercase"
          >
            <span
              className={`size-1.5 ${
                index % 3 === 0
                  ? "bg-[var(--automotive)]"
                  : "bg-[var(--medical)]"
              }`}
            />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
