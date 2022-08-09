import {
	Paper,
	Box,
	Avatar,
	Typography,
	Grid,
	FormControlLabel,
	Checkbox,
	Button,
	Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Link } from '../components/link';
import React, { useState } from 'react';
import { AuthLayout } from '../components/layout';
import { TextField } from '../components/form';
import { SignUpInput } from '../models/signUpInput';
import authService from '../services/auth';
import { useRouter } from 'next/router';

const Register: Page = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const initialValues: SignUpInput = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	const validate = Yup.object({
		firstName: Yup.string().required('First name is required.'),
		lastName: Yup.string().required('Last name is required.'),
		email: Yup.string()
			.email('Please enter a valid email.')
			.required('Email is required.'),
		password: Yup.string().required('Password is required.'),
	});

	const handleSubmit = async (values: SignUpInput) => {
		setErrorMessage('');
		setIsLoading(true);

		try {
			await authService.signUp(values);
			router.push('/login');
		} catch (err: any) {
			if (err?.data?.error?.message) {
				setErrorMessage(err?.data?.error?.message as string);
			}
		} finally {
			setIsLoading(false);
		}
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
				<Box component={Form} noValidate sx={{ mt: 3 }}>
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
							<Link
								href="/login"
								variant="body2"
								underline="always"
							>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Formik>
		</Paper>
	);
};

Register.getLayout = (page: React.ReactNode) => {
	return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
