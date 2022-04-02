import { Force } from "../domain/force";
import { Calc } from "./math";

export const getScale = (context: CanvasRenderingContext2D, length: number) => {
  const width = context.canvas.width * 0.9;
  return width / length;
};

export const drawLine = (
  context: CanvasRenderingContext2D,
  firstPoint: [number, number],
  size: number,
  angle = 0,
  color = "black",
  width = 2
) => {
  const { cos, sin } = Calc.getCosSin(angle);

  const finalPoint = [firstPoint[0] + size * cos, firstPoint[1] + size * sin];

  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(firstPoint[0], firstPoint[1]);
  context.lineTo(finalPoint[0], finalPoint[1]);
  context.lineWidth = width;
  context.stroke();
};

export const drawForce = (
  context: CanvasRenderingContext2D,
  force: Force,
  baseLength: number
) => {
  const position: [number, number] = [
    context.canvas.width / 2 - baseLength / 2 + force.position,
    context.canvas.height / 2,
  ];

  const LENGTH = context.canvas.height / 10;
  const ARROW_LENGTH = LENGTH / 10;
  const newAngle = -(force.angle + 90);

  const { cos, sin } = Calc.getCosSin(force.angle);

  context.font = "30px Arial";
  context.fillText(
    `${force.id}=${force.intensity}N`,
    position[0] - LENGTH * sin - 10,
    position[1] - LENGTH * cos - 10
  );

  drawLine(context, position, LENGTH, newAngle, "blue", 2);
  drawLine(context, position, ARROW_LENGTH, newAngle + 45, "blue", 2);
  drawLine(context, position, -ARROW_LENGTH, newAngle + 135, "blue", 2);
};

export const drawRetangle = (
  context: CanvasRenderingContext2D,
  topLeft: [number, number],
  width: number,
  height: number,
  angle = 0
) => {
  const { cos, sin } = Calc.getCosSin(angle);

  drawLine(context, topLeft, width, angle);
  drawLine(
    context,
    [topLeft[0] + height * sin, topLeft[1] - height * cos],
    width,
    angle
  );

  drawLine(
    context,
    [topLeft[0] + height * sin, topLeft[1] - height * cos],
    height,
    angle + 90
  );
  drawLine(
    context,
    [
      topLeft[0] + width * cos + height * sin,
      topLeft[1] + width * sin - height * cos,
    ],
    height,
    angle + 90
  );
};

export const drawBase = (
  context: CanvasRenderingContext2D,
  length: number,
  scale: number
) => {
  const marginLeft = context.canvas.width * 0.05;
  drawRetangle(
    context,
    [marginLeft, context.canvas.height / 2 + scale],
    scale * length,
    scale,
    0
  );
};
