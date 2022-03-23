import { Banner, ContentContainer, EventCardHorizontal, MetaTags } from "components";
import eventData, { eventDetails } from "data/eventsData";
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

  return {
    props: { currentEvents, pastEvents },
    // Rebuild page every 5 minutes
    revalidate: 5 * 60,
  };
};

export default Home;
