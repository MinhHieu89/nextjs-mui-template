import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Link } from '../components/link';
import { AuthLayout } from '../components/layout';
import { Paper } from '@mui/material';
import { TextField } from '../components/form';

interface LoginFormValues {
	email: string;
	password: string;
}

const Login: Page = () => {
	const router = useRouter();

	const initialValues: LoginFormValues = {
		email: '',
		password: '',
	};

	const validate = Yup.object({
		email: Yup.string()
			.email('Please enter a valid email.')
			.required('Email is required.'),
		password: Yup.string().required('Password is required.'),
	});

	const handleSubmit = (values: LoginFormValues) => {
		console.log(values);
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
			<Formik
				initialValues={initialValues}
				validationSchema={validate}
				onSubmit={handleSubmit}
			>
				<Box component={Form} noValidate sx={{ mt: 1 }}>
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
			</Formik>
		</Paper>
	);
};

Login.getLayout = (page: React.ReactNode) => {
	return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
