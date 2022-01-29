import eventData from "data/eventsData";
import Link from "next/link";

// TODO: Arrow functionality & movement

const getEventsToDisplay = () => {
  return [...eventData].slice(0, 3);
};

export default function OurEvents(): JSX.Element {
  const eventsToDisplay = getEventsToDisplay();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between pb-6">
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
            <button className="bg-onyx text-off-white px-3.5 py-3 rounded-3xl font-medium text-base">
              View our events here
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
