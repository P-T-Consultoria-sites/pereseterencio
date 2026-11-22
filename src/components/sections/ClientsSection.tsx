import type { SiteContent } from "@/i18n/content";

export function ClientsSection({ t }: { t: SiteContent }) {
  const logos = t.clients.logos;
  // Duplicate the list so the translateX(-50% -> 0) loop is seamless.
  const loop = [...logos, ...logos];

  return (
    <section
      id="clientes"
      aria-labelledby="clients-title"
      className="border-y border-border bg-secondary/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {t.clients.eyebrow}
          </p>
          <h2
            id="clients-title"
            className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
          >
            {t.clients.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {t.clients.subtitle}
          </p>
        </div>

        <div
          className="marquee-mask group relative mt-12 overflow-hidden"
          aria-label={t.clients.title}
        >
          <ul
            className="animate-marquee-rtl flex w-max items-center gap-10 group-hover:[animation-play-state:paused] sm:gap-14"
            role="list"
          >
            {loop.map((logo, i) => (
              <li
                key={`${logo.name}-${i}`}
                aria-hidden={i >= logos.length ? "true" : undefined}
                className="flex h-16 min-w-[160px] shrink-0 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground opacity-70 transition hover:opacity-100 hover:text-foreground sm:h-20 sm:min-w-[200px]"
              >
                {logo.logo ? (
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-h-12 w-auto object-contain sm:max-h-16"
                    loading="lazy"
                  />
                ) : (
                  logo.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
