import { Situation } from "./domain/situation";
import { drawBase, drawForce, getScale } from "./infra/ui";

export const draw = (context: CanvasRenderingContext2D, state: Situation) => {
  if (state) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const scale = getScale(context, state.length);

    drawBase(context, state.length, scale);
    for (const force of state.forces) {
      drawForce(context, force, state.length);
    }
  }
};
