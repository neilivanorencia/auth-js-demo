import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Please enter a password",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name must only contain letters and spaces",
    })
    .refine(
      (name) =>
        name
          .trim()
          .split(" ")
          .every((word) => /^[A-Z]/.test(word)),
      {
        message: "Each word in the name must start with an uppercase letter",
      },
    )
    .refine((name) => name.trim().split(" ").length >= 2, {
      message: "Please enter a full name (first and last name)",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message:
        "Password must contain at least one special character (!@#$%^&*)",
    }),
});

export const ResetPassword = z.object({
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain at least one number",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message:
        "Password must contain at least one special character (!@#$%^&*)",
    }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const SettingsSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" })
      .regex(/^[A-Za-z\s]+$/, {
        message: "Name must only contain letters and spaces",
      })
      .refine(
        (name) =>
          name
            .trim()
            .split(" ")
            .every((word) => /^[A-Z]/.test(word)),
        {
          message: "Each word in the name must start with an uppercase letter",
        },
      )
      .refine((name) => name.trim().split(" ").length >= 2, {
        message: "Please enter a full name (first and last name)",
      }),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.USER, UserRole.ADMIN]),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must contain at least one number",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message:
          "Password must contain at least one special character (!@#$%^&*)",
      }),
    newPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.newPassword, {
    message: "New password must match password",
    path: ["newPassword"],
  });
