import Image from "next/image";
import Aurora from "@/components/ui/aurora";
import { SiteLoader } from "@/components/layout/site-loader";
import { heroStats } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <Aurora colorStops={["#6a1b9a", "#d81b60", "#8e24aa"]} amplitude={1.2} blend={0.6} speed={0.8} />
      <div className="hero-noise" aria-hidden />
      <div className="hero-inner">
        <div className="hero-stage">
          <div className="hero-copy fade-up fade-delay-2">
            <p className="eyebrow fade-up fade-delay-3" style={{ marginBottom: "1rem" }}>Soluciones digitales a medida</p>
            <h1 className="hero-brand-title">Mersiel</h1>
            <p className="hero-brand-slogan">
              Soluciones digitales a medida para negocios que buscan crecer y optimizar sus procesos.
            </p>

            <div className="hero-actions fade-up fade-delay-4" style={{ justifyContent: "center" }}>
              <a href="#contacto" className="btn btn-primary">Iniciar Proyecto</a>
              <a href="#servicios" className="btn btn-ghost">Nuestros Servicios</a>
            </div>
          </div>
        </div>

        <div className="hero-footer fade-up fade-delay-3">
          <div className="metrics-strip">
            {heroStats.map((metric) => (
              <div className="metrics-strip__item" key={metric.label}>
                <span className="metrics-strip__value">{metric.value}</span>
                <span className="metrics-strip__label">{metric.label}</span>
              </div>
            ))}
          </div>

          <a className="hero-scroll-cue" href="#servicios">
            <span className="hero-scroll-cue__label">Explorar</span>
            <span className="hero-scroll-cue__line" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
