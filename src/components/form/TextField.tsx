import { useField } from 'formik';
import MuiTextField from '@mui/material/TextField';

const TextField = (props: any): JSX.Element => {
	const [field, meta] = useField(props);

	return (
		<MuiTextField
			{...field}
			{...props}
			error={meta.touched && !!meta.error}
			helperText={meta.touched && meta.error}
		/>
	);
};

export default TextField;
