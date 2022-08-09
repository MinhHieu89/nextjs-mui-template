import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { compare } from 'bcrypt';

import clientPromise from '../../../api-lib/mongodb';
import dbConnect from '../../../api-lib/dbConnect';
import User from '../../../api-lib/db/user';

const authOptions: NextAuthOptions = {
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

				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				const user = await User.findOne({ email });

				if (!user || !user.password) {
					throw new Error('You have not registered yet.');
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
	secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
