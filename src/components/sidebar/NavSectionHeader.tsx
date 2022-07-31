import { Typography } from '@mui/material';

interface NavSectionTitleProps {
	title: string;
}

const NavSectionHeader = ({ title }: NavSectionTitleProps) => {
	return (
		<Typography
			variant="h3"
			sx={{
				ml: 2,
				mb: 2,
				textTransform: 'uppercase',
				fontSize: '0.8rem',
				fontWeight: 'bold',
			}}
		>
			{title}
		</Typography>
	);
};

export default NavSectionHeader;
