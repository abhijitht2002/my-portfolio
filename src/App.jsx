import React from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-amber-950 max-w-6xl mx-auto flex gap-4 px-6">
        <ProfileCard />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
