import moment from "moment";
import { EndDate, EventDetails, StartDate } from "util/eventsHelpers";
import styles from "./EventCardHorizontal.module.scss";

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
const convertUnixToString = (startDate: StartDate, endDate: EndDate) => {
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

type EventCardHorizontalProps = {
  eventData: EventDetails;
  cardNumber: number;
};

export default function EventCardHorizontal({
  eventData,
  cardNumber,
}: EventCardHorizontalProps): JSX.Element {
  // const backgroundClass = cardNumber % 2 === 0 ? styles.backgroundBlue : styles.backgroundGrey;

  return (
    <div className={`${styles.mainContainer} ${styles.backgroundBlue}`}>
      <img
        className={styles.image}
        src={eventData.imagePath}
        alt={`${eventData.title} image banner`}
      />
      <div className={styles.rightInformationContainer}>
        <h1 className="text-2xl font-semibold uppercase w-full text-left">{eventData.title}</h1>
        <div className={styles.rightInformationTextContainer}>
          <div className="flex flex-row">
            <img className="mr-3" src="/misc/calendar--heat-map.svg" alt="" draggable="false" />
            <div className="flex flex-col">
              <p className="text-lg grid place-items-center">
                {convertUnixToString(eventData.startDate, eventData.endDate)}
              </p>
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
        <div className={styles.buttonContainer}>
          <a href={eventData.facebookEventLink} target="_blank" rel="noreferrer">
            <button className={styles.button}>
              <p className="text-base">Find More Info</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
