import { Force } from "./force";

export class Situation {
    public length: number;
    public forces: Array<Force>
    private listener: (state: Situation) => void

    constructor(length: number, listener: (state: Situation) => void) {
        this.length = length;
        this.forces = []
        this.listener = listener;
    }

    addForce(force: Force) {
        this.forces.push(force);
        this.listener(this)
    }
}