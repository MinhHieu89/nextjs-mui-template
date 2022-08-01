import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import React from 'react';
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
					borderRadius: 1,
					mb: 0.5,
					'&.Mui-selected, &.Mui-selected:hover, &:hover': {
						backgroundColor: 'rgba(255, 255, 255, 0.08)',
					},
				}}
				selected={isActive}
			>
				<ListItemIcon
					sx={{
						color: isActive ? 'secondary.main' : 'grey.300',
					}}
				>
					{icon}
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography
							sx={{
								color: isActive ? 'secondary.main' : 'grey.300',
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
