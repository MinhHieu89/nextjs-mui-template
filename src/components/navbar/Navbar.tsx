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
	styled,
	Toolbar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Receipt, Settings, Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

import PersonIcon from '@mui/icons-material/Person';
import { Link } from '../link';
import { AppUser } from '../../models/AppUser';

const NavbarRoot = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[3],
}));

interface NavbarProps {
	onSidebarOpen: () => void;
	signOut: (params: { redirect: boolean }) => void;
	user: AppUser;
}

const Navbar = ({ onSidebarOpen, signOut, user }: NavbarProps) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<NavbarRoot
			sx={{
				py: 0.5,
				left: {
					lg: 280,
				},
				width: {
					lg: 'calc(100% - 280px)',
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Toolbar
					disableGutters
					sx={{
						minHeight: 64,
						left: 0,
						px: 2,
					}}
				>
					<IconButton
						onClick={onSidebarOpen}
						sx={{
							display: {
								xs: 'inline-flex',
								lg: 'none',
							},
						}}
					>
						<MenuIcon fontSize="small" />
					</IconButton>
				</Toolbar>
				<Stack
					direction="row"
					spacing={1}
					alignItems="center"
					justifyContent="flex-end"
				>
					<IconButton aria-label="notification">
						<Badge badgeContent={4} color="secondary">
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
						<Avatar
							alt={user.name as string}
							src={user.image as string}
						/>
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
							<Link href="/app/profile">
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
							<MenuItem
								onClick={() => signOut({ redirect: false })}
							>
								<ListItemIcon>
									<Logout fontSize="small" />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Box>
					</Menu>
				</Stack>
			</Box>
		</NavbarRoot>
	);
};

export default Navbar;
