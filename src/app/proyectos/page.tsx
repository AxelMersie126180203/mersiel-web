import type { Metadata } from "next";
import { GallerySection, ClosingSection } from "@/components/sections";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";

export const metadata: Metadata = {
  title: "Proyectos | Mersiel",
  description: "Conceptos y proyectos desarrollados por Mersiel.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Lo que estoy construyendo."
        description="Una colección de proyectos en desarrollo, conceptos y mockups. La transparencia es parte del proceso: aquí puedes ver hacia dónde voy."
        accent="red"
        icon="LayoutDashboard"
      />
      <section id="conceptos" className="page-anchor-section">
        <GallerySection />
      </section>
      <section id="casos" className="page-anchor-section">
        <ProjectsShowcase />
      </section>
      <ClosingSection />
    </>
  );
}
