"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/components/ui/icon";
import { commitments } from "@/lib/site-content";

export function CommitmentsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % commitments.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const current = commitments[index];

  function next() {
    setIndex((p) => (p + 1) % commitments.length);
  }
  function prev() {
    setIndex((p) => (p - 1 + commitments.length) % commitments.length);
  }

  return (
    <section className="commitments-section" id="compromisos">
      <Reveal className="commitments-heading" y={22}>
        <p className="eyebrow">Compromisos</p>
        <h2 className="commitments-title">
          Lo que recibes al trabajar con Mersiel.
        </h2>
        <p className="commitments-sub">
          Sin testimonios prefabricados. Estos son compromisos concretos que
          firmo con cada cliente desde el primer día.
        </p>
      </Reveal>

      <Reveal y={32} delay={0.1}>
        <div
          className={`commitments-stage commitments-stage--${current.accent}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Stack background cards */}
          <div className="commit-stack" aria-hidden>
            {commitments.map((c, i) => {
              const offset = (i - index + commitments.length) % commitments.length;
              if (offset === 0 || offset > 2) return null;
              return (
                <div
                  key={c.title}
                  className="commit-stack-card"
                  style={{
                    transform: `translate(${offset * 16}px, ${offset * 12}px) scale(${1 - offset * 0.04})`,
                    opacity: 0.4 - offset * 0.18,
                    zIndex: -offset,
                  }}
                />
              );
            })}
          </div>

          <div className="commit-track">
            <AnimatePresence mode="wait">
              <motion.article
                key={index}
                initial={{ opacity: 0, x: 60, rotateY: 8 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -60, rotateY: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="commit-card"
              >
                <div className="commit-card-glow" />
                <div className="commit-card-icon">
                  <Icon name={current.icon} size={32} strokeWidth={1.6} />
                </div>
                <span className="commit-card-tag">
                  Compromiso {String(index + 1).padStart(2, "0")} / {String(commitments.length).padStart(2, "0")}
                </span>
                <h3 className="commit-card-title">{current.title}</h3>
                <p className="commit-card-body">{current.body}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="commit-controls">
            <button
              type="button"
              className="commit-arrow"
              aria-label="Compromiso anterior"
              onClick={prev}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="commit-dots" role="tablist">
              {commitments.map((c, i) => (
                <button
                  key={c.title}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ver compromiso ${i + 1}`}
                  className={`commit-dot ${i === index ? "is-active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="commit-arrow"
              aria-label="Siguiente compromiso"
              onClick={next}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
