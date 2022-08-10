import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import * as Yup from 'yup';

import { Link } from '@/components/link';
import { AuthLayout } from '@/components/layout';
import { Alert, Paper } from '@mui/material';
import { TextField } from '@/components/form';
import { LoginInput } from '@/schema/auth';
import { CheckboxField } from '@/components/form';

const Login: Page = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const initialValues: LoginInput = {
		email: '',
		password: '',
		rememberMe: false,
	};

	const validate = Yup.object({
		email: Yup.string()
			.email('Please enter a valid email.')
			.required('Email is required.'),
		password: Yup.string().required('Password is required.'),
	});

	const handleSubmit = async (input: LoginInput) => {
		setErrorMessage('');
		setIsLoading(true);

		const { email, password } = input;

		const res = await signIn('credentials', {
			email,
			password,
			redirect: false,
		});

		if (res?.error) {
			setErrorMessage(res.error);
		}

		setIsLoading(false);
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
			<Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Hello Again!
			</Typography>
			{errorMessage && (
				<Alert
					sx={{
						width: '100%',
						mt: 2,
					}}
					severity="error"
				>
					{errorMessage}
				</Alert>
			)}
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
						control={
							<CheckboxField
								name="rememberMe"
								id="rememberMe"
								color="primary"
							/>
						}
						label="Remember me"
					/>
					<LoadingButton
						type="submit"
						fullWidth
						variant="contained"
						loading={isLoading}
						sx={{ mt: 3 }}
					>
						Login
					</LoadingButton>
					<LoadingButton
						onClick={() => signIn('google')}
						type="button"
						fullWidth
						variant="outlined"
						disableRipple
						disabled={isLoading}
						sx={{ mt: 2, mb: 3 }}
						startIcon={<GoogleIcon />}
					>
						Sign In with Google
					</LoadingButton>
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
