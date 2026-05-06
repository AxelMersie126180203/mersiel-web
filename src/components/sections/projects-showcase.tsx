"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { featuredWork } from "@/lib/site-content";
import { motion } from "framer-motion";

const projectIcons = ["LayoutDashboard", "Boxes", "Cpu"];

export function ProjectsShowcase() {
  return (
    <section className="projects-showcase">
      <Reveal className="projects-heading" y={22}>
        <p className="eyebrow">Casos de uso</p>
        <h2 className="projects-title">Aplicaciones reales del software a medida.</h2>
        <p className="projects-sub">
          Estos son algunos escenarios donde el desarrollo a medida supera por
          mucho a las soluciones genéricas. Cada uno es un punto de partida
          adaptable a tu negocio.
        </p>
      </Reveal>

      <RevealStagger className="projects-grid" stagger={0.14} amount={0.15}>
        {featuredWork.map((work, i) => (
          <RevealItem key={work.title} y={26}>
            <motion.article
              className="project-detail"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <div className="project-detail-head">
                <span className="project-detail-icon">
                  <Icon name={projectIcons[i] ?? "LayoutDashboard"} size={26} strokeWidth={1.5} />
                </span>
                <span className="project-detail-num">Caso 0{i + 1}</span>
              </div>
              <h3 className="project-detail-title">{work.title}</h3>
              <p className="project-detail-body">{work.description}</p>
              <div className="project-detail-footer">
                <span className="project-detail-impact">
                  <Icon name="Sparkles" size={14} strokeWidth={2} />
                  {work.impact}
                </span>
              </div>
            </motion.article>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
