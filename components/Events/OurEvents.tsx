import React from "react";
import type { eventDetails } from "data/eventsData";
import Link from "next/link";

// TODO: Arrow functionality & movement
// TODO: Build out mobile functionality

export type OurEventsProps = {
  currentEvents: eventDetails[] | null;
};

export default function OurEvents({ currentEvents }: OurEventsProps): JSX.Element {
  const FailErrorMessage = () => {
    return <p className="w-full grid place-items-center text-xl">Failed to load events</p>;
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between pb-10">
        {currentEvents ? (
          currentEvents.map((event) => (
            <a key={event.title} href={event.facebookEventLink} target="_blank" rel="noreferrer">
              <img
                src={event.imagePath}
                alt={`${event.title} event banner`}
                className="h-60 hover:scale-[1.05] duration-100 hover:shadow-2xl"
              />
            </a>
          ))
        ) : (
          <FailErrorMessage />
        )}
      </div>
      <div>
        <Link href="/events">
          <a>
            <button className="bg-onyx text-off-white px-6 py-3 rounded-3xl font-normal text-lg hover:scale-[1.05] duration-100 hover:shadow">
              View our events here
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
