import foodWagon from '../assets/images/foodWagon.png'

function Projects() {
  return (
    <section id="projects" className="px-5 py-16 min-h-screen">
      <h1 className="text-2xl lg:text-[38px] font-bold mb-4 text-center">Projects</h1>
      <p className="text-blue-500 text-center text-lg font-semibold mb-6">Here are some of the projects I've worked on:</p>
      <div className="grid md:px-98 mt-10 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-black mb-2">Food wagon</h2>
          <a href="https://food-delivery-sand-one.vercel.app/">
            <img src={foodWagon} alt="Food wagon project screenshot" className="w-full  object-cover mb-4 rounded" />
          </a>
          <p className="text-gray-500">A brief description of the Food wagon project.It is a simple web application for people to order food online.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects