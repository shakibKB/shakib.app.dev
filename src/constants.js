// Skills Section Logo's
import flutter from "./assets/tech_logo/flutter.png";
import dart from "./assets/tech_logo/dart.png";
import ads from "./assets/tech_logo/ads.png";
import getx from "./assets/tech_logo/getx.png";
import restapi from "./assets/tech_logo/restappi.png";
import firebase from "./assets/tech_logo/firebase.png";
import socketio from "./assets/tech_logo/sociket.png";
import stripe from "./assets/tech_logo/stripe.png";
import uixi from "./assets/tech_logo/ux-ui-t.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";

// Experience Section Logo's
import webverseLogo from "./assets/componylogo.jpeg";
import newtonschoolLogo from "./assets/critiveit.png";
import smtLogo from "./assets/smt.jpg";

// Education Section Logo's
import glaLogo from "./assets/barguna.jpg";
import bsaLogo from "./assets/philipnagor.jpeg";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/wingsblast.jpeg";
import csprepLogo from "./assets/work_logo/fourproject.jpeg";
import npmLogo from "./assets/work_logo/thirdproject.jpeg";
import webverLogo from "./assets/work_logo/abs.jpeg";
import mentorLogo from "./assets/work_logo/mentor.png";
import omagaLogo from "./assets/work_logo/omaga.png";

export const SkillsInfo = [
  {
    title: "Flutter Developer",
    skills: [
      { name: "Dart", logo: dart },
      { name: "Flutter", logo: flutter },
      { name: "Getx", logo: getx },
      { name: "Rest API", logo: restapi },
      { name: "Firebase", logo: firebase },
      { name: "Socket.io", logo: socketio },
      { name: "Stripe", logo: stripe },
    ],
  },
  {
    title: "Tools & Database",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Android Studio", logo: ads },
      { name: "Figma", logo: figmaLogo },
    ],
  },
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
  {
    id: 2,
    img: newtonschoolLogo,
    role: "App Develoment With Flutter",
    company: "CREATIVE IT INSTITUTE",
    date: "August 2023 - December 2023",
    desc: "Worked as a App Develoment Intern, designing and implementing scalable UI components and responsive UI using Flutter. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly App.",
    skills: [
      "Dart",
      "Flutter",
      "Firebase",
      "Restful API",
      "UI/UX Design",
      "Figma",
      "Responsive UI",
    ],
  },
];

//education

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Barguna Polytechnic Institute, Barguna",
    date: "2019 - 2020",
    grade: "3.71 CGPA Out of 4.00",
    desc: "I have completed my studies completely for Diploma Engineering in Computer Technology Barguna Politacnic Institute,Barguna.",
    degree: "Diploma in Computer Technology",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "SSC - Philipnagar Secondary School",
    date: "2018 - 2019",
    grade: "3.67 GPA",
    desc: "I completed my Secondary School Certificate (SSC) from Philipnagar Secondary School with distinction. This was the foundation of my academic journey, where I developed interest in science and technology.",
    degree: "Secondary School Certificate (SSC)",
  },
];
// projact
export const projects = [
  {
    id: 0,
    title: "MentorU University",
    description:
      "Developed a scalable mobile application using Flutter and GetX, focused on personal growth, mentorship, and community engagement. Integrated Agora live streaming, along with an interactive social feed featuring posts, likes, and comments. Implemented role-based access to deliver a personalized and dynamic user experience.",
    image: mentorLogo,
    link: "https://play.google.com/store/apps/details?id=com.mentoru.university&pcampaignid=web_share",
  },
  {
    id: 1,
    title: "AlphaPulse Fitness",
    description:
      "Developed AlphaPulse Fitness using Flutter and GetX, enabling users to track meals and exercises. Integrated role-based access and WebSocket chat for real-time messaging with mentors. Users can also watch exercise videos and manage their fitness progress efficiently.",
    image: omagaLogo,
    link: "https://play.google.com/store/apps/details?id=com.alphapulse.omegavitality&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "WingsBlast",
    description:
      "WingsBlast is a food ordering app designed for a seamless user experience with features like email/password, Google, and Apple login. It allows users to browse the food menu, view item details, add to cart,carry-out and delivery, with location-based services,real-time order tracking and complete checkout using PayPal paymentgetway.",
    image: githubdetLogo,
    link: "https://apps.apple.com/us/app/wingsblast/id6738927180",
  },
  {
    id: 3,
    title: "All Business Solutions",
    description:
      "All Business Solutions is an all-in-one app for managing profits, expenses, employees, and daily business operations—helping you streamline finances and grow your business with ease.",
    image: webverLogo,
    link: "https://apps.apple.com/us/app/all-business-solutions/id6738424461",
  },

];
