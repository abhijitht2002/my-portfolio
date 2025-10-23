import React from "react";

function Navbar() {
  return (
    <nav className="">
      <div className="flex justify-between items-center py-4 px-12">
        {/* logo/name */}
        <h1>my-portfolio</h1>

        {/* nav links */}
        <ul className="flex gap-8">
          <li><a href="">Home</a></li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Certifications</li>
        </ul>
      </div>

      <div className="h-px bg-gray-300 w-full"></div>
    </nav>
  );
}

export default Navbar;
