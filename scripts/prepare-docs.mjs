// Copia o site gerado (.output/public) para docs/ e cria os arquivos que o GitHub Pages precisa.
import { cpSync, rmSync, mkdirSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DOMAIN = "pereseterencio.com.br";
const SRC = ".output/public";
const OUT = "docs";

if (!existsSync(SRC)) { console.error("Rode primeiro: npx vite build"); process.exit(1); }
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(SRC, OUT, { recursive: true });

writeFileSync(join(OUT, "CNAME"), DOMAIN + "\n");
writeFileSync(join(OUT, ".nojekyll"), "");

// sitemap.xml e robots.txt a partir das páginas geradas
const urls = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name === "index.html") {
      const rel = "/" + relative(OUT, dir).replaceAll("\\", "/");
      urls.push(rel === "/" ? "/" : rel + "/");
    }
  }
})(OUT);
urls.sort();
writeFileSync(join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>https://${DOMAIN}${u}</loc></url>`).join("\n") + `\n</urlset>\n`);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: https://${DOMAIN}/sitemap.xml\n`);

// página 404 simples (bilíngue)
writeFileSync(join(OUT, "404.html"), `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Página não encontrada | P&amp;T</title>
<link rel="icon" href="/favicon.ico" sizes="any"><meta name="robots" content="noindex">
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fcfeff;color:#071027;font-family:system-ui,sans-serif;text-align:center;padding:24px}
h1{font-size:72px;margin:0;color:#18188c}p{color:#56647a}a{display:inline-block;margin:8px;padding:12px 22px;border-radius:10px;background:#18188c;color:#fff;text-decoration:none;font-weight:600}</style></head>
<body><main><h1>404</h1><p>Não encontramos esta página. / We couldn't find this page.</p>
<a href="/">Ir para o início</a><a href="/en">Go to home (EN)</a></main></body></html>
`);
console.log(`docs/ pronto: ${urls.length} páginas, sitemap, robots, CNAME e 404.`);
