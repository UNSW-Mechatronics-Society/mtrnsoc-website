import { Banner, ContentContainer, EventCardHorizontal, MetaTags } from "components";
import eventData, { eventDetails } from "data/eventsData";
import type { GetStaticProps, NextPage } from "next";

type EventsPageProps = {
  allEvents: eventDetails[];
};

const Home: NextPage<EventsPageProps> = ({ allEvents }) => {
  return (
    <div className="h-full">
      <MetaTags title="Events - MTRNSoc" description="Society events" />
      {/* TODO: Use center text function from banner */}
      <Banner imgURL="/images/other/frontPageBannerEdited.png" text="Events" arrow={true} />
      <ContentContainer>
        <div className="flex h-full my-12 flex-col items-center">
          <h1 className="text-4xl font-semibold mb-6">Current Events</h1>
          {allEvents.map((e) => {
            return (
              <div key={e.title} className="w-full grid place-items-center my-3">
                <EventCardHorizontal eventData={e} />
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  // TODO: Currently lists all events
  return { props: { allEvents: eventData } };
};

export default Home;
