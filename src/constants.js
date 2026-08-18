// Experience Section Logo's
import webverseLogo from "./assets/componylogo.jpeg";
import newtonschoolLogo from "./assets/critiveit.png";
import smtLogo from "./assets/smt.jpg";

// Education Section Logo's
import glaLogo from "./assets/barguna.jpg";
import bsaLogo from "./assets/philipnagor.jpeg";
import cubLogo from "./assets/cub.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/wingsblast.jpeg";
import csprepLogo from "./assets/work_logo/fourproject.jpeg";
import npmLogo from "./assets/work_logo/thirdproject.jpeg";
import webverLogo from "./assets/work_logo/abs.jpeg";
import mentorLogo from "./assets/work_logo/mu.png";
import omagaLogo from "./assets/work_logo/omaga.png";
import travLogo from "./assets/work_logo/trav.png";
import gotinfoLogo from "./assets/work_logo/gotinfo.jpeg";


export const SkillsInfo = [
  {
    title: "Skills",
    skills: [
      { name: "Dart", initials: "DA", type: "LANGUAGE" },
      { name: "C", initials: "C", type: "LANGUAGE" },
      { name: "Flutter", initials: "FL", type: "MOBILE" },
      { name: "GetX", initials: "GE", type: "STATE" },
      { name: "Restful API", initials: "RA", type: "API" },
      { name: "Firebase", initials: "FI", type: "CLOUD" },
      { name: "WebSocket", initials: "WS", type: "NETWORK" },
      { name: "Google Maps", initials: "GM", type: "MAPS" },
      { name: "Responsive UI", initials: "RU", type: "UI/UX" },
      { name: "Custom Widgets", initials: "CW", type: "UI/UX" },
      { name: "Payment Gateway", initials: "PG", type: "INTEGRATION" },
      { name: "In-App Purchases", initials: "IP", type: "INTEGRATION" },
      { name: "Push Notification", initials: "PN", type: "NOTIFICATION" },
      { name: "AI APIs", initials: "AI", type: "INTEGRATION" },
      { name: "Hive", initials: "HI", type: "STORAGE" },
      { name: "SharedPrefs", initials: "SP", type: "STORAGE" },
      { name: "Firestore", initials: "FS", type: "DATABASE" },
      { name: "Google Play Console", initials: "GPC", type: "DEPLOYMENT" },
      { name: "App Store Connect", initials: "ASC", type: "DEPLOYMENT" },
      
    ]
  },
  // {
  //   title: "Tools & Deployment",
  //   skills: [
  //     { name: "Git", initials: "GI", type: "TOOLS" },
  //     { name: "GitHub", initials: "GH", type: "TOOLS" },
  //     { name: "Android Studio", initials: "AS", type: "IDE" },
  //     { name: "VS Code", initials: "VS", type: "IDE" },
  //     { name: "Xcode", initials: "XC", type: "IDE" },
  //     { name: "Postman", initials: "PO", type: "TOOLS" },
  //     { name: "Figma", initials: "FG", type: "DESIGN" },
  //     { name: "Play Console", initials: "PC", type: "DEPLOYMENT" },
  //     { name: "App Store", initials: "AS", type: "DEPLOYMENT" },
  //     { name: "TestFlight", initials: "TF", type: "DEPLOYMENT" },
  //   ]
  // }
];

//Experience

export const experiences = [
  {
    id: 0,
    img: smtLogo,
    role: "Junior Flutter Developer",
    company: "SM Technology",
    date: "June 2025 - Present",
    desc: "I am currently working as a Junior App Developer at SM Technology, where I develop mobile applications and gain real-world industry experience. I collaborate with designers and backend developers to build scalable features and ensure smooth user experiences. I also communicate with clients to understand requirements and deliver solutions that align with business goals and product quality.",
    skills: [
      "Dart(OOP)",
      "Flutter",
      "Getx",
      "Restful API",
      "Stripe (payment)",
      "Socket io / Web Socket",
      "Google Map",
      "Push Notification",
      "Firebase",
      "UI/UX Design",
    ],
  },
  {
    id: 1,
    img: webverseLogo,
    role: "Junior Flutter Developer",
    company: "All One Autos",
    date: "December 2024 - June 2025",
    desc: "As a Junior App Developer, I create mobile apps, collaborate with senior developers, write clean code, participate in code reviews, assist in feature design, and enhance development processes with a focus on user experience and brand consistency.",
    skills: [
      "Dart(OOP)",
      "Flutter",
      "Restful API",
      "Getx",
      "Firebase",
      "UI/UX Design",
    ],
  },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "App Develoment With Flutter",
  //   company: "CREATIVE IT INSTITUTE",
  //   date: "August 2023 - December 2023",
  //   desc: "Worked as a App Develoment Intern, designing and implementing scalable UI components and responsive UI using Flutter. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly App.",
  //   skills: [
  //     "Dart",
  //     "Flutter",
  //     "Firebase",
  //     "Restful API",
  //     "UI/UX Design",
  //     "Figma",
  //     "Responsive UI",
  //   ],
  // },
];

//education

export const education = [
  {
    id: 0,
    img: cubLogo,
    school: "Canadian University of Bangladesh",
    date: "2026 - Present",
    grade: "Ongoing",
    desc: "I am currently pursuing my Bachelor of Science in Computer Science and Engineering from Canadian University of Bangladesh.",
    degree: "B.Sc. in Computer Science & Engineering (Ongoing)",
  },
  {
    id: 1,
    img: glaLogo,
    school: "Barguna Polytechnic Institute, Barguna",
    date: "2019 - 2020",
    grade: "3.71 CGPA Out of 4.00",
    desc: "I have completed my studies completely for Diploma Engineering in Computer Technology Barguna Politacnic Institute,Barguna.",
    degree: "Diploma in Computer Technology",
  },

];
// projact
export const projects = [
  {
    id: 0,
    title: "GotInfo",
    description: "Cross-platform B2C marketplace application enabling users to discover services and connect with businesses.",
    features: [
      "Dual Consumer and Business user flows.",
      "Real-time WebSocket chat & Firebase notifications.",
      "Google Maps-powered vendor discovery.",
      "Native in-app subscriptions (StoreKit & Google Play Billing)."
    ],
    tags: ["FLUTTER", "MARKETPLACE", "WEBSOCKET", "MAPS", "IAP"],
    image: gotinfoLogo,
    playStore: "https://play.google.com/store/apps/details?id=com.magdelna.needinfo&pcampaignid=web_share",
    appStore: "https://apps.apple.com/us/app/gotinfo-find-what-you-need/id6749289141",
  },
  {
    id:1,
    title: "Trav",
    description: "AI-Powered trip planning and monitoring application that generates personalized itineraries based on user preferences.",
    features: [
      "AI-assisted and manual trip creation modes.",
      "Dual user roles for travelers and parents/guardians.",
      "OTP authentication and custom date-range calendar.",
      "Real-time notifications, alerts, and responsive UI."
    ],
    tags: ["FLUTTER", "AI", "GETX", "REST API"],
    image: travLogo,
    playStore: "https://play.google.com/store/apps/details?id=com.trav.app&pcampaignid=web_share",
    appStore: "https://apps.apple.com/us/app/trav/id6785146529",
  },
  {
    id: 2,
    title: "MentorU University",
    description: "Developed a scalable mobile application using Flutter and GetX, focused on personal growth, mentorship, and community engagement.",
    features: [
      "Integrated Agora live streaming.",
      "Interactive social feed with posts, likes, and comments.",
      "Role-based access for personalized experience."
    ],
    tags: ["FLUTTER", "GETX", "SOCIAL"],
    image: mentorLogo,
    playStore: "https://play.google.com/store/apps/details?id=com.mentoru.university&pcampaignid=web_share",
    appStore: null,
  },
  {
    id: 3,
    title: "AlphaPulse Fitness",
    description: "Developed AlphaPulse Fitness using Flutter and GetX, enabling users to track meals and exercises.",
    features: [
      "Role-based access and WebSocket chat.",
      "Real-time messaging with mentors.",
      "Watch exercise videos and manage fitness."
    ],
    tags: ["FLUTTER", "FITNESS", "WEBSOCKET"],
    image: omagaLogo,
    playStore: "https://play.google.com/store/apps/details?id=com.alphapulse.omegavitality&pcampaignid=web_share",
    appStore: null,
  },
  {
    id: 4,
    title: "WingsBlast",
    description: "WingsBlast is a food ordering app designed for a seamless user experience.",
    features: [
      "Email/password, Google, and Apple login.",
      "Browse menu, add to cart, carry-out and delivery.",
      "Location-based services & real-time order tracking.",
      "Complete checkout using PayPal."
    ],
    tags: ["FLUTTER", "ECOMMERCE", "MAPS"],
    image: githubdetLogo,
    playStore: "https://play.google.com/store/apps/details?id=com.update.wingsblast.app&pcampaignid=web_share",
    appStore: "https://apps.apple.com/us/app/wingsblast/id6738927180",
  },
  {
    id: 5,
    title: "All Business Solutions",
    description: "All Business Solutions is an all-in-one app for managing profits, expenses, employees, and daily business operations.",
    features: [
      "Streamline finances and operations.",
      "Manage profits, expenses, and employees.",
      "Grow your business with ease."
    ],
    tags: ["FLUTTER", "FINANCE", "MANAGEMENT"],
    image: webverLogo,
    playStore: null,
    appStore: "https://apps.apple.com/us/app/all-business-solutions/id6738424461",
  },
  
];
