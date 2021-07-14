import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";

import PropTypes from "prop-types";


export class RadialBarchart extends React.Component {
  render() {
    const dataPercentage = [
      { todayScore: this.props.todayScore, fill: "#E60000" },
    ];

    return (
      <>
        <h2 className="radialBarchart_title">Score</h2>
        <p className="radialBarchart_text">
          {dataPercentage[0].todayScore * 100}% <br></br>
          <span className="radialBarchart_text_small">de votre objectif</span>
        </p>
        <ResponsiveContainer
          className="radialBarchart"
          width="32%"
          height="100%"
        >
          <RadialBarChart

            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="90%"
            barSize={20}
            data={dataPercentage}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              tick={false}
              background
            />
            <LabelList dataKey="Test" />
            <RadialBar
              dataKey="todayScore"
              stroke="red"
              fill="red"
              cornerRadius={10}
            />
            <Legend
              align="left"
              verticalAlign="top"
              iconSize="0"
              fill="#ffffff"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </>
    );
  }
}

RadialBarchart.propTypes = {
  userName: PropTypes.number,
};


export default RadialBarchart;
