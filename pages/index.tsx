import { Banner, ContentContainer, MetaTags } from "components";
import styles from "styles/index.module.scss";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import OurEvents, { OurEventsProps } from "components/Events/OurEvents";

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

const SectionOurEvents = ({ currentEvents }: OurEventsProps): JSX.Element => {
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

const Home: NextPage = ({ currentEvents }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section className="h-full">
      <MetaTags title="UNSW Mechatronics Society" description="UNSW Mechatronics Society" />
      <div className={styles.mainContainer}>
        <Banner imgURL="/images/other/frontPageBanner.png" text="UNSW Mechatronics Society" />
        <SectionWhoWeAre />
        <SectionOurEvents currentEvents={currentEvents} />
        <SectionMeetTheTeam />
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    // https://stackoverflow.com/questions/63669578/next-js-how-to-get-absolute-url-in-production
    const baseURL =
      process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.VERCEL_URL;

    const res = await fetch(`${baseURL}/api/currentEvents`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    return {
      props: { currentEvents: data.data },
      revalidate: 21600000, // 6 hours in milliseconds
    };
  } catch (error) {
    console.log(error);
    return { props: { currentEvents: null }, revalidate: 5000 };
  }
};

export default Home;
