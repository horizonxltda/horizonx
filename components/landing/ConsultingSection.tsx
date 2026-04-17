import { motion } from "framer-motion";
import { Compass, Layers, Building2, Users, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.16, 1, 0.3, 1] as const;
const pillarIcons = [Compass, Layers, Building2];
const modelIcons = [Users, ArrowRight];

export const ConsultingSection = () => {
  const t = useT();
  const c = translations.consulting;

  return (
    <section id="consultoria" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div className="max-w-2xl mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease }}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">{t(c.tag)}</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            {t(c.title)}{" "}<span className="text-gradient-primary">{t(c.titleHighlight)}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(c.subtitle)}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {c.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div key={i} className="card-depth rounded-2xl p-6 bg-muted/40 group hover:bg-muted/60 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease }}>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(p.title)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(p.desc)}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2, ease }}>
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-8">
            <h3 className="text-xl font-semibold text-center mb-2">{t(c.modelTitle)}</h3>
            <p className="text-sm text-muted-foreground text-center mb-8">{t(c.modelSubtitle)}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {c.models.map((m, i) => {
                const Icon = modelIcons[i];
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 hover:bg-muted/60 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">{t(m.label)}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{t(m.desc)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-primary">
                "{t(c.quote)}{" "}
                <span className="text-foreground font-medium">{t(c.quoteBold)}</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
