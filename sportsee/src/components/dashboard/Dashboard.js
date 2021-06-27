import React from 'react';
import Cards from './cards/Cards';
import getUserDatas from '../../callservice';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName : '',
			id: 12
		};
	}

	async componentDidMount() {
		const userDatas = await getUserDatas(this.state.id);
		this.setState({ userName : userDatas.data.data.userInfos.firstName});
	}

	render() {
		return <nav className="dashboard">
			<h1 className="dashboard_title">Bonjour <span className="dashboard_title_name">{this.state.userName}</span> </h1>
			<p className="dashboard_title dashboard_title_small">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			<Cards id={this.state.id} />
		</nav>;
	}
}

export default Dashboard;