/**
 * Date info pair where `startDate` and `endDate` are in unix time in AEST timezone
 *
 * If `endDate` is null, either signifies a whole day event
 * or an event without a set end time
 */
type eventDate = {
  startDate: number;
  endDate: number | null;
};

type eventDetails = {
  title: string;
  facebookEventLink: string;
  description: string | null;
  imagePath: string;
  location: string | null;
  /**
   * Use https://www.epochconverter.com/ to convert dates into unix timestamps.
   *
   * Unix timestamps should all be in GMT (i.e., not relative to local timezone)
   */
  date: eventDate[]; // Supports multiple start dates
};

// Template
// {
//   title: "",
//   facebookEventLink: "",
//   description: ``,
//   imagePath: null,
//   location: "",
//   date: [{ startDate: , endDate:  }],
// },

const unsortedEventData: eventDetails[] = [
  {
    title: "Baraja Site Visit",
    facebookEventLink: "https://www.facebook.com/events/1106039023465876",
    description:
      "Want industry exposure? Want FREE FOOD?\n    Baraja is opening its doors to students to visit their North Ryde headquarters! They're industry leaders in developing LiDAR technology for self-driving vehicles.\n    Come along with MTRNSoc for a specialised agenda tailored to us by Baraja. There will be industry representatives there with a presentation, panel, and open-floor networking. There will be catering and there will be live demos! (maybe even a sneaky drive on one of their LiDAR equipped vans)\n    Click here to register: https://forms.gle/xwAWSduiGVDrQHeg6\n    For more information about Baraja, check them out on LinkedIn or on their website here: https://www.baraja.com/en",
    imagePath: "/images/events/2021/2021_baraja_site_visit.jpg",
    location: "Baraja (Building 91/14 Julius Ave, North Ryde NSW 2113)",
    date: [{ startDate: 1637902800, endDate: 1637913600 }],
  },
  {
    title: "MTRN2500 Study Session",
    facebookEventLink: "https://www.facebook.com/events/270467618345850",
    description:
      "In preparation for the MTRN2500 MATLAB test and assignment we will be holding 2 revision sessions to give you the best opportunity to get those marks!\n    There will be live coding demonstrations by course tutors, and the opportunity to ask questions directly to tutors.",
    imagePath: "/images/events/2021/2021_mtrn2500_study_session.jpg",
    location: "MTRNSoc Discord",
    date: [
      { startDate: 1637218800, endDate: 1637226000 },
      { startDate: 1637391600, endDate: 1637398800 },
    ],
  },
  {
    title: "Director Recruitment 2022",
    facebookEventLink: "https://www.facebook.com/events/248515220641206",
    description:
      "Keen to help out MTRNSoc? For the first time, MTRNSoc is launching its director recruitment! Get the chance to work with awesome people and gain great experience.\n    There are 6 director roles on offer: 🟦Industry Director | 🟦 IT Director | 🟦 Socials Director | 🟦 Marketing Director | 🟦 Projects Director | 🟦 Workshops Director\n    🤖 Role Descriptions: https://bit.ly/3bNXbO4\n    🤖 Application Form: https://forms.office.com/r/CCuTspri3R (close Wednesday, November 17)",
    imagePath: "/images/events/2021/2021_director_recruitment_2022.jpg",
    location: null,
    date: [{ startDate: 1636358400, endDate: 1637153100 }],
  },
  {
    title: "Industry Night",
    facebookEventLink: "https://www.facebook.com/events/2681184935508838",
    description:
      "🤖MTRNSOC🤖 is back again with our annual 🛠INDUSTRY NIGHT🛠!\n    [REGISTRATIONS CLOSED!]\n    Drop by for:\n    ✨INTERNSHIP OPPORTUNITIES✨ and\n    ✨INDUSTRY INSIGHT✨!\n    Meet the representatives from:\n    ⬜ TelstraDev\n    ⬜ Autumn Compass\n    ⬜ Swisslog",
    imagePath: "/images/events/2021/2021_industry_night.jpg",
    location: "gather.town",
    date: [{ startDate: 1635280200, endDate: null }],
  },
  {
    title: "Pride in Engineering Virtual High Tea",
    facebookEventLink: "https://www.facebook.com/events/1286640791768407",
    description:
      "CEVSOC x CSESOC x ELSOC x MTRNSOC warmly invites you to our first Pride in Engineering High Tea. Whether you identify as LGBTQIA+ or if you are a keen ally, come along to celebrate and show your support for the LGBTQIA+ community in engineering while satisfying your boujee self with high tea catering.\n    Hear the thoughts, experiences and greatest lessons from LGBTQIA+ industry professionals during a panel discussion where we discuss embracing sexuality and gender identity in a work environment.\n    Seize the opportunity to make long lasting connections with these industry representatives and build your network of support as an aspiring LGBTQIA+ professional in the industry.\n    If you’re an ally, come and show your support for future LGBTQIA+ initiatives to embrace diversity and inclusion in the workplace.\n    This event is in partnership with InterEngineers, a community of LGBTQIA+ engineering professionals and allies that are supported by Engineers Australia. Industry professionals from Aurecon, Arup, WSP, Jacobs, Google, Dolby and more will also be in attendance.\n    Make sure to grab your tickets NOW before they run out!\n    High tea boxes are limited and are first in first serve so make sure to register ASAP if you want a box. The box will consist of some boujee snacks that you can munch on while networking or tuning into the panel discussion. It will also be delivered to your door before the event!",
    imagePath: "/images/events/2021/2021_pride_in_engineering_virtual_high_tea.jpg",
    location: "Online",
    date: [{ startDate: 1629853200, endDate: 1629860400 }],
  },
  {
    title: "MTRNSOC AGM",
    facebookEventLink: "https://www.facebook.com/events/368475521562597",
    description:
      "✔ Do you ❤LOVE❤ Democracy? ⭐⚔\n    ✔ Would you like to JOIN THE 🤖MTRNSOC🤖 Exec TEAM?\n    ✔ Maybe you just want to say hi 👉👈\n    If you said yes✔ to any of the above, come down to our Discord for our AGM!",
    imagePath: "/images/events/2021/2021_mtrnsoc_agm.jpg",
    location: "MTRNSoc Discord",
    date: [{ startDate: 1634709600, endDate: null }],
  },
  {
    title: "MTRNSOC EGM",
    facebookEventLink: "https://www.facebook.com/events/423225472705059",
    description: null,
    imagePath: "/images/events/2021/2021_mtrnsoc_egm.jpg",
    location: null,
    date: [{ startDate: 1633505400, endDate: null }],
  },
  {
    title: "MTRN2500 Primer Workshop",
    facebookEventLink: "https://www.facebook.com/events/515995319707606",
    description:
      "If you're doing MTRN2500 this term then come along to our Primer Workshop!\n    We'll be covering revision content from previous courses such as COMP1511 and COMP1531, as well as going over some introductory content for the course.",
    imagePath: "/images/events/2021/2021_mtrn2500_primer_workshop.jpg",
    location: "MTRNSoc Discord",
    date: [{ startDate: 1631003400, endDate: 1631008800 }],
  },
  {
    title: "Virtual Games Night",
    facebookEventLink: "https://www.facebook.com/events/498249208094345",
    description:
      "🎲 SUMO & MTRNSoc presents: Virtual Games Night 🎲\n    Slip on your gamer headsets, check your internet connection and let everyone around you know its real gamer hours, because thats what we're promising you; games, fun and maybe even more games. Join us to make your flex week all that more fun and loud. All we need is that you bring your pristine self and vibes.\n    We're going to be playing through a bunch of different games for all you different gamers. Whether you want to prove yourself in krunker, giggle at silly drawings in scribblio, or find that sussy baka in amogus, you can be sure to have fun. You can let us know if you want to add in your own games if we missed your favourites. If all the friendly competitions not for you, you can come just to soak up vibes and talk around, all are welcome.",
    imagePath: "/images/events/2021/2021_virtual_games_night.jpg",
    location: "",
    date: [{ startDate: 1625904000, endDate: 1625909400 }],
  },
  {
    title: "EGM - A NEW SECRETARY",
    facebookEventLink: "https://www.facebook.com/events/297907875407518",
    description:
      "Hey 🤖MTRNSOC🤖!\n  The primary agenda item for this EGM will be to ✨FILL IN THE ROLE OF SECRETARY✨ of our society!\n  If you're keen to ❗BECOME A PART OF MECHATRONICS SOCIETY❗ nominate yourself by filling in the following form first:\n  https://forms.gle/kAr7ThppNyxd2pXK7\n  Then join our EGM and enjoy the night!\n  Otherwise, we would love it if you could attend to place your valued vote and to hear from you all regarding any queries or recommendations you may have for our society.\n  Information regarding the responsibilities of this role are outlined in the following document:\n  https://docs.google.com/.../1aKXERJY4rcD1YkakQUqY.../edit...\n  Otherwise we will be voting on minor constitutional amendments which simply explicitly reinforce MTRNSoc being a non-profit organisation in which all and any earnings will be reinvested in the objectives of the society.\n  Due to the current lockdown, we will be hosting this event online on our discord.",
    imagePath: "/images/events/2021/2021_egm_a_new_secretary.jpg",
    location: "MTRNSoc Discord",
    date: [{ startDate: 1625646600, endDate: 1625650200 }],
  },
  {
    title: "UNSW Engineering E-Sports Night",
    facebookEventLink: "https://www.facebook.com/events/311363923914314",
    description:
      "The Society of Engineering Societies Presents: UNSW Engineering E-Sports Night!\n  Calling all gamers of the UNSW Engineering community! Join us as your favourite engineering societies battle it over games such as League of Legends, Valorant, Codenames and much more! Players of all skill levels are welcome with both Casual and Competitive brackets!\n  Competitive Games will be held, under four different games, League of Legends (team), Valorant (team), Skribbl.io (solo) and Tetris (solo). Form a team with your mates of 5-7 people (allowing for substitutions), or go in solo and compete within that game to see whether you and/or your mates have what it takes. There is a limit of 16 teams for League and Valorant, with 2 reserve teams for each, so make sure to get your tickets quick! You don’t need to purchase a ticket for solo games.\n  Casual Games can be enjoyed throughout the night through a variety of different games like Codenames, Krunker, Among us and more! Play with your friends or come and meet new people, all are welcome!!! This is not for any prizes, just for a bit of fun. Please make sure to register so we can add you to the Discord!\n  ",
    imagePath: "/images/events/2021/2021_unsw_engineering_e-sports_night.jpg",
    location: "Discord",
    date: [
      { startDate: 1624867200, endDate: null },
      { startDate: 1625040000, endDate: null },
    ],
  },
  {
    title: "Sumobots Week 4",
    facebookEventLink: "https://www.facebook.com/events/493895165010321",
    description:
      "Welcome to the fourth week of the Sumobots workshops!\n  Thursday's 2D CAD workshop will teach you all about drafting and drawing up your plans for your bots using computer-aided design (CAD).\n  The 3D CAD workshop, next week will develop upon this knowledge to allow you to draft up a 3D plan of your bots using CAD and manifest your champions in a virtual plane.",
    imagePath: "/images/events/2021/2021_sumobots_week_4.jpg",
    location: "Elec Makerspace Electrical Engineering Building (G17)",
    date: [
      { startDate: 1624521600, endDate: 1624528800 },
      { startDate: 1624953600, endDate: 1624960800 },
    ],
  },
  {
    title: "Sumobots Week 3",
    facebookEventLink: "https://www.facebook.com/events/389429229110655",
    description:
      "Welcome to our third week of workshops!\n  In our soldering workshop we'll teach you all about how to safely and properly solder together wires and pins, as well as show you how to use a breadboard.\n  In our Motor Control Workshop, we'll be showing you how to connect your Motors and control them using your Arduino and motor controller!\n  ",
    imagePath: "/images/events/2021/2021_sumobots_week_3.jpg",
    location: "Renewables Makerspace, Basement Level, Tyree Building",
    date: [
      { startDate: 1623744000, endDate: 1623751200 },
      { startDate: 1623916800, endDate: 1623924000 },
    ],
  },
  {
    title: "EntSoc Talkshow with Adam Driussi",
    facebookEventLink: "https://www.facebook.com/events/4075748952480958",
    description:
      "🙌 EntSoc x MathSoc x CSE Soc x EngSoc x MtrnSoc presents: our first-ever TALK SHOW with Adam Driussi! 🙌\n  Adam Driussi is the co-founder and CEO of Quantium. An Actuary with over 20 years of experience, Adam has overall responsibility for Quantium’s day-to-day operations and strategy.\n  Quantium is Australia’s oldest and largest data business, offering an 18-year track record of innovation in data science. They work with iconic brands in over 20 countries, including Walmart, P&G, Facebook, Qantas, and QBE. Quantium has been awarded as one of the most popular and best small employers for computer and data science graduates in Australia.",
    imagePath: "/images/events/2021/2021_entsoc_talkshow_with_adam_driussi.jpg",
    location: "Zoom",
    date: [{ startDate: 1623823200, endDate: 1623828600 }],
  },
  {
    title: "Sumobots Week 2",
    facebookEventLink: "https://www.facebook.com/events/1649971338524662",
    description:
      "Welcome to our first practical workshops, where we'll be learning all about Arduinos!\n  In this workshop we'll teach all about what an Arduino is, how to do some basic programming, and get you ready to start getting your bot to have some brains!",
    imagePath: "/images/events/2021/2021_sumobots_week_2.jpg",
    location: "Design Studio, Level 5, Ainsworth Building J17",
    date: [
      { startDate: 1623139200, endDate: 1623146400 },
      { startDate: 1623312000, endDate: 1623319200 },
    ],
  },
  {
    title: "Sumobots Week 1",
    facebookEventLink: "https://www.facebook.com/events/502642651150401",
    description:
      "Welcome to the UNSW Sumobots Competition!\n    In this introductory event, we'll be going over the competition structure and rules, handing out the Sumobot Kits and starting to ideate bot designs and strategies!",
    imagePath: "/images/events/2021/2021_sumobots_week_1.jpg",
    location: "Design Studio, Level 5, Ainsworth Building J17",
    date: [
      { startDate: 1622534400, endDate: 1622541600 },
      { startDate: 1622707200, endDate: 1622714400 },
    ],
  },
  {
    title: "MTRNSoc Hoodie Preorders",
    facebookEventLink: "https://www.facebook.com/events/624322405631185",
    description: `🤖MTRNSOC🤖 is back with some 🔥FIRE🔥 hoodies, available in both
      💪💪 Berry Bold Black and
      👉👈 "I don't recall saying periwinkle" Pink!`,
    imagePath: "/images/events/2021/2021_mtrnsoc_hoodie_preorders.jpg",
    location: null,
    date: [{ startDate: 1622617200, endDate: 1623591900 }],
  },
  {
    title: "UNSW Sumobots Competition 2021",
    facebookEventLink: "https://www.facebook.com/events/159633879392229",
    description:
      "There are only 50 kits available for purchase, and so only the first 50 teams will be able to compete. YOU MUST PURCHASE A KIT TO REGISTER.\n    Join MTRNSoc and CREATE in an 8 week long program to build your very own sumobot!\n    Form teams of 2-5 people to take on the challenge of designing, constructing, wiring and programming a fully autonomous robot. We'll be running tons of workshops to teach you from the ground up how to put together your bot every week, so that you won't need any experience to get started. At the end of the program we'll be holding a round-robin sumobot competition where the winners will be receiving some awesome prizes.\n    What is a Sumobot? Well it's an autonomous vehicle designed to push, distract or otherwise knock out an opponent from a sumo ring.\n    We'll be selling mandatory kits with all the components required to make a sumobot which will also include entry fee for the competition.\n    ",
    imagePath: "/images/events/2021/2021_unsw_sumobots_competition_2021.jpg",
    location: "",
    date: [{ startDate: 1622448000, endDate: null }],
  },
  {
    title: "MTRNSoc Automate Hackathon",
    facebookEventLink: "https://www.facebook.com/events/244212977449463",
    description:
      "Looking for a way to involve yourself in all things mechatronic and test out your skills in a fun beginner-friendly environment? We're super excited to present our newest event, the MTRNSoc Automate Hackathon, running for 24 hours, across 21st May to 22nd May. In teams of 2-5 people, you can be sure to have fun through our challenges and make exciting memories with fellow mechatronic students while you discover new innovating and interesting solutions to real, industry-provided problems.\n    The event is a friendly gateway to one of the biggest parts of engineering not taught at uni, testing your communication, pitching, and presentation skills. We'll be holding workshops across the two days to help improve both technical and soft skills.",
    imagePath: "/images/events/2021/2021_mtrnsoc_automate_hackathon.jpg",
    location: "Online (Pitches in-person @ MCIC UNSW)",
    date: [{ startDate: 1621558800, endDate: 1621666800 }],
  },
  {
    title: "BESS X MTRNSoc BBQ",
    facebookEventLink: "https://www.facebook.com/events/353885346029584",
    description:
      "Join us for a🔥 lit🔥 time⏳ at the\n    ❤BESS❤ x 🤖MTRNSoc🤖 🌭BBQ🌭!\n    Whether it is to catch a FREE BITE🍗 or ✨socialise✨ with fellow students we have you covered!",
    imagePath: "/images/events/2021/2021_bess_x_mtrnsoc_bbq.jpg",
    location: "Chancellor's Lawn",
    date: [{ startDate: 1618448400, endDate: 1618459200 }],
  },
  {
    title: "Study Night",
    facebookEventLink: "",
    description:
      "🍔🌭🍝🥪🍜~~FREE FOOD AND BIG BRAINS~~📖🧑🏿‍🏫🧑🏼‍🏫👩‍💻👩🏻‍💻\n    Feeling stressed about finals? Us too 😰\n    But no fear, MTRNSOC’S GOT OUR BACKS WITH AN ALL OUT STUDY NIGHT!\n    Best of all there's FREE SNACKS and a COMPLIMENTARY DINNER!\n    Come join us at Ainsworth Design Studio from 4-8pm on the 14th of April.\n    Bring your friends and let’s binge on both lecture videos and yummy snackos",
    imagePath: "/images/events/2021/2021_study_night.jpg",
    location: "Ainsworth(J - 17) Design Next Studio",
    date: [{ startDate: 1618380000, endDate: 1618394400 }],
  },
  {
    title: "Amazing Race",
    facebookEventLink: "https://www.facebook.com/events/160590445794157",
    description:
      "✨ The Team of Engineering Societies have come together to proudly present: Amazing Race 2021! ✨\n    This gruelling race 😫 will surely test your physical 💪, mental 🧠 and engineering 👷‍♀️ prowess! Only the best of UNSW Engo will have what it takes to claim their stake at the MASSIVE 💸$300💸 prize pool up for grabs!\n    What are you waiting for? Assemble your A-Team NOW with up to 4 other mates as you race against the clock 🕑 in a mad dash of puzzling challenges as you blast through the heart of the Sydney CBD 🏃‍♂️🏃‍♂️!!\n    From Civil to Chemical, to Biomedical and Mechatronics, each stop in the Amazing Race is specially designed and held by your favourite UNSW Engineering societies!",
    imagePath: "/images/events/2021/2021_amazing_race.jpg",
    location: null,
    date: [{ startDate: 1616554800, endDate: 1616562000 }],
  },
  {
    title: "Welcome Night & EGM",
    facebookEventLink: "https://www.facebook.com/events/484074075932350",
    description:
      "Join us at our welcome night at Design Next Studio (Ainsworth level 5), where you’ll have an opportunity to hear what Mechatronics is about from our faculty speakers and ask them all your questions!\n    After the faculty panel our mechatronic graduates and students from all years will give you the opportunity to hear what life as a mechatronic student is like and give you some handy tips about uni life.\n    Before we start MTRNSOC will have a quick Extraordinary General Meeting, where we will vote in some constitutional changes. We will also present you with some opportunities to be a part of the MTRNSOC team.\n    We’ll also have some pizza!",
    imagePath: "/images/events/2021/2021_welcome_night_&_egm.jpg",
    location: "",
    date: [{ startDate: 1614150000, endDate: 1614157200 }],
  },
  {
    title: "Subcommittee Applications",
    facebookEventLink: "https://www.facebook.com/events/260285782288029",
    description:
      "Welcome to the sub-committee applications for MTRNSoc 2021!\n    Sub-committee members are the most important part of a society that are given the opportunity to come up with and plan events, get involved more with the society, and provide an excellent opportunity to meet new people. Sub-committee members generally will get to know how the society runs and operates, how to plan and market events, along with a lot more which provides meaningful experience for those wishing to joint the society executive next year.\n    The sub-committees available are :\n    - SLP (Student Led Projects)\n    - Socials\n    - Marketing\n    To learn more about the responsibilities of each role, or for general questions or inquiries, please do not hesitate to contact the society on Facebook at: https://www.facebook.com/groups/unsw.mechatronics\n    Applications close on the 28th of February at 11:59pm. If successful, you should be contacted shortly afterwards for an interview. Good luck!",
    imagePath: "/images/events/2021/2021_subcommittee_applications.jpg",
    location: "",
    date: [{ startDate: 1613358000, endDate: 1614517199 }],
  },
  {
    title: "O-Week T1",
    facebookEventLink: "https://www.facebook.com/events/714486859435171",
    description:
      "🚨🚨🚨 MTRNSOC AT O-WEEK 🚨🚨🚨\n    MTRNSoc is super keen to welcome all the new faces Mechatronics 🤖🤖🤖🤖, as well as catching up with the old ones!\n    This is your chance to meet people from your degree, what MTRNSoc is about and how you can get involved! 👏👏\n    We will be at UNSW Alumni Lawn West 🌳 -right in front of Gate 2- Tuesday to Thursday!\n    If you can't make it in-person don't worry, we will also be at the o-week discord 💻 Monday-Thursday.",
    imagePath: "/images/events/2021/2021_o-week_t1.jpg",
    location: "https://www.facebook.com/events/714486859435171",
    date: [{ startDate: 1612821600, endDate: 1613019600 }],
  },
  {
    title: "2022 Camp Leader Applications",
    facebookEventLink: "https://www.facebook.com/events/1108825586551964",
    description: `Calling all students who are members of UNSW ELSOC, BESS and MTRNSoc.
    We have teamed up for an amazing first year camp this year and are on the hunt for Camp Leaders!
    Enjoyed your first year camp and want to relive it again, while leading a team of engineering campers? 😍 Looking for new experiences and adventures?
    Keen to meet new people and make new friends? 💘 Apply as a camp leader! 💫
    As a leader, you will have the opportunity to develop valuable leadership skills by supervising a group of first years through fun and challenging camp activities. You will also be able to form valuable friendships with other fellow camp leaders! 😊💜 If you are passionate about helping first years have a great time and make friends, we want you on board! 👏
    Applications are open to electrical, telecommunications, quantum, mechanical, mechatronics, biomedical and computer engineering students. Camp will be taking place 11-13th of March 2022.`,
    imagePath: "/images/events/2022/2022_camp_leader_applications.jpg",
    location: "",
    date: [{ startDate: 1641214799, endDate: 1642424399 }],
  },
  {
    title: "Testing 1",
    facebookEventLink: "https://www.facebook.com/events/1108825586551964",
    description: "Testing event 1",
    imagePath: "/images/events/2021/2021_mtrn2500_study_session.jpg",
    location: "",
    date: [{ startDate: 1643466171, endDate: 1648563771 }],
  },
  {
    title: "Testing 2",
    facebookEventLink: "https://www.facebook.com/events/1108825586551964",
    description: "Testing event 2",
    imagePath: "/images/events/2021/2021_study_night.jpg",
    location: "",
    date: [{ startDate: 1643466171, endDate: 1648563771 }],
  },
  {
    title: "Testing 3",
    facebookEventLink: "https://www.facebook.com/events/1108825586551964",
    description: "Testing event 3",
    imagePath: "/images/events/2021/2021_mtrnsoc_egm.jpg",
    location: "",
    date: [{ startDate: 1643466171, endDate: 1648563771 }],
  },
  {
    title: "MTRNSoc at O-Week",
    facebookEventLink: "https://www.facebook.com/events/308515227999436",
    description: `MTRNSoc's at O-Week! 🎉🎉🎉
    Unsure what MTRNSoc does? 🤖 Want to know how to get involved? 💪 Want freebies? What if you...come along to the MTRNSoc stall? Haha jk...unless? 👉👈
    We're selling merch, giving out freebies, bringing good vibes and subpar conversation. Depending on the director and exec there. Who knows.
    Come find out and test our socialising skills after COVID.
    But also keychains. 🔑🔑🔑`,
    imagePath: "/images/events/2022/2022_o_week_t1.jpg",
    location: "UNSW",
    date: [{ startDate: 1644188400, endDate: 1644467400 }],
  },
];

/**
 * Sorted by date, closest date first.
 */
const eventData = unsortedEventData.sort((a, b) => {
  // Get oldest date of each
  const oldestA = Math.max(...a.date.map((x) => (x.endDate !== null ? x.endDate : x.startDate)));
  const oldestB = Math.max(...b.date.map((x) => (x.endDate !== null ? x.endDate : x.startDate)));
  // Sort such that closest event is first
  if (oldestA > oldestB) return -1;
  if (oldestA < oldestB) return 1;
  return 0;
});

export default eventData;

export type { eventDetails };
