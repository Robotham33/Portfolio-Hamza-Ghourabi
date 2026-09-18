export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="mx-auto w-full max-w-5xl py-24">
        <p className="mb-5 text-sm font-medium tracking-[0.28em] text-[var(--accent)] uppercase">
          Portfolio — foundation build
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-7xl">
          Hamza Ghourabi
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
          Software Integration & Validation Engineer — embedded systems,
          software integration, test automation and CI/CD.
        </p>

        <div className="mt-10 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted-foreground)]">
          Premium experience coming next.
        </div>
      </section>
    </main>
  );
}
