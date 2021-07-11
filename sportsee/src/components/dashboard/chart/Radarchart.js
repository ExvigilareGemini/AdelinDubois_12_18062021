import React from "react";
import { getUserPerformance } from "../../../callservice.js";
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarGrid,
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
      <ResponsiveContainer className="radarchart" width="32%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={this.state.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" fontSize="10" tickLine={false} />
          <Radar
            name="test"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
            
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default Radarchart;
