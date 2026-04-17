import { motion } from "framer-motion";
import { Activity, GitBranch, Cloud, Layers } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.16, 1, 0.3, 1] as const;

const serviceIcons = [Activity, GitBranch, Cloud];
const tagColors: Record<number, string> = {
  0: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  1: "bg-primary/15 text-primary border-primary/20",
  2: "bg-accent/15 text-accent border-accent/20",
};

export const ToolsSection = () => {
  const t = useT();
  const { lang } = useLang();
  const s = translations.tools;

  return (
    <section id="ferramentas" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-2xl mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease }}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">{t(s.tag)}</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            {t(s.title)}{" "}<span className="text-gradient-primary">{t(s.titleHighlight)}</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(s.subtitle)}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {s.services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={i}
                className="card-depth rounded-2xl p-6 bg-muted/40 group hover:bg-muted/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t(service.title)}</h3>
                </div>

                <div className="space-y-5 flex-1">
                  {service.subItems.map((sub, j) => (
                    <div key={j}>
                      <p className="text-sm font-medium text-foreground/90 mb-2">{t(sub.label)}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {sub.details[lang].map((detail) => (
                          <span key={detail} className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${tagColors[i]}`}>
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="mt-16 flex flex-col items-center gap-3 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-muted/30">
            <Layers className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              {t(s.cloudNativeBadge)}{" "}
              <span className="text-primary font-medium">Cloud Native Foundation</span>
            </span>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-md">
            {t(s.tagline1)}{" "}<span className="text-primary">{t(s.tagline2)}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
