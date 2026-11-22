
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoUrl from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { SiteContent } from "@/i18n/content";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}


export function SiteHeader({ t }: { t: SiteContent }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.nav.solutions, href: `${t.paths.home}#${t.locale === "pt" ? "solucoes" : "solutions"}` },
    { label: t.nav.process, href: `${t.paths.home}#${t.locale === "pt" ? "processo" : "process"}` },
    { label: t.nav.about, href: t.paths.about },
    { label: t.nav.blog, href: t.paths.blog },
    { label: t.nav.contact, href: `${t.paths.home}#${t.locale === "pt" ? "contato" : "contact"}` },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href={t.paths.home} className="flex items-center gap-2.5">
          <img src={logoUrl} alt={t.brand.full} className="h-9 w-9 rounded-full object-cover lg:h-10 lg:w-10" />
          <span className="hidden font-display text-sm font-semibold tracking-tight text-foreground sm:inline-block lg:text-base">
            {t.brand.full}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/pt.servicos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <LanguageToggle t={t} />
          <Button asChild size="sm" className="hidden bg-primary text-primary-foreground hover:bg-primary/90 lg:inline-flex">
            <a href={`${t.paths.home}#${t.locale === "pt" ? "contato" : "contact"}`}>{t.nav.cta}</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a
                href={`${t.paths.home}#${t.locale === "pt" ? "contato" : "contact"}`}
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
