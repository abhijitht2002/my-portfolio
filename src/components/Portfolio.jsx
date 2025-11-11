import React from "react";

function Portfolio() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="w-full lg:max-w-2xl mx-auto bg-white p-6 shadow-sm rounded-xl">
          <h1>Hey everyone 👋</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eum
            architecto repellat voluptatibus itaque nobis dolorum consequuntur
            dolore a iusto! Iure natus tempora eius minima aliquam culpa eaque
            aperiam nemo!
          </p>
          <p className="tags mt-2 text-blue-800">
            #Java #WebDevelopment #SpringBoot #LearningJourney #DeveloperLife
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full lg:max-w-2xl mx-auto bg-white p-6 shadow-sm rounded-xl">
          <h1>Bachelor of Computer Application</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eum
            architecto repellat voluptatibus itaque nobis dolorum consequuntur
            dolore a iusto! Iure natus tempora eius minima aliquam culpa eaque
            aperiam nemo!
          </p>
          <p className="tags mt-2 text-blue-800">
            #Java #WebDevelopment #SpringBoot #LearningJourney #DeveloperLife
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full lg:max-w-2xl mx-auto bg-[#f7ede2] p-6 rounded-xl shadow-md border border-[#e6d2b5]">
          <h1 className="text-2xl font-semibold mb-3 text-[#3d2b1f]">
            ♟️ Java Chess Game
          </h1>

          <p className="text-[#4a3b2a] leading-relaxed">
            A little throwback to the classics — I built my own
            <strong> two-player Chess game</strong> using
            <strong> Java Swing</strong> and <strong>Socket programming</strong>{" "}
            🖥️
            <br />
            <br />
            Play it <strong>locally</strong> on one PC or
            <strong> battle a friend over LAN</strong> — just like those
            old-school desktop days 🎮
            <br />
            <br />
            This project taught me how fun (and tricky) it is to handle
            <strong> real-time multiplayer logic</strong> and
            <strong> clean UI design</strong> at the same time.
          </p>

          <ul className="list-disc list-inside mt-4 text-[#4a3b2a]">
            <li>Complete chess rules (check, checkmate, castling, etc.)</li>
            <li>LAN mode — host & join seamlessly 🌐</li>
            <li>Local two-player mode 🧍‍♂️🧍‍♀️</li>
            <li>Clean Swing-based interface 🎨</li>
            <li>
              Lightweight <code>.exe</code> — just click & play ⚡
            </li>
          </ul>

          <p className="mt-4 text-[#4a3b2a] leading-relaxed">
            <strong>Try it out:</strong>
            Go to the <em>Releases</em> page → download
            <code>ChessGame-v1.0.zip</code> → extract → double-click{" "}
            <code>chess54.exe</code> to start your match ♟️
            <br />
            <br />
            💡 Every move I coded reminded me how much I love bringing ideas to
            life — one project at a time.
          </p>

          <p className="tags mt-4 text-[#7a5b36] font-medium">
            #Java #SocketProgramming #GameDev #PersonalProject #LearningJourney
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full lg:max-w-2xl mx-auto bg-white p-6 shadow-sm rounded-xl ">
          <h1>♟️ Java Chess Game</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eum
            architecto repellat voluptatibus itaque nobis dolorum consequuntur
            dolore a iusto! Iure natus tempora eius minima aliquam culpa eaque
            aperiam nemo!
          </p>
          <p className="tags mt-2 text-blue-800">
            #Java #WebDevelopment #SpringBoot #LearningJourney #DeveloperLife
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
