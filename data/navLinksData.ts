export type navLink = {
  name: string;
  route: string;
};

const navLinks: navLink[] = [
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
  {
    name: "Resources",
    route: "/Resources",
  },
  {
    name: "Contact Us",
    route: "/contact",
  },
];

export default navLinks;
