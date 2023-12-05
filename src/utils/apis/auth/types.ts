import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  phone_number: z
    .string()
    .min(7, { message: "Phone number minimum length is 7" }),
  full_name: z.string().min(1, { message: "Full name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(6, { message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
