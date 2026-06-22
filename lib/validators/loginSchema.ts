// import { z } from "zod";

// export const loginSchema = z.object({
//   email: z.string().email("Email invalide"),
//   password: z.string().min(6, "Minimum 6 caractères"),
// });

// export type LoginSchema = z.infer<typeof loginSchema>;



import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export type LoginSchema = z.infer<typeof loginSchema>;