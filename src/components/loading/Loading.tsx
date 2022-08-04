import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

interface LoadingProps {
	isFullPage?: boolean;
}

const Loading = ({ isFullPage = true }: LoadingProps) => {
	return (
		<Box
			sx={{
				height: isFullPage ? '100vh' : '100%',
				width: isFullPage ? '100vw' : '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loading;
