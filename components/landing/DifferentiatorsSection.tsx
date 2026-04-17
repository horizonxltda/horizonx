import { motion } from "framer-motion";
import { Shield, Zap, Eye, Clock, TrendingUp, Headphones } from "lucide-react";
import { useT, useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.2, 0, 0, 1] as const;
const itemIcons = [TrendingUp, Zap, Shield, Eye, Clock, Headphones];

const metrics = [
  { value: "99.99%", labelKey: "uptime" as const },
  { value: "<50ms", labelKey: "latency" as const },
  { value: "3x", labelKey: "faster" as const },
];

export const DifferentiatorsSection = () => {
  const t = useT();
  const { lang } = useLang();
  const d = translations.diff;

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">{t(d.title)}</h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div key={m.labelKey} className="card-depth rounded-2xl p-6 bg-muted/50 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}>
              <div className="font-mono text-3xl md:text-4xl font-semibold text-primary tabular-nums mb-1">{m.value}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{t(d.metrics[m.labelKey])}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.items[lang].map((title, i) => {
            const Icon = itemIcons[i];
            return (
              <motion.div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 group hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
