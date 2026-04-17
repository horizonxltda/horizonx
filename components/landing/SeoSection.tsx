import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export const SeoSection = () => {
  const t = useT();
  const s = translations.seo;

  return (
    <section className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/40 mb-4">
          {t(s.tag)}
        </h3>
        <p className="text-xs text-muted-foreground/30 leading-relaxed">
          {t(s.content)}
        </p>
      </div>
    </section>
  );
};
