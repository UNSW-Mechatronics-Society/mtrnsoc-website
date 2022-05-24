import Link from "next/link";
import { Event } from "util/eventsHelpers";
import styles from "./EventCardHorizontal.module.scss";

type EventCardHorizontalProps = {
  eventData: Event;
  cardNumber: number;
};

export default function EventCardHorizontal({
  eventData,
  cardNumber,
}: EventCardHorizontalProps): JSX.Element {
  // const backgroundClass = cardNumber % 2 === 0 ? styles.backgroundBlue : styles.backgroundGrey;

  return (
    <div className={`${styles.mainContainer} ${styles.backgroundBlue}`}>
      <Link href={eventData.facebookEventLink}>
        <a target="_blank" className="h-full w-full">
          <img
            className={styles.image}
            src={eventData.imagePath}
            alt={`${eventData.title} image banner`}
          />
        </a>
      </Link>
      <div className={styles.rightInformationContainer}>
        <h1 className="text-2xl font-semibold uppercase w-full text-left">{eventData.title}</h1>
        <div className={styles.rightInformationTextContainer}>
          <div className="flex flex-row">
            <img className="mr-3" src="/misc/calendar--heat-map.svg" alt="" draggable="false" />
            <div className="flex flex-col">
              <p className="text-lg grid place-items-center max-eventCard:text-left">
                {eventData.dateToString()}
              </p>
            </div>
          </div>
          {/* If location exists, display it */}
          {eventData.location && (
            <div className="flex flex-row mt-3">
              <img className="mr-3" src="/misc/location.svg" alt="" draggable="false" />
              <p className="text-lg grid place-items-center text-left">{eventData.location}</p>
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
