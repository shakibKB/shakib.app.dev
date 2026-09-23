import PropTypes from "prop-types";

const SectionHeader = ({ eyebrow, title, subtitle, className = "" }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <p className="text-brand-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
        {title}
      </h2>
      <div 
        aria-hidden="true" 
        className="w-16 sm:w-20 h-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-full mx-auto mt-4" 
      />
      {subtitle && (
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mt-4 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default SectionHeader;
