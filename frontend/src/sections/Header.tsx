import { useState } from "react";
import menu from "../assets/images/menus.png";
import cross from "../assets/images/close.png";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" sticky top-0 z-50 h-16 bg-slate-800 px-10 flex justify-between items-center py-5">
      <h1 className="font-bold">MLST.</h1>

      <button className="md:hidden lg:hidden" onClick={handleOpen}>
        <img
          className="h-5"
          src={isOpen ? cross : menu}
          alt={isOpen ? "Cross" : "Menu"}
        />
      </button>

      <div className="hidden md:flex lg:flex gap-10 font-bold">
        <a
          className={`relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2
          hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10
          hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 ${active === "home" ? "text-orange-600" : "text-white"}`}
          href="#hero"
          onClick={() => setActive("home")}
        >
          Home
        </a>
        <a
          className={`relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2 
          hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10 
          hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 ${active === "skills" ? "text-orange-600" : "text-white"}`}
          href="#skills"
          onClick={() => setActive("skills")}
          >
          Skill
        </a>
        <a
          className={`relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2 
          hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10 
          hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 ${active === "projects" ? "text-orange-600" : "text-white"}`}
          href="#projects"
          onClick={() => setActive("projects")}
        >
          Project
        </a>
        <a
          className={`relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2 
          hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10 
          hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 ${active === "about" ? "text-orange-600" : "text-white"}`}
          href="#about"
          onClick={() => setActive("about")}
        >
          About
        </a>
        <a
          className={`relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2 
          hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10 
          hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 ${active === "reviews" ? "text-orange-600" : "text-white"}`}
          href="#reviews"
          onClick={() => setActive("reviews")}
        >
          Review
        </a>
        <a
          className={`relative inline-block hover:before:content-[''] hover:before:absolute hover:before:-inset-2 
          hover:before:bg-orange-500 hover:before:filter hover:before:blur-xl hover:text-orange-600 hover:before:-z-10 
          hover:before:rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 ${active === "footer" ? "text-orange-600" : "text-white"}`}
          href="#footer"
          onClick={() => setActive("footer")}
        >
          Contact
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="absolute top-16 right-0 w-48 rounded-md flex font-bold flex-col items-end px-2 py-5"
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              onClick={handleOpen}
              className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2"
            >
              <a className="w-full text-center" href="#hero">
                Home
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              onClick={handleOpen}
              className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2"
            >
              <a className="w-full text-center" href="#skills">
                Skill
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onClick={handleOpen}
              className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2"
            >
              <a className="w-full text-center" href="#projects">
                Project
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onClick={handleOpen}
              className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2"
            >
              <a className="w-full text-center" href="#about">
                About
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              onClick={handleOpen}
              className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2"
            >
              <a className="w-full text-center" href="#reviews">
                Review
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              onClick={handleOpen}
              className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2"
            >
              <a className="w-full text-center" href="#footer">
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
