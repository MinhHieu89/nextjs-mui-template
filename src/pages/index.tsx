import { Link } from '@/components/link';
import React from 'react';

const Home: Page = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/login">Sign In</Link>
		</div>
	);
};

Home.getLayout = (page: React.ReactNode) => page;

export default Home;
