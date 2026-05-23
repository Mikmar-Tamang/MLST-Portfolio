import Header from "../sections/Header"
import Hero from "../sections/Hero"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import About from "../sections/About"
import Reviews from "../sections/Reviews"
import Footer from "../sections/Footer"

function HomePage() {
  return (
    <div className="bg-[#151825] min-h-screen text-white">
      <Header />
      <Hero/>
      <Skills />
      <Projects />
      <About />
      <Reviews />
      <Footer/>
    </div>
  )
}

export default HomePage
