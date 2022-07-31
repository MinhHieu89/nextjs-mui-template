import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import { Sidebar } from '../components/sidebar';
import { Navbar } from '../components/navbar';

const Home: NextPage = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Box sx={{ flex: 1, p: 0, width: 'max-content' }}>
				<Navbar />
			</Box>
		</Box>
	);
};

export default Home;
