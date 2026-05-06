import type { Metadata } from "next";
import { ClosingSection } from "@/components/sections";
import { PageHero } from "@/components/sections/page-hero";
import { ToolsList } from "@/components/sections/tools-list";

export const metadata: Metadata = {
  title: "Herramientas | Mersiel",
  description: "Herramientas y apps creadas por Mersiel para ayudar a usuarios y desarrolladores.",
};

export default function HerramientasPage() {
  return (
    <>
      <PageHero
        eyebrow="Herramientas"
        title="Pequeñas herramientas con impacto real."
        description="Apps web, APKs y utilidades que voy desarrollando para resolver problemas del día a día. La mayoría son gratuitas y de uso directo."
        accent="purple"
        icon="Zap"
      />
      <section id="lista" className="page-anchor-section">
        <ToolsList />
      </section>
      <ClosingSection />
    </>
  );
}
