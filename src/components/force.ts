import { getState } from "../state";

export const getAddForce = () => {
  const Form = document.createElement("form");

  Form.classList.add("w-100", "d-flex", "flex-column", "align-items-center");

  const elements = [
    document.createElement("input"),
    document.createElement("input"),
    document.createElement("input"),
    document.createElement("input"),
  ];

  const [identification, intensity, angle, position] = elements;

  elements.forEach((e) => {
    e.classList.add("form-control", "w-100", "m-1", "bg-dark", "text-light");
  });

  identification.placeholder = "ID";
  identification.id = "identification";

  intensity.placeholder = "Intensidade";
  intensity.id = "intensity";

  angle.placeholder = "Ângulo";
  angle.id = "angle";

  position.placeholder = "Posição";
  position.id = "position";

  const button = document.createElement("button");

  button.type = "submit";
  button.classList.add("w-100", "btn", "btn-success", "m-1");
  button.innerText = "Adicionar";

  [...elements, button].forEach((e) => Form.appendChild(e));

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const state = getState();

    const distanceValue =
      document.querySelector<HTMLInputElement>("#position")?.value;
    const intensityValue =
      document.querySelector<HTMLInputElement>("#intensity")?.value;
    const angleValue =
      document.querySelector<HTMLInputElement>("#angle")?.value;

    const identificationValue =
      document.querySelector<HTMLInputElement>("#identification")?.value;

    if (!state.length) {
      alert("Sete a barra antes por favor!");
      return;
    }

    if (distanceValue && intensityValue && angleValue && identificationValue) {
      state.addForce({
        id: identificationValue,
        angle: Number(angleValue),
        intensity: Number(intensityValue),
        position: Number(distanceValue),
      });

      position.value = "";
      intensity.value = "";
      angle.value = "";
      identification.value = "";
    }
  });

  return Form;
};
