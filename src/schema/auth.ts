import { z } from 'zod';

export const SignUpInputSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
});

export type SignUpInput = z.infer<typeof SignUpInputSchema>;

export const LoginInputSchema = z.object({
	email: z.string().email(),
	password: z.string(),
	rememberMe: z.boolean(),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;
