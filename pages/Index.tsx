import { HeroSection } from "@/components/landing/HeroSection";
import { ValuePropSection } from "@/components/landing/ValuePropSection";
import { ToolsSection } from "@/components/landing/ToolsSection";
import { ConsultingSection } from "@/components/landing/ConsultingSection";
import { AutomationSection } from "@/components/landing/AutomationSection";
import { ProductSection } from "@/components/landing/ProductSection";
import { DifferentiatorsSection } from "@/components/landing/DifferentiatorsSection";
import { AuthoritySection } from "@/components/landing/AuthoritySection";
import { ContactSection } from "@/components/landing/ContactSection";
import { SeoSection } from "@/components/landing/SeoSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <HeroSection />
      <ValuePropSection />
      <ToolsSection />
      <ConsultingSection />
      <AutomationSection />
      <ProductSection />
      <DifferentiatorsSection />
      <AuthoritySection />
      <ContactSection />
      <SeoSection />
      <Footer />
    </main>
  );
};

export default Index;
