import { z } from 'zod';

export const InquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(80, { message: 'Name must be under 80 characters.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Please provide a valid email address.' })
    .toLowerCase()
    .trim(),
  projectType: z.enum([
    'UI/UX Design',
    'Interactive Prototyping & Design Systems',
    'Full-Time Opportunity',
    'Consultation / Other'
  ]),
  budget: z.string().optional(),
  message: z
    .string()
    .min(15, { message: 'Please share a brief message (at least 15 characters).' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' })
    .trim(),
  _gotcha: z.string().max(0, { message: 'Spam bot detected.' }).optional() // Honeypot field
});

export type InquiryInput = z.infer<typeof InquirySchema>;
