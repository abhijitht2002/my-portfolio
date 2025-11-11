import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function ProfileCard() {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "Java",
    "Springboot",
    "MySQL",
    "MongoDB",
    "React.js",
    "Node.js",
    "Redux",
    "Bootstrap",
    "Tailwind",
    "Git",
    "GitHub",
  ];

  return (
    /* profile card */
    <div className="hidden md:flex lg:max-w-xs w-full bg-white shadow-md flex-col py-6 px-4 items-center rounded-xl">
      {/* profile pic */}
      <div className="relative inline-block">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGLcPdrWl4-dg/profile-displayphoto-crop_800_800/B56ZmFIRe8JwAI-/0/1758875163408?e=1762992000&v=beta&t=iE36CUvlaGDWGKgD9oH2nrkydrDGpqt0VHPr6290OnE"
          alt="profile"
          className="w-30 h-30 rounded-full object-cover"
          onContextMenu={(e) =>
            e.preventDefault()
          } /*  prevents right click on image */
        />
        {/* Overlay a transparent div */}
        <div className="absolute top-0 left-0 w-full h-full"></div>{" "}
      </div>

      {/* name */}
      <h3 className="mt-2 text-xl font-bold text-gray-900 tracking-wide text-center">
        Abhijith T
      </h3>

      {/* title */}
      <p className="mt-1 text-xs text-gray-500 uppercase text-center">
        Aspiring Full Stack Web Developer
      </p>

      {/* skills */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded text-center"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* social */}
      <div className="mt-6">
        <ul className="flex gap-2">
          <li>
            <a
              href="https://www.linkedin.com/in/abhijitht2002/"
              className="hover:text-blue-500 text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/abhijitht2002/"
              className="hover:text-blue-500 text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
