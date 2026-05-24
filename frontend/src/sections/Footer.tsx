

function Footer() {
  return (
    <section className="bg-gray-800 text-white py-4">
    <p className="text-center"> Contact me: <a href="ronishtamang631@gmail.com" className="text-blue-400 hover:text-blue-300">ronishtamang631@gmail.com</a></p>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer