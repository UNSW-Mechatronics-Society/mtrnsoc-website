import { Banner, ContentContainer, DropdownYear, EventCardHorizontal, MetaTags } from "components";
import eventData, { eventDetails, yearDates } from "data/eventsData";
import moment from "moment";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import styles from "styles/events.module.scss";
import React from "react";

// Used in getStaticProps
type yearlyEventsByTerm = {
  year: number;
  t1: eventDetails[];
  t2: eventDetails[];
  t3: eventDetails[];
};

type EventsPageProps = {
  currentEvents: eventDetails[];
  eventsByYearByTerm: yearlyEventsByTerm[];
};

type PastEventsSectionProps = {
  eventsByYearByTerm: yearlyEventsByTerm[];
  yearSelected: number;
};

type TermSectionProps = {
  yearSelected: number;
  term: string;
  termData: eventDetails[];
};

const TermSection = ({ yearSelected, term, termData }: TermSectionProps): JSX.Element => {
  // REVIEW Look at rewriting this
  return (
    <div className={styles.pastEventsTermContainer}>
      <h2 className="uppercase mx-3 font-semibold text-xl">{`${yearSelected} ${term}`}</h2>
      <div className="w-full flex flex-row flex-wrap">
        {termData.map((event) => (
          <Link key={event.title} href={event.facebookEventLink}>
            <a target="_blank">
              <img
                src={event.imagePath}
                className={styles.pastEventsImage}
                alt={`${event.title} banner`}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

const PastEventsSection = ({
  eventsByYearByTerm,
  yearSelected,
}: PastEventsSectionProps): JSX.Element => {
  // REVIEW Look at rewriting this
  const selectedYearData = eventsByYearByTerm.filter((x) => x.year === yearSelected)[0];
  console.log(selectedYearData);

  return (
    <>
      {selectedYearData.t1.length > 0 && (
        <TermSection yearSelected={yearSelected} term="Term 1" termData={selectedYearData.t1} />
      )}
      {selectedYearData.t2.length > 0 && (
        <TermSection yearSelected={yearSelected} term="Term 2" termData={selectedYearData.t2} />
      )}
      {selectedYearData.t3.length > 0 && (
        <TermSection yearSelected={yearSelected} term="Term 3" termData={selectedYearData.t3} />
      )}
    </>
  );
};

const Home: NextPage<EventsPageProps> = ({ currentEvents, eventsByYearByTerm }) => {
  const years = yearDates.map((x) => x.year);

  const [yearSelected, setYearSelected] = React.useState(years[0]);

  const CurrentEventsSection = () => {
    if (currentEvents.length >= 1) {
      // There exists a current event
      return (
        <>
          {currentEvents.map((e, index) => {
            return (
              <div key={e.title} className="w-full grid place-items-center my-5">
                <EventCardHorizontal eventData={e} cardNumber={index} />
              </div>
            );
          })}
        </>
      );
    } else {
      // TODO: No current event display
      return <div>No events currently :(</div>;
    }
  };

  return (
    <div className="h-full">
      <MetaTags title="Events - MTRNSoc" description="Society events" />
      {/* TODO: Use center text function from banner */}
      <Banner imgURL="/images/other/frontPageBannerEdited.png" text="Events" arrow={true} />
      <ContentContainer customBackgroundColour="bg-uranian-blue">
        <div className={styles.mainContainer}>
          <h1 className="text-4xl font-semibold mb-6">Current Events</h1>
          <CurrentEventsSection />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.mainContainer}>
          <h1 className="text-4xl font-semibold mb-6">Past Events</h1>
          <div className={styles.pastEventsContainer}>
            <div className="flex justify-end w-full">
              <DropdownYear
                years={years}
                yearSelected={yearSelected}
                setYearSelected={setYearSelected}
              />
            </div>
            <PastEventsSection
              eventsByYearByTerm={eventsByYearByTerm}
              yearSelected={yearSelected}
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  const currentEvents = eventData.filter((x) => {
    const oldestDate = Math.max(
      ...x.date.map((y) => (y.endDate !== null ? y.endDate : y.startDate)),
    );
    // as Date.now() is in milliseconds
    return oldestDate * 1000 >= Date.now();
  });
  currentEvents.reverse();

  const pastEvents = eventData.filter((x) => !currentEvents.includes(x));
  const uniqueYears: Set<number> = new Set();
  pastEvents.forEach((event) => {
    const earliestDate = Math.min(...event.date.map((y) => y.startDate));
    uniqueYears.add(moment.unix(earliestDate).year());
  });
  console.log(uniqueYears);
  // Split past events into years

  type yearlyEvents = {
    year: number;
    events: eventDetails[];
  };

  /**
   * `pastEvents` sorted into groups with the same year
   */
  const eventsByYear: yearlyEvents[] = [];

  uniqueYears.forEach((year) => {
    const eventsForYear = pastEvents.filter((x) => {
      const earliestDate = Math.min(...x.date.map((y) => y.startDate));
      return moment.unix(earliestDate).year() === year;
    });

    eventsByYear.push({ year, events: eventsForYear });
  });

  /**
   * `pastEvents` sorted by years then by UNSW terms
   */
  const eventsByYearByTerm: yearlyEventsByTerm[] = [];

  eventsByYear.forEach(({ year, events }) => {
    // Find the term dates
    const termDates = yearDates.find((x) => x.year === year);
    if (!termDates) throw new Error(`No term dates found for year ${year} in yearDates`);
    const { termStartDates } = termDates;

    // NOTE: Time zones used are relative to what the server uses, may be an issue
    const FORMAT = "DD/MM/YYYY";
    const t1Unix = moment(termStartDates.t1, FORMAT).unix();
    // TODO remove
    console.log(year);
    console.log(`t1Unix: ${t1Unix}, ${termStartDates.t1}`);

    const t2Unix = moment(termStartDates.t2, FORMAT).unix();
    const t3Unix = moment(termStartDates.t3, FORMAT).unix();

    // T1 events: Start of year <= date < T2 Start

    const t1Events = events.filter((x) => {
      const earliestDate = Math.min(...x.date.map((y) => y.startDate));
      return moment().year(year).startOf("year").unix() <= earliestDate && earliestDate < t2Unix;
    });

    // T2 events: T2 start <= date < T3 Start
    const t2Events = events.filter((x) => {
      const earliestDate = Math.min(...x.date.map((y) => y.startDate));
      return t2Unix <= earliestDate && earliestDate < t3Unix;
    });

    // T3 events: T3 start <= date <= End of year
    const t3Events = events.filter((x) => {
      const earliestDate = Math.min(...x.date.map((y) => y.startDate));
      return t3Unix <= earliestDate && earliestDate <= moment().year(year).endOf("year").unix();
    });

    if (t1Events.length + t2Events.length + t3Events.length !== events.length)
      throw new Error("Issue with sorting events into terms");

    eventsByYearByTerm.push({ year, t1: t1Events, t2: t2Events, t3: t3Events });
  });

  eventsByYearByTerm.sort((a, b) => b.year - a.year); // Sort by decreasing year

  return {
    props: { currentEvents, eventsByYearByTerm },
    // Rebuild page every 5 minutes
    revalidate: 5 * 60,
  };
};

export default Home;
