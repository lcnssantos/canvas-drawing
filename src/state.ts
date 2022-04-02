import { Situation } from "./domain/situation";

var state: Situation;

export const getState = () => {
  if (state) {
    return state;
  }

  state = new Situation();

  return state;
};
