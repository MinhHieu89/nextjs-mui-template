import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

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
			authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				// find user from database here
				if (email !== 'admin@gmail.com' || password !== '123qwe') {
					throw new Error('Incorrect email or password.');
				}

				return {
					id: 1234,
					name: 'John Doe',
					email: 'admin@gmail.com',
				};
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
