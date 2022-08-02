import {
	Paper,
	Box,
	Avatar,
	Typography,
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Link } from '../components/link';
import React from 'react';
import { AuthLayout } from '../components/layout';

const Register: Page = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
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
				Sign up
			</Typography>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmit}
				sx={{ mt: 3 }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							autoComplete="given-name"
							name="firstName"
							required
							fullWidth
							id="firstName"
							label="First Name"
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="family-name"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="new-password"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									value="allowExtraEmails"
									color="primary"
								/>
							}
							label={
								<Box>
									I agree with the{' '}
									<Link href="/tos" underline="always">
										Terms and Conditions
									</Link>
									.
								</Box>
							}
						/>
					</Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ my: 3 }}
				>
					Sign Up
				</Button>
				<Grid container justifyContent="flex-end">
					<Grid item>
						<Link href="/login" variant="body2" underline="always">
							Already have an account? Sign in
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
};

Register.getLayout = (page: React.ReactNode) => {
	return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
