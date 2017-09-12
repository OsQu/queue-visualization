import React from "react";

import { select, selectAll } from "d3";

export default class Dots extends React.Component {
  componentDidMount() {
    select(this.node).selectAll("rect").style("fill", "orange");
  }

  componentDidUpdate() {
    select(this.node).selectAll("rect").style("fill", "orange");
  }

  render() {
    return (
      <svg ref={node => (this.node = node)} width="300px" height="150px">
        <rect x="20" y="20" width="20px" height="20px" rx="5" ry="5" />
        <rect x="60" y="20" width="20px" height="20px" rx="5" ry="5" />
        <rect x="100" y="20" width="20px" height="20px" rx="5" ry="5" />
      </svg>
    );
  }
}
