import { trustPoints } from "@/lib/site-content";

export function TrustSection() {
  return (
    <section className="trust-section" id="confianza">
      <div className="trust-inner">
        <div className="trust-heading fade-up fade-delay-2">
          <p className="eyebrow">Prueba social</p>
          <h2>Cómo trabajamos en cada proyecto.</h2>
          <p className="trust-subheading">
            Menos caos, más claridad. Cada proyecto lo desarrollamos con
            enfoque en resultados reales, priorizando funcionalidad y
            crecimiento a largo plazo.
          </p>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point, index) => (
            <div
              className={`trust-card fade-up fade-delay-${index + 2}`}
              key={point.title}
            >
              <span className="trust-number">0{index + 1}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
