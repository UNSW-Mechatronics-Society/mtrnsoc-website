import { contactEmail, linkedin } from "data/socialsData";
import { subcomProfileData } from "data/teamData";
import styles from "./SubcomProfileCards.module.scss";

type SubcomProfileCardsType = {
  subcomData: subcomProfileData[];
};

const SubcomProfileCards = ({ subcomData }: SubcomProfileCardsType): JSX.Element => {
  return (
    <div className={styles.subcomMainContainer}>
      {subcomData.map((team, indx) => {
        return (
          <div
            className={styles.subcomContainer}
            key={`${team.portfolioName} subcommittee section`}
          >
            <h1 className={styles.subcomPosition}>{team.portfolioName}</h1>
            <div className={styles.subcomName}>
              {team.members.map((memberName) => (
                <p key={memberName}>{memberName}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubcomProfileCards;
