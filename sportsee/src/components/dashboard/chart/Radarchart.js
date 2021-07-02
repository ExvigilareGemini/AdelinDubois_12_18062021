import React from "react";
import {getUserPerformance} from "../../../callservice.js";
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export class Radarchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  async componentDidMount() {
    const userDatas = await getUserPerformance(this.props.id);
    this.setState({ data: userDatas });
  }

  render() {
    return (
      <ResponsiveContainer className="radarchart" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.data}>
          <PolarAngleAxis dataKey="kind" />
          <Radar
            name="test"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default Radarchart;
