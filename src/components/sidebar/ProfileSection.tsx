import { Box, Avatar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const ProfileSection = () => {
	return (
		<Box
			sx={{
				backgroundColor: grey[200],
				borderRadius: 3,
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
					}}
				>
					Henry Brown
				</Typography>
				<Typography
					sx={{
						fontSize: 14,
						color: grey[700],
					}}
				>
					admin
				</Typography>
			</Box>
		</Box>
	);
};

export default ProfileSection;
