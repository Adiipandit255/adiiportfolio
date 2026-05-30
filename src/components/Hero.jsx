import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import developer from "../assets/developer.png"
const Hero = () => {
  return (


    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05010d] pt-24"
    >


      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Stars */}
      <div className="absolute inset-0 opacity-40">

        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-40 left-[30%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-32 right-[20%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-[40%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[70%] right-[15%] w-1 h-1 bg-white rounded-full"></div>

      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-3 sm:gap-10 items-center px-4 sm:px-8 relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Small Text */}
          <p className="text-gray-400 text-fluid-base md:text-fluid-lg mb-6 font-medium">
            You wandered in. Good. Stay a while. Things get weird.
          </p>

          {/* I'M */}
          <h2 className="text-fluid-xl md:text-fluid-2xl font-bold text-white mb-2">
            I'M
          </h2>

          {/* NAME */}
          <h1 className="text-fluid-3xl md:text-fluid-6xl font-extrabold uppercase leading-none mb-8 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

            ADITYA SHARMA

          </h1>

          {/* Gradient Line */}
          <div className="w-full max-w-[700px] h-[3px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full mb-10"></div>

          {/* Typing Animation */}
          <div className="text-fluid-2xl md:text-fluid-3xl font-bold text-cyan-400 h-24">

            <TypeAnimation
              sequence={[
                "Data analytics",
                2000,
                "Web Developer",
                2000,
                "Creative Designer",
                2000,
                "Artificial Intelligence",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-4 sm:gap-12 mt-10">

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-pink-400">
                40+
              </h2>

              <p className="text-gray-500 uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest">
                Leads Gen
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-pink-400">
                200%
              </h2>

              <p className="text-gray-500 uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest">
                Social Growth
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-pink-400">
                12+
              </h2>

              <p className="text-gray-500 uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest">
                Live Projects
              </p>
            </div>

          </div>

          {/* Button */}
          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            className="mt-10 md:mt-14 px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-lg md:text-xl font-bold shadow-lg shadow-pink-500/30"

          >

            View My Work →

          </motion.button>

        </motion.div>

        {/* RIGHT SIDE */}

        <div className="relative w-[110px] h-[110px] xs:w-[130px] xs:h-[130px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[310px] lg:h-[310px] flex items-center justify-center mx-auto mt-0">

          <div className="animated-ring-reverse"></div>

          <div className="animated-ring"></div>

          <div className="absolute inset-[4px] sm:inset-[8px] rounded-full bg-[#05010d]"></div>

          <img
            src={developer}
            alt="developer"
            className="
      w-[100px]
      h-[100px]
      xs:w-[120px]
      xs:h-[120px]
      sm:w-[200px]
      sm:h-[200px]
      md:w-[260px]
      md:h-[260px]
      lg:w-[290px]
      lg:h-[290px]
      rounded-full
      object-cover
      relative
      z-10
      hover:scale-105
      transition-all
      duration-500
      shadow-[0_0_40px_rgba(0,255,255,0.25)]
    "
          />

        </div>

      </div>

    </section>

  )
}

export default Hero