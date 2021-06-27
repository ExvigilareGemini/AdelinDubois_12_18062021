import React from "react";
import Title from "./Title";
import Cards from "./cards/Cards";
import getUserDatas from "../../callservice";

/** Class component of the dashboard, render React component include in the dashboard.
 * 
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      id: 12,
    };
  }

  /** Getting information in the database, stocking it in this.state and passing it to the displayed components.
   */
  async componentDidMount() {
    const userDatas = await getUserDatas(this.state.id);
    this.setState({ userName: userDatas.data.data.userInfos.firstName });
  }

  render() {
    return (
      <nav className="dashboard">
        <Title userName={this.state.userName} />
        <Cards id={this.state.id} />
      </nav>
    );
  }
}

export default Dashboard;
