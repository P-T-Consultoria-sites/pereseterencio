import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/AboutPage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a P&T | Consultoria e gestão para pequenas empresas" },
      { name: "description", content: "Conheça a P&T: consultoria empresarial, gestão financeira, automação e IA para micro e pequenas empresas, com implementação prática." },
      { property: "og:title", content: "Sobre a P&T | Consultoria e gestão para pequenas empresas" },
      { property: "og:description", content: "Conheça a P&T: consultoria empresarial, gestão financeira, automação e IA para micro e pequenas empresas, com implementação prática." },
      { property: "og:url", content: "/sobre" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/sobre" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/sobre" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
  component: () => <AboutPage t={t} />,
});
