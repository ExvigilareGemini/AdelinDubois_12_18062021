import React from 'react';
import getUserDatas from '../../callservice';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName : null
		};
	}

	async componentDidMount() {
		const userDatas = await getUserDatas(12);
		this.setState({ userName : userDatas.data.data.userInfos.firstName});
	}

	render() {
		return <nav className="dashboard">
			<h1 className="dashboard_title">Bonjour <span className="dashboard_title_name">{this.state.userName ? this.state.userName : 'NOK'}</span>
			</h1>
		</nav>;
	}
}

export default Dashboard;