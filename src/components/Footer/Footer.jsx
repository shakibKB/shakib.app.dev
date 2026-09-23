import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const FOOTER_NAV = [
  { name: "About", id: "about" },
  { name: "Projects", id: "work" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const FOOTER_SOCIALS = [
  {
    icon: FaGithub,
    link: "https://github.com/shakibKB",
    label: "GitHub Profile",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/shakib-kb",
    label: "LinkedIn Profile",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100017160670039",
    label: "Facebook Profile",
  },
];

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-surface-border bg-surface-canvas py-12">
      <div className="section-container flex flex-col items-center text-center">
        {/* Name / Brand */}
        <p className="text-lg font-bold text-text-primary tracking-tight">
          Shakib <span className="text-brand-400 font-normal">Kabiraz</span>
        </p>
        <p className="text-xs text-text-muted mt-1 font-mono">
          Flutter & Mobile Application Developer
        </p>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {FOOTER_NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScroll(item.id)}
              className="text-text-secondary hover:text-brand-300 text-xs sm:text-sm font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-6">
          {FOOTER_SOCIALS.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-surface-card border border-surface-border hover:border-brand-500/40 text-text-secondary hover:text-brand-300 flex items-center justify-center transition-all active:scale-95"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-muted mt-8">
          © {new Date().getFullYear()} Shakib Kabiraz. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

