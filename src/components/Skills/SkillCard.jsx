import PropTypes from "prop-types";

const SkillCard = ({ name, type, icon, isFeatured = false }) => {
  return (
    <div
      role="listitem"
      className={`group relative flex items-center gap-3 rounded-xl border transition-all duration-200 ${
        isFeatured
          ? "p-3 sm:p-3.5 bg-surface-card hover:bg-surface-elevated border-brand-500/30 hover:border-brand-400/60 shadow-sm hover:shadow-md hover:shadow-brand-500/10"
          : "p-2.5 sm:p-3 bg-surface-card/70 hover:bg-surface-elevated border-surface-border hover:border-surface-borderHover"
      }`}
    >
      {/* Icon Container */}
      <div
        className={`shrink-0 flex items-center justify-center rounded-lg transition-colors ${
          isFeatured
            ? "w-9 h-9 sm:w-10 sm:h-10 bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:bg-brand-500/20 group-hover:text-brand-300 text-lg sm:text-xl"
            : "w-8 h-8 rounded-md bg-surface-elevated border border-surface-border text-brand-400 group-hover:text-brand-300 text-base"
        }`}
      >
        {icon}
      </div>

      {/* Label & Category */}
      <div className="flex flex-col min-w-0">
        <span className="text-text-primary text-xs sm:text-sm font-semibold truncate leading-tight group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-[10px] sm:text-[11px] text-text-muted group-hover:text-text-secondary font-mono tracking-wider uppercase mt-0.5">
          {type}
        </span>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isFeatured: PropTypes.bool,
};

export default SkillCard;
