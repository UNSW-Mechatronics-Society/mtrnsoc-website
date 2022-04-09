import { contactEmail, linkedin } from "data/socialsData";
import Link from "next/link";
import ContentContainer from "../Layout/ContentContainer/ContentContainer";
import styles from "./Profile.module.scss";

type ProfileCardProps = {
  src: string;
  id: string;
  position: string;
  linkedIn: string;
};

type SubcomProps = {
  portfolio: string;
  member1: string;
  member2: string;
  member3: string;
  member4: string;
  member5: string;
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
    position: "Arc Delegate and Grievance Officer",
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
    src: "/images/profiles/leonard.png",
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

const subcomlist: SubcomProps[] = [
  {
    portfolio: "Marketing Team",
    member1: "Aakash Kumar",
    member2: "Angela Lei",
    member3: "Carrie Wu",
    member4: "Rayyan Hossain",
    member5: "Sam Banerjee",
  },
  {
    portfolio: "Socials Team",
    member1: "Byron Petselis",
    member2: "Thomas Shalaby",
    member3: "",
    member4: "",
    member5: "",
  },
  {
    portfolio: "Workshops Team",
    member1: "Angus Wang",
    member2: "Kalindu Dahanayake",
    member3: "Shiwani Balaji",
    member4: "",
    member5: "",
  },
  {
    portfolio: "Projects Team",
    member1: "Eric Do",
    member2: "Jay Choo",
    member3: "Nicole Leow",
    member4: "",
    member5: "",
  },
  {
    portfolio: "Industry Team",
    member1: "Alice Shang",
    member2: "Rohit Ghosh",
    member3: "Sarvesh Sanjay Wanzare",
    member4: "",
    member5: "",
  },
];

export const ExecProfileCard = () => {
  return (
    <div className={styles.mainContainer}>
      {execimages.map((profile, indx) => {
        return (
          <>
            <div className={styles.execprofileContainer}>
              <img
                key={`img-${indx}`}
                src={profile.src}
                alt={profile.id}
                className={styles.picture}
              />
              <div className={styles.textContainer}>
                <h1 key={`h1-${indx}`} className={styles.name}>
                  {" "}
                  {profile.id}{" "}
                </h1>{" "}
                <div key={`h1-${indx}`} className={styles.position}>
                  {" "}
                  {profile.position}{" "}
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

export const DirProfileCard = () => {
  return (
    <div className={styles.mainContainer}>
      {dirimages.map((profile, indx) => {
        return (
          <>
            <div className={styles.dirprofileContainer}>
              <img
                key={`img-${indx}`}
                src={profile.src}
                alt={profile.id}
                className={styles.picture}
              />
              <div className={styles.textContainer}>
                <h1 key={`h1-${indx}`} className={styles.name}>
                  {" "}
                  {profile.id}{" "}
                </h1>{" "}
                <div key={`h1-${indx}`} className={styles.position}>
                  {" "}
                  {profile.position}{" "}
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

export const Subcom = () => {
  return (
    <div className={styles.subcomMainContainer}>
      {subcomlist.map((team, indx) => {
        return (
          <>
            <div className={styles.subcomContainer}>
              <h1 key={`h1-${indx}`} className={styles.subcomPosition}>
                {" "}
                {team.portfolio}{" "}
              </h1>{" "}
              <div key={`h1-${indx}`} className={styles.subcomName}>
                {team.member1} <br /> {team.member2} <br /> {team.member3} <br /> {team.member4}
                <br /> {team.member5}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
