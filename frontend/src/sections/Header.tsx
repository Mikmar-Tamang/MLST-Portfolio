
import { useState, useEffect } from "react";
import menu from "../assets/images/menus.png";
import cross from "../assets/images/close.png";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(sectionId);
    }
  };

  // Scroll spy - detects which section is visible
  useEffect(() => {
    const sections = ["hero", "skills", "projects", "about", "reviews", "footer"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Common link class generator
  const getLinkClass = (section: string) => {
    return `relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2
    hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10
    hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer
    ${active === section ? "text-orange-600" : "text-white"}`;
  };

  return (
    <div className="sticky top-0 z-50 h-16 bg-slate-800 px-10 flex justify-between items-center py-5">
      <h1 className="font-bold lg:text-[24px] md:text-[20px]">MLST.</h1>

      <button className="md:hidden lg:hidden" onClick={handleOpen}>
        <img
          className="h-5"
          src={isOpen ? cross : menu}
          alt={isOpen ? "Cross" : "Menu"}
        />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex lg:flex lg:gap-20 lg:text-[20px] md:text-[16px] gap-10 font-bold">
        <span className={getLinkClass("hero")} onClick={() => scrollToSection("hero")}>
          Home
        </span>
        <span className={getLinkClass("skills")} onClick={() => scrollToSection("skills")}>
          Skill
        </span>
        <span className={getLinkClass("projects")} onClick={() => scrollToSection("projects")}>
          Project
        </span>
        <span className={getLinkClass("about")} onClick={() => scrollToSection("about")}>
          About
        </span>
        <span className={getLinkClass("reviews")} onClick={() => scrollToSection("reviews")}>
          Review
        </span>
        <span className={getLinkClass("footer")} onClick={() => scrollToSection("footer")}>
          Contact
        </span>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="absolute top-16 right-0 w-48 rounded-md flex font-bold flex-col items-end px-2 py-5"
          >
            {["hero", "skills", "projects", "about", "reviews", "footer"].map((section, idx) => (
              <motion.div
                key={section}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                onClick={() => {
                  scrollToSection(section);
                  handleOpen();
                }}
                className="bg-orange-600 md:hidden lg:hidden flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl mb-2 cursor-pointer"
              >
                <span className="w-full text-center">
                  {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;