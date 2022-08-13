import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { compare } from 'bcrypt';

import clientPromise from '@/api-lib/mongodb';
import { findUserByEmail } from '@/api-lib/db/user';
import dbConnect from '@/api-lib/dbConnect';
import { LoginInput } from '@/schema/auth';

export const authOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(clientPromise),
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			async authorize(credentials) {
				await dbConnect();

				const { email, password } = credentials as LoginInput;

				const user = await findUserByEmail(email);

				if (!user) {
					throw new Error('You have not registered yet.');
				}

				// Registered with Gmail
				if (!user.password) {
					throw new Error('Email or password is incorrect.');
				}

				const isPasswordCorrect = await compare(
					password,
					user.password
				);

				if (!isPasswordCorrect) {
					throw new Error('Email or password is incorrect.');
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
