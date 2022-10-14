export type ProfileData = {
  src: string;
  id: string;
  position: string;
  linkedIn: string | null;
};

export type SubcomProfileData = {
  portfolioName: string;
  members: string[];
};

// alt and name is id, email is mtrnsoc email, classnames are the same,
export const execData: ProfileData[] = [
  {
    src: "/images/profiles/KyraA.jpg",
    id: "Kyra Alday",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/kyra-alday/",
  },
  {
    src: "/images/profiles/TanveeI.jpg",
    id: "Tanvee Islam",
    position: "Vice President",
    linkedIn: "https://www.linkedin.com/in/tanvee-mtrn/",
  },
  {
    src: "/images/profiles/IniyanV.jpg",
    id: "Iniyan Vigneswaran",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/iniyan-vigneswaran-a5a594153/",
  },
  {
    src: "/images/profiles/AayushR.jpg",
    id: "Aayush Rajouria",
    position: "Treasurer",
    linkedIn: "https://au.linkedin.com/in/aayush-rajouria/",
  },
  {
    src: "/images/profiles/BrandonW.jpg",
    id: "Brandon Winsley",
    position: "Arc Delegate and Grievance Officer",
    linkedIn: "https://www.linkedin.com/in/bwinsley/",
  },
];

// alt and name is id, email is mtrnsoc email, classnames are the same,
export const execData2023: ProfileData[] = [
  {
    src: "/images/profiles/ShamikP.jpg",
    id: "Shamik Patel",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/shamik-patel/",
  },
  {
    src: "/images/profiles/AngusW.jpg",
    id: "Angus Wang",
    position: "Vice President",
    linkedIn: null,
  },
  {
    src: "/images/profiles/NicoleL.jpg",
    id: "Nicole Leow Ke Xin",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/nicole-leow-40b117214/",
  },
  {
    src: "/images/profiles/JayC.jpg",
    id: "Huan Jie (Jay) Choo",
    position: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/jay-c-19921b251/",
  },
  {
    src: "/images/profiles/EricD.jpg",
    id: "Eric Do",
    position: "Arc Delegate",
    linkedIn: "https://www.linkedin.com/in/ericnd/",
  },
  {
    src: "/images/profiles/JessL.jpg",
    id: "Jess Luo",
    position: "Grievance & EDI Officer",
    linkedIn: "https://www.linkedin.com/in/jessica-luo-0a7282208/",
  },
];

export const directorData: ProfileData[] = [
  {
    src: "/images/profiles/CelineC.jpg",
    id: "Celine Choo",
    position: "Marketing Director",
    linkedIn: "https://www.linkedin.com/in/celinechooliling/",
  },
  {
    src: "/images/profiles/DanaeM.jpg",
    id: "Danae Matthews",
    position: "Marketing Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/IshitaK.jpg",
    id: "Ishita Katyal",
    position: "Socials Director",
    linkedIn: "www.linkedin.com/in/ishita-katyal-a75226154/",
  },
  {
    src: "/images/profiles/JaniceN.jpg",
    id: "Janice Nyoto",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/janice-nyoto/",
  },
  {
    src: "/images/profiles/AlvinC.jpg",
    id: "Alvin Cherk",
    position: "IT Co-Director",
    linkedIn: "https://www.linkedin.com/in/alvin-cherk-2363291b4/",
  },
  {
    src: "/images/profiles/JulietT.jpg",
    id: "Juliet Tan",
    position: "IT Co-Director",
    linkedIn: "https://www.linkedin.com/in/jtannn/",
  },
  {
    src: "/images/profiles/LeonardC.jpg",
    id: "Leonard Chiang",
    position: "Projects Director",
    linkedIn: "https://www.linkedin.com/in/leonard-chiang/",
  },
  {
    src: "/images/profiles/ShamikP.jpg",
    id: "Shamik Patel",
    position: "Industry Director",
    linkedIn: "https://www.linkedin.com/in/shamik-patel/",
  },
];

export const subcomData: SubcomProfileData[] = [
  {
    portfolioName: "Marketing Team",
    members: ["Angela Lei", "Carrie Wu", "Sam Banerjee", "Sunny Chen"],
  },
  {
    portfolioName: "Socials Team",
    members: ["Byron Petselis", "Thomas Shalaby", "Zac Saber"],
  },
  {
    portfolioName: "Workshops Team",
    members: ["Angus Wang", "Kalindu Dahanayake"],
  },
  {
    portfolioName: "Projects Team",
    members: ["Eric Do", "Jay Choo", "Nicole Leow"],
  },
  {
    portfolioName: "Industry Team",
    members: ["Dipro Roychowdhury", "Hannabeth Marchant", "Sarvesh Sanjay Wanzare"],
  },
];
