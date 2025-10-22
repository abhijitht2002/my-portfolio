import React from "react";

function Navbar() {
  return (
    <nav className="">
      <div className="bg-green-500 max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* logo/name */}
        <h1>Abhijith T</h1>

        {/* nav links */}
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
