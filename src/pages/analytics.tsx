import { Box, Container } from '@mui/material';
import { NextPage } from 'next';
import { Sidebar } from '../components/sidebar';

const Analytics: NextPage = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Box sx={{ flex: 1, p: 1, width: 'max-content' }}>Analytics</Box>
		</Box>
	);
};

export default Analytics;
