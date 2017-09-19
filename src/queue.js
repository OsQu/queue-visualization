// @flow

import type { Observable } from "rxjs";

export default class Queue {
  constructor(arrives: Observable<number>, server: Observable<number>) {
    console.log("HERE");
  }
}
