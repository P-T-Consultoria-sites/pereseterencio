import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Gestão, Automação e IA para Empresas | P&T Consultoria" },
      { name: "description", content: "Artigos sobre consultoria empresarial, automação de processos, inteligência artificial para pequenas empresas, gestão financeira empresarial e soluções digitais." },
      { property: "og:title", content: "Blog — Gestão, Automação e IA para Empresas | P&T Consultoria" },
      { property: "og:description", content: "Artigos sobre consultoria empresarial, automação de processos, inteligência artificial para pequenas empresas, gestão financeira empresarial e soluções digitais." },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/blog" },
      { rel: "alternate", hrefLang: "pt-BR", href: "/blog" },
      { rel: "alternate", hrefLang: "en", href: "/en/blog" },
    ],
  }),
  component: () => <BlogIndexPage t={t} />,
});
