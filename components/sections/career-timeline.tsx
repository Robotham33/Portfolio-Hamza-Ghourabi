import { education, experiences } from "@/content/portfolio";
import { parsePeriod } from "@/lib/timeline";
import { cn } from "@/lib/utils";

const RANGE_START = 2016;

/** Frise du parcours : chaque expérience est placée à l'échelle sur l'axe des années. */
export function CareerTimeline({ inverse = false }: { inverse?: boolean }) {
  const now = new Date();
  const rangeEnd = now.getFullYear() + 1;
  const span = rangeEnd - RANGE_START;
  const position = (year: number) =>
    `${(((year - RANGE_START) / span) * 100).toFixed(2)}%`;
  const ticks = Array.from(
    { length: Math.floor(span / 2) + 1 },
    (_, index) => RANGE_START + index * 2,
  );

  const rows = experiences.map((item) => ({
    ...item,
    range: parsePeriod(item.period, now),
    isMedical: item.domain.includes("Médical"),
  }));

  return (
    <figure
      className={cn(
        "rounded-3xl border p-5 sm:p-7",
        inverse ? "border-white/10 bg-white/[0.03]" : "border-line bg-paper",
      )}
    >
      <figcaption className="flex flex-wrap items-center justify-between gap-3">
        <span
          className={cn(
            "font-mono text-[11px] tracking-[0.16em] uppercase",
            inverse ? "text-white/45" : "text-muted",
          )}
        >
          Frise du parcours · {RANGE_START} → aujourd’hui
        </span>
        <span className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="bg-medical size-2 rounded-full" /> Médical
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-auto" /> Automobile
          </span>
        </span>
      </figcaption>

      <div className="mt-7 grid grid-cols-[92px_1fr] gap-x-3 sm:grid-cols-[132px_1fr] sm:gap-x-5">
        {rows.map((row) => (
          <div key={row.company} className="contents">
            <p
              className={cn(
                "truncate py-2.5 text-xs font-semibold sm:text-sm",
                inverse ? "text-white/80" : "text-ink",
              )}
            >
              {row.company}
            </p>
            <div className="relative py-2.5">
              <div
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 top-1/2 h-px",
                  inverse ? "bg-white/10" : "bg-line",
                )}
              />
              <div
                className={cn(
                  "relative h-3 min-w-2 rounded-full",
                  row.isMedical ? "bg-medical" : "bg-auto",
                )}
                style={{
                  marginLeft: position(row.range.start),
                  width: `calc(${position(row.range.end)} - ${position(row.range.start)})`,
                }}
                title={`${row.company} · ${row.period}`}
              >
                {row.range.ongoing ? (
                  <span className="ring-auto/25 absolute top-1/2 -right-1 size-2.5 -translate-y-1/2 animate-pulse rounded-full bg-auto ring-4" />
                ) : null}
              </div>
              <span className="sr-only">{row.period}</span>
            </div>
          </div>
        ))}

        <p
          className={cn(
            "pt-3 font-mono text-[10px] tracking-[0.14em] uppercase",
            inverse ? "text-white/35" : "text-muted/80",
          )}
        >
          Formation
        </p>
        <div className="relative h-8 pt-3">
          {education.map((item) => (
            <span
              key={item.degree}
              className={cn(
                "absolute flex -translate-x-1/2 items-center gap-1.5 font-mono text-[10px] whitespace-nowrap",
                inverse ? "text-white/55" : "text-muted",
              )}
              style={{ left: position(Number(item.year) + 0.5) }}
              title={`${item.degree} · ${item.school}`}
            >
              <span className="size-2 rotate-45 border border-current" />
              {item.degree.split(" ")[0]} {item.year}
            </span>
          ))}
        </div>

        <span aria-hidden="true" />
        <div
          aria-hidden="true"
          className={cn(
            "relative mt-3 h-5 border-t",
            inverse ? "border-white/15" : "border-line-strong",
          )}
        >
          {ticks.map((year) => (
            <span
              key={year}
              className={cn(
                "absolute top-1.5 -translate-x-1/2 font-mono text-[10px] tabular-nums",
                inverse ? "text-white/40" : "text-muted",
                year === RANGE_START && "translate-x-0",
              )}
              style={{ left: position(year) }}
            >
              {year}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
