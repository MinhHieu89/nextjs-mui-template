import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { useState } from 'react';

interface SidebarProps {}

const sidebarMinWidth = 50;
const sidebarMaxWidth = 250;

const Sidebar = (props: SidebarProps) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleDrawer = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<Drawer
			variant="permanent"
			open={isOpen}
			sx={{
				width: isOpen ? sidebarMaxWidth : sidebarMinWidth,
				height: '100vh',
				'& > div': {
					borderRight: 'none',
					width: 'inherit',
				},
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					px: [1],
				}}
			>
				<IconButton onClick={toggleDrawer}>
					{isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				<ListItemButton>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary="Orders" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary="CustomersTest" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<BarChartIcon />
					</ListItemIcon>
					<ListItemText primary="Reports" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<LayersIcon />
					</ListItemIcon>
					<ListItemText primary="Integrations" />
				</ListItemButton>
			</List>
		</Drawer>
	);
};

export default Sidebar;
