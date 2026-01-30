import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    return (
      <div className="w-full space-y-2">
        <label htmlFor={inputId} className="text-sm font-medium text-ink block">
          {label} {props.required && <span className="text-terracotta">*</span>}
        </label>
        <textarea
          id={inputId}
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-y",
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
Textarea.displayName = "Textarea";
