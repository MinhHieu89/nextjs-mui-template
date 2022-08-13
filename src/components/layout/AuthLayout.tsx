import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Loading } from '../loading';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status !== 'authenticated') return;

		if (router.query && router.query.returnUrl) {
			router.replace(router.query.returnUrl as string);
		} else {
			router.replace('/app/dashboard');
		}
	}, [status, router]);

	if (status === 'loading' || status === 'authenticated') {
		return <Loading />;
	}

	return (
		<Box
			sx={{
				backgroundColor: 'grey.900',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				px: 3,
			}}
		>
			{children}
		</Box>
	);
};

export default AuthLayout;
