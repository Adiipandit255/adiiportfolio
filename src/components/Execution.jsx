import { motion } from "framer-motion"

const Execution = () => {

  const cards = [

    {
      icon: "🚀",
      title: "4+",
      subtitle: "Years of Structured Learning"
    },

    {
      icon: "⚡",
      title: "10+",
      subtitle: "Strategic Initiatives Built"
    },

    {
      icon: "📈",
      title: "Multiple",
      subtitle: "Brand Growth Campaigns"
    },

    {
      icon: "🎯",
      title: "End to End",
      subtitle: "Systems Designed & Executed"
    },

  ]

  return (

    <section className="bg-[#05010d] py-20 px-6 text-white relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* ANIMATED GLOW */}
      <motion.div

        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}

        className="absolute top-10 left-10 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl"

      />

      <motion.div

        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}

        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"

      />

      {/* STARS */}
      <div className="absolute inset-0 opacity-60">

        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute top-40 left-[30%] w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute top-28 right-[20%] w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute bottom-32 left-[40%] w-1 h-1 bg-white rounded-full"></div>

        <div className="absolute bottom-20 right-40 w-1 h-1 bg-white rounded-full"></div>

      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          className="text-center mb-16"

        >

          <h1 className="text-4xl md:text-5xl font-extrabold">

            Execution &{" "}

            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">

              Discipline

            </span>

          </h1>

          {/* LINE */}
          <div className="w-[120px] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6 relative">

            <motion.div

              animate={{
                scale: [1, 1.3, 1]
              }}

              transition={{
                duration: 2,
                repeat: Infinity
              }}

              className="w-3 h-3 bg-purple-400 rounded-full absolute left-1/2 -translate-x-1/2 -top-[5px]"

            />

          </div>

          {/* SUBTEXT */}
          <p className="text-gray-400 max-w-2xl mx-auto mt-10 text-lg leading-8">

            Growth is not accidental. It is structured,
            measured, and executed consistently.
            Every initiative is built with long-term
            positioning and psychological precision.

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">

          {cards.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 60
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}

              whileHover={{
                y: -12,
                scale: 1.04,
                rotateX: 5,
                rotateY: 5
              }}

              className="group h-[165px] sm:h-[240px] rounded-[18px] sm:rounded-[30px] border border-purple-500/20 bg-[#0b0617] flex flex-col items-center justify-center text-center px-3 sm:px-5 relative overflow-hidden"

            >

              {/* HOVER GLOW */}
              <motion.div

                initial={{
                  opacity: 0
                }}

                whileHover={{
                  opacity: 1
                }}

                className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 blur-2xl"

              />

              {/* ICON */}
              <motion.div

                animate={{
                  y: [0, -5, 0]
                }}

                transition={{
                  duration: 3,
                  repeat: Infinity
                }}

                className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border border-purple-500/30 flex items-center justify-center text-lg sm:text-2xl mb-2 sm:mb-6 relative z-10 bg-white/5"

              >

                {item.icon}

              </motion.div>

              {/* TITLE */}
              <motion.h2

                animate={{
                  opacity: [1, 0.8, 1]
                }}

                transition={{
                  duration: 2,
                  repeat: Infinity
                }}

                className="text-lg sm:text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent relative z-10"

              >

                {item.title}

              </motion.h2>

              {/* SUBTITLE */}
              <p className="text-gray-300 text-[9px] xs:text-[11px] sm:text-base mt-2 sm:mt-4 leading-normal sm:leading-7 relative z-10">

                {item.subtitle}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Execution