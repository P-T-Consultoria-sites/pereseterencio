# Site P&T – pereseterencio.com.br

Site da P&T Gestão de Soluções Inteligentes, em português e inglês, hospedado no GitHub Pages (grátis).
Migrado do Lovable em novembro de 2026. O site publicado é a pasta **`docs/`**; o resto é o código para gerá-la.

## Páginas
Início, Sobre, Blog e 5 artigos, em PT (`/`) e EN (`/en`). Total de 16 páginas.

## Como editar textos, artigos e imagens
| O que mudar | Onde |
|---|---|
| Textos do site (PT e EN), serviços, clientes | `src/i18n/content.ts` |
| Artigos do blog | `src/content/blog.ts` |
| Logos e fotos | `public/img/` (e os apontamentos em `src/assets/*.asset.json`) |
| Chave do formulário e e-mail de contato | `src/lib/site-config.ts` |
| Cores e fontes | `src/styles.css` |

## Como publicar uma mudança
Precisa do Node.js. Na pasta do projeto:
```
npm install          (só na primeira vez)
npm run build:pages  (gera a pasta docs/ atualizada)
```
Depois envie as mudanças ao GitHub (`git add -A`, `git commit`, `git push`). O site atualiza em cerca de 1 minuto.

## Formulário de contato
Usa o **Web3Forms** (grátis, 250 mensagens por mês). Para ativar:
1. Em web3forms.com, informe o e-mail que deve receber as mensagens e copie a "Access Key".
2. Cole a chave em `src/lib/site-config.ts` (`WEB3FORMS_KEY`) e publique.

Enquanto a chave estiver vazia, o botão "Enviar" abre o e-mail do visitante com a mensagem pronta para `contato@pereseterencio.com.br`.

## O que existia no Lovable e NÃO foi migrado
- Blog automático com IA (sugestão semanal de tema + aprovação por e-mail).
- Gravação das mensagens do formulário no banco de dados (Supabase).
- E-mails enviados pelo Lovable (domínio `notify.pereseterencio.com.br`).

## Nunca colocar neste repositório (ele é público)
Senhas, chaves secretas, arquivo `.env`, planilhas de contatos ou dados de clientes.
