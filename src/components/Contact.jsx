import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { usePortfolio } from "../context/PortfolioContext";

const Contact = () => {
  const { addMessage, profileInfo } = usePortfolio();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  return (
    <section className="relative min-h-screen bg-themeBg text-themeText transition-colors duration-500 overflow-hidden py-24 px-6 md:px-12 flex items-center justify-center">

      <div className="max-w-[1600px] w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side: Info & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-8"
        >
          <p className="uppercase tracking-[2px] sm:tracking-[4px] text-gray-500 text-[8px] sm:text-sm">Get in touch</p>
          <h1 className="text-sm sm:text-4xl lg:text-6xl font-black leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              epic.
            </span>
          </h1>
          <p className="text-gray-400 text-[8px] xs:text-[11px] sm:text-base lg:text-lg leading-relaxed max-w-lg">
            Have a project in mind, want to collaborate, or just want to chat? Feel free to reach out. I'm always open to new opportunities.
          </p>

          <div className="space-y-2 sm:space-y-5">
            <div className="flex items-center gap-2 sm:gap-4 text-gray-300">
              <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-cyan-400">
                <FaEnvelope className="text-xs sm:text-xl" />
              </div>
              <div>
                <p className="text-[7px] sm:text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                <a href={`mailto:${profileInfo.email}`} className="text-cyan-400 hover:underline text-[8px] xs:text-[10px] sm:text-sm md:text-base">
                  {profileInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 text-gray-300">
              <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-cyan-400">
                <FaMapMarkerAlt className="text-xs sm:text-xl" />
              </div>
              <div>
                <p className="text-[7px] sm:text-xs text-gray-500 uppercase tracking-wider">Location</p>
                <p className="text-gray-300 text-[8px] xs:text-[10px] sm:text-sm md:text-base">{profileInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 sm:gap-4">
            {profileInfo.linkedin && (
              <a
                href={profileInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-400/10 flex items-center justify-center transition duration-300 text-cyan-400 text-xs sm:text-base"
              >
                <FaLinkedin />
              </a>
            )}
            {profileInfo.github && (
              <a
                href={profileInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 hover:border-pink-400/50 hover:bg-pink-400/10 flex items-center justify-center transition duration-300 text-pink-400 text-xs sm:text-base"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[16px] sm:rounded-[32px] border border-cyan-500/20 bg-black/40 backdrop-blur-xl p-3 sm:p-8 md:p-10 space-y-3 sm:space-y-6 shadow-2xl relative"
        >
          {/* Subtle Form Accent Line */}
          <div className="absolute top-0 left-5 right-5 sm:left-10 sm:right-10 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"></div>

          <h2 className="text-xs sm:text-2xl font-bold">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-[7px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Aditya Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-1.5 sm:p-4 rounded-md sm:rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 hover:border-white/20 transition duration-300 text-[8px] xs:text-[11px] sm:text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[7px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">Your Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-1.5 sm:p-4 rounded-md sm:rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 hover:border-white/20 transition duration-300 text-[8px] xs:text-[11px] sm:text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[7px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">Message</label>
              <textarea
                rows="3"
                placeholder="Let's build..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-1.5 sm:p-4 rounded-md sm:rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 hover:border-white/20 transition duration-300 resize-none text-[8px] xs:text-[11px] sm:text-sm"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-1 sm:mt-2 w-full py-1.5 sm:py-4 rounded-md sm:rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold tracking-wider hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 text-[9px] xs:text-[12px] sm:text-lg flex items-center justify-center gap-2"
            >
              Send Message
            </motion.button>
          </form>

          {/* Success Banner Overlay */}
          <AnimatePresence>
            {isSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 rounded-[16px] sm:rounded-[32px] bg-[#070211]/95 border border-cyan-400/40 flex flex-col items-center justify-center text-center p-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="text-cyan-400 text-5xl mb-4"
                >
                  <FaCheckCircle />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thank you for reaching out. Your message has been saved, and I will get back to you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;