import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P&T Consultoria — Consultoria Empresarial, Automação e IA para Pequenas Empresas" },
      { name: "description", content: "Consultoria empresarial com implementação prática. Gestão financeira empresarial, automação de processos, inteligência artificial para pequenas empresas e desenvolvimento de soluções digitais. Transforme sua operação." },
      { property: "og:title", content: "P&T Consultoria — Consultoria Empresarial, Automação e IA para Pequenas Empresas" },
      { property: "og:description", content: "Consultoria empresarial com implementação prática. Gestão financeira empresarial, automação de processos, inteligência artificial para pequenas empresas e desenvolvimento de soluções digitais." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: () => <HomePage t={t} />,
});
