import type { ProfileData } from "data/teamData";
import styles from "./ProfileCards.module.scss";

type Background = "director" | "executive";

type ProfileCardsProp = {
  profileData: ProfileData[];
  background: Background;
  contactEmail: string;
};

const ProfileCards = ({ profileData, background, contactEmail }: ProfileCardsProp): JSX.Element => {
  const backgroundClass = background === "director" ? styles.directorBGColour : styles.execBGColour;
  return (
    <div className={styles.mainContainer}>
      {profileData.map((profile) => {
        return (
          <div
            className={`${styles.profileContainer} ${backgroundClass}`}
            key={`${profile.position} card`}
          >
            <img src={profile.src} alt={profile.id} className={styles.picture} />
            <div className={styles.textContainer}>
              <h1 className={styles.name}>{profile.id}</h1>
              <div className={styles.position}>{profile.position}</div>
            </div>
            <div className={styles.links}>
              <a rel="noreferrer" target="_blank" href={profile.linkedIn}>
                <img src="/logos/linkedinLogo.svg" alt="LinkedInLogo" className={styles.logo} />
              </a>
              <a href={`mailto:${contactEmail}`}>
                <img src="/logos/emailLogo.svg" alt="LinkedInLogo" className={styles.logo} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCards;
