import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MENU_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/shakibKB",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shakib-kb",
    icon: FaLinkedin,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to sync active section indicator on scroll
  useEffect(() => {
    const sectionIds = MENU_ITEMS.map((item) => item.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-canvas/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex justify-between items-center">
        {/* Brand / Logo */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleMenuItemClick("about");
          }}
          className="group flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-brand-400 group-hover:scale-125 transition-transform" />
          <span className="text-base sm:text-lg font-bold tracking-tight text-text-primary">
            SHAKIB <span className="text-brand-400 font-normal">KABIRAZ</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Desktop primary navigation" className="hidden md:block">
          <ul className="flex items-center space-x-1 lg:space-x-2">
            {MENU_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-brand-300 bg-brand-500/10 font-semibold"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Icons & Action */}
        <div className="hidden md:flex items-center space-x-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} Profile`}
                className="p-2 rounded-lg text-text-secondary hover:text-brand-300 hover:bg-surface-elevated transition-all"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="p-2 rounded-lg bg-surface-card border border-surface-border text-brand-300 hover:text-white transition-colors"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 border-b border-surface-border bg-surface-canvas/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav aria-label="Mobile primary navigation">
            <ul className="flex flex-col space-y-1">
              {MENU_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-brand-500/15 text-brand-300 font-semibold"
                          : "text-text-secondary hover:text-white hover:bg-surface-elevated"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center space-x-4 px-4 pt-4 mt-3 border-t border-surface-border">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} Profile`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-brand-300 transition-colors"
                >
                  <Icon size={18} />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

