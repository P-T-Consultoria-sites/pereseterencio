import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/PrivacyPage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");
const DESC =
  "Como o site da P&T trata dados pessoais: sem cookies, e o contato acontece pelo WhatsApp ou por e-mail.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade | P&T Consultoria" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Política de privacidade | P&T Consultoria" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/privacidade" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/privacidade" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/privacidade" },
      { rel: "alternate", hrefLang: "en", href: "/en/privacy" },
    ],
  }),
  component: () => <PrivacyPage t={t} />,
});
