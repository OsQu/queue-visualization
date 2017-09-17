import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";

import Dots from "./dots.jsx";

describe("<Dots />", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Dots />);
  });

  it("renders svg element", () => {
    expect(wrapper.find("svg")).to.have.length(1);
  });

  it("renders three dots", () => {
    expect(wrapper.find("circle")).to.have.length(3);
  });
});
