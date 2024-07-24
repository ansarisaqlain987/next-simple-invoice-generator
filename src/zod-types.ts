import { z } from 'zod';

export const LoginApiInput = z.object({
    email: z.string().min(3, {
        message: "Email must be at least 2 characters.",
    }).refine((val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val ?? ""), "Please enter a valid email address"),
})