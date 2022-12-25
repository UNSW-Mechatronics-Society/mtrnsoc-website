import React from "react";
import Link from "next/link";
import { Event } from "util/eventsHelpers";
import EventCardHorizontal from "./EventCardHorizontal";
import styles from "./OurCurrentEvents.module.scss";

type TemplateProps = {
  children: React.ReactNode;
  buttonStyle: string;
};

const Template = ({ children, buttonStyle }: TemplateProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.eventsContainer}>{children}</div>
      <div>
        <Link legacyBehavior href="/events">
          <a>
            <button className={buttonStyle}>View all our events</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export type OurCurrentEventsProps = {
  currentEvents: Event[];
  buttonStyle: string;
};

export default function OurCurrentEvents({
  currentEvents,
  buttonStyle,
}: OurCurrentEventsProps): JSX.Element {
  const [currentPos, setCurrentPos] = React.useState(0); // position in array, indexed at 0

  if (currentEvents === null || currentEvents === undefined) {
    // Failed to get current events
    return (
      <Template buttonStyle={buttonStyle}>
        <p className={styles.errorText}>Failed to load events</p>
      </Template>
    );
  }

  if (currentEvents.length === 0) {
    return (
      <div>
        <img
          src="/logos/zzz.svg"
          alt="MTRNSoc Robot Sleeping"
          className={styles.imageSleepContainer}
        />
        <Template buttonStyle={buttonStyle}>
          <p className={styles.errorText}>There are no events currently. Check back later!</p>
        </Template>
      </div>
    );
  }

  const nextSlide = () =>
    setCurrentPos(currentPos === currentEvents.length - 1 ? 0 : currentPos + 1);
  const prevSlide = () =>
    setCurrentPos(currentPos === 0 ? currentEvents.length - 1 : currentPos - 1);

  return (
    <Template buttonStyle={buttonStyle}>
      <div className={styles.imageSliderContainer}>
        <div
          className={`${styles.navigationContainer} ${
            currentEvents.length >= 2 ? "" : "invisible"
          }`}
        >
          <img
            src="/misc/chevron--left.svg"
            alt="left navigation"
            aira-label="forward navigation"
            className={styles.navigationButtons}
            onClick={prevSlide}
          />
        </div>
        <div className="mx-3">
          {currentEvents.map((event, index) => (
            <div
              key={index}
              className={`${index === currentPos ? styles.slideActive : styles.slide}`}
            >
              <div
                className={`w-full grid place-items-center ${
                  index === currentPos ? "block" : "hidden"
                }`}
              >
                <EventCardHorizontal eventData={event} cardNumber={1} />
              </div>
              {/* <Link legacyBehavior href={event.facebookEventLink}>
                <a target="_blank">
                  <img
                    src={event.imagePath}
                    alt={`${event.title} banner`}
                    className={`${styles.eventsBannerImage} ${
                      index === currentPos ? "block" : "hidden"
                    }`}
                    title={event.title}
                  />
                </a>
              </Link> */}
            </div>
          ))}
        </div>
        <div
          className={`${styles.navigationContainer} ${
            currentEvents.length >= 2 ? "" : "invisible"
          }`}
        >
          <img
            src="/misc/chevron--right.svg"
            alt="right navigation"
            aira-label="backward navigation"
            className={styles.navigationButtons}
            onClick={nextSlide}
          />
        </div>
      </div>
    </Template>
  );
}
