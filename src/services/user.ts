import axiosClient from '@/lib/axiosClient';
import { UserListDto } from '@/schema/user';

class UserService {
	async getAll() {
		const response = await axiosClient.get<UserListDto[]>('user');
		return response.data;
	}
}

export default new UserService();
