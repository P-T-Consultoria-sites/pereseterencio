// Site P&T – gera páginas estáticas (sem servidor) para o GitHub Pages.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
    pages: [{ path: "/" }, { path: "/en" }],
  },
});
