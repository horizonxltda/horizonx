import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLang, useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";
import logo from "@/assets/logo_horizonx.png";

const langLabels: Record<Lang, string> = { pt: "PT", en: "EN", es: "ES" };

export const Header = () => {
  const t = useT();
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t(translations.header.services), href: "#ferramentas" },
    { label: t(translations.header.product), href: "#produto" },
    { label: t(translations.header.contact), href: "#contato" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-b border-border/30" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-28 md:h-36">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Horizon X — início"
        >
          <img
            src={logo}
            alt="Horizon X"
            className="h-20 md:h-28 object-contain transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border/40 hover:border-border/80"
            >
              <Globe className="w-3.5 h-3.5" />
              {langLabels[lang]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 bg-card border border-border/60 rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: -4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  {(["pt", "en", "es"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-xs font-mono transition-colors ${
                        lang === l ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {l === "pt" ? "Português" : l === "en" ? "English" : "Español"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass-panel border-t border-border/30 px-6 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border/30">
              {(["pt", "en", "es"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileOpen(false); }}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-colors ${
                    lang === l ? "border-primary text-primary bg-primary/10" : "border-border/40 text-muted-foreground"
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
