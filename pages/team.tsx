import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";
import styles from "styles/team.module.scss";
//import { OurCurrentEventsProps as HomePageProps } from "components/Team/OurTeam";
import { Banner } from "components";
import ExecProfileCard from "components/Profile/ExecProfileCard";
import { DirectorProfileCard } from "components/Profile/DirectorProfileCard";
import { SubcomProfileCard } from "components/Profile/SubcomProfileCard";
import { directorData, execData, subcomData } from "data/TeamData";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

const SectionExecutives = () => {
  return (
    <ContentContainer customBackgroundColour="neutral-100">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Executives" />
        <ExecProfileCard execData={execData} />
      </div>
    </ContentContainer>
  );
};

const SectionDirectors = () => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Directors" />
        <DirectorProfileCard directorData={directorData} />
      </div>
    </ContentContainer>
  );
};

const Subcom = () => {
  return (
    <ContentContainer customBackgroundColour="neutral-100">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Subcommittee" />
        <SubcomProfileCard subcomData={subcomData} />
      </div>
    </ContentContainer>
  );
};

const Team: NextPage = () => {
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
        <SectionExecutives />
        <SectionDirectors />
        <Subcom />
      </div>
    </div>
  );
};

export default Team;

/*

const Executives = (): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Who we are" />
        <div className={styles.WhoWeAreTextContainer}>

        </div>
      </div>
    </ContentContainer>
  );
};*/
