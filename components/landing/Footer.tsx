import logo from "@/assets/logo_horizonx.png";
import { useT } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export const Footer = () => {
  const t = useT();
  const f = translations.footer;

  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <a
            href="#"
            className="group flex items-center gap-4"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Horizon X — topo"
          >
            <img
              src={logo}
              alt="Horizon X"
              className="h-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
            />
            <span className="font-mono text-xs text-muted-foreground hidden md:inline">{t(f.tagline)}</span>
          </a>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground">
            <a href="#contato" className="hover:text-foreground transition-colors">{t(f.contact)}</a>
            <span className="hover:text-foreground transition-colors cursor-default">{t(f.about)}</span>
            <span className="hover:text-foreground transition-colors cursor-default">{t(f.terms)}</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground text-center">
          {t(f.group)}{" "}
          <a href="https://avppericias.com.br" target="_blank" rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2">
            AVP Perícias
          </a>
        </div>
      </div>
    </footer>
  );
};
