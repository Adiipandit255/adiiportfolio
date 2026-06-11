import { motion } from "framer-motion"
import developer2 from "../assets/developer2.png"

const WhoIAm = () => {

  return (

    <section
      id="About"
       className="min-h-screen bg-themeBg text-themeText transition-colors duration-500 flex items-center justify-center px-8 py-24 relative overflow-hidden"
    >

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Stars */}
      <div className="absolute inset-0 opacity-40">

        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute top-40 left-[30%] w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute top-32 right-[20%] w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute bottom-32 left-[40%] w-1 h-1 bg-white rounded-full"></div>

      </div>

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 gap-3 sm:gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div

          initial={{ opacity: 0, x: -80 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

          className="relative"

        >

          {/* Heading */}
          <h1 className="text-fluid-2xl md:text-fluid-4xl font-extrabold mb-8 text-center md:text-left">

            Know Who{" "}

            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">

              I'M

            </span>

          </h1>

          {/* TERMINAL CARD */}
          <motion.div

            animate={{
              boxShadow: [
                "0 0 20px rgba(34,211,238,0.08)",
                "0 0 40px rgba(236,72,153,0.15)",
                "0 0 20px rgba(34,211,238,0.08)"
              ]
            }}

            transition={{
              duration: 4,
              repeat: Infinity
            }}

            whileHover={{
              scale: 1.01
            }}

            className="rounded-[30px] border border-cyan-500/20 bg-black/40 backdrop-blur-xl overflow-hidden"

          >

            {/* Terminal Top */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">

              <div className="w-2 h-2 rounded-full bg-red-500"></div>

              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>

              <div className="w-2 h-2 rounded-full bg-green-500"></div>

              {/* Animated Terminal Name */}
              <motion.p

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{
                  duration: 1
                }}

                className="ml-2 text-cyan-400 font-mono flex items-center gap-1"

              >

                system_profile.exe

                {/* Blinking Cursor */}
                <motion.span

                  animate={{
                    opacity: [0, 1, 0]
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 1
                  }}

                  className="w-[8px] h-[18px] bg-cyan-400 rounded-sm"

                />

              </motion.p>

            </div>

            {/* Content */}
            <div className="p-3 sm:p-5 md:p-6 space-y-2 sm:space-y-4 font-mono text-[9px] xs:text-[11px] sm:text-sm md:text-base">

              {/* Row */}
              <div className="flex justify-between border-b border-white/5 pb-2 sm:pb-4">

                <span className="text-pink-400">

                  Name

                </span>

                <span className="text-gray-300">

                  Aditya Sharma

                </span>

              </div>

              {/* Row */}
              <div className="flex justify-between border-b border-white/5 pb-4">

                <span className="text-pink-400">

                  Location

                </span>

                <span className="text-gray-300">

                  Gwalior, India

                </span>

              </div>

              {/* Row */}
              <div className="flex justify-between border-b border-white/5 pb-2 sm:pb-4">

                <span className="text-pink-400">

                  Background

                </span>

                <span className="text-gray-300 text-right">

                  Web Developer

                </span>

              </div>

              {/* Row */}
              <div className="flex justify-between border-b border-white/5 pb-2 sm:pb-4">

                <span className="text-pink-400">

                  Focus

                </span>

                <span className="text-gray-300 text-right">

                  Artificial Intelligence

                </span>

              </div>

              {/* Row */}
              <div className="flex justify-between border-b border-white/5 pb-2 sm:pb-4">

                <span className="text-pink-400">

                  Tech Stack

                </span>

                <span className="text-gray-300 text-right">

                  Python • Power BI • MongoDB

                </span>

              </div>

              {/* Row */}
              <div className="flex justify-between border-b border-white/5 pb-2 sm:pb-4">

                <span className="text-pink-400">

                  Current Work

                </span>

                <span className="text-cyan-400 text-right">

                  Building futuristic web apps

                </span>

              </div>

              {/* Status */}
              <div className="flex justify-between items-center">

                <span className="text-pink-400">

                  Status

                </span>

                <motion.span

                  animate={{
                    opacity: [1, 0.6, 1]
                  }}

                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}

                  className="px-2 py-1 sm:px-5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[8px] xs:text-[10px] sm:text-sm"

                >

                  ● Open To Work

                </motion.span>

              </div>

            </div>

            {/* Bottom Quote */}
            <div className="px-4 py-3 border-t border-white/10 text-gray-500 italic text-sm md:text-lg">

              // "Growth is engineered through clarity,
              psychology and execution."

            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div

          initial={{ opacity: 0, x: 80 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

          className="flex justify-center relative"

        >

          {/* Glow */}
          <motion.div

            animate={{
              scale: [1, 1.1, 1]
            }}

            transition={{
              duration: 5,
              repeat: Infinity
            }}

            className="absolute w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-3xl"

          />

          {/* Floating Image */}
          <motion.img

            animate={{
              y: [0, -12, 0]
            }}

            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}

            src={developer2}

            alt="developer2"

            className="w-[100px] xs:w-[130px] sm:w-[260px] md:w-[320px] lg:w-[380px] object-contain relative z-10"

          />

        </motion.div>

      </div>

    </section>

  )
}

export default WhoIAm