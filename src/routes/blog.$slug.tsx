import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/BlogPostPage";
import { getContent } from "@/i18n/content";
import { getPost } from "@/content/blog";

const t = getContent("pt");

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const staticPost = getPost("pt", params.slug);
    if (staticPost) {
      const staticMap: Record<string, string> = {
        "dashboard-empresarial-decisoes-estrategicas-para-pmes-7d1d9a": "business-dashboard-strategic-decisions-for-smes-7d1d9a",
        "dobre-a-produtividade-de-sua-pequena-empresa-com-automacao-e-ia-eec52c": "double-your-small-business-s-productivity-with-automation-and-ai-eec52c",
        "alem-das-planilhas": "beyond-spreadsheets",
        "automacao-pequenas-empresas": "automation-for-small-business",
        "ia-na-rotina-da-empresa": "ai-in-business-routine",
        "dashboard-empresarial": "business-dashboards",
        "software-sob-medida": "custom-software",
        "transformacao-digital-pequenas-empresas": "digital-transformation-small-business",
      };
      return { post: staticPost, altSlug: staticMap[params.slug] ?? null };
    }
    throw notFound();
  },

  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: `Blog | P&T` }] };
    return {
      meta: [
        { title: `${post.title} | P&T` },
        { name: "description", content: post.summary },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.summary },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.summary,
            datePublished: post.date,
            articleSection: post.category,
            inLanguage: "pt-BR",
            publisher: { "@type": "Organization", name: t.brand.full },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Artigo não encontrado</h1>
        <a href="/blog" className="mt-4 inline-block text-sm font-semibold text-primary">
          Voltar ao blog
        </a>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Erro ao carregar artigo</h1>
        <a href="/blog" className="mt-4 inline-block text-sm font-semibold text-primary">
          Voltar ao blog
        </a>
      </div>
    </div>
  ),
  component: PostRoute,
});

function PostRoute() {
  const { post } = Route.useLoaderData();
  return <BlogPostPage t={t} post={post} />;
}
