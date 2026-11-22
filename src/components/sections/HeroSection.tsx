import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeuralNetworkBg } from "@/components/sections/NeuralNetworkBg";
import type { SiteContent } from "@/i18n/content";

export function HeroSection({ t }: { t: SiteContent }) {
  const contactAnchor = t.locale === "pt" ? "contato" : "contact";
  const solutionsAnchor = t.locale === "pt" ? "solucoes" : "solutions";
  return (
    <section className="relative overflow-hidden isolate">
      {/* Base gradient */}
      <div
        className="absolute inset-0 -z-30"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div
          className="animate-orb-a absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, oklch(0.75 0.18 270 / 0.55), transparent 70%)" }}
        />
        <div
          className="animate-orb-b absolute right-[-10%] top-[20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, oklch(0.5 0.22 290 / 0.55), transparent 70%)" }}
        />
        <div
          className="animate-orb-c absolute left-[30%] bottom-[-20%] h-[460px] w-[460px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, oklch(0.6 0.2 250 / 0.5), transparent 70%)" }}
        />
      </div>

      {/* Drifting grid overlay */}
      <div
        className="animate-grid-drift absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Animated neural network (AI motif) */}
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{ maskImage: "radial-gradient(ellipse at center, black 55%, transparent 90%)" }}
        aria-hidden="true"
      >
        <NeuralNetworkBg />
      </div>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="animate-hero-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            {t.hero.eyebrow}
          </span>
          <h1
            className="animate-hero-rise mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            {t.hero.title}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.95 0.05 260), oklch(0.85 0.12 270))",
              }}
            >
              {t.hero.titleHighlight}
            </span>
            .
          </h1>
          <p
            className="animate-hero-rise mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="animate-hero-rise mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-transform hover:scale-105"
            >
              <a href={`${t.paths.home}#${contactAnchor}`}>
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <a href={`${t.paths.home}#${solutionsAnchor}`}>{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {t.hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="animate-hero-rise rounded-2xl border border-white/15 bg-white/5 p-5 text-left backdrop-blur-sm transition-colors hover:bg-white/10"
                style={{ animationDelay: `${480 + i * 120}ms` }}
              >
                <dt className="font-display text-3xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-white/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
