import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <section className="process-section" id="metodo">
      <SectionHeading
        className="fade-up fade-delay-2"
        eyebrow="Metodo"
        title="De idea a sistema confiable."
      />
      <div className="process-grid">
        {processSteps.map((processStep, index) => (
          <Card as="article" className={`process-card fade-up fade-delay-${index + 1}`} key={processStep.step}>
            <span>{index + 1}</span>
            <h3>{processStep.step}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}
