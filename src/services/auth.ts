import axiosClient from '@/lib/axiosClient';
import { SignUpInput } from '@/schema/auth';

class AuthService {
	async signUp(input: SignUpInput) {
		const response = await axiosClient.post('auth/signup', input);
		return response.data;
	}
}

export default new AuthService();
