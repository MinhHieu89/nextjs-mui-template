import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

interface MenuItem {
	path: string;
	displayText: string;
	icon: React.ReactNode;
}

interface MenuSection {
	title: string;
	items: MenuItem[];
}

const menu: MenuSection[] = [
	{
		title: 'general',
		items: [
			{
				path: '/app/dashboard',
				displayText: 'Dashboard',
				icon: <DashboardIcon />,
			},
			{
				path: '/app/analytics',
				displayText: 'Analytics',
				icon: <InsightsIcon />,
			},
			{
				path: '/app/banking',
				displayText: 'Banking',
				icon: <AccountBalanceIcon />,
			},
			{
				path: '/app/reports',
				displayText: 'Reports',
				icon: <AssessmentIcon />,
			},
		],
	},
	{
		title: 'Management',
		items: [
			{
				path: '/app/users',
				displayText: 'Users',
				icon: <PersonIcon />,
			},
		],
	},
];

export default menu;
