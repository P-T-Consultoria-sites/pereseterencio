
import logoUrl from "@/assets/logo.png";
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

export function SiteFooter({ t }: { t: SiteContent }) {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href={t.paths.home} className="flex items-center gap-2.5">
              <img src={logoUrl} alt={t.brand.full} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-base font-semibold text-foreground">
                {t.brand.short}
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{t.footer.tagline}</p>
            <a
              href="https://instagram.com/pt.servicos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>@pt.servicos</span>
            </a>
          </div>
          {t.footer.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {t.brand.full}. {t.footer.rights}
          </p>
          <p className="font-medium">{t.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
