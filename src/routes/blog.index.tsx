import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { getContent } from "@/i18n/content";

const t = getContent("pt");

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog: gestão, automação e IA para empresas | P&T" },
      { name: "description", content: "Artigos sobre consultoria, automação de processos, inteligência artificial para pequenas empresas, gestão financeira e soluções digitais." },
      { property: "og:title", content: "Blog: gestão, automação e IA para empresas | P&T" },
      { property: "og:description", content: "Artigos sobre consultoria, automação de processos, inteligência artificial para pequenas empresas, gestão financeira e soluções digitais." },
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
