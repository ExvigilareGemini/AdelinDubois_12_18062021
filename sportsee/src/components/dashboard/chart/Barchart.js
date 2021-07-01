import React from "react";
import {getUserActivity} from '../../../callservice.js';
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

export class Barchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  async componentDidMount() {
    const userDatas = await getUserActivity(this.props.id);
    this.setState({ data: userDatas.sessions });
  }

  render() {
    return (
      <ResponsiveContainer className="barchart"  width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7}/>
          <Bar dataKey="calories" fill="#E60000" barSize={7}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Barchart;
