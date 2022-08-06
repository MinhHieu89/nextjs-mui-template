import { Box, Avatar, Typography } from '@mui/material';
import { AppUser } from '../../models/AppUser';

interface ProfileSectionProps {
	user: AppUser;
}

const ProfileSection = ({ user }: ProfileSectionProps) => {
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
			<Avatar alt={user.name as string} src={user.image as string} />
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
					{user.name}
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
