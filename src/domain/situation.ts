import { Force } from "./force";

export class Situation {
  public length: number;
  public forces: Array<Force>;
  private listeners: Array<(state: Situation) => void>;

  constructor() {
    this.length = 0;
    this.forces = [];
    this.listeners = [];
  }

  private observable() {
    this.listeners.forEach((listener) => listener(this));
  }

  addForce(force: Force) {
    this.forces.push(force);
    this.observable();
  }

  setLength(length: number) {
    this.length = length;
    this.observable();
  }

  addListener = (listener: (state: Situation) => void) => {
    this.listeners.push(listener);
  };
}
