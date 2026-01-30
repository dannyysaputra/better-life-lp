"use client";

import { cn } from "@/lib/utils/cn";
import { scrollToAnchor } from "@/lib/utils/scrollToAnchor";

interface OnThisPageProps {
  items: { id: string; label: string }[];
  className?: string;
}

export function OnThisPage({ items, className }: OnThisPageProps) {
  return (
    <nav 
      aria-label="On this page" 
      className={cn("hidden lg:block sticky top-32 self-start w-64 shrink-0", className)}
    >
      <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">
        On This Page
      </h4>
      <ul className="space-y-3 border-l border-mist pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToAnchor(item.id)}
              className="text-sm text-slate hover:text-teal transition-colors text-left"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
