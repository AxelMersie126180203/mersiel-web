import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <section className="process-section" id="proceso">
      <SectionHeading
        className="fade-up fade-delay-2"
        eyebrow="Proceso"
        title="De idea a sistema que funciona."
        description="Un proceso simple, ordenado y transparente para que sepas exactamente qué esperar en cada etapa."
      />
      <div className="process-grid">
        {processSteps.map((processStep, index) => (
          <Card as="article" className={`process-card fade-up fade-delay-${index + 1}`} key={processStep.step}>
            <span>{index + 1}</span>
            <h3>{processStep.step}</h3>
            <p>{processStep.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
