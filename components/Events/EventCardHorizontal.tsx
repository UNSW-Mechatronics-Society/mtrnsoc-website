import { eventDate, eventDetails } from "data/eventsData";
import moment from "moment";
import Link from "next/link";

type EventCardHorizontalProps = {
  eventData: eventDetails;
};

/**
 * If `x` does not have a 00 minutes time, display minutes
 * @param x
 * @returns
 */
const convertToTimeString = (x: moment.Moment): string => {
  if (x.format("mm") === "00") {
    return x.format("h a");
  } else {
    return x.format("h:mm a");
  }
};

/**
 * Converts a unix time pair (`startDate` & `endDate`) to a human readable string
 * @param param0
 * @returns
 */
const convertUnixToString = ({ startDate, endDate }: eventDate) => {
  // Convert start date
  const startMoment = moment.unix(startDate);

  if (!endDate) {
    // Event with only a starting time
    return `${startMoment.format("D MMM")}, ${convertToTimeString(startMoment)}`;
  }

  const endMoment = moment.unix(endDate);

  if (
    startMoment.isSame(endMoment, "day") &&
    startMoment.isSame(endMoment, "month") &&
    startMoment.isSameOrBefore(endMoment, "year")
  ) {
    // Event Lies on the same day
    return `${startMoment.format("D MMM")}, ${convertToTimeString(
      startMoment,
    )} - ${convertToTimeString(endMoment)}`;
  }
  // Multi day event
  return `${startMoment.format("D MMM")}, ${convertToTimeString(startMoment)} - ${endMoment.format(
    "D MMM",
  )}, ${convertToTimeString(endMoment)}`;
};

export default function EventCardHorizontal({ eventData }: EventCardHorizontalProps): JSX.Element {
  return (
    <div className="flex flex-row bg-[#E8EFF5] w-[60%] rounded-2xl h-full">
      <img
        className="w-[32rem] rounded-l-2xl"
        src={eventData.imagePath}
        alt={`${eventData.title} image banner`}
      />
      <div className="px-6 pt-8 w-full flex flex-col h-full">
        <h1 className="text-2xl font-semibold uppercase w-full text-left">{eventData.title}</h1>
        <div className="mt-5 w-full">
          <div className="flex flex-row">
            <img className="mr-3" src="/misc/calendar--heat-map.svg" alt="" draggable="false" />
            <div className="flex flex-col">
              {eventData.date.map((data, index) => {
                return (
                  <p
                    className="text-lg grid place-items-center"
                    key={`${eventData.title}-${index}`}
                  >
                    {convertUnixToString(data)}
                  </p>
                );
              })}
            </div>
          </div>
          {/* If location exists, display it */}
          {eventData.location && (
            <div className="flex flex-row mt-3">
              <img className="mr-3" src="/misc/location.svg" alt="" draggable="false" />
              <p className="text-lg grid place-items-center">{eventData.location}</p>
            </div>
          )}
        </div>
        <div className="w-full h-full place-items-end grid mb-5">
          <a href={eventData.facebookEventLink} target="_blank" rel="noreferrer">
            <button className="text-[#5FA8D3] border-[#5FA8D3] border-[1px] px-3 py-1 rounded-md hover:bg-[#61b4d5] hover:text-culturedWhite">
              <p className="text-base">Find More Info</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
