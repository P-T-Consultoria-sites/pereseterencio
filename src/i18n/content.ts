import carlosPhoto from "@/assets/carlos-terencio.png.asset.json";
import julianaPhoto from "@/assets/juliana-terencio.png.asset.json";
import leandroPhoto from "@/assets/leandro-pedrosa.png.asset.json";
import rafaelPhoto from "@/assets/rafael-oliveira.png.asset.json";
import nutroesteLogo from "@/assets/nutroeste.png.asset.json";
import sebraeLogo from "@/assets/sebrae.png.asset.json";
import catianaLogo from "@/assets/catiana.png.asset.json";
import loveToLangaLogo from "@/assets/love-to-langa.jpg.asset.json";
import nutroesteParaguaiLogo from "@/assets/nutroeste-paraguai.png.asset.json";
import ceciliaFloresLogo from "@/assets/cecilia-flores.png.asset.json";

export type Locale = "pt" | "en";

export type SolutionItem = {
  title: string;
  description: string;
  icon: "briefcase" | "wallet" | "workflow" | "sparkles" | "code" | "barChart";
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SiteContent = {
  locale: Locale;
  htmlLang: string;
  alt: Locale;
  paths: {
    home: string;
    blog: string;
    blogPost: (slug: string) => string;
    about: string;
  };
  brand: {
    short: string;
    full: string;
    tagline: string;
  };
  nav: {
    home: string;
    solutions: string;
    process: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  positioning: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: SolutionItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  manifesto: {
    eyebrow: string;
    title: string;
    lines: string[];
    closing: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      company: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
    channels: { label: string; value: string }[];
  };
  footer: {
    tagline: string;
    rights: string;
    sections: { title: string; links: { label: string; href: string }[] }[];
  };
  blog: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    empty: string;
    readMore: string;
    backToBlog: string;
    publishedOn: string;
    editorialNote: string;
  };
  clients: {
    eyebrow: string;
    title: string;
    subtitle: string;
    logos: { name: string; logo?: string }[];
  };
  about: {
    title: string;
    subtitle: string;
    story: { title: string; paragraphs: string[] };
    mission: { title: string; body: string };
    vision: { title: string; body: string };
    values: { title: string; items: { title: string; description: string }[] };
    team: { title: string; subtitle: string; members: { name: string; role: string; photo?: string }[] };
    ctaTitle: string;
    ctaButton: string;
  };
};

const pt: SiteContent = {
  locale: "pt",
  htmlLang: "pt-BR",
  alt: "en",
  paths: {
    home: "/",
    blog: "/blog",
    blogPost: (slug) => `/blog/${slug}`,
    about: "/sobre",
  },
  brand: {
    short: "P&T Gestão de Soluções Inteligentes",
    full: "P&T Gestão de Soluções Inteligentes",
    tagline: "Consultoria empresarial, gestão financeira, automação, IA e soluções digitais para pequenas empresas crescerem.",
  },
  nav: {
    home: "Início",
    solutions: "Soluções",
    process: "Como trabalhamos",
    about: "Sobre",
    blog: "Blog",
    contact: "Contato",
    cta: "Fale com um especialista",
  },
  hero: {
    eyebrow: "Consultoria + Tecnologia",
    title: "Transformamos pequenas empresas com operações",
    titleHighlight: "organizadas, eficientes e orientadas por dados",
    subtitle:
      "Unimos consultoria empresarial, gestão financeira empresarial, automação de processos, inteligência artificial para pequenas empresas e desenvolvimento de soluções digitais para reduzir desperdícios, eliminar tarefas repetitivas e acelerar o crescimento do seu negócio.",
    ctaPrimary: "Fale com um especialista",
    ctaSecondary: "Conheça as soluções",
    stats: [
      { value: "100%", label: "Soluções personalizadas" },
      { value: "+IA", label: "Aplicada à rotina" },
      { value: "360°", label: "Finanças, processos e tech" },
    ],
  },
  positioning: {
    eyebrow: "Nosso posicionamento",
    title: "Diferente de consultorias tradicionais, nós implementamos.",
    body: "Não paramos em diagnósticos e relatórios. Atuamos lado a lado com você criando processos, automações, dashboards e aplicativos que transformam estratégia em resultado — com tecnologia acessível e acompanhamento especializado.",
    bullets: [
      "Consultoria com implementação prática",
      "Soluções personalizadas para cada negócio",
      "Visão integrada entre finanças, processos e tecnologia",
    ],
  },
  solutions: {
    eyebrow: "Soluções",
    title: "O que entregamos",
    subtitle:
      "Um conjunto integrado de capacidades para organizar a operação, aumentar a produtividade e gerar dados confiáveis para decidir melhor.",
    items: [
      {
        icon: "briefcase",
        title: "Consultoria com implementação",
        description:
          "Diagnóstico, planejamento financeiro empresarial e execução conjunta — não só apontamos problemas, resolvemos com consultoria para pequenas empresas.",
      },
      {
        icon: "wallet",
        title: "Gestão financeira",
        description:
          "Estruturação financeira, fluxo de caixa, gestão por indicadores e rotinas para decisões mais seguras.",
      },
      {
        icon: "workflow",
        title: "Automação de processos",
        description:
          "Eliminamos tarefas repetitivas com automação de processos e automação empresarial que aumenta a produtividade.",
      },
      {
        icon: "sparkles",
        title: "Inteligência artificial aplicada",
        description:
          "Inteligência artificial para pequenas empresas: atendimento, análise de dados, agentes de IA, chatbot para empresas e produtividade.",
      },
      {
        icon: "code",
        title: "Aplicativos e ferramentas próprias",
        description:
          "Desenvolvemos software sob medida e aplicativos empresariais que substituem planilhas e centralizam o trabalho.",
      },
      {
        icon: "barChart",
        title: "Dashboards e visão integrada",
        description:
          "Dashboard empresarial com informações confiáveis em tempo real, conectando finanças, processos e tecnologia.",
      },
    ],
  },
  process: {
    eyebrow: "Como trabalhamos",
    title: "Da estratégia ao resultado, com você junto.",
    subtitle:
      "Um método claro para sair do caos operacional e chegar a uma operação previsível, orientada por dados.",
    steps: [
      {
        title: "Diagnóstico",
        description:
          "Mapeamos sua operação, finanças e processos para entender gargalos, desperdícios e oportunidades.",
      },
      {
        title: "Plano",
        description:
          "Construímos um plano objetivo, com prioridades, métricas e roadmap de implementação.",
      },
      {
        title: "Implementação",
        description:
          "Executamos junto: criamos processos, automações, dashboards e aplicativos que funcionam de verdade.",
      },
      {
        title: "Acompanhamento",
        description:
          "Monitoramos resultados, ajustamos a rota e seguimos evoluindo a operação ao longo do tempo.",
      },
    ],
  },
  manifesto: {
    eyebrow: "Manifesto",
    title: "Pequenas empresas não precisam de mais planilhas.",
    lines: [
      "Precisam de clareza.",
      "Precisam de processos que funcionem.",
      "Precisam de informações confiáveis para tomar decisões.",
      "Precisam de tecnologia acessível.",
    ],
    closing:
      "Acreditamos que gestão e inovação não devem ser privilégios das grandes empresas. Por isso criamos soluções que unem estratégia, automação e acompanhamento especializado para que empreendedores tenham mais controle, mais produtividade e mais tempo para crescer.",
  },
  audience: {
    eyebrow: "Para quem é",
    title: "Pensado para micro e pequenas empresas que querem crescer com método.",
    subtitle:
      "Se a sua operação ainda depende de planilhas espalhadas, retrabalho e decisões no escuro, podemos ajudar.",
    points: [
      {
        title: "Reduza desperdícios",
        description: "Processos mais enxutos, menos retrabalho e custos sob controle.",
      },
      {
        title: "Elimine tarefas repetitivas",
        description: "Automações que devolvem tempo para você focar no que importa.",
      },
      {
        title: "Decida com dados",
        description: "Dashboards e indicadores que mostram a realidade do negócio em tempo real.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre o seu próximo passo.",
    subtitle:
      "Conte um pouco sobre o seu negócio e o desafio que você quer resolver. Respondemos rapidamente.",
    form: {
      name: "Seu nome",
      company: "Empresa",
      email: "E-mail",
      message: "Como podemos ajudar?",
      submit: "Enviar pelo WhatsApp",
      success: "Abrindo o WhatsApp com a sua mensagem pronta. É só tocar em enviar.",
    },
    channels: [
      { label: "E-mail", value: "contato@pereseterencio.com.br" },
      { label: "Atendimento", value: "Seg a Sex, 9h–18h" },
      { label: "WhatsApp", value: "(62) 99925-6125" },
    ],
  },
  footer: {
    tagline:
      "Consultoria empresarial, gestão financeira e tecnologia para pequenas empresas crescerem com clareza e eficiência.",
    rights: "Todos os direitos reservados.",
    sections: [
      {
        title: "Empresa",
        links: [
          { label: "Sobre", href: "/sobre" },
          { label: "Blog", href: "/blog" },
          { label: "Privacidade", href: "/privacidade" },
          { label: "Contato", href: "/#contato" },
        ],
      },
      {
        title: "Soluções",
        links: [
          { label: "Consultoria", href: "/#solucoes" },
          { label: "Automação", href: "/#solucoes" },
          { label: "Aplicativos", href: "/#solucoes" },
        ],
      },
    ],
  },
  blog: {
    title: "Insights de gestão, tecnologia e operação",
    subtitle:
      "Conteúdo prático sobre consultoria empresarial, automação de processos, inteligência artificial para pequenas empresas, gestão financeira empresarial e soluções digitais para empresas.",
    searchPlaceholder: "Buscar artigos…",
    allCategories: "Todas",
    empty: "Nenhum artigo encontrado.",
    readMore: "Ler artigo",
    backToBlog: "Voltar ao blog",
    publishedOn: "Publicado em",
    editorialNote:
      "Curadoria editorial e responsabilidade pelo conteúdo: Juliana Terencio. Novos artigos toda quarta-feira.",
  },
  clients: {
    eyebrow: "Nossos clientes",
    title: "Quem confia na P&T",
    subtitle: "Empresas que escolheram crescer com gestão inteligente, automação e tecnologia ao seu lado.",
    logos: [
      { name: "Nutroeste Nutrição Animal", logo: nutroesteLogo.url },
      { name: "Sebrae", logo: sebraeLogo.url },
      { name: "Catiana Campos Unhas e Cílios", logo: catianaLogo.url },
      { name: "Love to Langa", logo: loveToLangaLogo.url },
      { name: "Nutroeste Paraguai", logo: nutroesteParaguaiLogo.url },
      { name: "Cecília Flores", logo: ceciliaFloresLogo.url },
    ],
  },
  about: {
    title: "Estratégia, implementação e tecnologia — em um só time.",
    subtitle:
      "A P&T nasceu para resolver o que consultorias tradicionais não resolvem: tirar o plano do papel e fazer acontecer com consultoria empresarial, automação e IA para pequenas empresas.",
    story: {
      title: "Nossa história",
      paragraphs: [
        "Desde 2011, ajudamos empresas a crescer por meio de uma gestão mais inteligente.",
        "Começamos nossa trajetória na consultoria financeira, apoiando empreendedores na organização de seus negócios e na tomada de decisões baseadas em dados. Com o tempo, entendemos que o maior desafio das empresas não era apenas saber o que fazer, mas conseguir implementar as mudanças necessárias para evoluir.",
        "Por isso, ampliamos nossa atuação e passamos a integrar consultoria, automação, inteligência artificial e desenvolvimento de soluções digitais. Hoje, criamos processos, sistemas e ferramentas personalizadas que transformam estratégia em resultado.",
        "Mais do que uma consultoria ou uma empresa de tecnologia, somos parceiros de crescimento, conectando gestão, inovação e execução para construir negócios mais eficientes, organizados e preparados para o futuro.",
      ],
    },
    mission: {
      title: "Missão",
      body: "Simplificar a gestão das pequenas empresas, aumentar a produtividade e fornecer informações confiáveis para decisões mais rápidas e inteligentes.",
    },
    vision: {
      title: "Visão",
      body: "Tornar gestão profissional e inovação acessíveis a qualquer empreendedor, com tecnologia que trabalha pelo negócio.",
    },
    values: {
      title: "Valores",
      items: [
        { title: "Implementação", description: "Executamos junto, não só apontamos." },
        { title: "Clareza", description: "Dados confiáveis e linguagem direta." },
        { title: "Personalização", description: "Cada negócio tem o seu próprio caminho." },
        { title: "Acessibilidade", description: "Tecnologia ao alcance da pequena empresa." },
      ],
    },
    team: {
      title: "Equipe",
      subtitle: "Gente que une consultoria, gestão e tecnologia.",
      members: [
        { name: "Carlos Terencio", role: "Diretoria e Finanças", photo: carlosPhoto.url },
        { name: "Juliana Terencio", role: "Desenvolvimento e Finanças", photo: julianaPhoto.url },
        { name: "Leandro Pedrosa", role: "Planejamento Empresarial e Processos", photo: leandroPhoto.url },
        { name: "Rafael Oliveira", role: "Coordenação de Projetos", photo: rafaelPhoto.url },
      ],
    },
    ctaTitle: "Pronto para sair do caos operacional?",
    ctaButton: "Fale com um especialista",
  },
};

const en: SiteContent = {
  locale: "en",
  htmlLang: "en",
  alt: "pt",
  paths: {
    home: "/en",
    blog: "/en/blog",
    blogPost: (slug) => `/en/blog/${slug}`,
    about: "/en/about",
  },
  brand: {
    short: "P&T Smart Solutions Management",
    full: "P&T Smart Solutions Management",
    tagline: "Business consulting, financial management, automation, AI and digital solutions for small businesses to grow.",
  },
  nav: {
    home: "Home",
    solutions: "Solutions",
    process: "How we work",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    cta: "Talk to a specialist",
  },
  hero: {
    eyebrow: "Consulting + Technology",
    title: "We turn small businesses into",
    titleHighlight: "organized, efficient, data-driven operations",
    subtitle:
      "We combine business consulting, financial management, process automation, AI for small businesses and custom digital solutions to cut waste, eliminate repetitive work and accelerate growth.",
    ctaPrimary: "Talk to a specialist",
    ctaSecondary: "See our solutions",
    stats: [
      { value: "100%", label: "Tailored solutions" },
      { value: "+AI", label: "Applied to your routine" },
      { value: "360°", label: "Finance, process and tech" },
    ],
  },
  positioning: {
    eyebrow: "Our positioning",
    title: "Unlike traditional consultancies, we implement.",
    body: "We don't stop at diagnoses and reports. We work alongside you to design processes, automations, dashboards and apps that turn strategy into results — with accessible technology and expert follow-through.",
    bullets: [
      "Consulting that ships, not just advises",
      "Personalized solutions for each business",
      "Integrated view across finance, process and tech",
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "What we deliver",
    subtitle:
      "An integrated set of capabilities to organize the operation, boost productivity and generate reliable data for better decisions.",
    items: [
      {
        icon: "briefcase",
        title: "Consulting with implementation",
        description:
          "Diagnosis, financial planning and joint execution — we don't only point at problems, we solve them with consulting for small businesses.",
      },
      {
        icon: "wallet",
        title: "Financial management",
        description:
          "Financial structuring, cash flow, KPI management and routines for safer decisions.",
      },
      {
        icon: "workflow",
        title: "Process automation",
        description:
          "We remove repetitive tasks with process automation and business automation that boosts productivity.",
      },
      {
        icon: "sparkles",
        title: "Applied AI",
        description:
          "AI for small businesses: service, data analysis, AI agents, chatbots for business and productivity.",
      },
      {
        icon: "code",
        title: "Custom apps and tools",
        description:
          "We develop custom software and business apps that replace spreadsheets and centralize work.",
      },
      {
        icon: "barChart",
        title: "Dashboards and integrated view",
        description:
          "Business dashboards with reliable real-time information connecting finance, process and technology.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From strategy to results, with you on the journey.",
    subtitle:
      "A clear method to move from operational chaos to a predictable, data-driven operation.",
    steps: [
      {
        title: "Diagnosis",
        description:
          "We map your operation, finances and processes to spot bottlenecks, waste and opportunities.",
      },
      {
        title: "Plan",
        description:
          "We build a focused plan with priorities, metrics and an implementation roadmap.",
      },
      {
        title: "Implementation",
        description:
          "We execute together: building processes, automations, dashboards and apps that really work.",
      },
      {
        title: "Follow-up",
        description:
          "We monitor results, adjust course and keep evolving the operation over time.",
      },
    ],
  },
  manifesto: {
    eyebrow: "Manifesto",
    title: "Small businesses don't need more spreadsheets.",
    lines: [
      "They need clarity.",
      "They need processes that work.",
      "They need reliable information to make decisions.",
      "They need accessible technology.",
    ],
    closing:
      "We believe management and innovation shouldn't be privileges of big companies. That's why we create solutions that combine strategy, automation and expert follow-up so entrepreneurs have more control, more productivity and more time to grow.",
  },
  audience: {
    eyebrow: "Who it's for",
    title: "Built for small businesses that want to grow with method.",
    subtitle:
      "If your operation still depends on scattered spreadsheets, rework and gut-feel decisions, we can help.",
    points: [
      {
        title: "Cut waste",
        description: "Leaner processes, less rework and costs under control.",
      },
      {
        title: "Eliminate repetitive work",
        description: "Automations that give you time back to focus on what matters.",
      },
      {
        title: "Decide with data",
        description: "Dashboards and indicators that show the reality of the business in real time.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next step.",
    subtitle:
      "Tell us a bit about your business and the challenge you want to solve. We reply quickly.",
    form: {
      name: "Your name",
      company: "Company",
      email: "Email",
      message: "How can we help?",
      submit: "Send via WhatsApp",
      success: "Opening WhatsApp with your message ready. Just tap send.",
    },
    channels: [
      { label: "Email", value: "contato@pereseterencio.com.br" },
      { label: "Hours", value: "Mon–Fri, 9am–6pm" },
      { label: "WhatsApp", value: "(62) 99925-6125" },
    ],
  },
  footer: {
    tagline:
      "Business consulting, financial management and technology for small businesses to grow with clarity and efficiency.",
    rights: "All rights reserved.",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/en/about" },
          { label: "Blog", href: "/en/blog" },
          { label: "Privacy", href: "/en/privacy" },
          { label: "Contact", href: "/en#contact" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Consulting", href: "/en#solutions" },
          { label: "Automation", href: "/en#solutions" },
          { label: "Apps", href: "/en#solutions" },
        ],
      },
    ],
  },
  blog: {
    title: "Insights on management, technology and operations",
    subtitle:
      "Practical content on business consulting, process automation, AI for small businesses, financial management and digital solutions for companies.",
    searchPlaceholder: "Search articles…",
    allCategories: "All",
    empty: "No articles found.",
    readMore: "Read article",
    backToBlog: "Back to blog",
    publishedOn: "Published on",
    editorialNote:
      "Editorial curation and content responsibility: Juliana Terencio. New articles every Wednesday.",
  },
  clients: {
    eyebrow: "Our clients",
    title: "Companies that trust P&T",
    subtitle: "Businesses that chose to grow with smart management, automation and technology by their side.",
    logos: [
      { name: "Nutroeste Animal Nutrition", logo: nutroesteLogo.url },
      { name: "Sebrae", logo: sebraeLogo.url },
      { name: "Catiana Campos Nails & Lashes", logo: catianaLogo.url },
      { name: "Love to Langa", logo: loveToLangaLogo.url },
      { name: "Nutroeste Paraguai", logo: nutroesteParaguaiLogo.url },
      { name: "Cecília Flores", logo: ceciliaFloresLogo.url },
    ],
  },
  about: {
    title: "Strategy, implementation and technology — in one team.",
    subtitle:
      "P&T was born to solve what traditional consultancies don't: turning the plan into reality with business consulting, automation and AI for small businesses.",
    story: {
      title: "Our story",
      paragraphs: [
        "We've lived the entrepreneur reality: too many spreadsheets, people-dependent processes, decisions made in the dark and not enough time. P&T was born to change that.",
        "We combine business consulting, financial management and software development to deliver complete solutions — from diagnosis to a running operation.",
      ],
    },
    mission: {
      title: "Mission",
      body: "Simplify the management of small businesses, increase productivity and provide reliable information for faster and smarter decisions.",
    },
    vision: {
      title: "Vision",
      body: "Make professional management and innovation accessible to any entrepreneur, with technology that works for the business.",
    },
    values: {
      title: "Values",
      items: [
        { title: "Implementation", description: "We execute together, not just advise." },
        { title: "Clarity", description: "Reliable data and direct language." },
        { title: "Personalization", description: "Every business has its own path." },
        { title: "Accessibility", description: "Technology within reach of small businesses." },
      ],
    },
    team: {
      title: "Team",
      subtitle: "People who combine consulting, management and technology.",
      members: [
        { name: "Carlos Terencio", role: "Board & Finance", photo: carlosPhoto.url },
        { name: "Juliana Terencio", role: "Development & Finance", photo: julianaPhoto.url },
        { name: "Leandro Pedrosa", role: "Business Planning & Processes", photo: leandroPhoto.url },
        { name: "Rafael Oliveira", role: "Project Coordination", photo: rafaelPhoto.url },
      ],
    },
    ctaTitle: "Ready to leave operational chaos behind?",
    ctaButton: "Talk to a specialist",
  },
};

export const content: Record<Locale, SiteContent> = { pt, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
