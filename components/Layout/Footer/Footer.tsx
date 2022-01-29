import ContentContainer from "../ContentContainer/ContentContainer";
import styles from "./Footer.module.scss";

const TopHalfLogos = () => {
  return (
    <div className="flex flex-row justify-center my-2">
      <img
        src="/logos/discordLogo.svg"
        alt="discord logo"
        aria-label="discord"
        className={styles.socialLogo}
      />
      <img
        src="/logos/emailLogo.svg"
        alt="email logo"
        aria-label="email"
        className={styles.socialLogo}
      />
      <img
        src="/logos/facebookLogo.svg"
        alt="facebook logo"
        aria-label="facebook"
        className={styles.socialLogo}
      />
      <img
        src="/logos/instagramLogo.svg"
        alt="instagram logo"
        aria-label="instagram"
        className={styles.socialLogo}
      />
      <img
        src="/logos/linkedinLogo.svg"
        alt="linkedin logo"
        aria-label="linkedin"
        className={styles.socialLogo}
      />
    </div>
  );
};

const BottomText = () => {
  return (
    <div className="text-off-white grid place-items-center h-full">
      Copyright &copy; 2021 UNSW Mechatronics Society - All Rights Reserved.
    </div>
  );
};

const DividerLine = () => {
  // as percentages
  // For some reason, only 90 or 80 works
  const lineWidth = 90;
  return (
    <div className={`w-[${lineWidth}%] pl-[${100 - lineWidth}%] my-4`}>
      <hr className="border-solid border-off-white border-t-2" />
    </div>
  );
};

const Footer = (): JSX.Element => {
  return (
    <div className="w-full h-full grid place-items-center bg-yale-blue">
      <ContentContainer>
        <div className="h-full w-full grid place-items-center">
          <div className="w-full flex flex-col content-center">
            <TopHalfLogos />
            <DividerLine />
            <BottomText />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Footer;
