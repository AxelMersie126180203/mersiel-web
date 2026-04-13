import { Button } from "@/components/ui/button";

export function ClosingSection() {
  return (
    <section className="closing-cta fade-up fade-delay-4" id="contacto">
      <div>
        <p className="eyebrow">Contacto</p>
        <h2>Hablemos de tu proyecto.</h2>
      </div>
      <div className="closing-actions">
        <Button href="mailto:hola@mersiel.dev">Enviar correo</Button>
        <Button href="#inicio" variant="ghost">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
}
