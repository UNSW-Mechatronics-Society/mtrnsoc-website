import { Banner, ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";
import { contactEmail, discord, facebookPage, instagram, linkedin } from "data/socialsData";
import Link from "next/link";
import styles from "styles/contact.module.scss";

const Home: NextPage = () => {
  const LogoStyle = `${styles.logoSize} ${styles.logoColour}`;
  return (
    <div className="w-full h-full grid place-items-center">
      <MetaTags title="Contact - MTRNSoc" description="Contact society" />
      <ContentContainer>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-4">Wanna get in touch?</h1>
          <p className="text-2xl font-medium mb-1">General Contact</p>
          <p className="text-lg underline">
            <Link href={`mailto:${contactEmail}`}>
              <a>{contactEmail}</a>
            </Link>
          </p>
          <h1 className="text-3xl font-semibold mt-6 mb-4">Stay Connected</h1>
          <div className="flex">
            <Link href={discord}>
              <a target="_blank">
                <img
                  src="/logos/discordLogo.svg"
                  alt="discord logo"
                  aria-label="discord"
                  className={LogoStyle}
                />
              </a>
            </Link>
            <Link href={`mailto:${contactEmail}`}>
              <a>
                <img
                  src="/logos/emailLogo.svg"
                  alt="email logo"
                  aria-label="email"
                  className={LogoStyle}
                />
              </a>
            </Link>
            <Link href={facebookPage}>
              <a target="_blank">
                <img
                  src="/logos/facebookLogo.svg"
                  alt="facebook logo"
                  aria-label="facebook"
                  className={LogoStyle}
                />
              </a>
            </Link>
            <Link href={instagram}>
              <a target="_blank">
                <img
                  src="/logos/instagramLogo.svg"
                  alt="instagram logo"
                  aria-label="instagram"
                  className={LogoStyle}
                />
              </a>
            </Link>
            <Link href={linkedin}>
              <a target="_blank">
                <img
                  src="/logos/linkedinLogo.svg"
                  alt="linkedin logo"
                  aria-label="linkedin"
                  className={LogoStyle}
                />
              </a>
            </Link>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Home;
