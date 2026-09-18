const signals = [
  { value: "7+", label: "ans", detail: "validation & intégration" },
  { value: "02", label: "domaines critiques", detail: "médical + automobile" },
  { value: "I→V", label: "continuum", detail: "requirements → release" },
  { value: "CI/CD", label: "automation", detail: "Jenkins + TeamCity" },
] as const;

export function RecruiterSnapshot() {
  return (
    <section
      className="px-5 sm:px-6 lg:px-8"
      aria-label="Profil en un coup d’œil"
    >
      <div className="mx-auto grid max-w-7xl bg-[var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((item, index) => (
          <article
            key={item.label}
            className={`p-6 text-white sm:p-7 ${
              index > 0
                ? "border-t border-white/10 sm:border-t-0 sm:border-l"
                : ""
            }`}
          >
            <p className="display-title text-4xl font-semibold tracking-[-0.06em]">
              {item.value}
            </p>
            <p className="mt-3 text-sm font-semibold">{item.label}</p>
            <p className="mt-1 text-xs text-white/45">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
