import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useT, useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.2, 0, 0, 1] as const;

export const ProductSection = () => {
  const t = useT();
  const { lang } = useLang();
  const p = translations.product;

  return (
    <section id="produto" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="relative" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <NodeAnimation />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">{t(p.tag)}</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2">{t(p.title)}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">{t(p.subtitle)}</p>

            <ul className="space-y-3 mb-8">
              {p.features[lang].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              {t(p.cta)}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const NodeAnimation = () => {
  const nodes = [
    { x: 30, y: 30, label: "api-gw" },
    { x: 70, y: 20, label: "auth" },
    { x: 20, y: 70, label: "worker" },
    { x: 80, y: 65, label: "logs" },
    { x: 60, y: 80, label: "metrics" },
  ];
  const center = { x: 50, y: 50 };

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {nodes.map((node, i) => (
          <motion.line key={i} x1={center.x} y1={center.y} x2={node.x} y2={node.y}
            stroke="hsl(217, 91%, 60%)" strokeWidth="0.3" strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.2, 0, 0, 1] }} />
        ))}
        <motion.circle cx={center.x} cy={center.y} r="5" fill="hsl(262, 83%, 58%)" className="arcane-glow"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} />
        <text x={center.x} y={center.y + 10} textAnchor="middle" fill="hsl(262, 83%, 58%)" fontSize="2.5" fontFamily="JetBrains Mono, monospace">Core</text>
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle cx={node.x} cy={node.y} r="3" fill="hsl(217, 91%, 60%)" fillOpacity={0.2}
              stroke="hsl(217, 91%, 60%)" strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} />
            <motion.circle cx={node.x} cy={node.y} r="1.2" fill="hsl(217, 91%, 60%)" className="pulse-dot"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.1 }} />
            <text x={node.x} y={node.y - 5} textAnchor="middle" fill="hsl(215, 20%, 65%)" fontSize="2" fontFamily="JetBrains Mono, monospace">{node.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
};
