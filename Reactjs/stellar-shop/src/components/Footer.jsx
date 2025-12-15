import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-20 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Hemand PP</h2>
          <p className="text-gray-400 mt-1">Full Stack Java Developer</p>
        </div>

        {/* Middle */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Right */}
        <p className="text-gray-400">© 2025 Hemand PP. All rights reserved.</p>
      </div>
    </footer>
  );
}
