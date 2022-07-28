import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import { Sidebar } from '../components/sidebar';

const Home: NextPage = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Box sx={{ flex: 1, p: 1, width: 'max-content' }}>Content</Box>
		</Box>
	);
};

export default Home;
