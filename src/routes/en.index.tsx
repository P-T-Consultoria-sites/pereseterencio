import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { getContent } from "@/i18n/content";

const t = getContent("en");

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "P&T Consulting — Business Consulting, Automation & AI for Small Businesses" },
      { name: "description", content: "Hands-on business consulting, financial management, process automation, AI for small businesses and custom digital solutions. Transform your operation." },
      { property: "og:title", content: "P&T Consulting — Business Consulting, Automation & AI for Small Businesses" },
      { property: "og:description", content: "Hands-on business consulting, financial management, process automation, AI for small businesses and custom digital solutions." },
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
