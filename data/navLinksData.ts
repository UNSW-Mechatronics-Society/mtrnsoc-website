export type NavLink = {
  name: string;
  route: string;
};

const navLinks: NavLink[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Our Team",
    route: "/team",
  },
  {
    name: "Events",
    route: "/events",
  },
  {
    name: "Sponsors",
    route: "/sponsors",
  },
  // {
  //   name: "Resources",
  //   route: "/resources",
  // },
  {
    name: "Contact Us",
    route: "/contact",
  },
];

export default navLinks;
