import { z } from 'zod';

export const SignUpInputSchema = z.object({
	firstName: z.string().min(3),
	lastName: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(6),
});
