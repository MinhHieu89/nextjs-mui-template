import { Avatar, Box, Drawer, List, Toolbar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Link } from '../link';
import NavItem from './NavItem';
import NavSectionHeader from './NavSectionHeader';
import ProfileSection from './ProfileSection';

interface SidebarProps {}

const sidebarMaxWidth = 250;

const Sidebar = (props: SidebarProps) => {
	const [isOpen, setIsOpen] = useState(true);
	const { pathname } = useRouter();

	const toggleDrawer = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<Drawer
			variant="permanent"
			open={isOpen}
			sx={{
				display: { xs: 'none', lg: 'block' },
				width: sidebarMaxWidth,
				height: '100vh',
				'& > div': {
					width: 'inherit',
				},
			}}
		>
			<Box
				sx={{
					p: 2,
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
					<Link href="/">MyApp</Link>
				</Toolbar>
				<Box sx={{ mb: 2 }}>
					<Link href="/profile">
						<ProfileSection />
					</Link>
				</Box>
				<List component="nav">
					<Box>
						<NavSectionHeader title="General" />
						<NavItem
							to="/"
							text="Dashboard"
							isActive={pathname === '/'}
							icon={<DashboardIcon />}
						/>
						<NavItem
							to="/analytics"
							text="Analytics"
							isActive={pathname === '/analytics'}
							icon={<InsightsIcon />}
						/>
						<NavItem
							to="/banking"
							text="Banking"
							isActive={pathname === '/banking'}
							icon={<AccountBalanceIcon />}
						/>
						<NavItem
							to="/reports"
							text="Reports"
							isActive={pathname === '/reports'}
							icon={<AssessmentIcon />}
						/>
					</Box>
					<Box sx={{ mt: 3 }}>
						<NavSectionHeader title="Management" />
						<NavItem
							to="/users"
							text="Users"
							isActive={pathname === '/users'}
							icon={<PersonIcon />}
						/>
					</Box>
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
