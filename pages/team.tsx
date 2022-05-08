import type { GetStaticProps, NextPage } from "next";
import { ContentContainer, MetaTags } from "components";
import { Banner } from "components";
import ProfileCards from "components/Profile/ProfileCards";
import SubcomProfileCards from "components/Profile/SubcomProfileCards";
import { emailData } from "data/socialsData";
import { ProfileData, SubcomProfileData, directorData, execData, subcomData } from "data/teamData";
import styles from "styles/team.module.scss";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

type SectionExecutivesProps = {
  execProfileData: ProfileData[];
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
  directorProfileData: ProfileData[];
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
  subcomProfileData: SubcomProfileData[];
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
  directorProfileData: ProfileData[];
  execProfileData: ProfileData[];
  subcomProfileData: SubcomProfileData[];
  email: string;
};

const Team: NextPage<TeamPageProps> = ({
  directorProfileData,
  execProfileData,
  subcomProfileData,
  email,
}) => {
  const scrollID = "teamPageScrollDiv";
  return (
    <div className="h-full">
      <MetaTags title="Team - MTRNSoc" description="Meet the MTRNSoc team" />
      <div>
        <Banner
          imgURL="/images/other/frontPageBannerEdited.png"
          text="Our Team"
          arrow={true}
          position="center"
          scrollToID={scrollID}
        />
        <div id={scrollID}></div>
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
      // NOTE: Based on how children components were designed, 'mailto:' is added to email string
      email: emailData.display,
    },
  };
};

export default Team;
