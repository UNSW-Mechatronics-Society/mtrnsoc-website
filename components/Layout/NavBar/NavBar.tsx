import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowDimensions from "util/useWindowDimensions";
import type { NavLink } from "data/navLinksData";
import navLinks from "data/navLinksData";
import ContentContainer from "../ContentContainer/ContentContainer";
import styles from "./NavBar.module.scss";
import ReactSlidingPane from "./SlidingPane";

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

type DesktopButtonProps = NavLinksSectionProps & NavLink;

const DesktopButton = ({ name, route, currentRoute }: DesktopButtonProps): JSX.Element => {
  const boldIfRouteIsCurrent = route === currentRoute ? "font-semibold" : "";

  return (
    <div className={styles.buttonContainer}>
      <Link href={route}>
        <a>
          <div className={`${styles.buttonText} ${boldIfRouteIsCurrent}`}>{name}</div>
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
        <DesktopButton key={item.name} {...item} currentRoute={currentRoute} />
      ))}
    </div>
  );
};

const DesktopNavBar = ({ currentRoute }: NavLinksSectionProps): JSX.Element => {
  return (
    <div className={styles.DesktopNavBarContainer}>
      <Logo />
      <NavLinksSection currentRoute={currentRoute} />
    </div>
  );
};

interface MobileNavBarProps extends NavLinksSectionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavBar = ({ setIsOpen }: MobileNavBarProps): JSX.Element => {
  return (
    <div className={styles.mobileNavBarContainer}>
      <button aria-label="menu">
        <img
          src="/menu.svg"
          alt="menu"
          className={styles.navigationBurger}
          onClick={() => setIsOpen(true)}
        />
      </button>
      <Logo />
      {/* As a placeholder for flex */}
      <img
        src="/menu.svg"
        alt=""
        className={`${styles.navigationBurger} invisible`}
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};

const NavBar = (): JSX.Element => {
  const [isTop, setIsTop] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { width } = useWindowDimensions();

  // if `mobileVersion` is true, display mobile version of the NavBar
  const [mobileVersion, setMobileVersion] = React.useState(false);

  React.useEffect(() => {
    if (width !== null) setMobileVersion(width <= 766);
  }, [width]);

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
        {!mobileVersion ? (
          // Desktop version
          <DesktopNavBar currentRoute={route} />
        ) : (
          // Mobile version
          <MobileNavBar currentRoute={route} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </ContentContainer>
      {mobileVersion && (
        <ReactSlidingPane
          isOpen={isOpen}
          from="left"
          width="15rem"
          onRequestClose={() => setIsOpen(false)}
        >
          <nav>
            <ul>
              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className={`${styles.mobileNavButton} ${
                    item.route === route ? "font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.route}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ReactSlidingPane>
      )}
    </div>
  );
};

export default NavBar;
