// @flow

import { expect } from "chai";

import Queue from "queue.js";

describe("Queue", () => {
  it("does something great", () => {
    const queue = new Queue(() => {}, () => {});
    expect(true).to.equal(false);
  });
});
