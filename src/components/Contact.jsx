import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-[#05010d] text-white overflow-hidden py-24 px-6 md:px-12 flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Info & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="uppercase tracking-[4px] text-gray-500 text-sm">Get in touch</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              epic.
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
            Have a project in mind, want to collaborate, or just want to chat about tech and design? Feel free to reach out. I'm always open to new opportunities.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-2xl border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-cyan-400">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                <a href="mailto:adityasharma22093@gmail.com" className="text-cyan-400 hover:underline">
                  adityasharma22093@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-2xl border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-cyan-400">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                <p className="text-gray-300">Gwalior, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/aditya-sharma-b133622bb/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-400/10 flex items-center justify-center transition duration-300 text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Adiipandit255"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-pink-400/50 hover:bg-pink-400/10 flex items-center justify-center transition duration-300 text-pink-400"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-cyan-500/20 bg-black/40 backdrop-blur-xl p-8 md:p-10 space-y-6 shadow-2xl relative animate-pulse-slow"
        >
          {/* Subtle Form Accent Line */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"></div>

          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Aditya Sharma"
                className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 hover:border-white/20 transition duration-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Your Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 hover:border-white/20 transition duration-300"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Let's build something epic together..."
                className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 hover:border-white/20 transition duration-300 resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold tracking-wider hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 text-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;