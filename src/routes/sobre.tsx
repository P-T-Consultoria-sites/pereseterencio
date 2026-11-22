import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/AboutPage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a P&T — Consultoria e Gestão para Pequenas Empresas" },
      { name: "description", content: "Conheça a P&T Consultoria: consultoria empresarial, gestão financeira empresarial, automação de processos, inteligência artificial e desenvolvimento de aplicativos para micro e pequenas empresas." },
      { property: "og:title", content: "Sobre a P&T — Consultoria e Gestão para Pequenas Empresas" },
      { property: "og:description", content: "Conheça a P&T Consultoria: consultoria empresarial, gestão financeira empresarial, automação de processos, inteligência artificial e desenvolvimento de aplicativos para micro e pequenas empresas." },
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
