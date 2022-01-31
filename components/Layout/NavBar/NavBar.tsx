import React from "react";
import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";
import type { navLink } from "data/navLinksData";
import navLinks from "data/navLinksData";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";
import ReactSlidingPane from "./SlidingPane";

type ButtonProps = NavLinksSectionProps & navLink;

const Logo = () => {
  return (
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
  );
};

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

const DesktopNavBar = ({ currentRoute }: NavLinksSectionProps): JSX.Element => {
  return (
    <div className={styles.content}>
      <Logo />
      <NavLinksSection currentRoute={currentRoute} />
    </div>
  );
};

interface MobileNavBarProps extends NavLinksSectionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavBar = ({ currentRoute, isOpen, setIsOpen }: MobileNavBarProps): JSX.Element => {
  return (
    <div className="w-full h-[60px] flex">
      <button aria-label="menu">
        <img
          src="/menu.svg"
          alt="menu"
          className={styles.navigationBurger}
          onClick={() => setIsOpen(true)}
        />
      </button>
    </div>
  );
};

const NavBar = (): JSX.Element => {
  const [isTop, setIsTop] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
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
        {/* <DesktopNavBar currentRoute={route} /> */}
        <MobileNavBar currentRoute={route} isOpen={isOpen} setIsOpen={setIsOpen} />
      </ContentContainer>
      <ReactSlidingPane
        isOpen={isOpen}
        from="left"
        width="500px"
        onRequestClose={() => setIsOpen(false)}
      >
        <div>And I am pane content on left.</div>
      </ReactSlidingPane>
    </div>
  );
};

export default NavBar;
