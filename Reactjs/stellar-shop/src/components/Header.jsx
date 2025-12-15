import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-lg shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Hemand PP</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-800 hover:text-blue-600 transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block py-2 text-gray-700 text-lg hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
