import { SiteLayout } from "@/components/SiteLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import type { SiteContent } from "@/i18n/content";

export function HomePage({ t }: { t: SiteContent }) {
  return (
    <SiteLayout t={t}>
      <HeroSection t={t} />
      <PositioningSection t={t} />
      <SolutionsSection t={t} />
      <ProcessSection t={t} />
      <ManifestoSection t={t} />
      <AudienceSection t={t} />
      <ClientsSection t={t} />
      <ContactSection t={t} />
    </SiteLayout>
  );
}
