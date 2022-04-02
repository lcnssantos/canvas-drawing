import { getState } from "../state";

export const getBar = () => {
  const Form = document.createElement("form");

  Form.classList.add("w-100", "d-flex", "flex-column", "align-items-center");

  const elements = [document.createElement("input")];

  const [size] = elements;

  elements.forEach((e) => {
    e.classList.add("form-control", "w-100", "m-1", "bg-dark", "text-light");
  });

  size.placeholder = "Tamanho";
  size.id = "size";

  const button = document.createElement("button");

  button.type = "submit";
  button.classList.add("w-100", "btn", "btn-success", "m-1");
  button.innerText = "Alterar";

  [...elements, button].forEach((e) => Form.appendChild(e));

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const state = getState();

    const sizeValue = document.querySelector<HTMLInputElement>("#size")?.value;

    if (sizeValue) {
      state.setLength(Number(sizeValue));

      size.value = sizeValue;
    }
  });

  return Form;
};
