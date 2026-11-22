import { useRouterState } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import type { SiteContent } from "@/i18n/content";

function getAlternatePath(
  currentPath: string,
  currentLocale: "pt" | "en",
  blogAltSlug: string | null,
): string {
  if (currentLocale === "pt") {
    if (currentPath === "/") return "/en";
    if (currentPath === "/sobre") return "/en/about";
    if (currentPath === "/blog") return "/en/blog";
    if (currentPath.startsWith("/blog/")) {
      return blogAltSlug ? `/en/blog/${blogAltSlug}` : "/en/blog";
    }
    return "/en";
  }
  if (currentPath === "/en") return "/";
  if (currentPath === "/en/about") return "/sobre";
  if (currentPath === "/en/blog") return "/blog";
  if (currentPath.startsWith("/en/blog/")) {
    return blogAltSlug ? `/blog/${blogAltSlug}` : "/blog";
  }
  return "/";
}

export function LanguageToggle({ t }: { t: SiteContent }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const blogAltSlug = useRouterState({
    select: (s) => {
      for (const m of s.matches) {
        const data = m.loaderData as { altSlug?: string | null } | undefined;
        if (data && "altSlug" in data) return data.altSlug ?? null;
      }
      return null;
    },
  });

  const switchTo: "pt" | "en" = t.locale === "pt" ? "en" : "pt";
  const label = switchTo === "en" ? "EN" : "PT";
  const href = getAlternatePath(path, t.locale, blogAltSlug);

  return (
    <a
      href={href}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
      aria-label={`Switch language to ${label}`}
    >
      <Globe className="h-3.5 w-3.5" />
      {label}
    </a>
  );
}
