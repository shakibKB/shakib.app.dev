import { useEffect } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  SiDart, SiC, SiFlutter, SiFirebase, SiGoogleplay 
} from "react-icons/si";
import { 
  FaNetworkWired, FaPlug, FaMapMarkerAlt, FaCreditCard, 
  FaShoppingBag, FaBell, FaRobot, FaDatabase, FaApple, FaCode, FaGithub 
} from "react-icons/fa";
import { MdDataObject } from "react-icons/md";

const getSkillIcon = (name) => {
  switch(name) {
    case "Dart": return <SiDart />;
    case "C": return <SiC />;
    case "Flutter": return <SiFlutter />;
    case "GetX": return <MdDataObject />;
    case "Restful API": return <FaNetworkWired />;
    case "Firebase": return <SiFirebase />;
    case "WebSocket": return <FaPlug />;
    case "Google Maps": return <FaMapMarkerAlt />;
    case "Responsive UI": return <FaCode />;
    case "Custom Widgets": return <FaCode />;
    case "Payment Gateway": return <FaCreditCard />;
    case "In-App Purchases": return <FaShoppingBag />;
    case "Push Notification": return <FaBell />;
    case "AI APIs": return <FaRobot />;
    case "Hive": return <FaDatabase />;
    case "SharedPrefs": return <FaDatabase />;
    case "Firestore": return <SiFirebase />;
    case "Google Play Console": return <SiGoogleplay />;
    case "App Store Connect": return <FaApple />;
    case "Git": return <FaGithub />;
    case "GitHub": return <FaGithub />;
    case "Android Studio": return <FaCode />;
    case "VS Code": return <FaCode />;
    case "Xcode": return <FaApple />;
    case "Postman": return <FaNetworkWired />;
    case "Figma": return <FaCode />;
    case "Play Console": return <SiGoogleplay />;
    case "App Store": return <FaApple />;
    case "TestFlight": return <FaApple />;
    default: return <FaCode />;
  }
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
      once: false, 
    });
  }, []);
  return (
    <section
    id="skills"
    className="py-24 pb-24 px-[3vw] md:px-[7vw] lg:px-[10vw] xl:px-[5vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col lg:flex-row gap-8 py-10 justify-center items-stretch max-w-7xl mx-auto">
      {SkillsInfo.map((category) => (
        <div
          data-aos="fade-up"
          key={category.title}
          className="bg-gray-900/40 backdrop-blur-md px-4 sm:px-8 py-8 w-full flex-1 rounded-3xl border border-gray-700/50 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] flex flex-col"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-8 text-center tracking-wide">
            {category.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill, index) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
                className="w-fit"
              >
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay={(index % 10) * 50}
                  className="w-auto px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0a0a0a] border border-gray-800 rounded-xl flex flex-row items-center gap-2 
                  hover:border-[#8245ec] hover:shadow-[0_0_15px_1px_rgba(130,69,236,0.4)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center shrink-0 group-hover:bg-gray-800 transition-colors">
                    <span className="text-cyan-400 text-sm sm:text-base">{getSkillIcon(skill.name)}</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-gray-200 text-[11px] sm:text-[12px] font-semibold leading-tight">{skill.name}</h3>
                    <p className="text-[7px] sm:text-[8px] text-gray-500 font-bold tracking-widest uppercase mt-0.5">{skill.type}</p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Skills;
