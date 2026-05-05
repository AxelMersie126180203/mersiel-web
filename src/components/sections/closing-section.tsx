import { Button } from "@/components/ui/button";

export function ClosingSection() {
  return (
    <section className="closing-cta fade-up fade-delay-4" id="contacto">
      <div>
        <p className="eyebrow">Siguiente paso</p>
        <h2>Si sientes que tu negocio puede funcionar mejor, hablemos.</h2>
        <p className="closing-cta-desc">
          Con la herramienta correcta, todo funciona mejor. Cuéntanos tu situación y encontramos la solución juntos.
        </p>
      </div>
      <div className="closing-actions">
        <a href="https://calendly.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Agendar llamada
        </a>
        <Button href="mailto:hola@mersiel.dev" variant="ghost">
          Enviar correo
        </Button>
      </div>
    </section>
  );
}
