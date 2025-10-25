import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-12 ">
        {/* Hamburger for mobile */}
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>

        {/* logo/name */}
        <h1 className="">my-portfolio</h1>

        {/* nav links */}
        <ul className="hidden md:flex gap-5">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
          <li className="">Certifications</li>
          <li className="lg:hidden">Contacts</li>
        </ul>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[100vh] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="h-px bg-gray-300 w-full"></div>
    </nav>
  );
}

export default Navbar;
