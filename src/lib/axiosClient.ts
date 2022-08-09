import axios from 'axios';
import queryString from 'query-string';

const baseurl = 'http://localhost:3000/api/';

const axiosClient = axios.create({
	baseURL: baseurl,
	paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use((config) => {
	return {
		...config,
		headers: {
			'Content-Type': 'application/json',
		},
	};
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(err) => {
		if (!err.response) {
			return alert(err);
		}
		throw err.response;
	}
);

export default axiosClient;
