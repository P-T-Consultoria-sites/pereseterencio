import type { SiteContent } from "@/i18n/content";

export function AudienceSection({ t }: { t: SiteContent }) {
  return (
    <section className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t.audience.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.audience.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.audience.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.audience.points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
