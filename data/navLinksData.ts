export type PageInformation = {
  /**
   * Name on navBar
   */
  navBarName: string;
  route: string;
  /**
   * Title of page shown in browser
   */
  title: string;
  /**
   * Meta description
   */
  description: string;
  /**
   * Relative banner image URL
   */
  bannerImageURL: string;
  bannerText: string;
};

export const homePageData: PageInformation = {
  navBarName: "Home",
  route: "/",
  title: "UNSW Mechatronics Society",
  description:
    "UNSW Mechatronics Society (MTRNSoc) is a student-run engineering society \
    that aims to provide Mechatronic Engineering opportunities and pathways \
    between mechatronic students and the professional community.",
  bannerImageURL: "/images/other/frontPageBannerEdited.png",
  bannerText: "UNSW Mechatronics Society",
};

export const teamPageData: PageInformation = {
  navBarName: "Our Team",
  route: "/team",
  title: "Team - MTRNSoc",
  description: "Meet the current team behind MTRNSoc.",
  bannerImageURL: "/images/other/teamBanner.png",
  bannerText: "Our Team",
};

export const eventsPageData: PageInformation = {
  navBarName: "Events",
  route: "/events",
  title: "Events - MTRNSoc",
  description:
    "The UNSW MTRNSoc team organises a variety of social events, industry nights, \
    and workshops. Find out what events are on now!",
  bannerImageURL: "/images/other/eventsBanner.png",
  bannerText: "Events",
};

export const sponsorsPageData: PageInformation = {
  navBarName: "Sponsors",
  route: "/sponsors",
  title: "Sponsors - MTRNSoc",
  description:
    "MTRNSoc is generously supported by our sponsors, which gives us an \
    opportunity to run workshops and events and their contributions are integral to \
    our operations. If you are interested in sponsoring our society, \
    please contact us via our society email.",
  bannerImageURL: "/images/other/sponsorBanner.png",
  bannerText: "Sponsors",
};

export const contactPageData: PageInformation = {
  navBarName: "Contact Us",
  route: "/contact",
  title: "Contact - MTRNSoc",
  description: "Contact our society here.",
  // NOTE: This page does not have a banner, but will use the home page banner as its og:image
  bannerImageURL: "/images/other/frontPageBannerEdited.png",
  bannerText: "",
};

// NOTE: in order for navbar
const pageData: PageInformation[] = [
  homePageData,
  teamPageData,
  eventsPageData,
  sponsorsPageData,
  contactPageData,
];

export default pageData;
