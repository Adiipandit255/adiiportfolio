import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/resume", label: "Resume" },
    { path: "/certifications", label: "Certifications" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#05010d]/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
        >
          Adii.
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative text-[16px] lg:text-[17px] font-semibold transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-[73px] left-0 w-full bg-[#05010d]/98 border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {navItems.map((item) => (
            <li key={item.path} className="w-full">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full py-2 text-lg font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-cyan-400 border-l-2 border-cyan-400 pl-3"
                    : "text-gray-400 hover:text-white hover:pl-3"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;