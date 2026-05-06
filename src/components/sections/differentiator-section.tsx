"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { differentiatorPoints } from "@/lib/site-content";
import { motion } from "framer-motion";

export function DifferentiatorSection() {
  return (
    <section className="differentiator-section" id="diferenciador">
      <div className="differentiator-inner">
        <Reveal className="differentiator-copy" y={22}>
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
        </Reveal>

        <Reveal y={24} delay={0.15}>
          <div className="diff-visual" aria-hidden>
            <div className="diff-visual-bg" />
            <div className="diff-visual-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="diff-tile"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.18 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
            </div>
            <div className="diff-visual-ring" />
          </div>
        </Reveal>
      </div>

      <RevealStagger className="differentiator-points" stagger={0.08} amount={0.2} as="ul">
        {differentiatorPoints.map((point, i) => (
          <RevealItem as="li" key={i} className="differentiator-point" y={16}>
            <motion.span
              className="differentiator-dot"
              aria-hidden
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {point}
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
