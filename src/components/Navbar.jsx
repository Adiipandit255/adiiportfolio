import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { visitorRole, setVisitorRole } = usePortfolio();
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
      <div className="max-w-[1600px] mx-auto flex flex-row items-center justify-between px-6 md:px-8 py-5 relative">
        
        {/* Logo & Visitor View Badge */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--theme-accent-2), var(--theme-accent-1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            className="text-2xl font-extrabold transition-transform duration-300 hover:scale-105"
          >
            Adii.
          </Link>
          
          {visitorRole && (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] sm:text-[10px] tracking-wider font-bold">
              <span 
                style={{ backgroundColor: 'var(--theme-accent-1)' }}
                className="w-1.5 h-1.5 rounded-full animate-pulse" 
              />
              <span className="text-gray-300 uppercase whitespace-nowrap">{visitorRole} View</span>
              <button 
                onClick={() => setVisitorRole(null)} 
                className="text-gray-500 hover:text-white transition ml-1 text-xs" 
                title="Switch View"
              >
                ✎
              </button>
            </div>
          )}
        </div>

        {/* Desktop Controls (Theme Selector + Nav Links) */}
        {/* Desktop Controls (Nav Links) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8 lg:gap-10">
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
                    style={{
                      backgroundImage: 'linear-gradient(to right, var(--theme-accent-2), var(--theme-accent-1))'
                    }}
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Toggle Button (3 lines icon) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu with Premium Glassmorphism and slide-down animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-[100%] left-0 w-full bg-[#05010d]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col px-6 py-6 gap-5 items-center">
              {navItems.map((item) => (
                <li key={item.path} className="w-full text-center">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={location.pathname === item.path ? {
                      borderColor: 'rgba(var(--theme-accent-rgb-1), 0.2)',
                      boxShadow: '0 0 15px rgba(var(--theme-accent-rgb-1), 0.1)',
                      color: 'var(--theme-accent-1)',
                      backgroundColor: 'rgba(var(--theme-accent-rgb-1), 0.1)'
                    } : {}}
                    className={`block w-full py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                      location.pathname === item.path
                        ? "border"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;