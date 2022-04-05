import { ContentContainer, MetaTags } from "components";
import type { NextPage } from "next";
import styles from "styles/team.module.scss";
//import { OurCurrentEventsProps as HomePageProps } from "components/Team/OurTeam";
import { Banner } from "components";
import * as role from "components/Profile/Profile";

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
        <role.execProfileCard />
      </div>
    </ContentContainer>
  );
};
/*
const SectionExecutives = () => {
  return (
    <ContentContainer customBackgroundColour="neutral-100">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Executives" />
        <ProfileCard />
        //<div /*className={styles.executivesContainer}>
          {/*<img src="/images/other/kyratemp.png" alt="president" className={styles.execPhoto} /> }
        //</div>
      //</div>
    //</ContentContainer>
  //);
//};*/

const SectionDirectors = () => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Directors" />
        <role.dirProfileCard />
      </div>
    </ContentContainer>
  );
};

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <MetaTags title="Team - MTRNSoc" description="Meet the MTRNSoc team" />
      <div>
        <Banner
          imgURL="/images/other/frontPageBannerEdited.png"
          text="Our Team"
          arrow={false}
          position="center"
        />
        <SectionExecutives />
        <SectionDirectors />
      </div>
    </div>
  );
};

export default Home;

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
