import Axios from 'axios';

export default function getUserDatas(userId) {
	const datasToReturn = Axios.get(`http://localhost:3000/user/${userId}`)
		.catch((err) => {
			console.log(err);
		});
	return datasToReturn;
}