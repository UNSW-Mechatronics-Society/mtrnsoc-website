import { Banner, ContentContainer, MetaTags, OurCurrentEvents } from "components";
import styles from "styles/index.module.scss";
import type { GetStaticProps, NextPage } from "next";
import eventData, { eventDetails } from "data/eventsData";
import Link from "next/link";
import sponsorsData from "data/sponsorsData";

type TitleHeaderProps = {
  text: string;
};

type HomePageProps = {
  currentEvents: eventDetails[] | null;
};

const TitleHeader = ({ text }: TitleHeaderProps): JSX.Element => {
  return <h1 className={styles.title}>{text.toUpperCase()}</h1>;
};

const SectionWhoWeAre = (): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Who we are" />
        <div className={styles.WhoWeAreTextContainer}>
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
            professionally and technically, as well as introducing them to a community of
            like-minded individuals.
          </p>
        </div>
      </div>
    </ContentContainer>
  );
};

const SectionOurEvents = ({ currentEvents }: HomePageProps): JSX.Element => {
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Our Current Events" />
        <OurCurrentEvents currentEvents={currentEvents} buttonStyle={styles.buttonStyle} />
      </div>
    </ContentContainer>
  );
};

const SectionMeetTheTeam = (): JSX.Element => {
  // TODO mobile
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Meet the Team!" />
        <div className={styles.meetTeamContainer}>
          {/* Left hand side */}
          <div className="flex flex-row w-full max-md:flex-col">
            <div className={styles.featuredPersonCard}>
              <img src="/images/other/kyratemp.png" alt="president" className={styles.execPhoto} />
              <div className={styles.featuredPersonCardText}>
                <div className="max-md:h-full max-md:grid max-md:place-items-center max-md:px-5">
                  <div>
                    <h1 className="text-xl font-semibold">Kyra Alday</h1>
                    <span className="text-base uppercase font-medium pt-1 text-gray-500">
                      President
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right hand side */}
            <div className={styles.featuredTextContainer}>
              <div className={styles.featuredTextBox}>
                <p className="relative">
                  <span className="z-50">
                    The mechatronics community is one truly driven by curiosity and passion. We
                    strive to continuously create and improve with what we learn. Integrating skills
                    and knowledge across many disciplines is our drive and exactly what we aspire to
                    be our specialty. We all find our own ways to do this, but as we know, we are
                    always better working together and would be honoured to work with you too.
                  </span>
                  <img
                    src="/misc/quotes.svg"
                    alt="pog"
                    className={styles.quotesTopLeft}
                    draggable={false}
                  />
                  <img
                    src="/misc/quotes.svg"
                    alt="pog"
                    className={styles.quotesBottomRight}
                    draggable={false}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <Link href="/team">
              <a>
                <button className={styles.buttonStyle}>Meet Us</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

const SponsorSection = (): JSX.Element => {
  return (
    <ContentContainer customBackgroundColour="bg-uranian-blue">
      <div className={styles.sectionContainer}>
        <TitleHeader text="Proudly Supported By" />
        <div className={styles.sponsorsContainer}>
          {sponsorsData.map((sponsor) => {
            return (
              <Link href={sponsor.link} key={sponsor.alt}>
                <a target="_blank">
                  <img src={sponsor.src} alt={sponsor.alt} className={styles.sponsorLogos} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
};

const JoinUsSection = (): JSX.Element => {
  return (
    <ContentContainer>
      <div className={styles.sectionContainer}>
        <TitleHeader text="Join The Society" />
        <div>
          <p className="pb-10">Want to be involved? Join Us!</p>
          {/* TODO: Link */}
          <Link href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VybQAE">
            <a target="_blank">
              <button className={styles.buttonStyle}>Join us on SpArc</button>
            </a>
          </Link>
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
        <Banner
          imgURL="/images/other/frontPageBannerEdited.png"
          text="UNSW Mechatronics Society"
          arrow={true}
          position="bottom-left"
        />
        <SectionWhoWeAre />
        <SectionOurEvents currentEvents={currentEvents} />
        <SectionMeetTheTeam />
        <SponsorSection />
        <JoinUsSection />
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
  currentEvents.reverse();
  return {
    props: { currentEvents },
    // Rebuild page every 5 minutes
    revalidate: 5 * 60,
  };
};

export default Home;
