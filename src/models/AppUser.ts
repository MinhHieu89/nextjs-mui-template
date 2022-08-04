import { User } from 'next-auth';

export type AppUser = User & {
	profileImageUrl: string;
};
