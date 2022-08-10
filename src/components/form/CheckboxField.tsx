import { useField } from 'formik';
import { Checkbox as MuiCheckbox } from '@mui/material';

const CheckboxField = (props: any): JSX.Element => {
	const [field] = useField(props);

	return <MuiCheckbox {...field} {...props} />;
};

export default CheckboxField;
