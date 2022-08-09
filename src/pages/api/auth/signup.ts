import { SignUpInput } from '@/models/signUpInput';
import { createUser } from '@/api-lib/db/user';
import { SignUpInputSchema } from '@/schema/auth';
import { validateBody } from '@/api-lib/middlewares/validation';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import dbConnect from '@/api-lib/dbConnect';
import { ncOpts } from '@/api-lib/nc';
import { ResponseData } from '@/models/responseData';

const handler = nc(ncOpts);

handler.post(
	validateBody(SignUpInputSchema),
	async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
		await dbConnect();

		await createUser(req.body as SignUpInput);
		res.status(200).json({ success: true });
	}
);

export default handler;
