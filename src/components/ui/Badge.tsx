import { cn } from "@/lib/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent";
}

export function Badge({ className, variant = "neutral", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "neutral" && "bg-mist/30 text-slate",
        variant === "accent" && "bg-saffron/20 text-ink", // Saffron highlight per spec
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}