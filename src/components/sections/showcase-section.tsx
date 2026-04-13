import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredWork } from "@/lib/site-content";

export function ShowcaseSection() {
  return (
    <section className="showcase" id="proyectos">
      <SectionHeading
        className="fade-up fade-delay-2"
        eyebrow="Proyectos"
        title="Lo que construimos funciona en la practica."
      />
      <div className="showcase-grid">
        {featuredWork.map((work, index) => (
          <Card as="article" className={`showcase-card fade-up fade-delay-${index + 2}`} key={work.title}>
            <p className="showcase-label">Caso 0{index + 1}</p>
            <h3>{work.title}</h3>
            <span>{work.impact}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
