import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";



export class RadialBarchart extends React.Component {
  render() {
    return (
      <ResponsiveContainer
        className="radialBarchart"
        width="100%"
        height="100%"
      >
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="90%"
          barSize={20}
          data={[{todayScore : this.props.todayScore}]}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false}  />
          <RadialBar
            minAngle={0}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="todayScore"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

export default RadialBarchart;
