import type { Metadata } from "next";
import { CapabilitiesSection, ServiceModelsSection, CommitmentsSection, ClosingSection } from "@/components/sections";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Servicios | Mersiel",
  description: "Servicios de desarrollo de software, web, apps y automatizaciones a medida.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones digitales que crecen contigo."
        description="Desde una página web esencial hasta sistemas a medida con mantenimiento continuo. Elige el modelo que mejor encaja con tu negocio."
        accent="magenta"
        icon="Workflow"
      />
      <section id="desarrollo" className="page-anchor-section">
        <CapabilitiesSection />
      </section>
      <section id="planes" className="page-anchor-section">
        <ServiceModelsSection />
      </section>
      <section id="compromisos" className="page-anchor-section">
        <CommitmentsSection />
      </section>
      <ClosingSection />
    </>
  );
}
