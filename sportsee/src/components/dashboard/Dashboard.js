import React from "react";
import Title from "./Title";
import Cards from "./cards/Cards";
import Barchart from "./chart/Barchart";
import Linechart from "./chart/Linechart";
import Radarchart from "./chart/Radarchart";
import RadialBarchart from "./chart/RadialBarchart";
import getUserDatas from "../../callservice";

/** Class component of the dashboard, render React component include in the dashboard.
 *
 * @returns JSX React component
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      userName: "",
      keyData: "",
      todayScore: "",
    };
  }

  /** Getting information in the database, stocking it in this.state and passing it to the displayed components.
   * If userDatas.todayScore is undefined, it take the value of the score value (backend property typo error)
   */
  async componentDidMount() {
    const userDatas = await getUserDatas(this.state.id);

    this.setState({
      userName: userDatas.firstName,
      keyData: userDatas.keyData,
      todayScore:
        userDatas.todayScore === undefined
          ? userDatas.score
          : userDatas.todayScore,
    });
  }

  render() {
    return (
      <nav className="dashboard">
        <Title userName={this.state.userName} />
        <Cards keyData={this.state.keyData} />
        <div className="dashboard_barchartContainer">
          <Barchart id={this.state.id} />
        </div>
        <div className="dashboard_bottomChartsContainer">
          <Linechart id={this.state.id} />
          <Radarchart id={this.state.id} />
          <RadialBarchart todayScore={this.state.todayScore} />
        </div>
      </nav>
    );
  }
}

export default Dashboard;
