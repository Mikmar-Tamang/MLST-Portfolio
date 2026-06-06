
function Skills() {
  const design = () => {
    return `transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer`;
  }
  
  return (
    <section id="skills" className="text-black px-4 py-16 min-h-screen max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[38px] text-white font-bold mb-2">My Skills</h2>
        <p className="text-blue-400 lg:text-lg font-semibold">Technologies I work with</p>
      </div>
      
      {/* Zigzag Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Row 1: Frontend - RIGHT side */}
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition max-w-lg ml-auto">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>React</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>TypeScript</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>Tailwind CSS</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>HTML5</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>CSS3</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>JavaScript</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ${design()}`}>Vite</span>
            </div>
          </div>
        </div>

        {/* Row 1 spacer - LEFT side empty */}
        <div className="hidden lg:block lg:row-start-1"></div>

        {/* Row 2: Backend - LEFT side */}
        <div className="lg:col-start-2 lg:row-start-2">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition max-w-lg mr-auto">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>Node.js</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>Express.js</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>REST APIs</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>JWT</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>OAuth 2.0</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>Bcrypt</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>Cookie Parser</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium ${design()}`}>CORS</span>
            </div>
          </div>
        </div>

        {/* Row 2 spacer - RIGHT side empty */}
        <div className="hidden lg:block lg:row-start-2"></div>

        {/* Row 3: Database - RIGHT side */}
        <div className="lg:col-start-1 lg:row-start-3">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition max-w-lg ml-auto">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Database & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>MongoDB</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>Mongoose</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>PostgreSQL</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>Git</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>GitHub</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>Postman</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>Vercel</span>
              <span className={`px-4 py-1 lg:px-5 lg:py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium ${design()}`}>Render</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills