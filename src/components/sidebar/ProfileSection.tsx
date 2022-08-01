import { Box, Avatar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const ProfileSection = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.04)',
				borderRadius: 2,
				display: 'flex',
				alignItems: 'center',
				p: 2,
			}}
		>
			<Avatar>HB</Avatar>
			<Box
				sx={{
					ml: 2,
				}}
			>
				<Typography
					sx={{
						fontSize: 14,
						fontWeight: 500,
						color: 'grey.300',
					}}
				>
					Henry Brown
				</Typography>
				<Typography
					sx={{
						fontSize: 14,
						color: 'grey.500',
					}}
				>
					admin
				</Typography>
			</Box>
		</Box>
	);
};

export default ProfileSection;
