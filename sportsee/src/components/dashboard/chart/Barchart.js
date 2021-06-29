import React from "react";
import * as d3 from "d3";

export class Barchart extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.dataset = [100, 250, 280, 120, 400, 100, 250, 280, 120, 400];
  }
  componentDidMount() {
    let widthVar = parseInt(d3.select(".barchart").style("width"));
    let heightVar = parseInt(d3.select(".barchart").style("height"));
    let svg = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("viewBox", [0, 0, widthVar, heightVar]);

    let rect_width = 35;
    svg
      .selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => 5 + i * (rect_width + 5))
      .attr("y", (d) => heightVar - d)
      .attr("width", rect_width)
      .attr("height", (d) => d)
      .attr("fill", "teal");

  }
  render() {
    return <div className="barchart" ref={this.myRef}></div>;
  }
}

export default Barchart;
