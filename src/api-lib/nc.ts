import type { NextApiRequest, NextApiResponse } from 'next';
import { UserFriendlyError } from '@/models/userFriendlyError';

export const ncOpts = {
  onError(err: any, req: NextApiRequest, res: NextApiResponse) {
    console.error(err);
    res.statusCode =
      err.status && err.status >= 100 && err.status < 600 ? err.status : 500;

    if (res.statusCode === 500 && !(err instanceof UserFriendlyError)) {
      res.json({
        success: false,
        error: {
          message: 'Something wrong happened.',
        },
      });
      return;
    } else {
      res.json({
        success: false,
        error: {
          message: err.message,
        },
      });
    }
  },
};
