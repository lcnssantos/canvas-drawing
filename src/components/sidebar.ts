import { getAccordion } from "./accordion";
import { getBar } from "./bar";
import { getAddForce } from "./force";

const getSidebar = () => {
  const Sidebar = document.createElement("aside");

  Sidebar.classList.add(
    "bg-dark",
    "text-light",
    "h-100",
    "w-12",
    "internal-margin"
  );

  Sidebar.appendChild(
    getAccordion("sidebarAccordion", [
      {
        title: "Barra",
        child: getBar(),
      },
      {
        title: "Forças",
        child: getAddForce(),
      },
    ])
  );

  return Sidebar;
};

const Sidebar = getSidebar();

export { Sidebar };
