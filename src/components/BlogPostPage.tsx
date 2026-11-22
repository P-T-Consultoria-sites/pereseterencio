
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/content/blog";
import type { SiteContent } from "@/i18n/content";

/** Render simple markdown: blank-line paragraphs, "## " headings. */
function renderBody(body: string) {
  const blocks = body.split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 font-display text-2xl font-semibold text-foreground">
          {trimmed.slice(3)}
        </h2>
      );
    }
    return (
      <p key={i} className="mt-5 text-base leading-relaxed text-foreground/90">
        {trimmed}
      </p>
    );
  });
}

export function BlogPostPage({ t, post }: { t: SiteContent; post: BlogPost }) {
  const dateFormatter = new Intl.DateTimeFormat(t.htmlLang, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const contactHref = `${t.paths.home}#${t.locale === "pt" ? "contato" : "contact"}`;
  return (
    <SiteLayout t={t}>
      <article className="bg-background">
        <header
          className="border-b border-border"
          style={{ background: "var(--gradient-subtle)" }}
        >
          <div className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <a
              href={t.paths.blog}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t.blog.backToBlog}
            </a>
            <Badge variant="secondary" className="mt-6">
              {post.category}
            </Badge>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{post.summary}</p>
            <p className="mt-6 text-xs text-muted-foreground">
              {t.blog.publishedOn} {dateFormatter.format(new Date(post.date))} · {post.readingTime}
            </p>
          </div>
        </header>

        <figure className="container mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1536}
            height={896}
            className="aspect-[16/9] w-full rounded-2xl object-cover"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
        </figure>

        <div className="container mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {renderBody(post.body)}
        </div>

        <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto max-w-2xl px-4 text-center text-white sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {t.about.ctaTitle}
            </h2>
            <Button asChild size="lg" className="mt-6 bg-white text-primary hover:bg-white/90">
              <a href={contactHref}>{t.about.ctaButton}</a>
            </Button>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
