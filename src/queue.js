// @flow

type ArrivalProcess = () => void;
type ServerProcess = () => void;

export default class Queue {
  constructor(arrives: ArrivalProcess, server: ServerProcess) {
  }
}
