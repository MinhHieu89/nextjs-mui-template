import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';

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
	const [isSidebarOpen, setSidebarOpen] = useState(true);

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
			<Navbar onSidebarOpen={() => setSidebarOpen(true)} />
			<Sidebar
				isOpen={isSidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>
		</>
	);
};

export default AppLayout;
