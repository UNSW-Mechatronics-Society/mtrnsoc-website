export type StartDate = number;
export type EndDate = number | null;

export type EventDetails = {
  title: string;
  facebookEventLink: string;
  imagePath: string;
  location: string | null;
  startDate: StartDate;
  endDate: EndDate;
};

export class EventDetail {
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
   * Create a new instance of `EventDetail`
   * @param title title of event
   * @param facebookEventLink facebook link towards event
   * @param imagePath url of event image banner
   * @param location optional location of event
   * @param startDate start date of event in UNIX seconds
   * @param endDate optional end date of event in UNIX seconds
   */
  constructor(
    title: string,
    facebookEventLink: string,
    imagePath: string,
    location: string | null,
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
}
