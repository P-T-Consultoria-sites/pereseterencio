import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/i18n/content";

export function AboutPage({ t }: { t: SiteContent }) {
  const a = t.about;
  const contactHref = `${t.paths.home}#${t.locale === "pt" ? "contato" : "contact"}`;
  return (
    <SiteLayout t={t}>
      <section
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white sm:px-6 lg:px-8 lg:py-28">
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {a.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{a.subtitle}</p>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              {a.story.title}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7 lg:text-lg">
            {a.story.paragraphs.map((p, i) => (
              <p key={i} className="text-justify">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-28" style={{ background: "var(--gradient-subtle)" }}>
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {a.mission.title}
            </p>
            <p className="mt-3 font-display text-xl font-semibold text-foreground">{a.mission.body}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {a.vision.title}
            </p>
            <p className="mt-3 font-display text-xl font-semibold text-foreground">{a.vision.body}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
            {a.values.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.items.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              {a.team.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{a.team.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.team.members.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/10" aria-hidden="true" />
                )}
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {m.name}
                </h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 lg:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {a.ctaTitle}
          </h2>
          <Button asChild size="lg" className="mt-7 bg-white text-primary hover:bg-white/90">
            <a href={contactHref}>{a.ctaButton}</a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
