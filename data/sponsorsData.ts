export type SponsorData = {
  src: string;
  alt: string;
  link: string;
  type: "affiliate" | "sponsor";
};

const sponsorsData: SponsorData[] = [
  {
    src: "/logos/sponsors/unswArcLogo.png",
    alt: "UNSW ARC logo",
    link: "https://www.arc.unsw.edu.au/",
    type: "affiliate",
  },
  {
    src: "/logos/sponsors/unswEngineeringLogo.png",
    alt: "UNSW Engineering logo",
    link: "https://www.unsw.edu.au/engineering",
    type: "affiliate",
  },
  {
    src: "/logos/sponsors/unswFoundersLogo.png",
    alt: "UNSW Founders logo",
    link: "https://unswfounders.com/",
    type: "affiliate",
  },
  {
    src: "/logos/sponsors/engineersAustraliaLogo.png",
    alt: "Engineers Australia logo",
    link: "https://www.engineersaustralia.org.au/",
    type: "sponsor",
  },
];

export default sponsorsData;
