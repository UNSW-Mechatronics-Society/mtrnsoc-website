import { ContentContainer, MetaTags } from "components";
import type { GetStaticProps, NextPage } from "next";
import styles from "styles/team.module.scss";
//import { OurCurrentEventsProps as HomePageProps } from "components/Team/OurTeam";
import { Banner } from "components";
import { directorData, execData, profileData, subcomData, subcomProfileData } from "data/teamData";
import ProfileCards from "components/Profile/ProfileCards";
import SubcomProfileCards from "components/Profile/SubcomProfileCards";
import { contactEmail } from "data/socialsData";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

type SectionExecutivesProps = {
  execProfileData: profileData[];
  email: string;
};

const SectionExecutives = ({ execProfileData, email }: SectionExecutivesProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Executives" />
        <ProfileCards profileData={execProfileData} background="executive" contactEmail={email} />
      </div>
    </ContentContainer>
  );
};

type SectionDirectorsProps = {
  directorProfileData: profileData[];
  email: string;
};

const SectionDirectors = ({ directorProfileData, email }: SectionDirectorsProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Directors" />
        <ProfileCards
          profileData={directorProfileData}
          background="director"
          contactEmail={email}
        />
      </div>
    </ContentContainer>
  );
};

type SectionSubcommitteeProps = {
  subcomProfileData: subcomProfileData[];
};

const SectionSubcommittee = ({ subcomProfileData }: SectionSubcommitteeProps): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Subcommittee" />
        <SubcomProfileCards subcomData={subcomProfileData} />
      </div>
    </ContentContainer>
  );
};

type TeamPageProps = {
  directorProfileData: profileData[];
  execProfileData: profileData[];
  subcomProfileData: subcomProfileData[];
  email: string;
};

const Team: NextPage<TeamPageProps> = ({
  directorProfileData,
  execProfileData,
  subcomProfileData,
  email,
}) => {
  return (
    <div className="h-full">
      <MetaTags title="Team - MTRNSoc" description="Meet the MTRNSoc team" />
      <div>
        <Banner
          imgURL="/images/other/frontPageBannerEdited.png"
          text="Our Team"
          arrow={true}
          position="center"
        />
        <SectionExecutives execProfileData={execProfileData} email={email} />
        <SectionDirectors directorProfileData={directorProfileData} email={email} />
        <SectionSubcommittee subcomProfileData={subcomProfileData} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<TeamPageProps> = async () => {
  return {
    props: {
      directorProfileData: directorData,
      execProfileData: execData,
      subcomProfileData: subcomData,
      email: contactEmail,
    },
  };
};

export default Team;
