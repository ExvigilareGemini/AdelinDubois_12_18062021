import React from "react";
import { getUserActivity } from "../../../callservice.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * @returns JSX React component of the tooltip
 */
const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="barchart_tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

/** Class component of the barchart using Recharts.js. Display weight and burnt calories depending of the day of the week.
 * @param {Number} id the id of the actual user
 * @returns JSX React component
 */
export class Barchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  async componentDidMount() {
    const userDatas = await getUserActivity(this.props.id);
    this.setState({ data: userDatas });
  }

  render() {
    return (
      <>
        <h2 className="barchart_title">Activité quotidienne</h2>
        <ResponsiveContainer className="barchart" width="100%" height="95%">
          <BarChart
            width={500}
            height={300}
            data={this.state.data}
            margin={{
              top: 0,
              right: 30,
              left: 40,
              bottom: 50,
            }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="" tickLine={false} dy={10} stroke="#9B9EAC" />
            <YAxis
              orientation="right"
              dx={20}
              tickLine={false}
              axisLine={false}
              tickCount={3}
              stroke="#9B9EAC"
            />
            <Tooltip content={<CustomToolTip />} />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize="10"
              height={50}
            />
            <Bar
              name="Poids (kg)"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}

Barchart.propTypes = {
  userName: PropTypes.number,
};

export default Barchart;
