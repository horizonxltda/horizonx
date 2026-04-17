import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "pt", setLang: () => {} });

function detectLanguage(): Lang {
  const navLang = navigator.language?.toLowerCase() || "";
  if (navLang.startsWith("es")) return "es";
  if (navLang.startsWith("en")) return "en";
  return "pt";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("hx-lang") as Lang | null;
    return saved || detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem("hx-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
export const useT = () => {
  const { lang } = useLang();
  return <T extends Record<Lang, any>>(obj: T): T[Lang] => obj[lang];
};
