import { z } from 'zod';

export type UserListDto = {
	_id: string;
	name: string;
	email: string;
	image: string;
};
