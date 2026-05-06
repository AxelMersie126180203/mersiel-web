import Image from "next/image";

export function ProblemSection() {
  return (
    <section className="problem-section" id="problema">
      <div className="problem-inner fade-up fade-delay-2">
        <div className="problem-bg-visual" aria-hidden>
          <Image
            src="/Images/ImagenSoftware.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="eyebrow">El punto de partida</p>
        <div className="problem-content">
          <p className="problem-text">
            Muchos negocios pierden tiempo en procesos manuales, usan herramientas
            que no se conectan entre sí o dependen de soluciones que no están
            hechas para lo que realmente necesitan.
          </p>
          <p className="problem-highlight">
            Ahí es donde empezamos a trabajar contigo.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: "0.8rem" }}>
            <a href="#contacto" className="btn btn-primary">Contactarnos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
