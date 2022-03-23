import { contactEmail, linkedin } from "data/socialsData";
import Link from "next/link";
import ContentContainer from "./Layout/ContentContainer/ContentContainer";
import styles from "./Profile.module.scss";

type ProfileCardProps = {
  src: string;
  id: string;
  position: string;
  linkedIn: string;
};

// alt and name is id, email is mtrnsoc email, classnames are the same,
const execimages: ProfileCardProps[] = [
  {
    src: "/images/profiles/kyra.jpg",
    id: "Kyra Alday",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/kyra-alday/",
  },
  {
    src: "/images/profiles/tanvee.png",
    id: "Tanvee Islam",
    position: "Vice President",
    linkedIn: "https://www.linkedin.com/in/tanvee-mtrn/",
  },
  {
    src: "/images/profiles/iniyan.jpg",
    id: "Iniyan Vigneswaran",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/iniyan-vigneswaran-a5a594153/",
  },
  {
    src: "/images/profiles/aayush.jpg",
    id: "Aayush Rajouria",
    position: "Treasurer",
    linkedIn: "https://au.linkedin.com/in/aayush-rajouria/",
  },
  {
    src: "/images/profiles/brandon.jpg",
    id: "Brandon Winsley",
    position: "Arc Delegate and Grievance Officerig",
    linkedIn: "https://www.linkedin.com/in/bwinsley/",
  },
];

const dirimages: ProfileCardProps[] = [
  {
    src: "/images/profiles/celine.jpg",
    id: "Celine Choo",
    position: "Marketing Director",
    linkedIn: "https://www.linkedin.com/in/celinechooliling/",
  },
  {
    src: "/images/profiles/ishita.jpg",
    id: "Ishita Katyal",
    position: "Socials Director",
    linkedIn: "www.linkedin.com/in/ishita-katyal-a75226154/",
  },
  {
    src: "/images/profiles/janice.jpg",
    id: "Janice Nyoto",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/janice-nyoto/",
  },
  {
    src: "/images/profiles/alvin.jpg",
    id: "Alvin Cherk",
    position: "IT Co-Director",
    linkedIn: "https://www.linkedin.com/in/alvin-cherk-2363291b4/",
  },
  {
    src: "/images/profiles/juliet.jpg",
    id: "Juliet Tan",
    position: "IT Co-Director",
    linkedIn: "https://www.linkedin.com/in/jtannn/",
  },

  {
    src: "/images/profiles/leonard.jpg",
    id: "Leonard Chiang",
    position: "Projects Director",
    linkedIn: "https://www.linkedin.com/in/leonard-chiang/",
  },
  {
    src: "/images/profiles/shamik.jpg",
    id: "Shamik Patel",
    position: "Industry Director",
    linkedIn: "https://www.linkedin.com/in/shamik-patel/",
  },
];

const execProfileCard = () => {
  return (
    <div>
      {execimages.map((profile, indx) => {
        return (
          <>
            <div className={styles.mainContainer}>
              <img
                key={`img-${indx}`}
                src={profile.src}
                alt={profile.id}
                className={styles.picture}
              />
              <h1 key={`h1-${indx}`} className={styles.name}>
                {" "}
                {profile.id}{" "}
              </h1>{" "}
              <span key={`h1-${indx}`} className={styles.position}>
                {" "}
                {profile.position}{" "}
              </span>
              <a href={profile.linkedIn}>
                <img
                  key={`img-${indx}`}
                  src={"/logos/linkedinLogo.svg"}
                  alt={"LinkedInLogo"}
                  className={styles.links}
                />
              </a>
              <a href={contactEmail}>
                <img
                  key={`img-${indx}`}
                  src={"/logos/emailLogo.svg"}
                  alt={"LinkedInLogo"}
                  className={styles.links}
                />
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

const dirProfileCard = () => {
  return (
    <div>
      {dirimages.map((profile, indx) => {
        return (
          <>
            <div className={styles.mainContainer}>
              <img
                key={`img-${indx}`}
                src={profile.src}
                alt={profile.id}
                className={styles.picture}
              />
              <h1 key={`h1-${indx}`} className={styles.name}>
                {" "}
                {profile.id}{" "}
              </h1>{" "}
              <span key={`h1-${indx}`} className={styles.position}>
                {" "}
                {profile.position}{" "}
              </span>
              <a href={profile.linkedIn}>
                <img
                  key={`img-${indx}`}
                  src={"/logos/linkedinLogo.svg"}
                  alt={"LinkedInLogo"}
                  className={styles.links}
                />
              </a>
              <a href={contactEmail}>
                <img
                  key={`img-${indx}`}
                  src={"/logos/emailLogo.svg"}
                  alt={"LinkedInLogo"}
                  className={styles.links}
                />
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default execProfileCard;
