export type profileData = {
  src: string;
  id: string;
  position: string;
  linkedIn: string;
};

export type subcomProfileData = {
  portfolioName: string;
  members: string[];
};

// alt and name is id, email is mtrnsoc email, classnames are the same,
export const execData: profileData[] = [
  {
    src: "/images/profiles/kyra.jpg",
    id: "Kyra Alday",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/kyra-alday/",
  },
  {
    src: "/images/profiles/tanvee.png",
    id: "Tanvee Islam",
    position: "Vice President",
    linkedIn: "https://www.linkedin.com/in/tanvee-mtrn/",
  },
  {
    src: "/images/profiles/iniyan.jpg",
    id: "Iniyan Vigneswaran",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/iniyan-vigneswaran-a5a594153/",
  },
  {
    src: "/images/profiles/aayush.jpg",
    id: "Aayush Rajouria",
    position: "Treasurer",
    linkedIn: "https://au.linkedin.com/in/aayush-rajouria/",
  },
  {
    src: "/images/profiles/brandon.jpg",
    id: "Brandon Winsley",
    position: "Arc Delegate and Grievance Officer",
    linkedIn: "https://www.linkedin.com/in/bwinsley/",
  },
];

export const directorData: profileData[] = [
  {
    src: "/images/profiles/celine.jpg",
    id: "Celine Choo",
    position: "Marketing Director",
    linkedIn: "https://www.linkedin.com/in/celinechooliling/",
  },
  {
    src: "/images/profiles/ishita.jpg",
    id: "Ishita Katyal",
    position: "Socials Director",
    linkedIn: "www.linkedin.com/in/ishita-katyal-a75226154/",
  },
  {
    src: "/images/profiles/janice.jpg",
    id: "Janice Nyoto",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/janice-nyoto/",
  },
  {
    src: "/images/profiles/alvin.jpg",
    id: "Alvin Cherk",
    position: "IT Co-Director",
    linkedIn: "https://www.linkedin.com/in/alvin-cherk-2363291b4/",
  },
  {
    src: "/images/profiles/juliet.jpg",
    id: "Juliet Tan",
    position: "IT Co-Director",
    linkedIn: "https://www.linkedin.com/in/jtannn/",
  },
  {
    src: "/images/profiles/leonard.png",
    id: "Leonard Chiang",
    position: "Projects Director",
    linkedIn: "https://www.linkedin.com/in/leonard-chiang/",
  },
  {
    src: "/images/profiles/shamik.jpg",
    id: "Shamik Patel",
    position: "Industry Director",
    linkedIn: "https://www.linkedin.com/in/shamik-patel/",
  },
];

export const subcomData: subcomProfileData[] = [
  {
    portfolioName: "Marketing Team",
    members: ["Aakash Kumar", "Angela Lei", "Carrie Wu", "Rayyan Hossain", "Sam Banerjee"],
  },
  {
    portfolioName: "Socials Team",
    members: ["Byron Petselis", "Thomas Shalaby"],
  },
  {
    portfolioName: "Workshops Team",
    members: ["Angus Wang", "Kalindu Dahanayake", "Shiwani Balaji"],
  },
  {
    portfolioName: "Projects Team",
    members: ["Eric Do", "Jay Choo", "Nicole Leow"],
  },
  {
    portfolioName: "Industry Team",
    members: ["Alice Shang", "Rohit Ghosh", "Sarvesh Sanjay Wanzare"],
  },
];
