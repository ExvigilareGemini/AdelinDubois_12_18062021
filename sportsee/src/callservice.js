import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000';

export default function getUserDatas(userId) {
	const datasToReturn = Axios.get(`/user/${userId}`)
		.catch((err) => {
			console.log(err);
		});
	return datasToReturn;
}
export function getUserKeyDatas(userId) {
	const datasToReturn = Axios.get(`/user/${userId}/key-data`)
		.catch((err) => {
			console.log(err);
		});
	return datasToReturn;
}