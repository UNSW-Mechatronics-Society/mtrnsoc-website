/* eslint-disable linebreak-style */
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
    linkedIn: "https://www.linkedin.com/in/angus-wang-2a4905203/",
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
    src: "/images/profiles/SaiP.jpeg",
    id: "Sai Poreddy",
    position: "Creatives Director",
    linkedIn: "https://www.linkedin.com/in/sai-poreddy-74b08b16a/?originalSubdomain=au",
  },
  {
    src: "/images/profiles/AngelineP.jpg",
    id: "Angeline Parrella",
    position: "Socials Director",
    linkedIn: "https://www.linkedin.com/in/angeline-parrella-1a843215a/",
  },
  {
    src: "/images/profiles/FatimaA.jpeg",
    id: "Fatima Ahmed",
    position: "Industry Director",
    linkedIn: "https://www.linkedin.com/in/fatima-ahmed-26928020a/",
  },
  {
    src: "/images/profiles/DanushG.jpg",
    id: "Danush Gunaseelan",
    position: "Industry Director",
    linkedIn: "https://www.linkedin.com/in/thanushwur-gunaseelan-a93180148/?originalSubdomain=au",
  },
  {
    src: "/images/profiles/CarmenZ.jpg",
    id: "Carmen Zhang",
    position: "Industry Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/AishiJ.jpeg",
    id: "Aishi Jain",
    position: "Industry Director",
    linkedIn: "https://www.linkedin.com/in/aishijain/",
  },
  {
    src: "/images/profiles/JoshL.jpg",
    id: "Josh Lim",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/joshclim/",
  },
  {
    src: "/images/profiles/AdiyatR.jpg",
    id: "Adiyat Rahman",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/adiyatrahman/",
  },
  {
    src: "/images/profiles/Muhammad.jpg",
    id: "Muhammad Haffejee",
    position: "Workshops Director",
    linkedIn: "https://www.linkedin.com/in/muhammad-haffejee/",
  },
  {
    src: "/images/profiles/AkhilG.jpg",
    id: "Akhil Govan",
    position: "Projects Director",
    linkedIn: null,
  },
  {
    src: "/images/profiles/JosephineL.jpg",
    id: "Josephine Lam",
    position: "Marketing Director",
    linkedIn: "https://www.linkedin.com/in/josephine-lam-808946172/",
  },
  {
    src: "/images/profiles/WinnieZ.jpeg",
    id: "Winnie Zhang",
    position: "IT Director",
    linkedIn: "https://www.linkedin.com/in/winnie-zhang-64392b223/",
  },
  {
    src: "/images/profiles/NathanH.jpeg",
    id: "Nathan Hu",
    position: "IT Director",
    linkedIn: "https://www.linkedin.com/in/nathan-hu-0284511b0/",
  },
];

export const subcomData: SubcomProfileData[] = [
  {
    portfolioName: "Socials Team",
    members: [
      "Daayan Naseem Kola",
      "Jasmine Zeng",
      "Rohini Manohar",
      "Aditya Jain",
      "Nahiyan Mahmud",
      "Jeslyn Yu",
    ],
  },
  {
    portfolioName: "Workshops Team",
    members: ["Phillip Law", "Jade Williams", "Jake Song", "Aditya Muthukattu"],
  },
  {
    portfolioName: "Projects Team",
    members: ["Xiuming Li", "Athanasios Boufeas", "Shiwani Balaji", "Anshul Trivedi"],
  },
  {
    portfolioName: "Industry Team",
    members: ["Liam Burne-Johnston", "Khushi Gupta", "Kai Turner", "Sebastian Cezario"],
  },
  {
    portfolioName: "Creatives Team",
    members: ["Aryan Wadhawan", "Benny Cheng", "Nicholas Tong", "Anirudh Raju"],
  },
  {
    portfolioName: "Marketing Team",
    members: ["Aarush Arora", "Eric Wu", "Aalam Virk"],
  },
];
