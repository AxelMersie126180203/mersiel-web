"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Aurora from "@/components/ui/aurora";
import { heroStats } from "@/lib/site-content";
import { Magnetic } from "@/components/motion/magnetic";

const heroBackgroundIcons = [
  { type: "database", top: "12%", left: "20%", size: 28, opacity: 0.34, duration: "24s", delay: "-6s" },
  { type: "cloud", top: "9%", left: "34%", size: 30, opacity: 0.32, duration: "21s", delay: "-4s" },
  { type: "terminal", top: "13%", left: "63%", size: 31, opacity: 0.35, duration: "23s", delay: "-7s" },
  { type: "api", top: "10%", left: "78%", size: 29, opacity: 0.36, duration: "22s", delay: "-10s" },
  { type: "nodes", top: "16%", left: "90%", size: 26, opacity: 0.34, duration: "25s", delay: "-12s" },
  { type: "server", top: "27%", left: "8%", size: 26, opacity: 0.35, duration: "26s", delay: "-5s" },
  { type: "code", top: "31%", left: "22%", size: 24, opacity: 0.32, duration: "18s", delay: "-11s" },
  { type: "chip", top: "27%", left: "70%", size: 30, opacity: 0.37, duration: "24s", delay: "-15s" },
  { type: "terminal", top: "33%", left: "84%", size: 24, opacity: 0.31, duration: "19s", delay: "-6s" },
  { type: "api", top: "49%", left: "5%", size: 28, opacity: 0.34, duration: "21s", delay: "-9s" },
  { type: "nodes", top: "52%", left: "18%", size: 26, opacity: 0.36, duration: "25s", delay: "-3s" },
  { type: "server", top: "55%", left: "33%", size: 29, opacity: 0.35, duration: "23s", delay: "-12s" },
  { type: "code", top: "51%", left: "49%", size: 25, opacity: 0.33, duration: "20s", delay: "-14s" },
  { type: "database", top: "53%", left: "64%", size: 31, opacity: 0.38, duration: "27s", delay: "-8s" },
  { type: "cloud", top: "50%", left: "79%", size: 27, opacity: 0.35, duration: "21s", delay: "-16s" },
  { type: "chip", top: "54%", left: "92%", size: 24, opacity: 0.31, duration: "24s", delay: "-10s" },
  { type: "terminal", top: "71%", left: "11%", size: 30, opacity: 0.36, duration: "22s", delay: "-18s" },
  { type: "api", top: "76%", left: "25%", size: 26, opacity: 0.34, duration: "19s", delay: "-4s" },
  { type: "nodes", top: "74%", left: "42%", size: 28, opacity: 0.37, duration: "26s", delay: "-7s" },
  { type: "server", top: "73%", left: "57%", size: 25, opacity: 0.32, duration: "20s", delay: "-11s" },
  { type: "code", top: "78%", left: "73%", size: 29, opacity: 0.36, duration: "24s", delay: "-17s" },
  { type: "database", top: "75%", left: "88%", size: 27, opacity: 0.34, duration: "22s", delay: "-13s" },
];

function SoftwareBgIcon({ type }: { type: string }) {
  if (type === "database") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "cloud") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8.2 18h8.3a4 4 0 0 0 .3-8 5.5 5.5 0 0 0-10.6 1.5A3.3 3.3 0 0 0 8.2 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "chip") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 9.5h5v5h-5z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "terminal") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m7 9 2.8 2.2L7 13.4M11.4 14h4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "api") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12h3M17 12h3M12 4v3M12 17v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 10h4v4h-4z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (type === "nodes") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7h8M7.4 8.4l3.2 6.1M16.6 8.4l-3.2 6.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "server") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="5" width="14" height="5" rx="1.3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="5" y="14" width="14" height="5" rx="1.3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7.5h.01M11 7.5h.01M8 16.5h.01M11 16.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 5 3 9l4 4M17 5l4 4-4 4M10.8 17.2l2.6-12.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MetricIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="6" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="18" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 6h8M7.5 7.3l3.2 8M16.5 7.3l-3.2 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 5 3 9l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 5 21 9l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.8 16.8 13.4 3.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 16v4h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20 10 14l3 3 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 10h3v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <Aurora colorStops={["#6a1b9a", "#d81b60", "#8e24aa"]} amplitude={1.2} blend={0.6} speed={0.8} />
      <div className="hero-icon-cloud" aria-hidden>
        {heroBackgroundIcons.map((item, index) => (
          <span
            className="hero-bg-icon"
            key={`${item.type}-${index}`}
            style={{
              top: item.top,
              left: item.left,
              width: `${Math.round(item.size * 1.45)}px`,
              height: `${Math.round(item.size * 1.45)}px`,
              opacity: item.opacity,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            <SoftwareBgIcon type={item.type} />
          </span>
        ))}
      </div>
      <div className="hero-noise" aria-hidden />

      <div className="hero-inner">
        <div className="hero-stage">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease }}
            >
              <Image
                src="/Logos/mersiel-spectacle-intro.svg"
                alt="Mersiel"
                width={760}
                height={450}
                priority
                className="hero-spectacle"
              />
            </motion.div>

            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
            >
              Soluciones digitales a medida
            </motion.p>

            <motion.h1
              className="hero-brand-title"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
            >
              Mersiel
            </motion.h1>

            <motion.p
              className="hero-brand-slogan"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
            >
              Soluciones digitales a medida para negocios que buscan crecer y optimizar sus procesos.
            </motion.p>

            <motion.div
              className="hero-actions"
              style={{ justifyContent: "center" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.8, ease }}
            >
              <Magnetic href="#contacto">
                <span className="btn btn-primary">Iniciar Proyecto</span>
              </Magnetic>
              <Magnetic href="#servicios">
                <span className="btn btn-ghost">Nuestros Servicios</span>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hero-footer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease }}
        >
          <div className="metrics-strip">
            {heroStats.map((metric, index) => (
              <motion.div
                className="metrics-strip__item"
                key={metric.value}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="metrics-strip__icon">
                  <MetricIcon index={index} />
                </span>
                <span className="metrics-strip__value">{metric.value}</span>
              </motion.div>
            ))}
          </div>

          <a className="hero-scroll-cue" href="#servicios">
            <span className="hero-scroll-cue__label">Explorar</span>
            <span className="hero-scroll-cue__line" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
