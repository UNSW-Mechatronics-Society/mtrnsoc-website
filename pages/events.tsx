import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import moment from "moment";
import { getCurrentEvents, getPastEvents } from "util/api";
import { Event, EventDetail, getSortedEvents } from "util/eventsHelpers";
import useWindowDimensions from "util/useWindowDimensions";
import { Banner, ContentContainer, DropdownYear, EventCardHorizontal, MetaTags } from "components";
import { PageInformation, eventsPageData } from "data/navLinksData";
import { YearDateInformation, yearDates } from "data/termDatesData";
import styles from "styles/events.module.scss";

type YearlyEvents = {
  year: number;
  events: Event[];
};

type YearlyEventsByTermRaw = {
  year: number;
  t1: EventDetail[];
  t2: EventDetail[];
  t3: EventDetail[];
};

type YearlyEventsByTerm = {
  year: number;
  t1: Event[];
  t2: Event[];
  t3: Event[];
};

type EventsPageProps = {
  currentEventsRaw: EventDetail[];
  eventsByYearByTermRaw: YearlyEventsByTermRaw[];
  yearData: YearDateInformation[];
  pageData: PageInformation;
};

type PastEventsSectionProps = {
  eventsByYearByTerm: YearlyEventsByTerm[];
  yearSelected: number;
  width: number | null;
};

type TermSectionProps = {
  yearSelected: number;
  term: string;
  termData: EventDetail[];
  width: number | null;
};

const calculateRowNumItems = (width: number | null): number => {
  // Uses custom breakpoints manually set based on the size of an event image
  if (width === null) return 4; // as default
  if (width > 1487) return 4;
  if (1127 < width && width <= 1487) {
    return 3;
  } else if (767 < width && width <= 1127) {
    return 2;
  }
  return 1;
};

const TermSection = ({ yearSelected, term, termData, width }: TermSectionProps): JSX.Element => {
  // Based on the `width` of the page, it automatically splits all the termData into
  // arrays of equal size, where each element in the 2D array is a row.
  // `null` is padded to the end of arrays that do not have enough items to fill a row.
  // `null` is represented as a blank or invisible image so that the events are displayed
  // in consistent grid-like pattern
  const perChunk = calculateRowNumItems(width);
  const result = termData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, [] as Array<Array<EventDetail | null>>);

  result.forEach((x) => {
    while (x.length < perChunk) {
      x.push(null);
    }
  });

  return (
    <div className={styles.pastEventsTermContainer}>
      <h2 className="uppercase mx-3 font-semibold text-xl max-pastEventsTitle:mx-0 max-pastEventsTitle:flex max-pastEventsTitle:justify-center">{`${yearSelected} ${term}`}</h2>
      <div className="w-full flex flex-col">
        {result.map((row, index) => {
          return (
            <div
              key={`term-${term} row-${index}`}
              className="flex flex-row flex-wrap justify-around"
            >
              {row.map((event, index1) => {
                if (event !== null) {
                  return (
                    <Link key={event.title} href={event.facebookEventLink}>
                      <a target="_blank">
                        <img
                          src={event.imagePath}
                          className={styles.pastEventsImage}
                          alt={`${event.title} banner`}
                        />
                      </a>
                    </Link>
                  );
                } else {
                  return (
                    <div
                      key={`term-${term} row-${index} ${index1}`}
                      className={styles.fakePastEventImage}
                    ></div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div className={styles.pastEventsTermContainer}>
  //     <h2 className="uppercase mx-3 font-semibold text-xl max-pastEventsTitle:mx-0 max-pastEventsTitle:flex max-pastEventsTitle:justify-center">{`${yearSelected} ${term}`}</h2>
  //     <div className="w-full flex flex-row flex-wrap justify-around">
  //       {termData.map((event) => (
  //         <Link key={event.title} href={event.facebookEventLink}>
  //           <a target="_blank">
  //             <img
  //               src={event.imagePath}
  //               className={styles.pastEventsImage}
  //               alt={`${event.title} banner`}
  //             />
  //           </a>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
};

const PastEventsSection = ({
  eventsByYearByTerm,
  yearSelected,
  width,
}: PastEventsSectionProps): JSX.Element => {
  // REVIEW Look at rewriting this
  const selectedYearData = eventsByYearByTerm.find((x) => x.year === yearSelected);

  if (selectedYearData === undefined) {
    // TODO
    return <p className="w-full grid place-items-center">No Past Events</p>;
  }

  return (
    <>
      {selectedYearData.t3.length > 0 && (
        <TermSection
          yearSelected={yearSelected}
          term="Term 3"
          termData={selectedYearData.t3}
          width={width}
        />
      )}
      {selectedYearData.t2.length > 0 && (
        <TermSection
          yearSelected={yearSelected}
          term="Term 2"
          termData={selectedYearData.t2}
          width={width}
        />
      )}
      {selectedYearData.t1.length > 0 && (
        <TermSection
          yearSelected={yearSelected}
          term="Term 1"
          termData={selectedYearData.t1}
          width={width}
        />
      )}
    </>
  );
};

const Home: NextPage<EventsPageProps> = ({
  currentEventsRaw,
  eventsByYearByTermRaw,
  yearData,
  pageData,
}) => {
  const scrollID = "eventsPageScrollDiv";

  const { width } = useWindowDimensions();

  const years = yearData.map((x) => x.year);

  const currentEvents = currentEventsRaw.map((x) => Event.eventFromEventDetails(x));
  const eventsByYearByTerm: YearlyEventsByTerm[] = eventsByYearByTermRaw.map((x) => {
    return {
      year: x.year,
      t1: x.t1.map((y) => Event.eventFromEventDetails(y)),
      t2: x.t2.map((y) => Event.eventFromEventDetails(y)),
      t3: x.t3.map((y) => Event.eventFromEventDetails(y)),
    };
  });
  const [yearSelected, setYearSelected] = React.useState(
    years.filter((x) => {
      // Pick the first one that has events
      // This is kinda dodgy but it works
      return eventsByYearByTerm.find((y) => y.year === x);
    })[0],
  );
  console.log(eventsByYearByTerm);

  const CurrentEventsSection = () => {
    if (currentEvents.length >= 1) {
      // There exists a current event
      return (
        <>
          {currentEvents.map((e, index) => {
            return (
              <div key={e.title} className="w-full flex justify-center items-center my-5">
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
      <MetaTags
        title={pageData.title}
        description={pageData.description}
        imgURL={pageData.bannerImageURL}
      />
      <Banner
        imgURL={pageData.bannerImageURL}
        text={pageData.bannerText}
        arrow={true}
        position="center"
        scrollToID={scrollID}
      />
      <div id={scrollID}></div>
      <ContentContainer customBackgroundColour="bg-uranian-blue">
        <div className={styles.mainContainer}>
          <h1 className="text-4xl font-medium mb-6 uppercase">Current Events</h1>
          <CurrentEventsSection />
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.mainContainer}>
          <h1 className="text-4xl font-medium mb-6 uppercase">Past Events</h1>
          <div className={styles.pastEventsContainer}>
            <div className="flex justify-end w-full max-pastEventsTitle:justify-center max-pastEventsTitle:pb-3">
              <DropdownYear
                years={years}
                yearSelected={yearSelected}
                setYearSelected={setYearSelected}
              />
            </div>
            <PastEventsSection
              eventsByYearByTerm={eventsByYearByTerm}
              yearSelected={yearSelected}
              width={width}
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<EventsPageProps> = async () => {
  const [currentEvents, err1] = await getCurrentEvents();

  if (err1 !== null || err1 === undefined) throw err1;
  if (currentEvents === null) throw new Error("Uncaught error with currentEvents API call");

  const sortedCurrentEvents = getSortedEvents(currentEvents);

  const [pastEvents, err2] = await getPastEvents();

  if (err2 !== null || err2 === undefined) throw err2;
  if (pastEvents === null) throw new Error("Uncaught error with pastEvents API call");

  // Get unique years from pastEvents
  const uniqueYears: Set<number> = new Set();
  pastEvents.forEach((event) => {
    const earliestDate = event.startDate;
    uniqueYears.add(moment.unix(earliestDate).year());
  });

  // Split past events into years

  /**
   * `pastEvents` sorted into groups with the same year
   */
  const eventsByYear: YearlyEvents[] = [];

  uniqueYears.forEach((year) => {
    const eventsForYear = pastEvents.filter((x) => {
      const earliestDate = x.startDate;
      return moment.unix(earliestDate).year() === year;
    });
    eventsByYear.push({ year, events: eventsForYear });
  });

  /**
   * `pastEvents` sorted by years then by UNSW terms
   */
  const eventsByYearByTerm: YearlyEventsByTermRaw[] = [];

  eventsByYear.forEach(({ year, events }) => {
    // Find the term dates
    const termDates = yearDates.find((x) => x.year === year);
    if (!termDates) throw new Error(`No term dates found for year ${year} in yearDates`);
    const { termStartDates } = termDates;

    // NOTE: Time zones used are relative to what the server uses, may be an issue
    const FORMAT = "DD/MM/YYYY";

    const t1Unix = moment(termStartDates.t1, FORMAT).unix();
    const t2Unix = moment(termStartDates.t2, FORMAT).unix();
    const t3Unix = moment(termStartDates.t3, FORMAT).unix();

    // T1 events: Start of year <= date < T2 Start
    const t1Events = events.filter((x) => {
      const earliestDate = x.startDate;
      return moment().year(year).startOf("year").unix() <= earliestDate && earliestDate < t2Unix;
    });

    // T2 events: T2 start <= date < T3 Start
    const t2Events = events.filter((x) => {
      const earliestDate = x.startDate;
      return t2Unix <= earliestDate && earliestDate < t3Unix;
    });

    // T3 events: T3 start <= date <= End of year
    const t3Events = events.filter((x) => {
      const earliestDate = x.startDate;
      return t3Unix <= earliestDate && earliestDate <= moment().year(year).endOf("year").unix();
    });

    if (t1Events.length + t2Events.length + t3Events.length !== events.length)
      throw new Error("Issue with sorting events into terms");

    // NOTE: Reverse sort past events, as oldest 'latest finishing' event should appear first
    eventsByYearByTerm.push({
      year,
      t1: t1Events.sort((x, y) => y.getOldestDate() - x.getOldestDate()).map((x) => x.toJSON()),
      t2: t2Events.sort((x, y) => y.getOldestDate() - x.getOldestDate()).map((x) => x.toJSON()),
      t3: t3Events.sort((x, y) => y.getOldestDate() - x.getOldestDate()).map((x) => x.toJSON()),
    });
  });

  eventsByYearByTerm.sort((a, b) => b.year - a.year); // Sort by decreasing year

  return {
    props: {
      currentEventsRaw: sortedCurrentEvents.map((x) => x.toJSON()),
      eventsByYearByTermRaw: eventsByYearByTerm,
      yearData: yearDates,
      pageData: eventsPageData,
    },
  };
};

export default Home;
