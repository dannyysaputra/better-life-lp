"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, LeadFormData } from "@/lib/validators/leadSchema";
import { copy } from "@/lib/content/copy";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { useSearchParams } from "next/navigation";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    // Capture UTM source if available
    const source = searchParams.toString(); 
    const payload = { ...data, source: source || undefined };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        // Handle Validation Errors (400)
        if (res.status === 400 && result.error === "validation_error" && result.fields) {
          Object.keys(result.fields).forEach((field) => {
            const key = field as keyof LeadFormData;
            setError(key, { message: result.fields[key][0] }); // Zod returns array of strings
          });
          throw new Error("Please correct the errors above.");
        }

        // Handle Rate Limit (429)
        if (res.status === 429) {
           throw new Error(result.message || copy.form.errors.rateLimit);
        }

        // Handle Server Error (500)
        throw new Error(result.message || copy.form.errors.generic.body);
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      const msg = err instanceof Error ? err.message : copy.form.errors.generic.body;
      setErrorMessage(msg);
    }
  };

  if (status === "success") {
    return (
      <Reveal className="bg-teal/5 border border-teal/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-teal" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-ink mb-2">
          {copy.form.success.title}
        </h3>
        <p className="text-slate">{copy.form.success.body}</p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label={copy.form.labels.name}
          placeholder={copy.form.placeholders.name}
          error={errors.name?.message}
          required
          {...register("name")}
        />
        <div className="space-y-1">
            <Input
            label={copy.form.labels.contact}
            placeholder={copy.form.placeholders.contact}
            error={errors.contact?.message}
            required
            {...register("contact")}
            />
            {!errors.contact && (
                <p className="text-xs text-muted ml-1">{copy.form.helper}</p>
            )}
        </div>
      </div>

      <Select
        label={copy.form.labels.interest}
        placeholder={copy.form.placeholders.interest}
        options={copy.form.options}
        error={errors.interest?.message}
        {...register("interest")}
      />

      <Textarea
        label={copy.form.labels.message}
        placeholder={copy.form.placeholders.message}
        error={errors.message?.message}
        {...register("message")}
      />

      {/* Honeypot - hidden */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

      {status === "error" && (
        <div className="p-4 bg-danger/5 border border-danger/20 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-danger text-sm">Error</h4>
            <p className="text-sm text-danger/80">{errorMessage}</p>
          </div>
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        isLoading={status === "submitting"}
      >
        {status === "submitting" ? copy.form.buttons.loading : copy.form.buttons.submit}
      </Button>
    </form>
  );
}