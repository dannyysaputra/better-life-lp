import { z } from "zod";
import { copy } from "@/lib/content/copy";

const phoneRegex = /^\+?[0-9\s-]{8,20}$/; // Modified to allow spaces/dashes during typing, cleaned later

export const leadSchema = z.object({
  name: z.string().min(2, copy.form.errors.validation.name).max(80),
  contact: z.string().refine((val) => {
    if (!val) return false;
    // Check if email
    const emailSchema = z.string().email();
    if (emailSchema.safeParse(val).success) return true;
    // Check if phone (clean it first)
    const cleanPhone = val.replace(/[\s-]/g, "");
    // Check min/max on cleaned phone digits
    if (/^\+?\d+$/.test(cleanPhone)) {
        return cleanPhone.length >= 8 && cleanPhone.length <= 20;
    }
    return false;
  }, copy.form.errors.validation.contact),
  interest: z.string().optional(),
  message: z.string().max(500).optional(),
  source: z.string().optional(),
  honeypot: z.string().optional(), // Must be empty or undefined
});

export type LeadFormData = z.infer<typeof leadSchema>;
