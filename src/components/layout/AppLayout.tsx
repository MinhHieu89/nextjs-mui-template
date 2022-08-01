import { Box } from '@mui/material';
import React from 'react';
import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';

interface AppLayoutProps {
	children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Box sx={{ flex: 1, p: 0, width: 'max-content' }}>
				<Navbar />
				<Box
					sx={{
						mt: 1,
						mx: 2,
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default AppLayout;
