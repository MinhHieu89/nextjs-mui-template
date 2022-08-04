import { Box, Drawer, List, Toolbar, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Link } from '../link';
import NavItem from './NavItem';
import NavSectionHeader from './NavSectionHeader';
import ProfileSection from './ProfileSection';
import { AppUser } from '../../models/AppUser';

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
	user: AppUser;
}

const sidebarMaxWidth = 280;

const Sidebar = ({ isOpen, onClose, user }: SidebarProps) => {
	const router = useRouter();
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
		defaultMatches: true,
		noSsr: false,
	});

	useEffect(
		() => {
			if (!router.isReady) {
				return;
			}

			if (isOpen) {
				onClose?.();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[router.asPath]
	);

	const content = (
		<Box
			sx={{
				p: 2,
				color: '#ffffff',
				backgroundColor: 'grey.900',
				minHeight: '100vh',
			}}
		>
			<Toolbar
				sx={{
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
					px: [2],
				}}
			>
				<Link sx={{ color: 'white' }} href="/">
					AppLogoHere
				</Link>
			</Toolbar>
			<Box sx={{ mb: 2 }}>
				<Link href="/profile">
					<ProfileSection user={user} />
				</Link>
			</Box>
			<List component="nav">
				<Box>
					<NavSectionHeader title="General" />
					<NavItem
						to="/"
						text="Dashboard"
						isActive={router.pathname === '/'}
						icon={<DashboardIcon />}
					/>
					<NavItem
						to="/analytics"
						text="Analytics"
						isActive={router.pathname === '/analytics'}
						icon={<InsightsIcon />}
					/>
					<NavItem
						to="/banking"
						text="Banking"
						isActive={router.pathname === '/banking'}
						icon={<AccountBalanceIcon />}
					/>
					<NavItem
						to="/reports"
						text="Reports"
						isActive={router.pathname === '/reports'}
						icon={<AssessmentIcon />}
					/>
				</Box>
				<Box sx={{ mt: 3 }}>
					<NavSectionHeader title="Management" />
					<NavItem
						to="/users"
						text="Users"
						isActive={router.pathname === '/users'}
						icon={<PersonIcon />}
					/>
				</Box>
			</List>
		</Box>
	);

	if (lgUp) {
		return (
			<Drawer
				anchor="left"
				open
				PaperProps={{
					sx: {
						backgroundColor: 'grey.900',
						color: '#ffffff',
						width: sidebarMaxWidth,
					},
				}}
				variant="permanent"
			>
				{content}
			</Drawer>
		);
	}

	return (
		<Drawer
			anchor="left"
			onClose={onClose}
			open={isOpen}
			PaperProps={{
				sx: {
					backgroundColor: 'grey.900',
					color: '#ffffff',
					width: sidebarMaxWidth,
				},
			}}
			sx={{
				zIndex: (theme) => theme.zIndex.appBar + 100,
			}}
			variant="temporary"
		>
			{content}
		</Drawer>
	);
};

export default Sidebar;
