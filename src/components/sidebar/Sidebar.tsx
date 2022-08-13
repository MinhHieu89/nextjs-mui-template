import { Box, Drawer, List, Toolbar, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Link } from '../link';
import NavItem from './NavItem';
import NavSectionHeader from './NavSectionHeader';
import ProfileSection from './ProfileSection';
import { AppUser } from '../../models/AppUser';
import menu from './menu';

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
				<Link href="/app/profile">
					<ProfileSection user={user} />
				</Link>
			</Box>
			<List component="nav">
				{menu.map(({ title, items }) => (
					<Box key={title} sx={{ mb: 3 }}>
						<NavSectionHeader title={title} />
						{items.map(({ path, displayText, icon }) => (
							<NavItem
								key={path}
								to={path}
								text={displayText}
								isActive={router.pathname === path}
								icon={icon}
							/>
						))}
					</Box>
				))}
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
