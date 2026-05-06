"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { services } from "@/lib/site-content";
import { motion } from "framer-motion";

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="servicios">
      <div className="capabilities-intro">
        <Reveal y={22}>
          <div className="section-heading">
            <p className="eyebrow">Servicios</p>
            <h2>Soluciones con resultado claro.</h2>
            <p>
              Cada servicio que ofrezco está pensado para resolver un
              problema real en tu negocio, no solo para agregar tecnología
              por agregar.
            </p>
          </div>
        </Reveal>
      </div>
      <RevealStagger className="capabilities-grid" stagger={0.12} amount={0.15}>
        {services.map((service) => (
          <RevealItem key={service.title} className="capability-item-wrap" y={26}>
            <motion.div
              className="capability-item"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="capability-head">
                <span className="capability-icon">
                  <Icon name={service.icon} size={24} strokeWidth={1.6} />
                </span>
                <p className="capability-index">{service.index}</p>
              </div>
              <h3>{service.title}</h3>
              <p className="capability-desc">{service.description}</p>
              <ul className="tag-list" aria-label={`Categorias de ${service.title}`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
