import { useState } from "react";
import hitesh from "./assets/hitesh.png"
import piyush from "./assets/piyush.webp"
function App() {
  const [persona, setPersona] = useState("Hitesh");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative flex items-center justify-end px-8 py-6 bg-white shadow">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold">
          Persona AI
        </h1>

        <div className="flex bg-gray-200 rounded-full p-1 gap-2">
          <button
            onClick={() => setPersona("Hitesh")}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              persona === "Hitesh"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Hitesh
          </button>

          <button
            onClick={() => setPersona("Piyush")}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              persona === "Piyush"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Piyush
          </button>
        </div>
      </header>

      <div className="p-8">
        <h2 className="text-xl">
          Selected Persona:{" "}
         <img src={persona === "Hitesh" ? hitesh : piyush} alt={persona} className="rounded-b-full rounded-t-full w-20"/> 
          <span className="font-semibold text-blue-600">{persona === "Hitesh" ?"Hitesh Choudhary" :"Piyush Garg"}</span>
        </h2>
      </div>

      <div className="fixed bottom-8 left-1/2 w-full max-w-4xl -translate-x-1/2 px-6">
        <div className="flex items-center rounded-2xl border border-gray-300 bg-white p-3 shadow-xl">
          <input
            type="text"
            placeholder={`Message ${persona}...`}
            className="flex-1 bg-transparent px-4 py-3 text-lg outline-none"
          />

          <button className="ml-3 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition">
            ➜
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
