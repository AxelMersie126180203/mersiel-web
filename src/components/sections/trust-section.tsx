"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { trustPoints } from "@/lib/site-content";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="trust-section" id="confianza">
      <div className="trust-inner">
        <Reveal className="trust-heading" y={22}>
          <p className="eyebrow">Prueba social</p>
          <h2>Cómo trabajamos en cada proyecto.</h2>
          <p className="trust-subheading">
            Menos caos, más claridad. Cada proyecto lo desarrollamos con
            enfoque en resultados reales, priorizando funcionalidad y
            crecimiento a largo plazo.
          </p>
        </Reveal>
        <RevealStagger className="trust-grid" stagger={0.12} amount={0.2}>
          {trustPoints.map((point, index) => (
            <RevealItem key={point.title} y={28} className="trust-card-wrap">
              <motion.div
                className="trust-card"
                whileHover={{ y: -6, borderColor: "rgba(142, 36, 170, 0.45)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="trust-number">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
