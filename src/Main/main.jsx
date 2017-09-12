import React from "react";

import Dots from "../Dots";
import "./style.scss";

export default class Main extends React.Component {
  render() {
    console.log("osku roks");
    return (
      <div>
        <h1 styleName="main">Main here</h1>
        <Dots />
      </div>
    );
  }
}
