import PropTypes from "prop-types";

const TimelineCard = ({
  title,
  subtitle,
  date,
  description,
  image,
  imageAlt,
  badge,
  tags = [],
  isEven = false,
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 sm:mb-16 w-full ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Timeline Node (Desktop: Center, Mobile: Left aligned with track at 20px) */}
      <div
        aria-hidden="true"
        className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-canvas border-2 border-brand-500/80 shadow-lg shadow-brand-500/20 p-1 flex items-center justify-center z-10 overflow-hidden"
      >
        <img
          src={image}
          alt={imageAlt}
          width="48"
          height="48"
          className="w-full h-full object-cover rounded-full"
          loading="lazy"
        />
      </div>

      {/* Content Card (Mobile: offset by left margin so it never overlaps track/node) */}
      <div
        className={`w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 rounded-2xl p-5 sm:p-7 bg-surface-card border border-surface-border hover:border-brand-500/40 transition-all duration-300 shadow-md hover:shadow-lg ${
          isEven ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        {/* Top Header Row with Logo, Title, Subtitle, and Date */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white p-1 shrink-0 overflow-hidden shadow-sm flex items-center justify-center">
            <img
              src={image}
              alt={imageAlt}
              width="48"
              height="48"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight leading-snug">
                {title}
              </h3>
              <span className="self-start sm:self-auto text-xs font-mono font-medium text-brand-300 px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20">
                {date}
              </span>
            </div>
            <p className="text-sm font-medium text-text-secondary mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Optional Badge (e.g. Grade/GPA) */}
        {badge && (
          <div className="mt-3">
            <span className="inline-flex items-center text-xs font-mono font-semibold text-emerald-400 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              {badge}
            </span>
          </div>
        )}

        {/* Description Body */}
        {description && (
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mt-4">
            {description}
          </p>
        )}

        {/* Skills or Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-surface-border/60">
            <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              Key Technologies & Methodologies
            </p>
            <div className="flex flex-wrap gap-1.5" aria-label="Skills applied">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-surface-elevated text-brand-300 border border-surface-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  badge: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  isEven: PropTypes.bool,
};

export default TimelineCard;
