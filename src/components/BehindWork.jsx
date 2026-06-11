import { motion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
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
        <span className="ml-1 px-1 py-0.2 rounded-full text-[5px] xs:text-[7px] sm:text-[10px] border border-purple-500/30 text-purple-300 align-middle">
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
        <span className="ml-1 px-1 py-0.2 rounded-full text-[5px] xs:text-[7px] sm:text-[10px] border border-purple-500/30 text-purple-300 align-middle">
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
        <span className="ml-1 px-1 py-0.2 rounded-full text-[5px] xs:text-[7px] sm:text-[10px] border border-purple-500/30 text-purple-300 align-middle">
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
  const { profileInfo } = usePortfolio();

  return (
    <section className="relative min-h-[60vh] sm:min-h-screen bg-transparent overflow-hidden py-16 sm:py-24">

      {/* Left Side Rings */}
      <div className="absolute left-[-280px] top-[150px] w-[650px] h-[650px] rounded-full border border-cyan-500/10" />
      <div className="absolute left-[-220px] top-[200px] w-[550px] h-[550px] rounded-full border border-purple-500/10" />

      <div className="max-w-[1600px] mx-auto px-3 xs:px-6 relative z-10">
        {/* Desktop grid layout forced on mobile with grid-cols-2 */}
        <div className="grid grid-cols-2 gap-2 xs:gap-5 md:gap-20 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center min-w-0"
          >
            <div className="relative flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[170px] h-[170px] xs:w-[210px] xs:h-[210px] sm:w-[310px] sm:h-[310px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
                {/* Concentric rings styled as thin borders */}
                <div className="absolute ring-purple" style={{ width: "112%", height: "112%", borderRadius: "50%" }}></div>
                <div className="absolute ring-cyan" style={{ width: "100%", height: "100%", borderRadius: "50%" }}></div>

                <img
                  src={developer}
                  alt="developer"
                  className="relative z-20 w-[150px] h-[150px] xs:w-[190px] xs:h-[190px] sm:w-[280px] sm:h-[280px] md:w-[370px] md:h-[370px] lg:w-[440px] lg:h-[440px] rounded-full object-cover border-[0.8px] border-cyan-400/80 drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]"
                />
              </div>
            </div>

            <h2 className="mt-2 xs:mt-4 md:mt-12 text-[10px] xs:text-base sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              {profileInfo.name}
            </h2>

            <p className="text-cyan-400 tracking-[1px] xs:tracking-[2px] sm:tracking-[5px] text-[6px] xs:text-[9px] sm:text-sm uppercase mt-0.5 xs:mt-1 sm:mt-3 text-center whitespace-nowrap">
              {profileInfo.title}
            </p>

            <div className="flex gap-0.5 xs:gap-1.5 sm:gap-3 mt-2 sm:mt-6 flex-wrap justify-center">
              <span className="px-1 py-0.2 xs:px-2 xs:py-0.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[5px] xs:text-[8px] sm:text-xs whitespace-nowrap">
                🚀 Web Dev
              </span>

              <span className="px-1 py-0.2 xs:px-2 xs:py-0.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[5px] xs:text-[8px] sm:text-xs">
                🇮🇳 India
              </span>

              <span className="px-1 py-0.2 xs:px-2 xs:py-0.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[5px] xs:text-[8px] sm:text-xs whitespace-nowrap">
                ⚡ Open To Work
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-[1px] xs:tracking-[2px] sm:tracking-[5px] text-gray-500 text-[6px] xs:text-[9px] sm:text-xs mb-1 sm:mb-4 text-center">
              THE PERSON
            </p>

            <h1 className="text-[12px] xs:text-lg sm:text-fluid-3xl md:text-fluid-4xl font-black mb-3 xs:mb-6 md:mb-10 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Behind The Work.
            </h1>

            <div className="space-y-1 xs:space-y-2 sm:space-y-3 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-1 sm:gap-2 p-1 xs:p-1.5 md:p-2 rounded-lg xs:rounded-xl md:rounded-[24px] border border-purple-500/20 bg-[#090414] hover:border-cyan-400/40 transition-all duration-500"
                >
                  <div className="text-cyan-400 text-[6px] xs:text-[9px] sm:text-xs w-2 xs:w-3 sm:w-6 text-center">
                    {card.symbol}
                  </div>

                  <div className="w-3.5 h-3.5 xs:w-5 xs:h-5 sm:w-8 sm:h-8 rounded-xs border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-[7px] xs:text-[10px] sm:text-sm flex-shrink-0">
                    {card.icon}
                  </div>

                  <p className="text-gray-300 leading-normal sm:leading-relaxed text-[6px] xs:text-[9px] sm:text-[14px] md:text-[15px]">
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