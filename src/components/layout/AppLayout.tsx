import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';
import { useRouter } from 'next/router';
import { Loading } from '../loading';
import { AppUser } from '../../models/AppUser';

const AppLayoutRoot = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	maxWidth: '100%',
	paddingTop: 64,
	[theme.breakpoints.up('lg')]: {
		paddingLeft: 280,
	},
}));

interface AppLayoutProps {
	children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.replace('/login');
		}
	}, [status, router]);

	if (!session) return <Loading />;

	return (
		<>
			<AppLayoutRoot>
				<Box
					sx={{
						display: 'flex',
						flex: '1 1 auto',
						flexDirection: 'column',
						width: '100%',
						p: 3,
					}}
				>
					{children}
				</Box>
			</AppLayoutRoot>
			<Navbar
				onSidebarOpen={() => setSidebarOpen(true)}
				user={session.user as AppUser}
				signOut={signOut}
			/>
			<Sidebar
				user={session.user as AppUser}
				isOpen={isSidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>
		</>
	);
};

export default AppLayout;
