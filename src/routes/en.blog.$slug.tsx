import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/BlogPostPage";
import { getContent } from "@/i18n/content";
import { getPost, seoTitle } from "@/content/blog";

const t = getContent("en");

export const Route = createFileRoute("/en/blog/$slug")({
  loader: async ({ params }) => {
    const staticPost = getPost("en", params.slug);
    if (staticPost) {
      const staticMap: Record<string, string> = {
        "business-dashboard-strategic-decisions-for-smes-7d1d9a": "dashboard-empresarial-decisoes-estrategicas-para-pmes-7d1d9a",
        "double-your-small-business-s-productivity-with-automation-and-ai-eec52c": "dobre-a-produtividade-de-sua-pequena-empresa-com-automacao-e-ia-eec52c",
        "beyond-spreadsheets": "alem-das-planilhas",
        "automation-for-small-business": "automacao-pequenas-empresas",
        "ai-in-business-routine": "ia-na-rotina-da-empresa",
        "business-dashboards": "dashboard-empresarial",
        "custom-software": "software-sob-medida",
        "digital-transformation-small-business": "transformacao-digital-pequenas-empresas",
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
        { title: seoTitle(post) },
        { name: "description", content: post.summary },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.summary },
        { property: "og:url", content: `/en/blog/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/en/blog/${params.slug}` }],
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
            inLanguage: "en",
            publisher: { "@type": "Organization", name: t.brand.full },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Article not found</h1>
        <a href="/en/blog" className="mt-4 inline-block text-sm font-semibold text-primary">
          Back to blog
        </a>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Failed to load article</h1>
        <a href="/en/blog" className="mt-4 inline-block text-sm font-semibold text-primary">
          Back to blog
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
