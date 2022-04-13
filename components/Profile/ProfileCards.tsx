import type { profileData } from "data/teamData";
import styles from "./ProfileCards.module.scss";

type background = "director" | "executive";

type ProfileCardsProp = {
  profileData: profileData[];
  background: background;
  contactEmail: string;
};

const ProfileCards = ({ profileData, background, contactEmail }: ProfileCardsProp): JSX.Element => {
  const backgroundClass = background === "director" ? styles.directorBGColour : styles.execBGColour;
  return (
    <div className={styles.mainContainer}>
      {profileData.map((profile, indx) => {
        return (
          <>
            <div className={`${styles.profileContainer} ${backgroundClass}`}>
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
                    src="/logos/linkedinLogo.svg"
                    alt="LinkedInLogo"
                    className={styles.logo}
                  />
                </a>
                <a href={`mailto:${contactEmail}`}>
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

export default ProfileCards;
