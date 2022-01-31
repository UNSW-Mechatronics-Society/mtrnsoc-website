import React from "react";
import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";
import type { navLink } from "data/navLinksData";
import navLinks from "data/navLinksData";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";

type ButtonProps = NavLinksSectionProps & navLink;

const Button = ({ name, route, currentRoute }: ButtonProps): JSX.Element => {
  const boldIfRouteIsCurrent = route === currentRoute ? "font-semibold" : "";

  return (
    <div className={styles.buttonContainer}>
      <Link href={route}>
        <a>
          <div className={`${styles.buttonText} ${boldIfRouteIsCurrent}`}>{name.toUpperCase()}</div>
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
    <div className={styles.navLinksContainer}>
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
        <div className={styles.content}>
          <Link href="/">
            <a>
              <img
                src="/logos/CulturedOnWhite.svg"
                alt="MTRNSoc Logo"
                aria-label="logo"
                className={styles.logo}
              />
            </a>
          </Link>
          <NavLinksSection currentRoute={route} />
        </div>
      </ContentContainer>
    </div>
  );
};

export default NavBar;
