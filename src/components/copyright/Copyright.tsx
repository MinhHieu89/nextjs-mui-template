import { Typography } from '@mui/material';
import { Link } from '../link';

const Copyright = (props: any) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="/">
				mywebsite.com
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default Copyright;
