import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.2, 0, 0, 1] as const;

export const AuthoritySection = () => {
  const t = useT();
  const a = translations.authority;

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">{t(a.title)}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t(a.subtitle)}</p>
        </motion.div>
      </div>
    </section>
  );
};
