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
        <span className="ml-2 px-2 py-1 rounded-full text-[4px] border border-purple-500/30 text-purple-300">
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
        <span className="ml-2 px-2 py-1 rounded-full text-[4px] border border-purple-500/30 text-purple-300">
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
        <span className="ml-2 px-2 py-1 rounded-full text-[4px] border border-purple-500/30 text-purple-300">
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

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >

            <div className="relative flex items-center justify-center">
<div className="relative flex items-center justify-center w-[320px] h-[320px]">

  <div className="ring-purple"></div>

  <div className="ring-cyan"></div>

  <img
    src={developer}
    alt="developer"
    className="relative z-20 w-[300px] h-[300px] rounded-full object-cover border-[3px] border-cyan-400-translate-x-14"
  />

</div>
            </div>

            <h2 className="mt-12 text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Aditya Sharma
            </h2>

            <p className="text-cyan-400 tracking-[5px] uppercase mt-3">
              Artificial Intelligence
            </p>

            <div className="flex gap-3 mt-6 flex-wrap justify-center">

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                🚀 Web Developer
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                🇮🇳 India
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
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

            <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-4 text-center">
              THE PERSON
            </p>

            <h1 className="text-3xl md:text-3xl font-black mb-10 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Behind The Work.
            </h1>

            <div className="space-y-3 w-full">

              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 p-2 rounded-[24px] border border-purple-500/20 bg-[#090414] hover:border-cyan-400/40 transition-all duration-500"
                >

                  <div className="text-cyan-400 text-xs w-6 text-center">
                    {card.symbol}
                  </div>

                  <div className="w-8 h-8 rounded-xs border border-purple-500/30 bg-purple-500/10 flex items-center justify-center">
                    {card.icon}
                  </div>

                  <p className="text-gray-300 leading-8 text-[15px]">
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