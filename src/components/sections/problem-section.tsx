"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="problem-section" id="problema">
      <Reveal className="problem-inner" y={30} amount={0.2}>
        <div className="problem-bg-visual" aria-hidden>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 0.35, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src="/Images/ImagenSoftware.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>
        <p className="eyebrow">El punto de partida</p>
        <div className="problem-content">
          <p className="problem-text">
            Muchos negocios pierden tiempo en procesos manuales, usan herramientas
            que no se conectan entre sí o dependen de soluciones que no están
            hechas para lo que realmente necesitan.
          </p>
          <p className="problem-highlight">
            Ahí es donde empezamos a trabajar contigo.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: "0.8rem" }}>
            <a href="#contacto" className="btn btn-primary">Contactarnos</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
