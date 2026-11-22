import { useMemo, useState } from "react";

import { Search, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getPosts, getCategories } from "@/content/blog";
import type { SiteContent } from "@/i18n/content";

export function BlogIndexPage({ t }: { t: SiteContent }) {
  const allPosts = useMemo(
    () => [...getPosts(t.locale)].sort((a, b) => b.date.localeCompare(a.date)),
    [t.locale],
  );
  const categories = useMemo(() => getCategories(t.locale), [t.locale]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = allPosts.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase());
    const matchesCat = !category || p.category === category;
    return matchesQuery && matchesCat;
  });

  const dateFormatter = new Intl.DateTimeFormat(t.htmlLang, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <SiteLayout t={t}>
      <section className="border-b border-border" style={{ background: "var(--gradient-subtle)" }}>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.blog.title}
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.blog.subtitle}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-primary/80">{t.blog.editorialNote}</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.blog.searchPlaceholder}
                aria-label={t.blog.searchPlaceholder}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory(null)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  category === null
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.blog.allCategories}
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">{t.blog.empty}</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <a href={t.paths.blogPost(post.slug)} className="block overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      width={1536}
                      height={896}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{dateFormatter.format(new Date(post.date))}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <a
                    href={t.paths.blogPost(post.slug)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
