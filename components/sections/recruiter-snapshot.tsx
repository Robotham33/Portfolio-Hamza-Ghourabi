import { career } from "@/content/portfolio";

const signals = [
  {
    value: career.years,
    label: "ans d’expérience",
    detail: "validation + intégration",
  },
  { value: "02", label: "domaines exigeants", detail: "Médical + automobile" },
  {
    value: "I→V",
    label: "vision bout-en-bout",
    detail: "requirements → release",
  },
  { value: "CI/CD", label: "industrialisation", detail: "Jenkins + TeamCity" },
];

export function RecruiterSnapshot() {
  return (
    <section
      className="px-5 pb-10 sm:px-6 lg:px-8"
      aria-label="Profil en un coup d’œil"
    >
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((item) => (
          <article key={item.label} className="bg-[#080d15] p-5 sm:p-6">
            <p className="text-2xl font-semibold tracking-[-0.045em] text-[var(--foreground)]">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-[var(--muted-foreground)]">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
