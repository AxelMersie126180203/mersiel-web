"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { toolsList } from "@/lib/site-content";
import { motion } from "framer-motion";

const stateClasses: Record<string, string> = {
  Disponible: "is-available",
  "En desarrollo": "is-developing",
  Próximamente: "is-coming",
};

export function ToolsList() {
  return (
    <section className="tools-section">
      <Reveal className="tools-heading" y={22}>
        <p className="eyebrow">Para todos</p>
        <h2 className="tools-title">Herramientas útiles, sin instalación.</h2>
        <p className="tools-sub">
          Pequeñas utilidades que voy desarrollando para ayudar a personas y
          desarrolladores. Web, móvil y APKs descargables. Algunas ya están
          disponibles, otras vienen pronto.
        </p>
      </Reveal>

      <RevealStagger className="tools-grid" stagger={0.1} amount={0.15}>
        {toolsList.map((tool, i) => (
          <RevealItem key={tool.title} y={28}>
            <motion.article
              className="tool-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <div className="tool-card-head">
                <span className="tool-card-icon">
                  <Icon name={tool.icon} size={26} strokeWidth={1.5} />
                </span>
                <span
                  className={`tool-card-state ${stateClasses[tool.state] ?? ""}`}
                >
                  {tool.state}
                </span>
              </div>
              <span className="tool-card-cat">{tool.category}</span>
              <h3 className="tool-card-title">{tool.title}</h3>
              <p className="tool-card-body">{tool.description}</p>
              <div className="tool-card-footer">
                <span className="tool-card-num">0{i + 1}</span>
                <button
                  className="tool-card-link"
                  type="button"
                  disabled={tool.state !== "Disponible"}
                >
                  {tool.state === "Disponible" ? "Probar" : "Avísame"}
                  <Icon name="ArrowUpRight" size={14} strokeWidth={2} />
                </button>
              </div>
            </motion.article>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
