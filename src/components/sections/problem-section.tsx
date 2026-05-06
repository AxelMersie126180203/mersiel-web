"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";

const problemItems = [
  { icon: "Clock", title: "Procesos manuales", desc: "Horas perdidas en tareas repetitivas." },
  { icon: "Layers", title: "Herramientas sueltas", desc: "Sistemas que no se conectan entre sí." },
  { icon: "HelpCircle", title: "Soluciones genéricas", desc: "Plantillas que no encajan con tu negocio." },
];

export function ProblemSection() {
  return (
    <section className="problem-section problem-v2" id="problema">
      <Reveal y={28}>
        <p className="eyebrow">El punto de partida</p>
        <h2 className="problem-headline">
          Si algo te suena familiar,
          <br />
          <span className="problem-headline-accent">aquí empezamos.</span>
        </h2>
      </Reveal>

      <motion.div
        className="problem-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14 } },
        }}
      >
        {problemItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="problem-pill"
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <div className="problem-pill-icon">
              <Icon name={item.icon} size={22} strokeWidth={1.6} />
            </div>
            <div className="problem-pill-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <span className="problem-pill-num">0{i + 1}</span>
          </motion.div>
        ))}
      </motion.div>

      <Reveal y={20} delay={0.3} className="problem-cta-wrap">
        <a href="#contacto" className="problem-cta" data-testid="problem-cta">
          <span>Empezar contigo</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}
