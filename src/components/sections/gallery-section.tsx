"use client";

import { TiltCard } from "@/components/motion/magnetic";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { galleryProjects } from "@/lib/site-content";

export function GallerySection() {
  return (
    <section className="gallery-section" id="galeria">
      <Reveal className="gallery-heading" y={24}>
        <p className="eyebrow">Tipos de proyectos</p>
        <h2 className="gallery-title">Lo que puedo construir para ti.</h2>
        <p className="gallery-subtitle">
          Una muestra conceptual de los productos y sistemas que diseño a la
          medida de cada cliente. Listos para adaptarse a tu negocio.
        </p>
      </Reveal>

      <RevealStagger className="gallery-grid" stagger={0.1} amount={0.1}>
        {galleryProjects.map((p, i) => (
          <RevealItem key={p.title} className="gallery-item-wrap" y={34}>
            <TiltCard className="gallery-item" max={6}>
              <div
                className="gallery-canvas"
                style={{ background: p.gradient }}
                aria-hidden
              >
                <div className="gallery-grid-overlay" />
                <div className="gallery-icon-float">
                  <Icon name={p.icon} size={48} strokeWidth={1.4} />
                </div>
                <div className="gallery-mock">
                  <span className="gallery-mock-dot" />
                  <span className="gallery-mock-dot" />
                  <span className="gallery-mock-dot" />
                  <div className="gallery-mock-bar gallery-mock-bar--w1" />
                  <div className="gallery-mock-bar gallery-mock-bar--w2" />
                  <div className="gallery-mock-bar gallery-mock-bar--w3" />
                </div>
              </div>
              <div className="gallery-meta">
                <span className="gallery-cat">{p.category}</span>
                <h3 className="gallery-name">{p.title}</h3>
                <div className="gallery-row">
                  <span className="gallery-stat">{p.stat}</span>
                  <span className="gallery-index">0{i + 1}</span>
                </div>
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
