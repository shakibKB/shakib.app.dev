import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-surface-canvas text-text-primary min-h-screen relative selection:bg-brand-500 selection:text-white overflow-hidden">
      {/* Subtle ambient gradient backdrops */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-brand-500/10 via-brand-600/5 to-transparent blur-3xl -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-brand-500/5 blur-[120px] rounded-full -z-10"
      />

      <Navbar />

      <main id="main-content" className="relative pt-16 sm:pt-20">
        <About />
        <Work />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

