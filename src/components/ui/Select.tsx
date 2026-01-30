import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: string[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    return (
      <div className="w-full space-y-2">
        <label htmlFor={inputId} className="text-sm font-medium text-ink block">
          {label} {props.required && <span className="text-terracotta">*</span>}
        </label>
        <div className="relative">
          <select
            id={inputId}
            className={cn(
              "flex h-12 w-full appearance-none rounded-xl border border-mist bg-white px-4 py-2 text-ink placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
              error && "border-danger focus-visible:ring-danger/50",
              className
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `error-${inputId}` : undefined}
            defaultValue=""
            {...props}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate pointer-events-none" />
        </div>
        {error && (
            <p id={`error-${inputId}`} className="text-sm text-danger animate-reveal">
                {error}
            </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
