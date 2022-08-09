import { SignUpInput } from '../models/signUpInput';
import axiosClient from '../api/axiosClient';

class AuthService {
	async signUp(input: SignUpInput) {
		const response = await axiosClient.post('auth/signup', input);
		return response.data;
	}
}

export default new AuthService();
