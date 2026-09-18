const technologies = [
  "Python",
  "C / C++",
  "Jenkins",
  "TeamCity",
  "DOORS",
  "SIL",
  "Git",
  "ROS",
  "CAN",
  "OBD-II",
  "STM32",
  "Test Automation",
] as const;

export function TechStrip() {
  const repeated = [...technologies, ...technologies];

  return (
    <section
      aria-label="Technologies principales"
      className="overflow-hidden border-y border-[var(--border)] bg-[rgba(255,255,255,0.012)] py-3"
    >
      <div className="tech-marquee gap-3 px-3">
        {repeated.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[#080d15] px-3 py-2 text-xs text-[#b8c6d9]"
          >
            <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-80" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
