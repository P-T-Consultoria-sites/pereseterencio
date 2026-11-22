import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/PrivacyPage";
import { getContent } from "@/i18n/content";

const t = getContent("en");
const DESC =
  "How the P&T website handles personal data: no tracking cookies, and contact happens through WhatsApp or email.";

export const Route = createFileRoute("/en/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy | P&T Consulting" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Privacy policy | P&T Consulting" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/en/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/en/privacy" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/privacidade" },
      { rel: "alternate", hrefLang: "en", href: "/en/privacy" },
    ],
  }),
  component: () => <PrivacyPage t={t} />,
});
