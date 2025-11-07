import z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Invalid email address").toLowerCase(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormInput = z.input<typeof ContactFormSchema>;
export type ContactFormPayload = z.infer<typeof ContactFormSchema>;
