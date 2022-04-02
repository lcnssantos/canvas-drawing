import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getRoute } from "./router";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const route = getRoute(location.pathname);

if (route) {
  app.appendChild(route.element);
}
