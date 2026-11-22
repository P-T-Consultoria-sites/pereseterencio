import type { SiteContent } from "@/i18n/content";

export function ProcessSection({ t }: { t: SiteContent }) {
  const anchor = t.locale === "pt" ? "processo" : "process";
  return (
    <section id={anchor} className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.process.subtitle}</p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-display text-xs font-bold uppercase tracking-wider text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
