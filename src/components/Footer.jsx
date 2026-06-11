import { FaLinkedinIn, FaInstagram, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";

const Footer = () => {
  const { profileInfo } = usePortfolio();

  return (
    <footer className="bg-transparent border-t border-purple-500/10 py-6 px-4 text-white">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* LEFT */}
        <h2 className="text-sm md:text-xs font-normal text-gray-400">
          Designed and Strategically Built by{" "}
          <span className="text-white font-semibold">
            {profileInfo.name}
          </span>
        </h2>

        {/* CENTER */}
        <h2 className="text-xs md:text-xs font-normal text-gray-400">
          Copyright © 2026 {profileInfo.name}
        </h2>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-xs">
          {profileInfo.linkedin && (
            <a
              href={profileInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          )}

          {profileInfo.instagram && (
            <a
              href={profileInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;