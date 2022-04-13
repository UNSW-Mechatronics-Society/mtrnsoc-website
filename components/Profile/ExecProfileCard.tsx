import { contactEmail, linkedin } from "data/socialsData";
import { profileData } from "data/TeamData";
import Link from "next/link";
import ContentContainer from "../Layout/ContentContainer/ContentContainer";
import styles from "./Profile.module.scss";

type ExecProfileCardProp = {
  execData: profileData[];
};

const ExecProfileCard = ({ execData }: ExecProfileCardProp): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      {execData.map((profile, indx) => {
        return (
          <>
            <div className={styles.execProfileContainer}>
              <img
                key={`img-${indx}`}
                src={profile.src}
                alt={profile.id}
                className={styles.picture}
              />
              <div className={styles.textContainer}>
                <h1 key={`h1-${indx}`} className={styles.name}>
                  {profile.id}
                </h1>
                <div key={`h1-${indx}`} className={styles.position}>
                  {profile.position}
                </div>
              </div>
              <div className={styles.links}>
                <a rel="noreferrer" target="_blank" href={profile.linkedIn}>
                  <img
                    key={`img-${indx}`}
                    src={"/logos/linkedinLogo.svg"}
                    alt={"LinkedInLogo"}
                    className={styles.logo}
                  />
                </a>
                <a href={"mailto:mechatronics.unsw@gmail.com"}>
                  <img
                    key={`img-${indx}`}
                    src={"/logos/emailLogo.svg"}
                    alt={"LinkedInLogo"}
                    className={styles.logo}
                  />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExecProfileCard;
