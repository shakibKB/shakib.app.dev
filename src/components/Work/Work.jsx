import React, { useEffect, useState } from "react";
import { projects } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      offset: 100, // offset (in px) from the original trigger point
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[3vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="zoom-in-up"
            className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 hover:border-gray-600 transition-colors group relative overflow-hidden shadow-[0_0_20px_1px_rgba(130,69,236,0.05)]"
          >
            {/* Top row: Icon + Title */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-1 rounded-[1.25rem] shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-white leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Middle: Description */}
            <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed mt-2">
              {project.description}
            </p>

            {/* Features list */}
            <ul className="flex flex-col gap-3 mt-1">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm sm:text-[15px]">
                  <span className="mt-[7px] w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-[6px] rounded-full border border-gray-700 bg-transparent text-[9px] sm:text-[10px] font-bold text-gray-200 tracking-wider uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom: Store Links */}
            <div className="flex gap-4 mt-auto pt-5">
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900/50 hover:bg-gray-800 flex items-center justify-center transition-colors"
                >
                  <FaGooglePlay className="text-[20px] sm:text-[22px] text-green-400" />
                </a>
              )}
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900/50 hover:bg-gray-800 flex items-center justify-center transition-colors"
                >
                  <FaApple className="text-[22px] sm:text-[24px] text-blue-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
