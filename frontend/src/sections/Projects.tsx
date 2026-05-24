import foodWagon from '../assets/images/foodWagon.png'

function Projects() {
  return (
    <section className="px-5 py-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Projects</h1>
      <p className="text-blue-500 mb-6">Here are some of the projects I've worked on:</p>
      <div className="grid md:grid-cols-2 mt-10 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-black mb-2">Food wagon</h2>
          <img src={foodWagon} alt="Food wagon project screenshot" className="w-full h-48 object-cover mb-4 rounded" />
          <p className="text-gray-500">A brief description of the Food wagon project.It is a simple web application for people to order food online.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-black mb-2">Project Two</h2>
          <img src="" alt="Project Two screenshot" className="w-full h-48 object-cover mb-4 rounded" />
          <p className="text-gray-500">A brief description of Project Two.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects