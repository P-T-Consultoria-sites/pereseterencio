import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/AboutPage";
import { getContent } from "@/i18n/content";

const t = getContent("en");

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About P&T — Business Consulting & Management for Small Companies" },
      { name: "description", content: "Learn about P&T Consulting: business consulting, financial management, process automation, AI and custom app development for small businesses." },
      { property: "og:title", content: "About P&T — Business Consulting & Management for Small Companies" },
      { property: "og:description", content: "Learn about P&T Consulting: business consulting, financial management, process automation, AI and custom app development for small businesses." },
      { property: "og:url", content: "/en/about" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/en/about" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/sobre" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
  component: () => <AboutPage t={t} />,
});
