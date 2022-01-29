import eventData from "data/eventsData";
import Link from "next/link";

// TODO: Arrow functionality & movement
// TODO: Build out mobile functionality
// TODO: Request from backend

const getEventsToDisplay = () => {
  return [...eventData].slice(0, 3);
};

export default function OurEvents(): JSX.Element {
  const eventsToDisplay = getEventsToDisplay();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between pb-10">
        {eventsToDisplay.map((event) => (
          <img
            src={event.imagePath}
            key={event.title}
            alt={`${event.title} event banner`}
            className="h-60"
          />
        ))}
      </div>
      <div>
        <Link href="/events">
          <a>
            <button className="bg-onyx text-off-white px-6 py-3 rounded-3xl font-normal text-lg">
              View our events here
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
