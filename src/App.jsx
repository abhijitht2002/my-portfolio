import React from "react";
import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#f8faf9] min-h-screen lg:h-screen flex flex-col">
      {/* Navbar stays on top */}
      <div className="sticky top-0 z-10 flex-shrink-0 bg-[#f8faf9]">
        <Navbar />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 max-w-7xl w-full mx-auto gap-4 px-4 md:px-12 items-start justify-center lg:overflow-hidden">
        
        {/* Left - Profile (fixed) */}
        <div className=" lg:sticky lg:top-0 self-start pt-6">
          <ProfileCard />
        </div>

        {/* Center - Scrollable Portfolio */}
        <div className="h-full lg:overflow-y-auto no-scrollbar pt-6">
          <Portfolio />
        </div>

        {/* Right - Contact (fixed) */}
        <div className="sticky top-0 self-start pt-6">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
