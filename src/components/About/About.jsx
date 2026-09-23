import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { SiFlutter } from "react-icons/si";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import profileImage from "../../assets/pp.jpg";

const About = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      id="about"
      aria-label="Introduction and overview"
      className="section-container pt-8 pb-16 sm:pt-14 sm:pb-24"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side: Content & Actions */}
        <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Mobile App Opportunities</span>
          </div>

          {/* Main Heading Hierarchy */}
          <div className="space-y-1">
            <p className="text-text-secondary text-sm sm:text-base font-semibold tracking-wider uppercase">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
              Shakib Kabiraz
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold pt-1 bg-gradient-to-r from-brand-400 via-indigo-200 to-brand-300 bg-clip-text text-transparent">
              Flutter & Mobile Application Developer
            </p>
          </div>

          {/* Value Proposition & Bio Text (Preserved Content) */}
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mt-5">
            Flutter Developer with nearly 2 years of professional experience building cross-platform mobile applications for Android and iOS using Flutter and Dart. Experienced in developing scalable, high-performance applications with clean architecture, REST APIs, Firebase, state management (GetX), and third-party integrations. Passionate about writing maintainable code, optimizing application performance, and continuously improving software engineering and system design skills.
          </p>

          {/* Quick Metrics Proof Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 py-6 border-y border-surface-border my-6 w-full max-w-lg">
            <div className="text-center lg:text-left">
              <span className="block text-xl sm:text-2xl font-bold text-text-primary font-mono">6+</span>
              <span className="text-xs text-text-muted font-medium">Shipped Apps</span>
            </div>
            <div className="text-center lg:text-left border-x border-surface-border px-2 sm:px-4">
              <span className="block text-xl sm:text-2xl font-bold text-brand-400 font-mono">2 Yrs</span>
              <span className="text-xs text-text-muted font-medium">Commercial Exp</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block text-xl sm:text-2xl font-bold text-text-primary font-mono">2 Stores</span>
              <span className="text-xs text-text-muted font-medium">Play & App Store</span>
            </div>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-surface-canvas"
            >
              <span>Explore Projects</span>
              <FiArrowDown className="text-lg" />
            </a>

            <a
              href="https://drive.google.com/file/d/1c1r_txJa5kb_KJ3LtzQOu--lojzpqIYe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-card hover:bg-surface-elevated text-text-primary border border-surface-border hover:border-surface-borderHover font-semibold text-sm sm:text-base transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-surface-canvas"
            >
              <FiDownload className="text-lg text-brand-400" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Side: Modern Squircle Portrait Container */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <Tilt
            tiltEnable={!prefersReducedMotion}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1200}
            gyroscope={false}
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]"
          >
            <div className="relative p-2 rounded-3xl bg-gradient-to-b from-white/10 via-surface-card to-surface-card border border-surface-border shadow-2xl shadow-brand-900/20 group">
              {/* Image Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface-card">
                <img
                  src={profileImage}
                  alt="Shakib Kabiraz - Flutter Developer"
                  width="340"
                  height="453"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-surface-canvas/80 via-transparent to-transparent opacity-60"
                />
              </div>

              {/* Floating Tech Pill Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-surface-card/95 backdrop-blur-md border border-surface-border rounded-xl p-3 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                    <SiFlutter className="text-base" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">Flutter Developer</p>
                    <p className="text-[10px] text-text-muted font-mono">Cross-Platform Apps</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted text-sm">
                  <FaApple title="iOS" className="hover:text-text-primary transition-colors" />
                  <span className="text-surface-border">/</span>
                  <FaGooglePlay title="Android" className="hover:text-text-primary transition-colors" />
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

