import { useState } from 'react'
import menu from '../assets/images/menus.png'
import cross from '../assets/images/close.png'
import {motion, AnimatePresence} from 'framer-motion'

function Header() {
 const [isOpen, setIsOpen] = useState(false)

 const handleOpen = () => {
    setIsOpen(!isOpen);
 }

  return (
    <div className=" sticky top-0 z-50 h-16 bg-slate-800 px-10 flex justify-between items-center py-5">
      <h1 className="font-bold">MLST.</h1>

      <button onClick={handleOpen}>
        <img className='h-5' src={isOpen ? cross : menu} alt={isOpen ? "Cross" : "Menu"} />
      </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
         className="absolute top-16 right-0 w-[25%] rounded-md flex font-bold flex-col items-end px-2 py-5">
          <motion.div
          initial={{x:100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 100, opacity: 0}}
          onClick={handleOpen}
           className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2">
            <a href="#hero">Home</a>
          </motion.div>
        <motion.div
          initial={{x:100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 100, opacity: 0}}
          onClick={handleOpen}
           className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2">
          <a href="#skills">Skill</a>
         </motion.div>
         <motion.div
          initial={{x:100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 100, opacity: 0}}
          onClick={handleOpen}
           className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2">
           <a href="#projects">Project</a>
         </motion.div>
         <motion.div
          initial={{x:100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 100, opacity: 0}}
          onClick={handleOpen}
           className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2">
          <a href="#about">About</a>
         </motion.div>
         <motion.div
          initial={{x:100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 100, opacity: 0}}
          onClick={handleOpen}
           className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2">
          <a href="#reviews">Review</a>
         </motion.div>
         <motion.div
          initial={{x:100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 100, opacity: 0}}
          onClick={handleOpen}
           className=" bg-orange-600 flex items-center justify-center hover:bg-orange-700 h-10 w-full rounded-2xl  mb-2">
          <a href="#footer" >Contact</a>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  )
}

export default Header