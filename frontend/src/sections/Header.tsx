import { useState } from 'react'
import menu from '../assets/images/menus.png'
import cross from '../assets/images/close.png'

function Header() {
 const [isOpen, setIsOpen] = useState(false)

 const handleOpen = () => {
    setIsOpen(!isOpen);
 }

  return (
    <div className="h-16 bg-slate-800 px-10 flex justify-between items-center py-5">
      <h1 className="font-bold">MLST.</h1>

      <button onClick={handleOpen}>
        <img className='h-5' src={isOpen ? cross : menu} alt={isOpen ? "Cross" : "Menu"} />
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-40 bg-blue-400 rounded-md flex font-bold flex-col px-5 py-5">
          <a href="#" className="text-gray-800 mb-2 border-b border-gray-900">Home</a>
          <a href="#" className="text-gray-800 mb-2 border-b border-gray-900">Skill</a>
          <a href="#" className="text-gray-800 mb-2 border-b border-gray-900">Project</a>
          <a href="#" className="text-gray-800 mb-2 border-b border-gray-900">About</a>
          <a href="#" className="text-gray-800 mb-2 border-b border-gray-900">Review</a>
          <a href="#" className="text-gray-800 mb-2 border-b border-gray-900">Contact</a>
        </div>
      )}

    </div>
  )
}

export default Header