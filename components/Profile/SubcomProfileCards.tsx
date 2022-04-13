import { contactEmail, linkedin } from "data/socialsData";
import { subcomProfileData } from "data/TeamData";
import Link from "next/link";
import ContentContainer from "../Layout/ContentContainer/ContentContainer";
import styles from "./Profile.module.scss";

type SubcomProfileCardsType = {
  subcomData: subcomProfileData[];
};

const SubcomProfileCards = ({ subcomData }: SubcomProfileCardsType): JSX.Element => {
  return (
    <div className={styles.subcomMainContainer}>
      {subcomData.map((team, indx) => {
        return (
          <>
            <div className={styles.subcomContainer}>
              <h1 key={`h1-${indx}`} className={styles.subcomPosition}>
                {team.portfolioName}
              </h1>
              <div key={`h1-${indx}`} className={styles.subcomName}>
                {team.members.map((memberName) => (
                  <p key={memberName}>{memberName}</p>
                ))}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SubcomProfileCards;
