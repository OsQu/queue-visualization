import React from "react";

import { select, selectAll } from "d3";

export default class Dots extends React.Component {
  componentDidMount() {
    select(this.node)
      .selectAll("circle")
      .style("fill", "orange");
  }

  componentDidUpdate() {
    select(this.node)
      .selectAll("circle")
      .style("fill", "orange");
  }

  render() {
    return (
      <svg ref={node => (this.node = node)} width="300px" height="150px">
        <circle cx="20" cy="20" r="10px" />
        <circle cx="60" cy="20" r="10px" />
        <circle cx="100" cy="20" r="10px" />
      </svg>
    );
  }
}
