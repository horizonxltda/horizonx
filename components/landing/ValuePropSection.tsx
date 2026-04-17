import { motion } from "framer-motion";
import { Search, Settings, Rocket } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.2, 0, 0, 1] as const;
const icons = [Search, Settings, Rocket];

export const ValuePropSection = () => {
  const t = useT();
  const v = translations.valueProp;

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">{t(v.title)}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t(v.subtitle)}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {v.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="card-depth rounded-2xl p-6 bg-muted/50 group cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(card.title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(card.description)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
