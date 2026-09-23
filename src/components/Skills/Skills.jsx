import { useEffect } from "react";
import { SkillsInfo } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../common/SectionHeader";
import SkillCard from "./SkillCard";

import {
  SiDart,
  SiC,
  SiFlutter,
  SiFirebase,
  SiGoogleplay,
  SiFigma,
  SiPostman,
  SiAndroidstudio,
  SiGit,
  SiGithub,
  SiXcode,
  SiStripe,
  SiOpenai,
} from "react-icons/si";
import {
  FaNetworkWired,
  FaPlug,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaBell,
  FaDatabase,
  FaApple,
  FaCode,
} from "react-icons/fa";
import { MdDataObject } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const getSkillIcon = (name) => {
  switch (name) {
    case "Dart":
      return <SiDart />;
    case "C":
      return <SiC />;
    case "Flutter":
      return <SiFlutter />;
    case "GetX":
      return <MdDataObject />;
    case "Restful API":
      return <FaNetworkWired />;
    case "Firebase":
      return <SiFirebase />;
    case "Firestore":
      return <SiFirebase />;
    case "WebSocket":
      return <FaPlug />;
    case "Google Maps":
      return <FaMapMarkerAlt />;
    case "Responsive UI":
      return <FaCode />;
    case "Custom Widgets":
      return <FaCode />;
    case "Payment Gateway":
      return <SiStripe />;
    case "In-App Purchases":
      return <FaShoppingBag />;
    case "Push Notification":
      return <FaBell />;
    case "AI APIs":
      return <SiOpenai />;
    case "Hive":
    case "SharedPrefs":
      return <FaDatabase />;
    case "Google Play Console":
    case "Play Console":
      return <SiGoogleplay />;
    case "App Store Connect":
    case "App Store":
    case "TestFlight":
      return <FaApple />;
    case "Xcode":
      return <SiXcode />;
    case "Git":
      return <SiGit />;
    case "GitHub":
      return <SiGithub />;
    case "Android Studio":
      return <SiAndroidstudio />;
    case "VS Code":
      return <VscVscode />;
    case "Postman":
      return <SiPostman />;
    case "Figma":
      return <SiFigma />;
    default:
      return <FaCode />;
  }
};

const CORE_NAMES = new Set([
  "Flutter",
  "Dart",
  "GetX",
  "Restful API",
  "Responsive UI",
  "Custom Widgets",
]);

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 60,
      once: true,
    });
  }, []);

  // Combine and deduplicate / categorize skills cleanly from constants.js
  const allSkills = SkillsInfo.flatMap((c) => c.skills);

  const coreSkills = allSkills.filter((s) => CORE_NAMES.has(s.name));
  const integrationSkills = allSkills.filter(
    (s) =>
      !CORE_NAMES.has(s.name) &&
      !["TOOLS", "IDE", "DESIGN", "DEPLOYMENT"].includes(s.type)
  );
  const toolsAndDeployment = allSkills.filter((s) =>
    ["TOOLS", "IDE", "DESIGN", "DEPLOYMENT"].includes(s.type)
  );

  return (
    <section
      id="skills"
      aria-label="Technical skills and expertise"
      className="section-container py-16 sm:py-24 relative"
    >
      <SectionHeader
        eyebrow="Capabilities"
        title="Skills & Technical Expertise"
        subtitle="A structured overview of my core mobile architecture stack, cloud & real-time integrations, and platform deployment tools."
      />

      <div className="space-y-12">
        {/* Tier 1: Core Mobile Architecture (Featured Prominence) */}
        <div
          data-aos="fade-up"
          className="rounded-2xl p-6 sm:p-8 bg-surface-card/80 border border-surface-border backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-surface-border gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Core Mobile Architecture
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mt-1">
                Primary daily framework, language proficiency, and architectural foundations.
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 text-xs font-mono font-medium border border-brand-500/20">
              Primary Stack
            </span>
          </div>

          <div
            role="list"
            aria-label="Core mobile architecture skills"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {coreSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                type={skill.type}
                icon={getSkillIcon(skill.name)}
                isFeatured={true}
              />
            ))}
          </div>
        </div>

        {/* 2-Column Split: Integrations & Tooling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Tier 2: Real-Time, Cloud & Integrations */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="rounded-2xl p-6 sm:p-8 bg-surface-card/60 border border-surface-border backdrop-blur-sm flex flex-col"
          >
            <div className="pb-5 mb-5 border-b border-surface-border">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">
                Backend, Cloud & Integrations
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mt-1">
                Real-time communications, persistence, push notifications, and monetization.
              </p>
            </div>

            <div
              role="list"
              aria-label="Backend and integration skills"
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-auto"
            >
              {integrationSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  type={skill.type}
                  icon={getSkillIcon(skill.name)}
                  isFeatured={false}
                />
              ))}
            </div>
          </div>

          {/* Tier 3: Platform Delivery & Developer Tools */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="rounded-2xl p-6 sm:p-8 bg-surface-card/60 border border-surface-border backdrop-blur-sm flex flex-col"
          >
            <div className="pb-5 mb-5 border-b border-surface-border">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">
                Platform Delivery & Tools
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mt-1">
                Store management, native build tooling, version control, and API testing.
              </p>
            </div>

            <div
              role="list"
              aria-label="Platform delivery and tools"
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-auto"
            >
              {toolsAndDeployment.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  type={skill.type}
                  icon={getSkillIcon(skill.name)}
                  isFeatured={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

