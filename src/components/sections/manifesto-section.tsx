import { Card } from "@/components/ui/card";

export function ManifestoSection() {
  return (
    <section className="manifesto" id="filosofia">
      <Card as="article" className="manifesto-card manifesto-wide fade-up fade-delay-2">
        <p className="eyebrow">Vision</p>
        <h3>Tu empresa no necesita una web bonita. Necesita una presencia que abra oportunidades.</h3>
      </Card>
    </section>
  );
}
