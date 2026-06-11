import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiPython,
  SiVercel,
  SiCanva,
  SiPostman,
  SiNetlify,
  SiFigma,
  SiChatbot,
} from "react-icons/si";

const expertise = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
];

const tools = [
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: "💻" },
  { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
  { name: "AI", icon: <SiChatbot className="text-[#A855F7]" /> },
];

export default function Skills() {
  return (
    <section className="relative bg-themeBg text-themeText py-20 overflow-hidden transition-colors duration-500">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Stars Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        
        {/* Core Expertise Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-fluid-2xl md:text-fluid-4xl font-bold">
            Core <span className="text-purple-500">Expertise</span>
          </h2>

          <div className="flex justify-center items-center mt-3 gap-3">
            <div className="w-16 h-[1px] bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-16 h-[1px] bg-purple-500"></div>
          </div>
        </motion.div>

        {/* Expertise Grid - Animated Glass Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4 mb-20">
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl sm:text-5xl mb-1.5 sm:mb-3 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="text-[10px] sm:text-sm font-medium text-gray-200 text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Tools Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-fluid-2xl md:text-fluid-4xl font-bold">
            Tools <span className="text-purple-500">I Use</span>
          </h2>

          <div className="flex justify-center items-center mt-3 gap-3">
            <div className="w-16 h-[1px] bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-16 h-[1px] bg-purple-500"></div>
          </div>
        </motion.div>

        {/* Tools Grid - Animated Glass Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl sm:text-5xl mb-1.5 sm:mb-3 group-hover:scale-110 transition duration-300">
                {tool.icon}
              </div>

              <h3 className="text-[10px] sm:text-sm font-medium text-gray-200 text-center">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stars Animation */}
      <style>{`
        .stars {
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(white 1px, transparent 1px);
          background-size: 40px 40px;
          animation: moveStars 100s linear infinite;
        }

        @keyframes moveStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-1000px);
          }
        }
      `}</style>
    </section>
  );
}