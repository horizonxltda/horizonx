import { motion } from "framer-motion";
import {
  Zap, RefreshCw, Link2, TrendingUp,
  ShoppingCart, BarChart3, Database, Store, Mail, CheckCircle2,
  ArrowRight, ArrowDown,
} from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.16, 1, 0.3, 1] as const;
const benefitIcons = [RefreshCw, Link2, TrendingUp];

const WhatsAppIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FlowAnimation = () => {
  const t = useT();
  const steps = translations.automation.steps;

  const stepStyle = "w-14 h-14 rounded-xl border border-border/60 bg-muted/40 flex items-center justify-center relative overflow-hidden group cursor-default";

  const StepNode = ({ icon: Icon, label, color, delay, customIcon }: {
    icon?: any; label: string; color: string; delay: number; customIcon?: React.ReactNode;
  }) => (
    <motion.div className="flex flex-col items-center gap-3 relative"
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay, ease }}>
      <motion.div className={stepStyle} whileHover={{ scale: 1.08, borderColor: color }} transition={{ duration: 0.2 }}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
          style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }} />
        {customIcon || (Icon && <Icon className="w-6 h-6 relative z-10" style={{ color }} />)}
      </motion.div>
      <span className="text-xs text-muted-foreground font-medium text-center max-w-[90px] leading-tight">{label}</span>
      <motion.div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }}
        initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: delay + 0.3, ease }} />
    </motion.div>
  );

  const Connector = ({ delay, vertical }: { delay: number; vertical?: boolean }) =>
    vertical ? (
      <motion.div className="flex flex-col items-center my-1" initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 0.4, scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay, ease }}>
        <div className="w-px h-6 bg-border" /><ArrowDown className="w-3 h-3 text-muted-foreground/50 -mt-1" />
      </motion.div>
    ) : (
      <motion.div className="mx-2 flex items-center" initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.4, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay, ease }}>
        <div className="w-6 h-px bg-border" /><ArrowRight className="w-3 h-3 text-muted-foreground/50 -ml-1" />
      </motion.div>
    );

  const DesktopFlow = () => (
    <div className="hidden md:flex flex-col items-center gap-0">
      <div className="flex items-center justify-center">
        <StepNode icon={ShoppingCart} label={t(steps.order)} color="hsl(142 71% 45%)" delay={0.15} />
        <Connector delay={0.25} />
        <StepNode icon={BarChart3} label={t(steps.financial)} color="hsl(217 91% 60%)" delay={0.25} />
        <Connector delay={0.35} />
        <StepNode icon={Database} label={t(steps.erp)} color="hsl(262 83% 58%)" delay={0.35} />
      </div>
      <motion.div className="flex items-center gap-28 mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.45, ease }}>
        <div className="flex flex-col items-center"><div className="w-px h-5 bg-border" /><ArrowDown className="w-3 h-3 text-muted-foreground/50 -mt-1" /></div>
        <div className="flex flex-col items-center"><div className="w-px h-5 bg-border" /><ArrowDown className="w-3 h-3 text-muted-foreground/50 -mt-1" /></div>
      </motion.div>
      <div className="flex items-start justify-center gap-16">
        <div className="flex flex-col items-center gap-0">
          <StepNode icon={Store} label={t(steps.marketplace)} color="hsl(25 95% 53%)" delay={0.55} />
          <Connector delay={0.65} vertical />
          <StepNode icon={Mail} label={t(steps.email)} color="hsl(0 84% 60%)" delay={0.65} />
        </div>
        <div className="flex flex-col items-center gap-0">
          <StepNode label={t(steps.whatsapp)} color="hsl(142 71% 45%)" delay={0.55}
            customIcon={<WhatsAppIcon className="w-6 h-6 relative z-10" style={{ color: "hsl(142 71% 45%)" }} />} />
          <Connector delay={0.65} vertical />
          <StepNode icon={CheckCircle2} label={t(steps.done)} color="hsl(217 91% 60%)" delay={0.75} />
        </div>
      </div>
      {[0, 1].map((bi) => (
        <motion.div key={bi} className="absolute w-2.5 h-2.5 rounded-full bg-primary pointer-events-none"
          style={{ left: bi === 0 ? "calc(50% - 72px)" : "calc(50% + 60px)" }}
          initial={{ opacity: 0, top: "90px" }}
          animate={{ opacity: [0, 1, 1, 0], top: ["90px", "140px", "220px", "280px"] }}
          transition={{ duration: 2.5, delay: 1.5 + bi * 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }} />
      ))}
    </div>
  );

  const MobileFlow = () => {
    const mobileSteps = [
      { icon: ShoppingCart, label: t(steps.order), color: "hsl(142 71% 45%)" },
      { icon: BarChart3, label: t(steps.financial), color: "hsl(217 91% 60%)" },
      { icon: Database, label: t(steps.erp), color: "hsl(262 83% 58%)" },
    ];
    const branchA = [
      { icon: Store, label: t(steps.marketplace), color: "hsl(25 95% 53%)" },
      { icon: Mail, label: t(steps.email), color: "hsl(0 84% 60%)" },
    ];
    const branchB = [
      { icon: undefined as any, label: t(steps.whatsapp), color: "hsl(142 71% 45%)", isWhatsApp: true },
      { icon: CheckCircle2, label: t(steps.done), color: "hsl(217 91% 60%)" },
    ];

    return (
      <div className="flex md:hidden flex-col items-center gap-0">
        {mobileSteps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <motion.div className="flex items-center gap-4 w-full max-w-[260px]"
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08, ease }}>
              <div className="w-11 h-11 rounded-lg border border-border/60 bg-muted/40 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5" style={{ color: step.color }} />
              </div>
              <span className="text-sm text-muted-foreground font-medium">{step.label}</span>
            </motion.div>
            <motion.div className="w-px h-6 bg-border/50 my-1" initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 0.4 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08, ease }} />
          </div>
        ))}
        <div className="flex gap-6">
          {[branchA, branchB].map((branch, bi) => (
            <div key={bi} className="flex flex-col items-center gap-0">
              {branch.map((step, si) => (
                <div key={step.label} className="flex flex-col items-center">
                  <motion.div className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + bi * 0.1 + si * 0.08, ease }}>
                    <div className="w-10 h-10 rounded-lg border border-border/60 bg-muted/40 flex items-center justify-center shrink-0">
                      {(step as any).isWhatsApp
                        ? <WhatsAppIcon className="w-5 h-5" style={{ color: step.color }} />
                        : step.icon && <step.icon className="w-5 h-5" style={{ color: step.color }} />}
                    </div>
                    <span className="text-[11px] text-muted-foreground font-medium text-center max-w-[80px] leading-tight">{step.label}</span>
                  </motion.div>
                  {si < branch.length - 1 && (
                    <motion.div className="w-px h-5 bg-border/50 my-1" initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 0.4 }} viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + bi * 0.1, ease }} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <DesktopFlow />
      <MobileFlow />
    </div>
  );
};

export const AutomationSection = () => {
  const t = useT();
  const a = translations.automation;

  return (
    <section id="automacao" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease }}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">{t(a.tag)}</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            {t(a.title)}{" "}<span className="text-gradient-primary">{t(a.titleHighlight)}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(a.subtitle)}</p>
        </motion.div>

        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2, ease }}>
          <FlowAnimation />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {a.benefits.map((b, i) => {
            const Icon = benefitIcons[i];
            return (
              <motion.div key={i} className="text-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1 card-depth"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease }}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(b.title)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(b.desc)}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-muted/30">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              {t(a.tagline1)}{" "}<span className="text-primary font-medium">{t(a.tagline2)}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
