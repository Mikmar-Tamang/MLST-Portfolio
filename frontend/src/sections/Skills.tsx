
function Skills() {

  const design = () => {
    return `transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer`;
    }
  return (
    <section id="skills" className="text-black px-4 py-16 min-h-screen max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-white font-bold mb-2">My Skills</h2>
        <p className="text-blue-400">Technologies I work with</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Frontend Skills */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>React</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>TypeScript</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>Tailwind CSS</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>HTML5</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>CSS3</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>JavaScript</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>Redux Toolkit</span>
            <span className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${design()}`}>Vite</span>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>Node.js</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>Express.js</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>REST APIs</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>JWT</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>OAuth 2.0</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>Bcrypt</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>Cookie Parser</span>
            <span className={`px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm ${design()}`}>CORS</span>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">Database & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>MongoDB</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>Mongoose</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>PostgreSQL</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>Git</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>GitHub</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>Postman</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>Vercel</span>
            <span className={`px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm ${design()}`}>Render</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills