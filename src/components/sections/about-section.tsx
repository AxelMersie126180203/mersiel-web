export function AboutSection() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-inner">

        {/* Left: copy + tags */}
        <div className="about-copy fade-up fade-delay-2">
          <p className="eyebrow">Sobre Mersiel</p>
          <h2 className="about-title">
            Tecnología que no complica, que facilita.
          </h2>
          <p className="about-body">
            Mersiel nace con la idea de hacer la tecnología más simple y útil
            para los negocios.
          </p>
          <p className="about-body">
            Creemos que el software no debería complicar, sino facilitar. Por
            eso desarrollamos soluciones claras, funcionales y pensadas para
            el crecimiento real.
          </p>
          <div className="about-tags">
            <span className="about-tag">Menos caos, más claridad</span>
            <span className="about-tag">Tecnología que sí entiendes</span>
            <span className="about-tag">Hecho a la medida</span>
            <span className="about-tag">Resultados reales</span>
          </div>
        </div>

        {/* Right: image placeholder — replace with team photo or workspace */}
        <div className="img-placeholder img-placeholder--tall fade-up fade-delay-3" aria-hidden="true">
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
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <p className="img-placeholder__label">
            Foto del equipo de Mersiel o espacio de trabajo / ambiente de desarrollo
          </p>
        </div>

      </div>
    </section>
  );
}
