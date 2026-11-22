import type { Locale } from "@/i18n/content";
import imgSpreadsheets from "@/assets/blog/spreadsheets.jpg";
import imgAutomation from "@/assets/blog/automation.jpg";
import imgAi from "@/assets/blog/ai.jpg";
import imgCustomSoftware from "@/assets/blog/custom-software.jpg";
import imgDigitalTransformation from "@/assets/blog/digital-transformation.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  image: string;
  imageAlt: string;
  /** Simple markdown-ish content: paragraphs separated by blank lines, "## " for h2. */
  body: string;
};

const pt: BlogPost[] = [
  {
    slug: "alem-das-planilhas",
    title: "Além das planilhas: por que pequenas empresas precisam de clareza",
    summary:
      "Planilhas resolvem o início, mas viram gargalo. Veja como sair do caos com organização empresarial, processos e dados confiáveis.",
    category: "Gestão",
    date: "2026-05-12",
    readingTime: "5 min",
    image: imgSpreadsheets,
    imageAlt: "Mesa com planilhas impressas e laptop mostrando dados",
    body: `Pequenas empresas crescem em cima de planilhas. Funciona — até parar de funcionar.

## O sintoma é sempre o mesmo

Versões diferentes do mesmo arquivo, números que não batem, retrabalho diário e decisões tomadas no escuro. Quando a operação cresce, a planilha vira gargalo. A organização empresarial exige mais do que planilhas: exige processos, centralização e clareza.

## O que muda com processos e dados confiáveis

Quando o trabalho é centralizado em um sistema certo, com automações nos pontos críticos e dashboards mostrando a realidade do negócio em tempo real, três coisas mudam: o time ganha tempo, os custos caem e as decisões passam a se basear em fatos. A gestão por indicadores torna o crescimento previsível.

## Como começar sem complicar

Não é sobre comprar um ERP gigante. É sobre mapear o que mais consome tempo, eliminar o retrabalho mais óbvio, e ir construindo, em ciclos curtos, uma operação orientada por dados. A consultoria empresarial com implementação prática acelera esse caminho.`,
  },
  {
    slug: "automacao-pequenas-empresas",
    title: "Automação para pequenas empresas: por onde começar",
    summary:
      "Um guia direto para identificar as automações que devolvem mais tempo, reduzem tarefas manuais e aumentam a produtividade empresarial.",
    category: "Automação",
    date: "2026-04-22",
    readingTime: "6 min",
    image: imgAutomation,
    imageAlt: "Conceito visual de automação com nós conectados",
    body: `Automação parece coisa de empresa grande, mas é justamente nas pequenas que ela tem mais impacto. A automação empresarial é o caminho mais rápido para ganhar escala sem aumentar o time.

## Comece pelo repetitivo

Liste tudo que alguém do time faz toda semana sem precisar pensar: copiar dados de um lugar para outro, mandar lembretes, gerar relatórios. Esse é o lugar para começar. A redução de tarefas manuais liberta sua equipe para o que realmente importa.

## Faça pequeno, mas faça inteiro

Uma automação que economiza 3 horas por semana, rodando há um ano, vale mais do que um projeto gigante que nunca sai do papel. A produtividade empresarial vem de pequenas vitórias consistentes.

## Conecte com dados

Automações conectadas a dashboards transformam tarefas operacionais em fonte de informação para decisões. Quando a automação de processos gera dados confiáveis, você deixa de operar no escuro.`,
  },
  {
    slug: "ia-na-rotina-da-empresa",
    title: "IA para empresas: aplicações práticas em 2026",
    summary:
      "Onde a inteligência artificial para pequenas empresas realmente entrega resultado no dia a dia: chatbot, agentes de IA, análise de dados e produtividade.",
    category: "Inteligência Artificial",
    date: "2026-03-08",
    readingTime: "7 min",
    image: imgAi,
    imageAlt: "Interface de chat com inteligência artificial",
    body: `IA aplicada aos negócios não é uma feature. É um jeito novo de operar. A inteligência artificial para pequenas empresas está acessível como nunca.

## Atendimento e suporte

Respostas mais rápidas, triagem automática, base de conhecimento sempre atualizada — sem aumentar o time. Um chatbot para empresas bem treinado resolve 60% das dúvidas recorrentes sozinho.

## Análise de dados

Pergunte ao dashboard. Identifique padrões. Antecipe problemas antes que cheguem ao cliente. Agentes de IA podem monitorar indicadores e alertar sobre desvios em tempo real.

## Produtividade

Resumir reuniões, gerar rascunhos, padronizar comunicação. A automação com IA paga o investimento já no primeiro mês. A IA para empresas deixou de ser futuro: é ferramenta do presente.`,
  },
  {
    slug: "software-sob-medida",
    title: "Software sob medida: quando sua empresa precisa de um sistema personalizado",
    summary:
      "Planilhas e ferramentas genéricas têm limites. Entenda quando investir em aplicativos empresariais e software sob medida faz sentido para o seu negócio.",
    category: "Tecnologia",
    date: "2026-01-20",
    readingTime: "6 min",
    image: imgCustomSoftware,
    imageAlt: "Desenvolvedor criando software sob medida",
    body: `Todo negócio começa com planilhas. Mas chega um momento em que o crescimento exige mais. É aí que entra o sistema personalizado.

## Os sinais de que chegou a hora

Quando retrabalho vira rotina, quando ninguém sabe qual planilha é a versão final, quando integrar dados de diferentes fontes leva dias — seu negócio precisa de software sob medida. Aplicativos empresariais eliminam essas fricções.

## Software sob medida vs. ferramentas prontas

Ferramentas genéricas resolvem problemas genéricos. Quando seu processo tem particularidades, um sistema personalizado entrega exatamente o que você precisa, sem pagar por recursos que nunca vai usar.

## O retorno vem rápido

Um sistema personalizado que elimina 10 horas semanais de trabalho manual paga o investimento em poucos meses. Além do tempo, ganha-se rastreabilidade, padronização e dados confiáveis para decisões.`,
  },
  {
    slug: "transformacao-digital-pequenas-empresas",
    title: "Transformação digital para pequenas empresas: por onde começar em 2026",
    summary:
      "Guia prático de transformação digital com automação empresarial, produtividade e soluções digitais para quem não tem um time de TI.",
    category: "Transformação Digital",
    date: "2025-12-10",
    readingTime: "7 min",
    image: imgDigitalTransformation,
    imageAlt: "Equipe usando ferramentas digitais em escritório moderno",
    body: `Transformação digital não é só para grandes corporações. Para pequenas empresas, ela é sobrevivência competitiva.

## O que é transformação digital na prática

É usar tecnologia para fazer mais com o mesmo time. É substituir tarefas manuais por automações, decisões no escuro por dashboards, e retrabalho por processos padronizados. A automação empresarial é o coração dessa mudança.

## Por onde começar sem um time de TI

Comece pelo que dói mais: o processo que mais consome tempo, o erro que mais se repete, a informação que mais demora para chegar. A produtividade empresarial vem de escolher as batalhas certas.

## Os primeiros 90 dias

Mapeie, automatize o mais óbvio, centralize os dados e crie um hábito de olhar indicadores semanalmente. Em três meses você já opera de forma diferente — com mais clareza, mais velocidade e menos desperdício.`,
  },
];

const en: BlogPost[] = [
  {
    slug: "beyond-spreadsheets",
    title: "Beyond spreadsheets: why small businesses need clarity",
    summary:
      "Spreadsheets solve the early days, but become a bottleneck. Here's how to move out of the chaos with organization, processes and reliable data.",
    category: "Management",
    date: "2026-05-12",
    readingTime: "5 min",
    image: imgSpreadsheets,
    imageAlt: "Desk with printed spreadsheets and a laptop showing data",
    body: `Small businesses grow on top of spreadsheets. It works — until it doesn't.

## The symptom is always the same

Different versions of the same file, numbers that don't match, daily rework and decisions made in the dark. When the operation grows, the spreadsheet becomes a bottleneck. Business organization requires more than spreadsheets: it requires processes, centralization and clarity.

## What changes with process and reliable data

When the work is centralized in the right system, with automations at critical points and dashboards showing the reality of the business in real time, three things change: the team gains time, costs go down, and decisions are based on facts. KPI management makes growth predictable.

## How to start without overcomplicating

It's not about buying a giant ERP. It's about mapping what consumes the most time, eliminating the most obvious rework, and building, in short cycles, a data-driven operation. Business consulting with hands-on implementation accelerates this path.`,
  },
  {
    slug: "automation-for-small-business",
    title: "Automation for small businesses: where to start",
    summary:
      "A straightforward guide to identifying the automations that return the most time, reduce manual tasks and boost business productivity.",
    category: "Automation",
    date: "2026-04-22",
    readingTime: "6 min",
    image: imgAutomation,
    imageAlt: "Visual concept of automation with connected nodes",
    body: `Automation sounds like big-company stuff, but it's in small businesses that it has the most impact. Business automation is the fastest path to scale without growing the team.

## Start with the repetitive

List everything someone on the team does every week without thinking: copying data, sending reminders, generating reports. That's the place to start. Reducing manual tasks frees your team to focus on what really matters.

## Go small, but go end-to-end

An automation that saves 3 hours a week, running for a year, is worth more than a giant project that never ships. Business productivity comes from consistent small wins.

## Connect with data

Automations connected to dashboards turn operational tasks into a source of information for decisions. When process automation generates reliable data, you stop operating in the dark.`,
  },
  {
    slug: "ai-in-business-routine",
    title: "AI for businesses: practical applications in 2026",
    summary:
      "Where AI for small businesses actually delivers results: chatbots, AI agents, data analysis and productivity.",
    category: "Artificial Intelligence",
    date: "2026-03-08",
    readingTime: "7 min",
    image: imgAi,
    imageAlt: "AI chat interface on a modern desk",
    body: `AI applied to business isn't a feature. It's a new way to operate. Artificial intelligence for small businesses is more accessible than ever.

## Customer service

Faster responses, automatic triage, an always-updated knowledge base — without growing the team. A well-trained chatbot for business resolves 60% of recurring questions on its own.

## Data analysis

Ask the dashboard. Spot patterns. Anticipate problems before they reach the customer. AI agents can monitor KPIs and alert about deviations in real time.

## Productivity

Summarize meetings, draft documents, standardize communication. AI-powered automation pays off in the first month. AI for business is no longer the future: it's a tool for today.`,
  },
  {
    slug: "custom-software",
    title: "Custom software: when your business needs a tailor-made system",
    summary:
      "Spreadsheets and generic tools have limits. Understand when investing in business apps and custom software makes sense for your company.",
    category: "Technology",
    date: "2026-01-20",
    readingTime: "6 min",
    image: imgCustomSoftware,
    imageAlt: "Developer building custom software",
    body: `Every business starts with spreadsheets. But there comes a point when growth demands more. That's when a tailor-made system comes in.

## The signs it's time

When rework becomes routine, when no one knows which spreadsheet is the final version, when integrating data from different sources takes days — your business needs custom software. Business apps eliminate these frictions.

## Custom software vs. off-the-shelf tools

Generic tools solve generic problems. When your process has particularities, a tailor-made system delivers exactly what you need, without paying for features you'll never use.

## The return comes quickly

A custom system that eliminates 10 hours of weekly manual work pays for itself in a few months. Beyond time, you gain traceability, standardization and reliable data for decisions.`,
  },
  {
    slug: "digital-transformation-small-business",
    title: "Digital transformation for small businesses: where to start in 2026",
    summary:
      "A practical guide to digital transformation with business automation, productivity and digital solutions for those without an IT team.",
    category: "Digital Transformation",
    date: "2025-12-10",
    readingTime: "7 min",
    image: imgDigitalTransformation,
    imageAlt: "Team using digital tools in a modern office",
    body: `Digital transformation isn't just for large corporations. For small businesses, it's competitive survival.

## What digital transformation means in practice

It's using technology to do more with the same team. It's replacing manual tasks with automations, gut-feel decisions with dashboards, and rework with standardized processes. Business automation is the heart of this change.

## Where to start without an IT team

Start with what hurts most: the process that consumes the most time, the error that repeats the most, the information that takes the longest to arrive. Business productivity comes from choosing the right battles.

## The first 90 days

Map it out, automate the most obvious, centralize the data and create a habit of looking at indicators weekly. In three months you're already operating differently — with more clarity, more speed and less waste.`,
  },
];

export const posts: Record<Locale, BlogPost[]> = { pt, en };

export function getPosts(locale: Locale): BlogPost[] {
  return [...posts[locale]].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return posts[locale].find((p) => p.slug === slug);
}

export function getCategories(locale: Locale): string[] {
  return Array.from(new Set(posts[locale].map((p) => p.category)));
}
