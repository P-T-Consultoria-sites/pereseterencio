import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { getContent } from "@/i18n/content";

const t = getContent("en");

export const Route = createFileRoute("/en/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Management, Automation & AI for Business | P&T Consulting" },
      { name: "description", content: "Articles on business consulting, process automation, AI for small businesses, financial management and digital solutions." },
      { property: "og:title", content: "Blog — Management, Automation & AI for Business | P&T Consulting" },
      { property: "og:description", content: "Articles on business consulting, process automation, AI for small businesses, financial management and digital solutions." },
      { property: "og:url", content: "/en/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/en/blog" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/blog" },
      { rel: "alternate", hrefLang: "en", href: "/en/blog" },
    ],
  }),
  component: () => <BlogIndexPage t={t} />,
});
