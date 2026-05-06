"use client";

import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";

const tags = [
  "Menos caos, más claridad",
  "Tecnología que sí entiendes",
  "Hecho a la medida",
  "Resultados reales",
];

export function AboutSection() {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-inner">
        <Reveal className="about-copy" y={22}>
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
            {tags.map((t, i) => (
              <motion.span
                key={t}
                className="about-tag"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                whileHover={{ y: -3, borderColor: "rgba(216, 27, 96, 0.55)" }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal y={28} delay={0.15}>
          <div className="about-visual" aria-hidden>
            <motion.div
              className="about-visual-orb"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="about-visual-orb about-visual-orb--2"
              animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="about-visual-lines">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="about-visual-line"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <div className="about-visual-badge">Mersiel · 2026</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
