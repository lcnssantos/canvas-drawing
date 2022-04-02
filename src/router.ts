import { Home } from "./pages/home";

interface Route {
  path: string;
  element: Element;
}

const routes: Array<Route> = [
  {
    element: Home,
    path: "/",
  },
];

export const getRoute = (path: string) => {
  return routes.find((route) => route.path === path);
};
