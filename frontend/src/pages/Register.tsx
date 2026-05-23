

function Register() {
  return (
    <div>
       <div id="step1" className="step active space-y-3">
      <h1 className="text-3xl text-center text-cyan-400 font-bold mb-2">
        NOT NORMALS GUILD
      </h1>
      <h2 className="text-lg font-bold mb-2 text-white">
        Step 1: Guild Members Info
      </h2>
      <input id="uid" placeholder="Game UID" />
      <input id="gameName" placeholder="Game Name" />
      <input id="age" type="number" placeholder="Age" />
      <input id="studyClass" placeholder="Current Class" />
      <input id="city" placeholder="City" />
      <input id="country" placeholder="Country" />
      <button
        id="next1"
        className="mt-4 bg-cyan-400 text-black px-6 py-3 rounded-2xl w-full sm:w-auto"
      >
        Next
      </button>
    </div>
    </div>
  )
}

export default Register
