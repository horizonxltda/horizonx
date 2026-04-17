import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DashboardMock } from "./DashboardMock";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.2, 0, 0, 1] as const;

export const HeroSection = () => {
  const t = useT();
  const h = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line w-full absolute" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 block">
                {t(h.tag)}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {t(h.title1)}{" "}
              <span className="text-gradient-primary">{t(h.titleHighlight)}</span>.
              <br />
              <span className="text-muted-foreground text-4xl md:text-5xl lg:text-6xl">
                {t(h.title2)}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              {t(h.description)}{" "}
              <span className="font-mono text-accent">Cloud Native Foundation</span>.{" "}
              {t(h.descSuffix)}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}>
              <Button variant="hero" size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                {t(h.cta1)}
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => document.getElementById('produto')?.scrollIntoView({ behavior: 'smooth' })}>
                {t(h.cta2)}
              </Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease }} className="hidden lg:block">
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
