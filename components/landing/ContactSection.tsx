import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.2, 0, 0, 1] as const;

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const t = useT();
  const c = translations.contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    try {
      const res = await fetch("https://formspree.io/f/mzdjonvd", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast.success(t(c.success));
        form.reset();
      } else {
        toast.error(t(c.error));
      }
    } catch {
      toast.error(t(c.error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-center">{t(c.title)}</h2>
          <p className="text-muted-foreground text-center mb-10">{t(c.subtitle)}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder={t(c.name)} required className="bg-background border-border/50 focus:ring-2 focus:ring-primary h-12" />
            <Input name="company" placeholder={t(c.company)} required className="bg-background border-border/50 focus:ring-2 focus:ring-primary h-12" />
            <Input name="email" type="email" placeholder={t(c.email)} required className="bg-background border-border/50 focus:ring-2 focus:ring-primary h-12" />
            <Input name="phone" type="tel" placeholder={t(c.phone)} className="bg-background border-border/50 focus:ring-2 focus:ring-primary h-12" />
            <Textarea name="message" placeholder={t(c.message)} rows={4} className="bg-background border-border/50 focus:ring-2 focus:ring-primary resize-none" />
            <Button variant="hero" size="lg" className="w-full" type="submit" disabled={loading}>
              {loading ? t(c.sending) : t(c.submit)}
            </Button>
          </form>

          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/50 text-center mt-6">{t(c.response)}</p>
        </motion.div>
      </div>
    </section>
  );
};
