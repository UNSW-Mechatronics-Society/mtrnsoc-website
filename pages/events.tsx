import { Banner, ContentContainer, EventCardHorizontal, MetaTags } from "components";
import eventData, { eventDetails, yearDates } from "data/eventsData";
import moment from "moment";
import type { GetStaticProps, NextPage } from "next";

type EventsPageProps = {
  currentEvents: eventDetails[];
  pastEvents: eventDetails[];
};

const Home: NextPage<EventsPageProps> = ({ currentEvents, pastEvents }) => {
  const CurrentEventsSection = () => {
    if (currentEvents.length >= 1) {
      // There exists a current event
      return (
        <>
          {currentEvents.map((e) => {
            return (
              <div key={e.title} className="w-full grid place-items-center my-5">
                <EventCardHorizontal eventData={e} />
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
      <ContentContainer>
        <div className="flex h-full my-12 flex-col items-center">
          <h1 className="text-4xl font-semibold mb-6">Current Events</h1>
          <CurrentEventsSection />
        </div>
      </ContentContainer>
      <ContentContainer customBackgroundColour="bg-uranian-blue">
        <div className="flex h-full my-12 flex-col items-center">
          <h1 className="text-4xl font-semibold mb-6">Past Events</h1>
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

  type yearlyEventsByTerm = {
    year: number;
    t1: eventDetails[];
    t2: eventDetails[];
    t3: eventDetails[];
  };

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

  console.log(eventsByYearByTerm);
  return {
    props: { currentEvents, pastEvents },
    // Rebuild page every 5 minutes
    revalidate: 5 * 60,
  };
};

export default Home;
