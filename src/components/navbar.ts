const getNavbarTitle = () => {
  const Title = document.createElement("div");
  Title.classList.add("navbar-brand");
  Title.innerText = "Mecsim";
  return Title;
};

const getContainerFluid = () => {
  const ContainerFluid = document.createElement("div");
  ContainerFluid.classList.add("container-fluid");
  ContainerFluid.appendChild(getNavbarTitle());
  return ContainerFluid;
};

const getNavbar = () => {
  const Navbar = document.createElement("nav");

  Navbar.classList.add(
    "mw-100",
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "bg-dark"
  );

  Navbar.appendChild(getContainerFluid());

  return Navbar;
};

const Navbar = getNavbar();

export { Navbar };
