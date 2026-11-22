import { Check } from "lucide-react";
import type { SiteContent } from "@/i18n/content";

export function PositioningSection({ t }: { t: SiteContent }) {
  return (
    <section className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container mx-auto grid items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t.positioning.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.positioning.title}
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">{t.positioning.body}</p>
          <ul className="mt-8 space-y-3">
            {t.positioning.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-base text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
