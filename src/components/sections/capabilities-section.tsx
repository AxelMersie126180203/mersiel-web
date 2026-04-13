import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-content";

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="servicios">
      <div className="capabilities-intro">
        <SectionHeading
          className="fade-up fade-delay-3"
          eyebrow="A lo que se dedica Mersiel"
          title="Soluciones digitales que se ajustan a tu negocio."
          description="Desde plataformas web hasta sistemas internos y automatización de procesos, cada proyecto se desarrolla a medida para resolver necesidades reales."
        />
      </div>
      <div className="capabilities-grid">
        {services.map((service, index) => (
          <div className={`capability-item fade-up fade-delay-${index + 2}`} key={service.title}>
            <p className="capability-index">{service.index}</p>
            <h3>{service.title}</h3>
            <ul className="tag-list" aria-label={`Categorias de ${service.title}`}>
              {service.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
