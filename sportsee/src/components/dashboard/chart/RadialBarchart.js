import React from "react";
import RadialBarchartLabel from "./Label/RadialBarchartLabel";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  LabelList,
  Legend
} from "recharts";

export class RadialBarchart extends React.Component {
  render() {
    return (
      <ResponsiveContainer className="radialBarchart" width="32%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="90%" barSize={20} data={[{ todayScore: this.props.todayScore, fill: "#E60000", name: "Score" }]} startAngle={90} endAngle={450}>
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} background />
          <LabelList dataKey="Test" />
          <RadialBar dataKey="todayScore" label={<RadialBarchartLabel />} />
          <Legend align="left" verticalAlign="top" iconSize="0" fill="#ffffff" />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

export default RadialBarchart;
