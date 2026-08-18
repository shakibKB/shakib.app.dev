// src/components/Skills/Skills.jsx
import { useEffect } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    className="py-24 pb-24 px-[3vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
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
    <div className="flex flex-col gap-8 py-10 justify-center items-center">
      {SkillsInfo.map((category) => (
        <div
          data-aos="fade-up"
          key={category.title}
          className="bg-gray-900/40 backdrop-blur-md px-4 sm:px-8 py-8 w-full max-w-5xl rounded-3xl border border-gray-700/50 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] mx-auto"
        >
          <h3 className="hidden text-xl sm:text-2xl font-bold text-gray-300 mb-8 text-center tracking-wide">
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
                  className="w-[100px] h-[110px] sm:w-[120px] sm:h-[125px] bg-[#0a0a0a] border border-gray-800 rounded-2xl flex flex-col items-center justify-center p-3 
                  hover:border-[#8245ec] hover:shadow-[0_0_15px_1px_rgba(130,69,236,0.4)] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-gray-800 transition-colors">
                    <span className="text-cyan-400 font-bold text-base sm:text-lg">{skill.initials}</span>
                  </div>
                  <h3 className="text-gray-200 text-[11px] sm:text-xs font-semibold text-center leading-tight mb-1">{skill.name}</h3>
                  <p className="text-[8px] sm:text-[9px] text-gray-500 font-bold tracking-widest uppercase">{skill.type}</p>
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
