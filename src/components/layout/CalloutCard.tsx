import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface CalloutCardProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function CalloutCard({ children, icon, className }: CalloutCardProps) {
  return (
    <Card 
      hoverable={false} 
      className={cn("bg-saffron/5 border-saffron/20 flex gap-4 items-start p-6", className)}
    >
      {icon && <div className="text-saffron shrink-0 mt-1">{icon}</div>}
      <div className="text-ink text-lg leading-relaxed">
        {children}
      </div>
    </Card>
  );
}
