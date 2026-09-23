import { experiences } from "../../constants";
import SectionHeader from "../common/SectionHeader";
import TimelineCard from "../common/TimelineCard";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-label="Work experience and professional background"
      className="section-container py-16 sm:py-24 relative"
    >
      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        subtitle="A record of my professional roles developing cross-platform mobile applications, collaborating with teams, and delivering production features."
      />

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line (Desktop) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-4 bottom-8 w-0.5 bg-surface-border -translate-x-1/2"
        />

        {/* Left Vertical Line (Mobile) */}
        <div
          aria-hidden="true"
          className="md:hidden absolute left-5 top-4 bottom-8 w-0.5 bg-surface-border -translate-x-1/2"
        />

        {/* Entries */}
        <div>
          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              title={experience.role}
              subtitle={experience.company}
              date={experience.date}
              description={experience.desc}
              image={experience.img}
              imageAlt={`${experience.company} logo`}
              tags={experience.skills}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

