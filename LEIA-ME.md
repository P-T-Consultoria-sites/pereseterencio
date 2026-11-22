# Site P&T – pereseterencio.com.br

Site da P&T Gestão de Soluções Inteligentes, em português e inglês, hospedado no GitHub Pages (grátis).
Migrado do Lovable em novembro de 2026. O site publicado é a pasta **`docs/`**; o resto é o código para gerá-la.

## Páginas
Início, Sobre, Blog e 7 artigos, em PT (`/`) e EN (`/en`). Total de 20 páginas. Os 2 artigos mais recentes foram gerados pela IA no Lovable e copiados do banco de dados para `src/content/blog.ts`.

## Como editar textos, artigos e imagens
| O que mudar | Onde |
|---|---|
| Textos do site (PT e EN), serviços, clientes | `src/i18n/content.ts` |
| Artigos do blog | `src/content/blog.ts` |
| Logos e fotos | `public/img/` (e os apontamentos em `src/assets/*.asset.json`) |
| WhatsApp e e-mail de contato | `src/lib/site-config.ts` |
| Cores e fontes | `src/styles.css` |

## Como publicar uma mudança
Precisa do Node.js. Na pasta do projeto:
```
npm install          (só na primeira vez)
npm run build:pages  (gera a pasta docs/ atualizada)
```
Depois envie as mudanças ao GitHub (`git add -A`, `git commit`, `git push`). O site atualiza em cerca de 1 minuto.

## Formulário de contato
O botão "Enviar pelo WhatsApp" monta a mensagem (nome, empresa, texto e e-mail) e abre o WhatsApp da P&T com ela pronta; a pessoa só toca em enviar.
O número fica em `src/lib/site-config.ts` (`WHATSAPP_NUMBER`, com 55 + DDD) e o texto exibido em `WHATSAPP_DISPLAY`.
Para trocar o número, altere também a linha "WhatsApp" dos canais em `src/i18n/content.ts` (português e inglês).

## O que existia no Lovable e NÃO foi migrado
- Blog automático com IA (sugestão semanal de tema + aprovação por e-mail).
- Gravação das mensagens do formulário no banco de dados (Supabase).
- E-mails enviados pelo Lovable (domínio `notify.pereseterencio.com.br`).

## Nunca colocar neste repositório (ele é público)
Senhas, chaves secretas, arquivo `.env`, planilhas de contatos ou dados de clientes.
