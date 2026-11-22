import { SiteLayout } from "@/components/SiteLayout";
import type { SiteContent } from "@/i18n/content";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/site-config";

type Bloco = { titulo: string; paragrafos?: string[]; itens?: string[] };

const PT: { titulo: string; atualizacao: string; blocos: Bloco[] } = {
  titulo: "Política de privacidade",
  atualizacao: "Última atualização: 22/11/2026",
  blocos: [
    {
      titulo: "Quem somos",
      paragrafos: [
        "A P&T Consultoria e Gestão de Soluções Inteligentes é a responsável pelos dados tratados neste site (pereseterencio.com.br), nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).",
        `Contato para assuntos de privacidade: ${CONTACT_EMAIL} ou WhatsApp ${WHATSAPP_DISPLAY}.`,
      ],
    },
    {
      titulo: "O que coletamos",
      paragrafos: [
        "Este site não cria conta e não usa cookies de rastreamento nem ferramentas de estatística. O formulário de contato não envia nada para os nossos servidores: ele monta a sua mensagem no seu aparelho e abre o WhatsApp para você enviá-la.",
        "Os dados só chegam até nós quando você envia a mensagem pelo WhatsApp ou escreve para o nosso e-mail. Nesse caso, recebemos o que você escrever (por exemplo, nome, empresa, e-mail e o assunto), além do número e do nome do perfil no WhatsApp.",
      ],
    },
    {
      titulo: "Para que usamos",
      itens: [
        "Responder o seu contato e entender o que a sua empresa precisa.",
        "Enviar proposta e combinar os próximos passos, se você tiver interesse.",
        "Cumprir obrigações legais, quando houver contratação.",
      ],
      paragrafos: [
        "A base legal é a execução de procedimentos preliminares a pedido de quem nos procura (art. 7º, V, da LGPD) e, depois da contratação, a execução do contrato e o cumprimento de obrigação legal.",
      ],
    },
    {
      titulo: "Serviços de terceiros que aparecem no site",
      itens: [
        "Google Fonts: as letras do site são carregadas dos servidores do Google, que podem registrar o endereço IP de quem visita.",
        "GitHub Pages: hospeda o site e mantém registros técnicos de acesso, como qualquer hospedagem.",
        "WhatsApp e Instagram (Meta): só têm contato com você se você clicar nos botões deles.",
      ],
      paragrafos: ["Não vendemos nem repassamos os seus dados."],
    },
    {
      titulo: "Por quanto tempo guardamos",
      paragrafos: [
        "Pelo tempo necessário para atender você e cumprir obrigações legais. Contatos que não viraram atendimento podem ser apagados quando você pedir.",
      ],
    },
    {
      titulo: "Seus direitos",
      paragrafos: [
        `Você pode pedir a qualquer momento: confirmação de que tratamos seus dados, acesso, correção, exclusão, portabilidade e informação sobre com quem compartilhamos. Basta escrever para ${CONTACT_EMAIL}.`,
        "Você também pode reclamar na Autoridade Nacional de Proteção de Dados (ANPD).",
      ],
    },
    {
      titulo: "Mudanças nesta política",
      paragrafos: [
        "Se o site passar a usar estatísticas, cookies ou outro tipo de coleta, esta página será atualizada antes, e a data no topo mostra a última revisão.",
      ],
    },
  ],
};

const EN: typeof PT = {
  titulo: "Privacy policy",
  atualizacao: "Last updated: 22 Nov 2026",
  blocos: [
    {
      titulo: "Who we are",
      paragrafos: [
        "P&T Consultoria e Gestão de Soluções Inteligentes is responsible for the data handled on this website (pereseterencio.com.br), under the Brazilian General Data Protection Law (Law No. 13,709/2018, LGPD).",
        `Privacy contact: ${CONTACT_EMAIL} or WhatsApp ${WHATSAPP_DISPLAY}.`,
      ],
    },
    {
      titulo: "What we collect",
      paragrafos: [
        "This website has no accounts and does not use tracking cookies or analytics tools. The contact form does not send anything to our servers: it builds your message on your device and opens WhatsApp so you can send it yourself.",
        "Data only reaches us when you send the message through WhatsApp or write to our email. In that case we receive what you write (for example name, company, email and subject), plus your WhatsApp number and profile name.",
      ],
    },
    {
      titulo: "What we use it for",
      itens: [
        "Replying to you and understanding what your business needs.",
        "Sending a proposal and agreeing on next steps, if you are interested.",
        "Meeting legal obligations, if you become a client.",
      ],
      paragrafos: [
        "The legal basis is the preliminary steps taken at the request of the person contacting us (art. 7, V, LGPD) and, after hiring, performance of the contract and legal compliance.",
      ],
    },
    {
      titulo: "Third-party services on the site",
      itens: [
        "Google Fonts: the typefaces of the site are loaded from Google servers, which may record the visitor's IP address.",
        "GitHub Pages: hosts the website and keeps technical access logs, like any hosting service.",
        "WhatsApp and Instagram (Meta): only reach you if you click their buttons.",
      ],
      paragrafos: ["We do not sell or share your data."],
    },
    {
      titulo: "How long we keep it",
      paragrafos: [
        "For as long as needed to serve you and meet legal obligations. Contacts that did not become a client can be deleted on request.",
      ],
    },
    {
      titulo: "Your rights",
      paragrafos: [
        `You can ask at any time for confirmation that we process your data, access, correction, deletion, portability and information about who we share it with. Just write to ${CONTACT_EMAIL}.`,
        "You may also file a complaint with the Brazilian data protection authority (ANPD).",
      ],
    },
    {
      titulo: "Changes to this policy",
      paragrafos: [
        "If the site starts using analytics, cookies or any other collection, this page will be updated first, and the date at the top shows the latest review.",
      ],
    },
  ],
};

export function PrivacyPage({ t }: { t: SiteContent }) {
  const c = t.locale === "pt" ? PT : EN;
  return (
    <SiteLayout t={t}>
      <section className="border-b border-border" style={{ background: "var(--gradient-subtle)" }}>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{c.titulo}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{c.atualizacao}</p>
        </div>
      </section>
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {c.blocos.map((b) => (
            <div key={b.titulo} className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">{b.titulo}</h2>
              {b.paragrafos?.map((p, i) => (
                <p key={i} className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {b.itens && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
                  {b.itens.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
