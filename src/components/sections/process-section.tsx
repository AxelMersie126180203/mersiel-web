"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { processSteps } from "@/lib/site-content";
import { motion } from "framer-motion";

export function ProcessSection() {
  return (
    <section className="process-section" id="proceso">
      <Reveal y={22}>
        <div className="section-heading">
          <p className="eyebrow">Proceso</p>
          <h2>De idea a sistema que funciona.</h2>
          <p>
            Un proceso simple, ordenado y transparente para que sepas
            exactamente qué esperar en cada etapa.
          </p>
        </div>
      </Reveal>
      <div className="process-wrap">
        <motion.div
          className="process-line"
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <RevealStagger className="process-grid" stagger={0.15} amount={0.15}>
          {processSteps.map((step, index) => (
            <RevealItem key={step.step} as="article" y={26} className="process-card">
              <div className="process-num-wrap">
                <span className="process-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="process-icon">
                  <Icon name={step.icon} size={18} strokeWidth={1.7} />
                </span>
              </div>
              <h3>{step.step}</h3>
              <p>{step.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
