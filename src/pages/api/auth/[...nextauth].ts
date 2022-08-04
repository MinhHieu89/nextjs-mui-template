import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
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
};

export default NextAuth(authOptions);
