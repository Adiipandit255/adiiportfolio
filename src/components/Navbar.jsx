import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/resume", label: "Resume" },
    { path: "/certifications", label: "Certifications" },
  ];  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#05010d]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Adii.
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-12">

          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative text-[17px] font-semibold transition-all duration-300 group ${
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

      </div>

    </nav>
  );
};

export default Navbar;