import { SectionHeading } from "@/components/ui/section-heading";
import { trustPoints } from "@/lib/site-content";

export function ValuesSection() {
  return (
    <section className="values-section" id="confianza">
      <SectionHeading
        className="fade-up fade-delay-2"
        eyebrow="Confianza"
        title="Por que empresas y fundadores confian en Mersiel."
      />
      <div className="values">
        {trustPoints.map((point, index) => (
          <div className={`value-item fade-up fade-delay-${index + 1}`} key={point.title}>
            <p className="value-index">0{index + 1}</p>
            <h3>{point.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
