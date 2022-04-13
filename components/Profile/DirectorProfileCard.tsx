import { contactEmail, linkedin } from "data/socialsData";
import { profileData } from "data/TeamData";
import Link from "next/link";
import ContentContainer from "../Layout/ContentContainer/ContentContainer";
import styles from "./Profile.module.scss";

type DirectorProfileCardProps = {
  directorData: profileData[];
};

export const DirectorProfileCard = ({ directorData }: DirectorProfileCardProps) => {
  return (
    <div className={styles.mainContainer}>
      {directorData.map((profile, indx) => {
        return (
          <>
            <div className={styles.directorProfileContainer}>
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
                <a href={profile.linkedIn}>
                  <img
                    key={`img-${indx}`}
                    src={"/logos/linkedinLogo.svg"}
                    alt={"LinkedInLogo"}
                    className={styles.logo}
                  />
                </a>
                <a href={contactEmail}>
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
