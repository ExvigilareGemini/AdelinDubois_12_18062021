import React from "react";
import { getUserAverageSessions } from "../../../callservice.js";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export class Linechart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  async componentDidMount() {
    const userDatas = await getUserAverageSessions(this.props.id);
    this.setState({ data: userDatas.sessions });
  }

  render() {
    return (
      <ResponsiveContainer className="linechart" width="100%" height="100%">
        <LineChart width={300} height={100} data={this.state.data}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Linechart;
