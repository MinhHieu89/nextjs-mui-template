import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import { Link } from '../components/link';
import { AuthLayout } from '../components/layout';
import { Paper } from '@mui/material';

const Login: Page = () => {
	const router = useRouter();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});

		router.push('/');
	};

	return (
		<Paper
			sx={{
				p: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				maxWidth: '480px',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				noValidate
				sx={{ mt: 1 }}
			>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ my: 3 }}
				>
					Sign In
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href="#" variant="body2" underline="always">
							Forgot password?
						</Link>
					</Grid>
					<Grid item>
						<Link
							href="/register"
							variant="body2"
							underline="always"
						>
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
};

Login.getLayout = (page: React.ReactNode) => {
	return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
