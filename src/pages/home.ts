import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { draw } from "../draw";
import { getState } from "../state";

const getCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = 1000;
  canvas.height = 1000;
  canvas.setAttribute("style", "background-color: silver");

  const context = canvas.getContext("2d");

  if (context) {
    const state = getState();

    state.addListener((state) => draw(context, state));

    return canvas;
  }

  throw new Error("InvalidCanvas");
};

const Home = document.createElement("section");
Home.classList.add("vh-100");

const fakeElement = document.createElement("div");
fakeElement.innerText = "helloWorld";

const Content = document.createElement("section");
Content.classList.add("d-flex", "h-100");

Content.appendChild(Sidebar);
Content.appendChild(getCanvas());

Home.appendChild(Navbar);
Home.appendChild(Content);

export { Home };
