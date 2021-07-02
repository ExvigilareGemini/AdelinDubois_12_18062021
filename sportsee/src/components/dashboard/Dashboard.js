import React from "react";
import Title from "./Title";
import Cards from "./cards/Cards";
import Barchart from "./chart/Barchart";
import Linechart from "./chart/Linechart";
import Radarchart from "./chart/Radarchart";
import getUserDatas from "../../callservice";

/** Class component of the dashboard, render React component include in the dashboard.
 *
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 12,
      userName: "",
      keyData: ""
    };
  }

  /** Getting information in the database, stocking it in this.state and passing it to the displayed components.
   */
  async componentDidMount() {
    const userDatas = await getUserDatas(this.state.id);
    this.setState({ userName: userDatas.firstName, keyData: userDatas.keyData });
  }

  render() {
    return (
      <nav className="dashboard">
        <Title userName={this.state.userName} />
        <Cards keyData={this.state.keyData}/>
        <Barchart id={this.state.id}/>
        <Linechart id={this.state.id}/>
        <Radarchart id={this.state.id}/>
      </nav>
    );
  }
}

export default Dashboard;
