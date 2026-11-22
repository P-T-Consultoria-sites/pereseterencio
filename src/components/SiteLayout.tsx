import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { SiteContent } from "@/i18n/content";

export function SiteLayout({ t, children }: { t: SiteContent; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader t={t} />
      <main className="flex-1">{children}</main>
      <SiteFooter t={t} />
    </div>
  );
}
