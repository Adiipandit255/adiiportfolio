import { motion } from "framer-motion";
import developer from "../assets/developer3.png";

const cards = [
  {
    symbol: ">",
    icon: "🎓",
    text: (
      <>
        B.Tech Computer Science graduate with a deep passion for growth,
        strategy, and the psychology behind decisions that drive real results.
      </>
    ),
  },
  {
    symbol: "$",
    icon: "📈",
    text: (
      <>
        I work with <span className="text-pink-400">brands</span>
        <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] border border-purple-500/30 text-purple-300 align-middle">
          MARKETING
        </span>
        {" "}to build sharper strategies, improve positioning, and directly
        increase sales through psychology driven execution.
      </>
    ),
  },
  {
    symbol: "~",
    icon: "🎥",
    text: (
      <>
        I work with{" "}
        <span className="text-cyan-400">
          creators & influencers
        </span>
        <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] border border-purple-500/30 text-purple-300 align-middle">
          COLLABS
        </span>
        {" "}to help them land consistent brand deals and turn their audience
        into a reliable source of income.
      </>
    ),
  },
  {
    symbol: "*",
    icon: "🤖",
    text: (
      <>
        I help individuals and teams apply{" "}
        <span className="text-pink-400">
          Artificial Intelligence
        </span>
        <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] border border-purple-500/30 text-purple-300 align-middle">
          AI
        </span>
        {" "}in real world ways, helping them save time, work smarter, and stay ahead.
      </>
    ),
  },
  {
    symbol: "✦",
    icon: "⚡",
    text: (
      <>
        Growth is not accidental. It is engineered through
        <span className="text-purple-400"> clarity</span>,
        psychology, and disciplined execution.
      </>
    ),
  },
];

const BehindWork = () => {
  return (
    <section className="relative min-h-screen bg-[#05010d] overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Left Side Rings */}
      <div className="absolute left-[-280px] top-[150px] w-[650px] h-[650px] rounded-full border border-cyan-500/10" />

      <div className="absolute left-[-220px] top-[200px] w-[550px] h-[550px] rounded-full border border-purple-500/10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-2 gap-3 sm:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >

            <div className="relative flex items-center justify-center">
<div className="relative flex items-center justify-center w-[110px] h-[110px] xs:w-[130px] xs:h-[130px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px]">

  <div className="ring-purple"></div>

  <div className="ring-cyan"></div>

  <img
    src={developer}
    alt="developer"
    className="relative z-20 w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] rounded-full object-cover border-[3px] border-cyan-400"
  />

</div>
            </div>

            <h2 className="mt-4 sm:mt-12 text-sm sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Aditya Sharma
            </h2>

            <p className="text-cyan-400 tracking-[2px] sm:tracking-[5px] text-[8px] sm:text-sm uppercase mt-1 sm:mt-3 text-center">
              Artificial Intelligence
            </p>

            <div className="flex gap-1 sm:gap-3 mt-3 sm:mt-6 flex-wrap justify-center">

              <span className="px-1.5 py-0.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[7px] xs:text-[10px] sm:text-sm whitespace-nowrap">
                🚀 Web Dev
              </span>

              <span className="px-1.5 py-0.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[7px] xs:text-[10px] sm:text-sm">
                🇮🇳 India
              </span>

              <span className="px-1.5 py-0.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[7px] xs:text-[10px] sm:text-sm whitespace-nowrap">
                ⚡ Open To Work
              </span>

            </div>

          </motion.div>
                    {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[2px] sm:tracking-[5px] text-gray-500 text-[8px] sm:text-xs mb-2 sm:mb-4 text-center">
              THE PERSON
            </p>

            <h1 className="text-fluid-xl sm:text-fluid-4xl font-black mb-4 sm:mb-10 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Behind The Work.
            </h1>

            <div className="space-y-1.5 sm:space-y-3 w-full">

              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-[16px] sm:rounded-[24px] border border-purple-500/20 bg-[#090414] hover:border-cyan-400/40 transition-all duration-500"
                >

                  <div className="text-cyan-400 text-[8px] sm:text-xs w-3 sm:w-6 text-center">
                    {card.symbol}
                  </div>

                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-xs border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-[10px] sm:text-sm">
                    {card.icon}
                  </div>

                  <p className="text-gray-300 leading-normal sm:leading-8 text-[9px] xs:text-[11px] sm:text-[15px]">
                    {card.text}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default BehindWork;