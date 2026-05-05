import { differentiatorPoints } from "@/lib/site-content";

export function DifferentiatorSection() {
  return (
    <section className="differentiator-section" id="diferenciador">

      {/* Top row: copy (left) + image placeholder (right) */}
      <div className="differentiator-inner">
        <div className="differentiator-copy fade-up fade-delay-2">
          <p className="eyebrow">Por qué Mersiel</p>
          <h2 className="differentiator-title">
            No trabajamos con soluciones genéricas.
          </h2>
          <p className="differentiator-body">
            Entendemos cómo funciona tu negocio y desarrollamos tecnología que
            realmente se adapta a ti, no al revés.
          </p>
          <p className="differentiator-kicker">
            Nuestro enfoque no es solo programar, es ayudarte a crecer.
          </p>
        </div>

        {/* Image placeholder — replace with dashboard/software mockup */}
        <div className="img-placeholder fade-up fade-delay-3" aria-hidden="true">
          <span className="img-placeholder__badge">Imagen</span>
          <svg
            className="img-placeholder__icon"
            width="52" height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
            <path d="M7 8h.01M10 8h4" />
            <path d="M7 11h10" />
          </svg>
          <p className="img-placeholder__label">
            Dashboard o interfaz de software personalizado diseñado a medida del negocio
          </p>
        </div>
      </div>

      {/* Bottom row: 4 key points in a 2-col grid */}
      <ul className="differentiator-points fade-up fade-delay-4">
        {differentiatorPoints.map((point, i) => (
          <li key={i} className="differentiator-point">
            <span className="differentiator-dot" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
