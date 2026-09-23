import { useEffect } from "react";
import { projects } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SectionHeader from "../common/SectionHeader";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 60,
      once: true,
    });
  }, []);

  return (
    <section
      id="work"
      aria-label="Featured mobile applications and projects"
      className="section-container py-16 sm:py-24 relative"
    >
      {/* Anchor target alias for any #projects navigation */}
      <span id="projects" className="absolute -top-24" aria-hidden="true" />

      <SectionHeader
        eyebrow="Proof of Work"
        title="Featured Mobile Applications"
        subtitle="Production-ready cross-platform mobile apps deployed on the App Store and Google Play, featuring real-time WebSockets, custom UI widgets, and store monetization."
      />

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 100}
            className="group relative flex flex-col justify-between rounded-2xl bg-surface-card border border-surface-border hover:border-brand-500/40 p-6 sm:p-7 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand-500/5"
          >
            <div>
              {/* Header: App Logo + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1 shrink-0 shadow-md overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    width="64"
                    height="64"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight truncate group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    {project.appStore && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-text-muted">
                        <FaApple className="text-xs text-text-secondary" /> iOS
                      </span>
                    )}
                    {project.appStore && project.playStore && (
                      <span className="text-surface-border text-xs">•</span>
                    )}
                    {project.playStore && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-text-muted">
                        <FaGooglePlay className="text-[10px] text-emerald-400" /> Android
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6" aria-label="Key features">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0"
                    />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Technology Tags */}
              <div
                className="flex flex-wrap gap-2 pt-4 border-t border-surface-border/60 mb-5"
                aria-label="Technologies used"
              >
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase bg-surface-elevated text-brand-300 border border-surface-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Store Action Links */}
              <div className="flex items-center gap-3 pt-1">
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${project.title} on Google Play`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-elevated hover:bg-surface-elevated/80 border border-surface-border hover:border-emerald-500/40 text-xs font-semibold text-text-primary transition-all active:scale-95 group/btn"
                  >
                    <FaGooglePlay className="text-emerald-400 text-sm" />
                    <span>Google Play</span>
                    <FiExternalLink className="text-[10px] text-text-muted group-hover/btn:text-text-primary transition-colors" />
                  </a>
                )}

                {project.appStore && (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${project.title} on Apple App Store`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-elevated hover:bg-surface-elevated/80 border border-surface-border hover:border-brand-400/40 text-xs font-semibold text-text-primary transition-all active:scale-95 group/btn"
                  >
                    <FaApple className="text-text-primary text-base" />
                    <span>App Store</span>
                    <FiExternalLink className="text-[10px] text-text-muted group-hover/btn:text-text-primary transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;

