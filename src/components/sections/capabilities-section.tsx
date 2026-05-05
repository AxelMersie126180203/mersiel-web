import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-content";

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="servicios">
      <div className="capabilities-intro">
        <SectionHeading
          className="fade-up fade-delay-3"
          eyebrow="Servicios"
          title="Soluciones con resultado claro."
          description="Cada servicio que ofrecemos está pensado para resolver un problema real en tu negocio, no solo para agregar tecnología por agregar."
        />
      </div>
      <div className="capabilities-grid">
        {services.map((service, index) => (
          <div className={`capability-item fade-up fade-delay-${index + 2}`} key={service.title}>
            <p className="capability-index">{service.index}</p>
            <h3>{service.title}</h3>
            <p className="capability-desc">{service.description}</p>
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
