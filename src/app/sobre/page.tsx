import type { Metadata } from "next";
import { AboutSection, DifferentiatorSection, ProcessSection, ClosingSection, TrustSection } from "@/components/sections";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Sobre Mersiel | Software a medida",
  description: "Conoce Mersiel: misión, visión, método de trabajo y por qué nos eligen.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Mersiel"
        title="Tecnología que no complica, que facilita."
        description="Conoce quiénes somos, hacia dónde vamos y por qué cada proyecto se construye desde cero contigo."
        accent="purple"
        icon="Sparkles"
      />
      <section id="mision" className="page-anchor-section">
        <AboutSection />
      </section>
      <section id="vision" className="page-anchor-section">
        <DifferentiatorSection />
      </section>
      <section id="metodo" className="page-anchor-section">
        <ProcessSection />
      </section>
      <section id="por-que" className="page-anchor-section">
        <TrustSection />
      </section>
      <ClosingSection />
    </>
  );
}
