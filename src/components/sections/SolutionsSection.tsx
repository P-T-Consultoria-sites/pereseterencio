import { BarChart3, Briefcase, Code2, Sparkles, Wallet, Workflow } from "lucide-react";
import type { SiteContent, SolutionItem } from "@/i18n/content";

const iconMap: Record<SolutionItem["icon"], React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  wallet: Wallet,
  workflow: Workflow,
  sparkles: Sparkles,
  code: Code2,
  barChart: BarChart3,
};

export function SolutionsSection({ t }: { t: SiteContent }) {
  const anchor = t.locale === "pt" ? "solucoes" : "solutions";
  return (
    <section
      id={anchor}
      className="border-b border-border py-20 lg:py-28"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t.solutions.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.solutions.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.solutions.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
