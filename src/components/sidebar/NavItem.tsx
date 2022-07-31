import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';
import { Link } from '../link';

interface NavItemProps {
	text: string;
	to: string;
	isActive: boolean;
	icon: React.ReactNode;
}

const NavItem = ({ isActive, icon, text, to }: NavItemProps) => {
	return (
		<Link href={to}>
			<ListItemButton
				sx={{
					backgroundColor: isActive ? 'primary.main' : '',
					borderRadius: 3,
					mb: 0.5,
				}}
				selected={isActive}
			>
				<ListItemIcon
					sx={{
						color: isActive ? 'primary.dark' : '',
					}}
				>
					{icon}
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography
							sx={{
								color: isActive ? 'primary.dark' : grey[600],
								fontWeight: isActive ? 500 : 400,
							}}
						>
							{text}
						</Typography>
					}
				/>
			</ListItemButton>
		</Link>
	);
};

export default NavItem;
