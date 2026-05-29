import { FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Footer = () => {

  return (

    <footer className="bg-[#05010d] border-t border-purple-500/10 py-6 px-4 text-white">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <h2 className="text-sm md:text-xs font-normal text-gray-250">

          Designed and Strategically Built by{" "}

          <span className="text-gray">
            Adii
          </span>

        </h2>

        {/* CENTER */}
        <h2 className="text-xs md:text-xs font-normal text-gray-300">

          Copyright © 2026{" "}

          <span className="text-gray">
            Aditya Sharma
          </span>

        </h2>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-xs">

          <a

            href="https://www.linkedin.com/in/aditya-sharma-b133622bb/"
            target="_blank"
            rel="noreferrer"

            className="hover:text-cyan-400 transition duration-300"

          >

            <FaLinkedinIn />

          </a>

          <a

            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"

            className="hover:text-pink-400 transition duration-300"

          >

            <FaInstagram />

          </a>

        </div>

      </div>

    </footer>

  )
}

export default Footer