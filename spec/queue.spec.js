// @flow

import { expect } from "chai";

import Queue from "queue.js";
import { Observable } from "rxjs";

describe("Queue", () => {
  it("does something great", () => {
    const observable = Observable.from([1, 2, 3]);
    const queue = new Queue(observable, observable);
    expect(true).to.equal(false);
  });
});
