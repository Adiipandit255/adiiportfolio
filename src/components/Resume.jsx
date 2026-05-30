import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="relative min-h-screen bg-[#03040a] text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* CYAN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[200px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >

            <h1 className="text-4xl md:text-6xl font-black">

              My{" "}

              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Resume
              </span>

            </h1>

            <p className="text-gray-400 mt-4 text-base md:text-lg">
              Professional Profile, Experience & Skills
            </p>

            {/* HEARTBEAT LINE */}
            <div className="flex justify-center mt-8">

              <div className="relative w-52 h-[2px] bg-cyan-400/30">

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  <div className="absolute inset-0 w-5 h-5 rounded-full bg-cyan-400 animate-ping opacity-30"></div>

                  <div className="w-5 h-5 rounded-full border border-cyan-400 bg-[#03040a] shadow-[0_0_25px_#00ffff] flex items-center justify-center">

                    <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RESUME PREVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-6xl mx-auto"
          >

            {/* ANIMATED BORDER */}
            <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-[spin_8s_linear_infinite] blur-sm"></div>

            <div className="relative rounded-[30px] overflow-hidden bg-[#05010d] p-3">

              {/* SHINE EFFECT */}
              <div className="group relative overflow-hidden rounded-[24px]">

                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 overflow-hidden pointer-events-none">

                  <div
                    className="
                    absolute
                    top-[-100%]
                    left-[-120%]
                    h-[300%]
                    w-[35%]
                    rotate-[25deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    blur-3xl
                    hover:left-[160%]
                    transition-all
                    duration-[1800ms]
                  "
                  />

                </div>

                {/* RESUME IMAGE */}
                <img
                  src="/resume-preview.png"
                  alt="Resume Preview"
                  className="
                    w-full
                    h-auto
                    object-contain
                    rounded-[24px]
                  "
                />

              </div>

            </div>

          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-5 mt-10"
          >

            <a
              href="/resume.pdf"
              download
              className="
                px-8 py-4
                rounded-full
                bg-cyan-400
                text-black
                font-bold
                hover:scale-105
                transition
                shadow-[0_0_30px_rgba(0,255,255,0.4)]
              "
            >
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-8 py-4
                rounded-full
                border
                border-cyan-400
                hover:bg-cyan-400/10
                transition
              "
            >
              View PDF
            </a>

          </motion.div>

        </div>

      </section>

      {/* SCROLL SECTION */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Resume Highlights
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* EDUCATION */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[24px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-8"
            >

              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
                Education
              </h3>

              <p className="text-gray-300">
                B.Tech Computer Science
              </p>

              <p className="text-gray-500 mt-2">
                SAGE University, Bhopal
              </p>

            </motion.div>

            {/* EXPERIENCE */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[24px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-8"
            >

              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
                Experience
              </h3>

              <p className="text-gray-300">
                Data Science Intern
              </p>

              <p className="text-gray-500 mt-2">
                Analytics & Dashboard Development
              </p>

            </motion.div>

            {/* SKILLS */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[24px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-8"
            >

              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
                Skills
              </h3>

              <p className="text-gray-400">
                Python • SQL • Power BI • Excel • React • Flask
              </p>

            </motion.div>

            {/* PROJECTS */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[24px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-8"
            >

              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
                Projects
              </h3>

              <p className="text-gray-400">
                India Development Tracker, Career Guidance AI,
                Portfolio Website, Analytics Dashboards
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Resume;