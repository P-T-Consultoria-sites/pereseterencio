import type { SiteContent } from "@/i18n/content";

export function ManifestoSection({ t }: { t: SiteContent }) {
  return (
    <section
      className="relative overflow-hidden border-b border-border py-20 lg:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
            {t.manifesto.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t.manifesto.title}
          </h2>
          <ul className="mt-8 space-y-2 font-display text-xl font-medium text-white/90 sm:text-2xl">
            {t.manifesto.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.manifesto.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
