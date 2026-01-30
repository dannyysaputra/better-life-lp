import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    return (
      <div className="w-full space-y-2">
        <label htmlFor={inputId} className="text-sm font-medium text-ink block">
          {label} {props.required && <span className="text-terracotta">*</span>}
        </label>
        <input
          id={inputId}
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-mist bg-white px-4 py-2 text-ink placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            error && "border-danger focus-visible:ring-danger/50",
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
            <p id={`${inputId}-error`} className="text-sm text-danger animate-reveal">
                {error}
            </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
