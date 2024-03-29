import moment from "moment";

export type StartDate = number;
export type EndDate = number | null;

export type EventDetail = {
  title: string;
  facebookEventLink: string;
  imagePath: string;
  location: string | null;
  startDate: StartDate;
  endDate: EndDate;
};

export class Event {
  public readonly title: string;
  public readonly facebookEventLink: string;
  public readonly imagePath: string;
  public readonly location: string | null;
  /**
   * In UNIX seconds
   */
  public readonly startDate: StartDate;
  /**
   * In UNIX seconds or null
   */
  public readonly endDate: EndDate;

  /**
   * Create a new instance of `Event` from fields
   * @param title title of event
   * @param facebookEventLink facebook link towards event
   * @param imagePath url of event image banner
   * @param location optional location of event
   * @param startDate start date of event in UNIX seconds
   * @param endDate optional end date of event in UNIX seconds
   */
  public constructor(
    title: string,
    facebookEventLink: string,
    location: string | null,
    imagePath: string,
    startDate: number,
    endDate: number | null,
  ) {
    this.title = title;
    this.facebookEventLink = facebookEventLink;
    this.imagePath = imagePath;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  /**
   * Convert an `EventDetail` object into an Event instance
   * @param e object to be converted
   * @returns
   */
  public static eventFromEventDetails(e: EventDetail): Event {
    return new Event(e.title, e.facebookEventLink, e.location, e.imagePath, e.startDate, e.endDate);
  }

  /**
   * Get the earliest date for this event
   * @returns date in UNIX seconds
   */
  public getEarliestDate = (): number => this.startDate;

  /**
   * Gets oldest date for this event.
   *
   * Would be the endDate of the event if exists. If not, it is the startDate.
   *
   * @returns date in UNIX seconds
   */
  public getOldestDate = () => {
    if (this.endDate !== null) {
      // End date exists
      return this.endDate;
    } else {
      return this.startDate;
    }
  };

  /**
   * Convert class member properties into an object
   */
  public toJSON = (): EventDetail => {
    return {
      title: this.title,
      facebookEventLink: this.facebookEventLink,
      imagePath: this.imagePath,
      location: this.location,
      startDate: this.startDate,
      endDate: this.endDate,
    };
  };

  /**
   * If `x` does not have a 00 minutes time, display minutes
   * @param x
   * @returns
   */
  private convertToTimeString = (x: moment.Moment): string => {
    if (x.format("mm") === "00") {
      return x.format("h a");
    } else {
      return x.format("h:mm a");
    }
  };

  /**
   * Convert event UNIX time into human readable string
   * @returns
   */
  public dateToString = (): string => {
    // Convert start date
    const startMoment = moment.unix(this.startDate);

    if (this.endDate === null || this.endDate === undefined) {
      // Event with only a starting time
      return `${startMoment.format("D MMM")}, ${this.convertToTimeString(startMoment)}`;
    }

    const endMoment = moment.unix(this.endDate);

    if (
      startMoment.isSame(endMoment, "day") &&
      startMoment.isSame(endMoment, "month") &&
      startMoment.isSameOrBefore(endMoment, "year")
    ) {
      // Event Lies on the same day
      return `${startMoment.format("D MMM")}, ${this.convertToTimeString(
        startMoment,
      )} - ${this.convertToTimeString(endMoment)}`;
    }
    // Multi day event
    return `${startMoment.format("D MMM")}, ${this.convertToTimeString(
      startMoment,
    )} - ${endMoment.format("D MMM")}, ${this.convertToTimeString(endMoment)}`;
  };
}

/**
 * Sort events based on its oldest date. Events that finish first are first.
 * @param currentEvents
 * @returns
 */
export const getSortedEvents = (currentEvents: Event[]) => {
  return currentEvents.sort((x, y) => x.getOldestDate() - y.getOldestDate());
};
