import { useState, type FormEvent } from "react";
import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import type { SiteContent } from "@/i18n/content";
import { WEB3FORMS_KEY, CONTACT_EMAIL } from "@/lib/site-config";

const channelIcons = [Mail, Clock];

export function ContactSection({ t }: { t: SiteContent }) {
  const anchor = t.locale === "pt" ? "contato" : "contact";
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    try {
      const data = {
        name: String(fd.get("name") ?? ""),
        company: String(fd.get("company") ?? ""),
        email: String(fd.get("email") ?? ""),
        message: String(fd.get("message") ?? ""),
      };
      if (!WEB3FORMS_KEY) {
        // Sem chave configurada: abre o e-mail do visitante com a mensagem pronta.
        const subject = encodeURIComponent(`Contato pelo site – ${data.name}`);
        const body = encodeURIComponent(`${data.message}

${data.name}${data.company ? " – " + data.company : ""}
${data.email}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setSubmitting(false);
        return;
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Contato pelo site – ${data.name}`,
          from_name: "Site P&T",
          name: data.name,
          company: data.company,
          email: data.email,
          message: data.message,
          idioma: t.locale,
          pagina: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Falha no envio");
      toast.success(t.contact.form.success);
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(
        t.locale === "pt"
          ? "Não foi possível enviar sua mensagem. Tente novamente."
          : "We couldn't send your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
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
                    <p className="text-sm font-medium text-foreground">{c.value}</p>
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
              <Input id="email" name="email" type="email" required className="mt-1.5" />
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
