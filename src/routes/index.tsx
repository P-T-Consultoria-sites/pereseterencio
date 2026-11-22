import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consultoria, automação e IA para pequenas empresas | P&T" },
      { name: "description", content: "Consultoria empresarial com implementação prática: gestão financeira, automação de processos e IA para pequenas empresas. Fale com a P&T." },
      { property: "og:title", content: "Consultoria, automação e IA para pequenas empresas | P&T" },
      { property: "og:description", content: "Consultoria empresarial com implementação prática: gestão financeira, automação de processos e IA para pequenas empresas. Fale com a P&T." },
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
