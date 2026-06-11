import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import developer from "../assets/developer.png"
import { usePortfolio } from "../context/PortfolioContext"

const Hero = () => {
  const { visitorRole } = usePortfolio();

  const getGreeting = () => {
    if (visitorRole === "hr") {
      return "Welcome Recruiter! Looking to hire? Explore my credentials and download my resume below.";
    }
    if (visitorRole === "brand") {
      return "Welcome Founder! Let's collaborate to scale your brand and launch killer campaigns.";
    }
    if (visitorRole === "guest") {
      return "Welcome Guest! Let's collaborate to build your next premium digital solution.";
    }
    return "You wandered in. Good. Stay a while. Things get weird.";
  };

  return (
    <section
      id="home"
      className="min-h-[70vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-24"
    >

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

      {/* Main Container - Desktop-like layout forced on mobile with grid-cols-2 */}
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-2 gap-2 xs:gap-5 md:gap-10 items-center px-3 xs:px-4 sm:px-8 relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="min-w-0"
        >
          {/* Small Text */}
          <p className="text-gray-400 text-[8px] xs:text-xs sm:text-fluid-base md:text-fluid-lg mb-2 xs:mb-4 md:mb-6 font-medium leading-relaxed">
            {getGreeting()}
          </p>

          {/* I'M */}
          <h2 className="text-[10px] xs:text-base sm:text-fluid-xl md:text-fluid-2xl font-semibold tracking-wider text-gray-400 mb-0.5 xs:mb-1 md:mb-2">
            I'M
          </h2>

          {/* NAME */}
          <h1 className="text-[12px] xs:text-lg sm:text-fluid-3xl md:text-fluid-6xl font-extrabold uppercase leading-none mb-3 xs:mb-5 md:mb-8 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ADITYA SHARMA
          </h1>

          {/* Gradient Line */}
          <div className="w-full max-w-[700px] h-[1.5px] xs:h-[3px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full mb-4 xs:mb-6 md:mb-10"></div>

          {/* Typing Animation */}
          <div className="text-[10px] xs:text-sm sm:text-fluid-2xl md:text-fluid-3xl font-bold text-cyan-400 h-8 xs:h-12 md:h-24">
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
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-12 mt-4 xs:mt-6 md:mt-10">
            <div>
              <h2 className="text-[10px] xs:text-base sm:text-2xl font-bold text-pink-400">
                40+
              </h2>
              <p className="text-gray-500 uppercase text-[5px] xs:text-[8px] sm:text-xs tracking-normal sm:tracking-widest whitespace-nowrap">
                Leads Gen
              </p>
            </div>

            <div>
              <h2 className="text-[10px] xs:text-base sm:text-2xl font-bold text-pink-400">
                200%
              </h2>
              <p className="text-gray-500 uppercase text-[5px] xs:text-[8px] sm:text-xs tracking-normal sm:tracking-widest whitespace-nowrap">
                Social Growth
              </p>
            </div>

            <div>
              <h2 className="text-[10px] xs:text-base sm:text-2xl font-bold text-pink-400">
                12+
              </h2>
              <p className="text-gray-500 uppercase text-[5px] xs:text-[8px] sm:text-xs tracking-normal sm:tracking-widest whitespace-nowrap">
                Live Projects
              </p>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 xs:mt-8 md:mt-14 px-3 py-1.5 xs:px-6 xs:py-3 md:px-10 md:py-5 rounded-lg xs:rounded-xl md:rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-[8px] xs:text-xs sm:text-base md:text-xl font-bold shadow-lg shadow-pink-500/30"
          >
            View My Work →
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative w-[150px] h-[150px] xs:w-[190px] xs:h-[190px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[410px] lg:h-[410px] flex items-center justify-center mx-auto mt-0">
          <div className="animated-ring-reverse"></div>
          <div className="animated-ring"></div>

          <img
            src={developer}
            alt="developer"
            className="
              w-[135px]
              h-[135px]
              xs:w-[175px]
              xs:h-[175px]
              sm:w-[260px]
              sm:h-[260px]
              md:w-[330px]
              md:h-[330px]
              lg:w-[390px]
              lg:h-[390px]
              rounded-full
              object-cover
              relative
              z-10
              hover:scale-105
              transition-all
              duration-500
              drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;