import { getUsers } from '@/api-lib/db/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import dbConnect from '@/api-lib/dbConnect';
import { ncOpts } from '@/api-lib/nc';
import { ResponseData } from '@/models/responseData';

const handler = nc(ncOpts);

handler.get(async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  await dbConnect();

  const users = await getUsers();

  return res.status(200).json({
    data: users,
    success: true,
  });
});

export default handler;
