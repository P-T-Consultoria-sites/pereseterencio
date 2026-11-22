import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { getContent } from "@/i18n/content";

const t = getContent("en");

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Automation & AI for Small Businesses | P&T Consulting" },
      { name: "description", content: "Hands-on business consulting, financial management, process automation and AI for small businesses. Talk to P&T." },
      { property: "og:title", content: "Automation & AI for Small Businesses | P&T Consulting" },
      { property: "og:description", content: "Hands-on business consulting, financial management, process automation and AI for small businesses. Talk to P&T." },
      { property: "og:url", content: "/en" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: () => <HomePage t={t} />,
});
