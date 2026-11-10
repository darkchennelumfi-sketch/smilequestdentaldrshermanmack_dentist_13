import { z } from "zod";

import { appointmentTypes } from "@/lib/site";

export const bookingSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter your first name.")
    .max(60, "That name is a little too long."),
  lastName: z
    .string()
    .trim()
    .min(2, "Please enter your last name.")
    .max(60, "That name is a little too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(24, "That phone number is a little too long.")
    .regex(/^[0-9()+\-.\s]+$/, "Please use numbers, spaces, and standard phone symbols."),
  appointmentType: z
    .enum(appointmentTypes, {
      message: "Please choose the reason for your visit.",
    })
    .or(z.literal(""))
    .refine((value) => value.length > 0, "Please choose the reason for your visit."),
  message: z
    .string()
    .trim()
    .max(1200, "Please keep your message under 1,200 characters.")
    .optional()
    .or(z.literal("")),
  acknowledge: z
    .boolean()
    .refine((value) => value, "Please acknowledge that this is an appointment request."),
  company: z.string().max(0).optional(),
});

export type BookingValues = z.infer<typeof bookingSchema>;
