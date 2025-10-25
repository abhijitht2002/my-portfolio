import React from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#f8faf9] min-h-screen">
      <Navbar />

      <div className="flex flex-col lg:flex-row max-w-7xl w-full mx-auto gap-4 px-4 md:px-12 py-6 items-start justify-center">
        <ProfileCard />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
