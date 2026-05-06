"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
  delay?: number;
  y?: number;
  x?: number;
  blur?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  id?: string;
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  x = 0,
  blur = 6,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className,
  id,
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: {
          opacity: 0,
          y,
          x,
          filter: `blur(${blur}px)`,
        },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

// Staggered container for lists
export function RevealStagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.18,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "ul" | "section";
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
  duration = 0.7,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  as?: "div" | "li" | "article" | "span" | "p";
}) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
