"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  variant?: "about" | "faq" | "privacy" | "terms";
  children?: ReactNode;
}

export function PageHeader({ 
  title, 
  subtitle, 
  badgeText, 
  ctaText, 
  onCtaClick, 
  variant = "about",
  children 
}: PageHeaderProps) {
  
  const isCentered = variant === "faq" || variant === "terms";

  return (
    <div className={cn(
      "relative mb-12 md:mb-20 pt-8", 
      isCentered ? "text-center mx-auto max-w-4xl" : "max-w-3xl"
    )}>
      <Reveal>
        <div className={cn("flex flex-col gap-6", isCentered && "items-center")}>
          {badgeText && (
            <Badge 
              variant={variant === "faq" ? "neutral" : "accent"} 
              className={cn(
                "w-fit",
                variant === "privacy" && "bg-saffron/10 text-saffron border border-saffron/20",
                variant === "terms" && "bg-ink/5 text-ink border border-ink/10"
              )}
            >
              {badgeText}
            </Badge>
          )}
          
          <h1 className={cn(
            "text-4xl md:text-6xl font-serif font-bold text-ink tracking-tight leading-[1.1]",
            variant === "about" && "decoration-terracotta/30 underline decoration-4 underline-offset-8"
          )}>
            {title}
          </h1>
        </div>
      </Reveal>
      
      {subtitle && (
        <Reveal delay={0.1} className="mt-6">
          <p className={cn(
            "text-xl text-slate leading-relaxed",
            isCentered && "mx-auto max-w-2xl"
          )}>
            {subtitle}
          </p>
        </Reveal>
      )}

      {(ctaText || children) && (
        <Reveal delay={0.2} className={cn("mt-8 flex gap-4", isCentered && "justify-center")}>
          {ctaText && (
            <Button onClick={onCtaClick}>
              {ctaText}
            </Button>
          )}
          {children}
        </Reveal>
      )}
    </div>
  );
}