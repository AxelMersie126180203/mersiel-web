"use client";

import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { servicePlans } from "@/lib/site-content";
import { motion } from "framer-motion";

export function ServiceModelsSection() {
  return (
    <section className="plans-section" id="planes">
      <Reveal className="plans-heading" y={24}>
        <p className="eyebrow">Modelos de servicio</p>
        <h2 className="plans-title">Elige cómo quieres trabajar conmigo.</h2>
        <p className="plans-sub">
          Cada negocio es distinto. Por eso ofrezco distintas formas de colaborar:
          desde una página web sencilla hasta software que mantengo y actualizo
          contigo cada mes.
        </p>
      </Reveal>

      <RevealStagger className="plans-grid" stagger={0.12} amount={0.1}>
        {servicePlans.map((plan, i) => (
          <RevealItem key={plan.id} className="plan-card-wrap" y={32}>
            <motion.article
              className={`plan-card plan-card--${plan.accent}${plan.featured ? " is-featured" : ""}`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              {plan.featured && <div className="plan-card-glow" aria-hidden />}
              <div className="plan-card-head">
                <div className="plan-card-icon">
                  <Icon name={plan.icon} size={26} strokeWidth={1.6} />
                </div>
                <span className="plan-card-badge">{plan.badge}</span>
              </div>

              <h3 className="plan-card-name">{plan.name}</h3>
              <p className="plan-card-tagline">{plan.tagline}</p>

              <div className="plan-card-price">
                <span className="plan-price-label">{plan.price}</span>
                <span className="plan-price-value">{plan.priceValue}</span>
                <span className="plan-price-unit">{plan.priceUnit}</span>
              </div>

              <p className="plan-card-desc">{plan.description}</p>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="plan-feature-check">
                      <Icon name="CheckCircle2" size={14} strokeWidth={2} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a className="plan-card-cta" href="/#contacto">
                Solicitar este plan
                <Icon name="ArrowUpRight" size={16} strokeWidth={2} />
              </a>

              <span className="plan-card-num">0{i + 1}</span>
            </motion.article>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal className="plans-note" y={20} delay={0.3}>
        <Icon name="HelpCircle" size={18} strokeWidth={1.8} />
        <p>
          ¿No estás seguro qué necesitas? Cuéntame tu situación y te recomiendo
          el modelo adecuado, sin compromiso.
        </p>
      </Reveal>
    </section>
  );
}
