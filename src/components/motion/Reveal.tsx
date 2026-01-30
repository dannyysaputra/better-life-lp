"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 12, once = true, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : y 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1] as const, // ease-out (matches tokens)
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }} // slightly before full view
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}