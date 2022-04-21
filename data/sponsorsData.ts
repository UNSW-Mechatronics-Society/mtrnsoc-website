export type sponsorData = {
  src: string;
  alt: string;
  link: string;
  type: "affiliate" | "sponsor";
};

const sponsorsData: sponsorData[] = [
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
    src: "/logos/sponsors/knaLogo.png",
    alt: "K & A Electronics logo",
    link: "https://kandaelectronics.com.au/",
    type: "sponsor",
  },
];

export default sponsorsData;
