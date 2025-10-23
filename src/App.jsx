import React from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#f8faf9] min-h-screen">
      <Navbar />
      <div className="flex gap-4 px-12 py-6">
        <ProfileCard />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
