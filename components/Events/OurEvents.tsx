import React from "react";
import type { eventDetails } from "data/eventsData";
import Link from "next/link";
import useWindowDimensions from "util/useWindowDimensions";

// TODO: Arrow functionality & movement
// TODO: Build out mobile functionality

export type OurEventsProps = {
  currentEvents: eventDetails[] | null;
};

/**
 * Returns the number of events to display in array
 * @param width width of screen
 * @param currentEvents events assumed to be in order of dates
 * @returns number of events to display
 */
const calculateEventsToDisplay = (width: number, currentEvents: eventDetails[]): eventDetails[] => {
  if (currentEvents.length === 0) return [];
  if (currentEvents.length === 1 || width <= 1000) return [...currentEvents].splice(0, 1);
  if (currentEvents.length === 2 || width <= 1450) return [...currentEvents].splice(0, 2);
  return [...currentEvents].splice(0, 3);
};

export default function OurEvents({ currentEvents }: OurEventsProps): JSX.Element {
  const { width } = useWindowDimensions();

  const FailErrorMessage = () => {
    return <p className="w-full grid place-items-center text-xl">Failed to load events</p>;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-around pb-10">
        {currentEvents ? (
          currentEvents.length === 0 ? (
            <div>There are no events. Please check back later!</div>
          ) : (
            calculateEventsToDisplay(width, currentEvents).map((event) => (
              <a key={event.title} href={event.facebookEventLink} target="_blank" rel="noreferrer">
                <img
                  src={event.imagePath}
                  alt={`${event.title} event banner`}
                  className="h-60 hover:scale-[1.05] duration-100 hover:shadow-2xl"
                />
              </a>
            ))
          )
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
