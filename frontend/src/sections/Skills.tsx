function Skills() {
  return (
    <section id="skills" className="text-black px-4 py-16 max-w-6xl mx-auto">
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
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CSS3</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Redux Toolkit</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vite</span>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Express.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">REST APIs</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">JWT</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">OAuth 2.0</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Bcrypt</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Cookie Parser</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CORS</span>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">Database & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Mongoose</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">PostgreSQL</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Git</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">GitHub</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Postman</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Vercel</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Render</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills