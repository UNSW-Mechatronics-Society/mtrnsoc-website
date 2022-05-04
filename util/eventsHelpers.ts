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
