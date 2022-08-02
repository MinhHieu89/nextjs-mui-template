import { Box } from '@mui/material';
import React, { useState } from 'react';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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
