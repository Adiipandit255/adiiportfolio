import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa"

const FindMe = () => {
  return (

    <section
      className="min-h-screen bg-[#05010d] flex items-center justify-center px-8 py-24 relative overflow-hidden"
    >

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255, 255, 255, 0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255, 255, 255, 0.26)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Small Heading */}
        <p className="uppercase tracking-[4px] text-gray-500 mb-4">
          Social Presence
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

          Find Me On.

        </h1>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">

          {/* GitHub */}
          <motion.a
          whileHover={{
             scale: 1.05,
              y: -10
            }}
            href="https://github.com/Adiipandit255"
            target="_blank"
             rel="noopener noreferrer"
              className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-pink-500/40 transition flex flex-col items-center"
              >
                <FaGithub className="text-lg sm:text-2xl text-pink-400 mb-1.5 sm:mb-3" />
                 <h2 className="text-sm sm:text-2xl font-bold mb-1.5 sm:mb-3">
                     GitHub
                      </h2>
                       <p className="text-gray-405 text-[9px] xs:text-[11px] sm:text-sm text-center">
                        Explore my projects and repositories.
                        </p>
                        </motion.a>

          {/* Linkdin */}
          <motion.a

  whileHover={{
    scale: 1.05,
    y: -10
  }}

  href="https://www.linkedin.com/in/aditya-sharma-b133622bb/"

  target="_blank"

  rel="noopener noreferrer"

  className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-cyan-500/40 transition flex flex-col items-center"

>

  <FaLinkedin className="text-lg sm:text-2xl text-cyan-400 mb-1.5 sm:mb-3" />

  <h2 className="text-sm sm:text-2xl font-bold mb-1.5 sm:mb-3">
    LinkedIn
  </h2>

  <p className="text-gray-450 text-[9px] xs:text-[11px] sm:text-sm text-center">
    Connect with me professionally.
  </p>

</motion.a>
         
          {/* Instagram */}
          <motion.a

            whileHover={{
              scale: 1.05,
              y: -10
            }}

            href="#"

            className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-pink-500/40 transition flex flex-col items-center"

          >

            <FaInstagram className="text-lg sm:text-2xl text-pink-400 mb-1.5 sm:mb-3" />

            <h2 className="text-sm sm:text-2xl font-bold mb-1.5 sm:mb-3">
              Instagram
            </h2>

            <p className="text-gray-450 text-[9px] xs:text-[11px] sm:text-sm text-center">
              Follow my creative journey.
            </p>

          </motion.a>

          {/* Email */}
          <motion.a

  whileHover={{
    scale: 1.05,
    y: -10
  }}

  href="mailto:adityasharma22093@gmail.com"

  className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-cyan-500/40 transition flex flex-col items-center"

>

  <FaEnvelope className="text-lg sm:text-2xl text-cyan-400 mb-1.5 sm:mb-3" />

  <h2 className="text-sm sm:text-2xl font-bold mb-1.5 sm:mb-3">
    Email
  </h2>

  <p className="text-gray-450 text-[9px] xs:text-[11px] sm:text-sm text-center">
    Let's build something amazing together.
  </p>

</motion.a>

        </div>

      </div>

    </section>

  )
}

export default FindMe