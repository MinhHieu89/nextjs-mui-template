import React from 'react';
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	Button,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Stack,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Receipt, Settings, Logout } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from '../link';

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="static"
			color="default"
			sx={{
				boxShadow: 'none',
				backgroundColor: 'transparent',
				paddingX: 5,
				paddingY: 2,
			}}
		>
			<Stack
				direction="row"
				spacing={1}
				alignItems="center"
				justifyContent="flex-end"
			>
				<IconButton aria-label="notification">
					<Badge badgeContent={4} color="primary">
						<NotificationsIcon color="action" />
					</Badge>
				</IconButton>
				<Button
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<Avatar>HB</Avatar>
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<Box
						sx={{
							width: 180,
							maxWidth: '100%',
						}}
					>
						<Link href="/profile">
							<MenuItem>
								<ListItemIcon>
									<PersonIcon fontSize="small" />
								</ListItemIcon>
								My Profile
							</MenuItem>
						</Link>
						<MenuItem>
							<ListItemIcon>
								<Receipt fontSize="small" />
							</ListItemIcon>
							Billing
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemIcon>
								<Settings fontSize="small" />
							</ListItemIcon>
							Settings
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Logout fontSize="small" />
							</ListItemIcon>
							Logout
						</MenuItem>
					</Box>
				</Menu>
			</Stack>
		</AppBar>
	);
};

export default Navbar;
