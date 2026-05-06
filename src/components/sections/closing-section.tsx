"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { motion, AnimatePresence } from "framer-motion";

export function ClosingSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <section className="closing-cta" id="contacto">
      <Reveal className="closing-grid" y={30}>
        <div className="closing-info">
          <p className="eyebrow">Siguiente paso</p>
          <h2>
            Si sientes que tu negocio puede
            <span className="closing-accent"> funcionar mejor</span>, hablemos.
          </h2>
          <p className="closing-cta-desc">
            Con la herramienta correcta, todo funciona mejor. Cuéntanos tu
            situación y encontramos la solución juntos.
          </p>

          <ul className="closing-bullets">
            <li>
              <span className="closing-bullet-dot" aria-hidden />
              Respuesta en menos de 24h
            </li>
            <li>
              <span className="closing-bullet-dot" aria-hidden />
              Primera consulta sin costo
            </li>
            <li>
              <span className="closing-bullet-dot" aria-hidden />
              Propuesta técnica clara y honesta
            </li>
          </ul>

          <div className="closing-actions">
            <Magnetic
              href="https://calendly.com"
            >
              <span className="btn btn-primary">Agendar llamada</span>
            </Magnetic>
            <Magnetic href="mailto:hola@mersiel.dev">
              <span className="btn btn-ghost">Enviar correo</span>
            </Magnetic>
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="contact-success"
              >
                <div className="contact-success-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l4 4L19 6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>¡Mensaje recibido!</h3>
                <p>Te contactaremos en las próximas 24 horas.</p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="contact-fields"
              >
                <p className="contact-label">Cuéntanos tu proyecto</p>

                <label className="field">
                  <span>Nombre</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span>Correo</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                  />
                </label>

                <label className="field">
                  <span>¿Qué necesitas?</span>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    placeholder="Una breve idea del proyecto o problema a resolver"
                  />
                </label>

                <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
                  {loading ? "Enviando…" : "Enviar mensaje"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </Reveal>
    </section>
  );
}
