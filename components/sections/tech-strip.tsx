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
  return (
    <section
      aria-label="Technologies principales"
      className="marquee-mask border-line bg-paper overflow-hidden border-y py-4"
    >
      <div className="tech-marquee">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className={`flex shrink-0 items-center gap-10 pr-10 ${
              copy === 1 ? "marquee-duplicate" : ""
            }`}
          >
            {technologies.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-3 font-mono text-xs tracking-[0.1em] whitespace-nowrap text-[#46525e] uppercase"
              >
                <span
                  className={`size-1.5 rotate-45 ${
                    index % 3 === 0 ? "bg-auto" : "bg-medical"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
