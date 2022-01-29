import { Banner, ContentContainer, MetaTags } from "components";
import styles from "styles/index.module.scss";
import type { GetStaticProps, NextPage } from "next";
import OurEvents, { OurEventsProps as HomePageProps } from "components/Events/OurEvents";
import eventData from "data/eventsData";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

const SectionWhoWeAre = (): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Who we are" />
        <p>
          UNSW Mechatronics Society (MTRNSoc) is a student-led society that aims to promote
          Mechatronic Engineering opportunities and pathways inside the University of New South
          Wales. As the largest mechatronics-related society within the university, MTRNSoc has a
          rapidly growing membership base, already with over 1000 members.
        </p>
        <br />
        <p>
          We run workshops, projects, competitions, industry nights, and social events to engage
          students with real-world projects. These projects allow students to develop them
          professionally and technically, as well as introducing them to a community of like-minded
          individuals.
        </p>
      </div>
    </ContentContainer>
  );
};

const SectionOurEvents = ({ currentEvents }: HomePageProps): JSX.Element => {
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Our Events" />
        <OurEvents currentEvents={currentEvents} />
      </div>
    </ContentContainer>
  );
};

const SectionMeetTheTeam = (): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Meet the Team!" />
        <div className={styles.meetTeamContainer}>
          {/* Left hand side */}
          <div className="">
            <img src="/images/other/kyratemp.png" alt="president" className={styles.execPhoto} />
            <div className="flex flex-col bg-onyx text-off-white">
              <span className="text-base">Kyra Alday</span>
              <span className="text-sm">President</span>
            </div>
          </div>
          {/* Right hand side */}
          <div className="w-[60%] grid place-items-center px-5">
            <p>
              “The mechatronics community is one truly driven by curiosity and passion. We strive to
              continuously create and improve with what we learn. Integrating skills and knowledge
              across many disciplines is our drive and exactly what we aspire to be our specialty.
              We all find our own ways to do this, but as we know, we are always better working
              together and would be honoured to work with you too.”
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

const Home: NextPage<HomePageProps> = ({ currentEvents }) => {
  return (
    <section className="h-full">
      <MetaTags title="UNSW Mechatronics Society" description="UNSW Mechatronics Society" />
      <div className={styles.mainContainer}>
        <Banner imgURL="/images/other/frontPageBannerEdited.png" text="UNSW Mechatronics Society" />
        <SectionWhoWeAre />
        <SectionOurEvents currentEvents={currentEvents} />
        <SectionMeetTheTeam />
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const currentEvents = eventData.filter((x) => {
    const oldestDate = Math.max(
      ...x.date.map((y) => (y.endDate !== null ? y.endDate : y.startDate)),
    );
    // as Date.now() is in milliseconds
    return oldestDate * 1000 >= Date.now();
  });
  return { props: { currentEvents } };
};

export default Home;
