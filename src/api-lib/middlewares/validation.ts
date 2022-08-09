import { ResponseData } from './../../models/responseData';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

export const validateBody = (schema: z.AnyZodObject) => {
	return (
		req: NextApiRequest,
		res: NextApiResponse<ResponseData>,
		next: any
	) => {
		const result = schema.safeParse(req.body);

		if (result.success) {
			return next();
		} else {
			return res.status(400).json({
				success: false,
				error: {
					message: JSON.stringify(result.error.flatten().fieldErrors),
					fieldErrors: result.error.flatten().fieldErrors,
				},
			});
		}
	};
};
