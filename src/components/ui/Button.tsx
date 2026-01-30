import * as React from "react";
import { Link } from "lucide-react"; // Wait, I need Next.js Link for href
import NextLink from "next/link";
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
    
    const variants = {
      primary: "bg-terracotta text-white shadow-sm hover:bg-terracotta/90 hover:-translate-y-[1px]",
      secondary: "border border-mist bg-transparent text-ink hover:bg-mist/30",
      link: "text-terracotta hover:underline underline-offset-4 p-0 h-auto",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    // Override size for link variant
    const sizeStyles = variant === "link" ? "" : sizes[size];

    const classes = cn(baseStyles, variants[variant], sizeStyles, className);

    const content = (
      <>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href) {
        // If external or anchor, use a tag, otherwise NextLink
        // But for smooth scrolling to anchors, regular a tag might be better or handled by NextLink
        // NextLink handles anchors fine.
      return (
        <NextLink href={href} className={classes} {...(props as any)}>
          {content}
        </NextLink>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={isLoading || props.disabled} {...props}>
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
