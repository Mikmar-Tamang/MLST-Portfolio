import githubLogo from '../assets/images/github-logo.png';

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center mt-20 min-h-screen p-3">
      <div className="w-48 h-48 rounded-full object-cover bg-white"></div>
      <div className="flex flex-col items-center px-5">
        <h1 className="text-2xl font-bold">Mikmar Lyal Singh Tamang</h1>
        <h2 className="text-lg text-[#FF6208] font-bold mb-10">Mern Stack Developer</h2>
        <a href="https://github.com/Mikmar-Tamang" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-1">
              <img src={githubLogo} alt="GitHub Logo" className="w-12 h-12" />
            </div>
          </div>
        </a>
        <p className="text-gray-500 mt-4">Hello i'm a <span className="font-bold">full-stack developer</span> specializing in <span className="font-bold">MERN stack</span> and modern web technologies.</p>
      </div>
    </section>
  )
}

export default Hero
