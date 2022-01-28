import { Banner, ContentContainer, MetaTags } from "components";
import styles from "styles/index.module.scss";
import type { NextPage } from "next";
import OurEvents from "components/Events/OurEvents";
import { exec } from "child_process";

type TitleHeaderProps = {
  text: string;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

const Home: NextPage = () => {
  return (
    <section className="h-full">
      <MetaTags title="UNSW Mechatronics Society" description="UNSW Mechatronics Society" />
      <div className={styles.mainContainer}>
        <Banner imgURL="/images/other/originalHero.JPG" text="UNSW Mechatronics Society" />
        <ContentContainer>
          <div className={styles.contentContainer}>
            <TitleHeader text="Who we are" />
            <p>
              UNSW Mechatronics Society (MTRNSoc) is a student-led society that aims to promote
              Mechatronic Engineering opportunities and pathways inside the University of New South
              Wales. As the largest mechatronics-related society within the university, MTRNSoc has
              a rapidly growing membership base, already with over 1000 members.
            </p>
            <br />
            <p>
              We run workshops, projects, competitions, industry nights, and social events to engage
              students with real-world projects. These projects allow students to develop them
              professionally and technically, as well as introducing them to a community of
              like-minded individuals.
            </p>
          </div>
        </ContentContainer>
        <ContentContainer customBackgroundColour="bg-uranian-blue">
          <div className={styles.contentContainer}>
            <TitleHeader text="Our Events" />
            <OurEvents />
          </div>
        </ContentContainer>
        <ContentContainer>
          <div className={styles.contentContainer}>
            <TitleHeader text="Meet the Team!" />
            <div className={styles.meetTeamContainer}>
              {/* Left hand side */}
              <div className="">
                <img
                  src="/images/other/kyratemp.png"
                  alt="president"
                  className={styles.execPhoto}
                />
                <div className="flex flex-col bg-onyx text-off-white">
                  <span className="text-base">Kyra Alday</span>
                  <span className="text-sm">President</span>
                </div>
              </div>
              {/* Right hand side */}
              <div className="w-[60%] grid place-items-center px-5">
                <p>
                  “The mechatronics community is one truly driven by curiosity and passion. We
                  strive to continuously create and improve with what we learn. Integrating skills
                  and knowledge across many disciplines is our drive and exactly what we aspire to
                  be our specialty. We all find our own ways to do this, but as we know, we are
                  always better working together and would be honoured to work with you too.”
                </p>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

export default Home;
