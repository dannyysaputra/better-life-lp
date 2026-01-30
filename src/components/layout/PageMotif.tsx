"use client";

import { cn } from "@/lib/utils/cn";
import { useReducedMotion } from "framer-motion";

interface PageMotifProps {
  variant: "about" | "faq" | "privacy" | "terms";
  className?: string;
}

export function PageMotif({ variant, className }: PageMotifProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none -z-10 overflow-hidden", className)}>
      {variant === "about" && (
        <>
          <div 
            className={cn(
              "absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-terracotta/5 blur-3xl",
              !shouldReduceMotion && "animate-reveal opacity-50"
            )} 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(var(--accent-primary),0.03),transparent_70%)]" />
        </>
      )}

      {variant === "faq" && (
        <>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(var(--accent-secondary),0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 mask-image-gradient-b" />
          <div className="absolute top-0 right-0 w-full h-[400px] bg-gradient-to-b from-pearl via-transparent to-transparent opacity-80" />
        </>
      )}

      {variant === "privacy" && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-saffron/20 via-transparent to-transparent" />
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />
          <div className="absolute inset-0 bg-pearl/50 backdrop-blur-[1px]" />
        </>
      )}

      {variant === "terms" && (
        <div className="absolute inset-4 border border-ink/5 rounded-[32px]">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-ink/10 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-ink/10 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-ink/10 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-ink/10 rounded-br-2xl" />
        </div>
      )}
    </div>
  );
}
