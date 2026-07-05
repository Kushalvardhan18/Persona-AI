import { useState } from "react";
import hitesh from "./assets/hitesh.png";
import piyush from "./assets/piyush.webp";
import sun from "./assets/lightMode.svg";
import moon from "./assets/moon.png";
function App() {
  const [persona, setPersona] = useState("Hitesh");
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div
  className={`min-h-screen transition-colors duration-300 ${
    darkMode
      ? "bg-slate-900 text-white"
      : "bg-slate-100 text-slate-900"
  }`}
>
  {/* Header */}
  <header
    className={`sticky top-0 z-50 flex items-center justify-between px-8 py-5 shadow-md ${
      darkMode ? "bg-slate-800" : "bg-white"
    }`}
  >
    {/* Theme Toggle */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`rounded-full p-2 transition hover:scale-110 ${
        darkMode ? "bg-slate-700" : "bg-gray-100"
      }`}
    >
      <img
        src={darkMode ? sun : moon}
        alt="Theme Toggle"
        className="h-6 w-6"
      />
    </button>

    {/* Title */}
    <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-wide">
      Persona AI
    </h1>

    {/* Persona Switch */}
    <div
      className={`flex gap-2 rounded-full p-1 ${
        darkMode ? "bg-slate-700" : "bg-gray-200"
      }`}
    >
      <button
        onClick={() => setPersona("Hitesh")}
        className={`rounded-full px-5 py-2 transition ${
          persona === "Hitesh"
            ? "bg-blue-600 text-white"
            : darkMode
            ? "text-gray-200 hover:bg-slate-600"
            : "text-gray-700 hover:bg-gray-300"
        }`}
      >
        Hitesh
      </button>

      <button
        onClick={() => setPersona("Piyush")}
        className={`rounded-full px-5 py-2 transition ${
          persona === "Piyush"
            ? "bg-blue-600 text-white"
            : darkMode
            ? "text-gray-200 hover:bg-slate-600"
            : "text-gray-700 hover:bg-gray-300"
        }`}
      >
        Piyush
      </button>
    </div>
  </header>

  {/* Layout */}
  <div className="flex h-[calc(100vh-84px)]">
    {/* Sidebar */}
    <aside
      className={`w-80 border-r p-6 ${
        darkMode
          ? "border-slate-700 bg-slate-800"
          : "border-gray-200 bg-white"
      }`}
    >
      <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow transition hover:bg-blue-700">
        + New Chat
      </button>

      <h2
        className={`mt-8 mb-4 text-xs font-bold uppercase tracking-wider ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Recent Chats
      </h2>

      <div
        className={`cursor-pointer rounded-xl p-3 transition ${
          darkMode
            ? "hover:bg-slate-700"
            : "hover:bg-gray-100"
        }`}
      >
        Draft
      </div>
    </aside>

    {/* Chat Area */}
    <main className="relative flex-1 p-8">
      {/* Persona */}
      <div className="flex justify-end">
        <div className="flex flex-col items-center">
          <img
            src={persona === "Hitesh" ? hitesh : piyush}
            alt={persona}
            className="h-20 w-20 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />

          <span className="mt-3 font-semibold text-blue-500">
            {persona === "Hitesh"
              ? "Hitesh Choudhary"
              : "Piyush Garg"}
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="mt-10">
        {/* Messages */}
      </div>

      {/* Input */}
      <div className="absolute bottom-8 left-1/2 w-full max-w-4xl -translate-x-1/2 px-6">
        <div
          className={`flex items-center rounded-2xl border p-3 shadow-xl ${
            darkMode
              ? "border-slate-700 bg-slate-800"
              : "border-gray-300 bg-white"
          }`}
        >
          <input
            type="text"
            placeholder={`Message ${persona}...`}
            className={`flex-1 bg-transparent px-4 py-3 text-lg outline-none ${
              darkMode
                ? "placeholder:text-gray-400"
                : "placeholder:text-gray-500"
            }`}
          />

          <button className="ml-3 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700">
            ➜
          </button>
        </div>
      </div>
    </main>
  </div>
</div>
  );
}

export default App;
