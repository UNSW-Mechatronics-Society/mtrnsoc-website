import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";
import type { navLink as ButtonProps } from "data/navLinksData";
import navLinks from "data/navLinksData";

const Button = ({ name, route }: ButtonProps): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <Link href={route}>
        <a>
          <div className="py-2 px-4 text-base text-off-white font-400">{name.toUpperCase()}</div>
        </a>
      </Link>
    </div>
  );
};

const NavLinksSection = (): JSX.Element => {
  return (
    <div className="flex flex-row content-center justify-between">
      {navLinks.map((item) => (
        <Button key={item.name} {...item} />
      ))}
    </div>
  );
};

const NavBar = (): JSX.Element => {
  return (
    <div className="h-full w-full bg-yale-blue grid place-items-center">
      <ContentContainer>
        <div className="h-full w-full flex justify-between content-center pt-[2px]">
          <Link href="/">
            <a>
              <img src="/BlueOnWhite.svg" alt="MTRNSoc Logo" aria-label="logo" className="h-14" />
            </a>
          </Link>
          <NavLinksSection />
        </div>
      </ContentContainer>
    </div>
  );
};

export default NavBar;
