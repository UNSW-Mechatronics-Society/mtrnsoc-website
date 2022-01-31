import React from "react";
import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";
import type { navLink } from "data/navLinksData";
import navLinks from "data/navLinksData";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";

type ButtonProps = NavLinksSectionProps & navLink;

const Button = ({ name, route, currentRoute }: ButtonProps): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <Link href={route}>
        <a>
          <div
            className={`py-2 px-4 text-base text-off-white font-400 ${
              route === currentRoute ? "font-semibold" : ""
            }`}
          >
            {name.toUpperCase()}
          </div>
        </a>
      </Link>
    </div>
  );
};

type NavLinksSectionProps = {
  currentRoute: string;
};

const NavLinksSection = ({ currentRoute }: NavLinksSectionProps): JSX.Element => {
  return (
    <div className="flex flex-row content-center justify-between">
      {navLinks.map((item) => (
        <Button key={item.name} {...item} currentRoute={currentRoute} />
      ))}
    </div>
  );
};

const NavBar = (): JSX.Element => {
  const [isTop, setIsTop] = React.useState(false);
  const router = useRouter();
  const { route } = router;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY <= 0);
    });
  }

  return (
    <div className={`${styles.mainContainer} ${isTop ? "" : "shadow-md"}`}>
      <ContentContainer>
        <div className="h-full w-full flex justify-between content-center pt-[2px]">
          <Link href="/">
            <a>
              <img src="/BlueOnWhite.svg" alt="MTRNSoc Logo" aria-label="logo" className="h-14" />
            </a>
          </Link>
          <NavLinksSection currentRoute={route} />
        </div>
      </ContentContainer>
    </div>
  );
};

export default NavBar;
