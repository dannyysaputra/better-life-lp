import { cn } from "@/lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ className, hoverable = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[20px] border border-mist shadow-sm p-6 md:p-8",
        hoverable && "transition-all duration-300 motion-safe:hover:-translate-y-[2px] hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}