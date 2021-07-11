import React from "react";
import { getUserAverageSessions } from "../../../callservice.js";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const XAxisValue = ["L", "M", "M", "J", "V", "S", "D"];

const CustomTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <>
        <div className="linechart_tooltip">
          <p>{payload[0].value}min</p>
        </div>
      </>
    );
  }
  return null;
};

export class Linechart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  async componentDidMount() {
    const userDatas = await getUserAverageSessions(this.props.id);
    userDatas.sessions.forEach((el, index) => {
      el.day = XAxisValue[index];
    });
    this.setState({ data: userDatas.sessions });
  }

  render() {
    return (
      <>
        <h2 className="linechart_title"> Durée moyenne des sessions</h2>
        <ResponsiveContainer className="linechart" width="32%" height="100%">
          <LineChart
            data={this.state.data}
            margin={{
              top: 50,
              right: 0,
              left: 0,
              bottom: 20,
            }}
          >
            <Tooltip
              cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }}
              content={<CustomTooltip />}
            />
            <XAxis
              dataKey="day"
              stroke="#FFFFFF80"
              axisLine={false}
              tickLine={false}
              padding={{ left: 15, right: 15 }}
              tickMargin={15}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="#FFFFFF80"
              strokeWidth={2}
              dot={false}
              activeDot={{ stroke: "white", strokeWidth: 2, r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default Linechart;
