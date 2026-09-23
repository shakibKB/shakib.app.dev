import { education } from "../../constants";
import SectionHeader from "../common/SectionHeader";
import TimelineCard from "../common/TimelineCard";

const Education = () => {
  return (
    <section
      id="education"
      aria-label="Education and academic background"
      className="section-container py-16 sm:py-24 relative"
    >
      <SectionHeader
        eyebrow="Academic"
        title="Education"
        subtitle="Formal degree and diploma qualifications in Computer Science and Engineering."
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
          {education.map((edu, index) => (
            <TimelineCard
              key={edu.id}
              title={edu.degree}
              subtitle={edu.school}
              date={edu.date}
              badge={`Grade: ${edu.grade}`}
              description={edu.desc}
              image={edu.img}
              imageAlt={`${edu.school} logo`}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

