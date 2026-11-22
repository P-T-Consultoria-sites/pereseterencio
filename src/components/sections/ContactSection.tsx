import { useState, type FormEvent } from "react";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import type { SiteContent } from "@/i18n/content";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/lib/site-config";

const channelIcons = [Mail, Clock, MessageCircle];

export function ContactSection({ t }: { t: SiteContent }) {
  const anchor = t.locale === "pt" ? "contato" : "contact";
  const [submitting, setSubmitting] = useState(false);
  const pt = t.locale === "pt";

  function openWhatsApp(text: string) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  }

  // Monta a mensagem pronta e abre o WhatsApp da P&T. Nada é enviado antes de a pessoa tocar em "enviar" no WhatsApp.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const lines = pt
      ? [
          `Olá! Sou ${name}${company ? `, da empresa ${company}` : ""}.`,
          "",
          message,
          ...(email ? ["", `Meu e-mail: ${email}`] : []),
          "",
          "(Mensagem enviada pelo site pereseterencio.com.br)",
        ]
      : [
          `Hello! I'm ${name}${company ? ` from ${company}` : ""}.`,
          "",
          message,
          ...(email ? ["", `My email: ${email}`] : []),
          "",
          "(Message sent from pereseterencio.com.br)",
        ];
    setSubmitting(true);
    openWhatsApp(lines.join(String.fromCharCode(10)));
    toast.success(t.contact.form.success);
    form.reset();
    setSubmitting(false);
  }

  return (
    <section
      id={anchor}
      className="py-20 lg:py-28"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.contact.subtitle}</p>

          <ul className="mt-8 space-y-4">
            {t.contact.channels.map((c, i) => {
              const Icon = channelIcons[i] ?? Mail;
              return (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    {c.label === "WhatsApp" ? (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pt ? "Olá! Vim pelo site da P&T e gostaria de conversar sobre a minha empresa." : "Hello! I found the P&T website and would like to talk about my business.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-7 lg:p-8"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <Label htmlFor="name">{t.contact.form.name}</Label>
              <Input id="name" name="name" required className="mt-1.5" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="company">{t.contact.form.company}</Label>
              <Input id="company" name="company" className="mt-1.5" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">{t.contact.form.email}</Label>
              <Input id="email" name="email" type="email" className="mt-1.5" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">{t.contact.form.message}</Label>
              <Textarea id="message" name="message" rows={5} required className="mt-1.5" />
            </div>
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {t.contact.form.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
