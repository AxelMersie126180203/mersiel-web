"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "purple" | "magenta" | "red";
  icon?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  accent = "purple",
  icon,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${accent}`}>
      <div className="page-hero-bg" aria-hidden>
        <div className="page-hero-orb page-hero-orb--1" />
        <div className="page-hero-orb page-hero-orb--2" />
        <div className="page-hero-grid" />
      </div>

      <div className="page-hero-inner">
        <motion.div
          className="page-hero-icon-wrap"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {icon && (
            <span className="page-hero-icon">
              <Icon name={icon} size={36} strokeWidth={1.5} />
            </span>
          )}
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          className="page-hero-title"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="page-hero-desc"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4 }}
        >
          {description}
        </motion.p>

        <motion.span
          className="page-hero-line"
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}
