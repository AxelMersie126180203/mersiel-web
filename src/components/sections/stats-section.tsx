"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { impactStats } from "@/lib/site-content";
import { motion } from "framer-motion";

export function StatsSection() {
  return (
    <section className="stats-section" id="impacto">
      <div className="stats-glow" aria-hidden />
      <Reveal className="stats-heading" y={24}>
        <p className="eyebrow">Cómo trabajo</p>
        <h2 className="stats-title">
          Compromisos medibles en cada proyecto.
        </h2>
        <p className="stats-subtitle">
          Estos son los principios concretos con los que abordo cada cliente.
          Sin métricas infladas: solo claridad de cómo trabajo.
        </p>
      </Reveal>

      <RevealStagger className="stats-grid" stagger={0.12} amount={0.2}>
        {impactStats.map((s) => (
          <RevealItem key={s.label} y={28}>
            <motion.div
              className="stat-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <div className="stat-icon">
                <Icon name={s.icon} size={22} strokeWidth={1.6} />
              </div>
              <div className="stat-value">
                {s.value}
                {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
              </div>
              <h3 className="stat-label">{s.label}</h3>
              <p className="stat-desc">{s.description}</p>
            </motion.div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
