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
    <section className="relative bg-[#050014] text-white py-20 overflow-hidden">

      {/* Stars Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Core Expertise */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Core <span className="text-purple-500">Expertise</span>
          </h2>

          <div className="flex justify-center items-center mt-3 gap-3">
            <div className="w-16 h-[1px] bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-16 h-[1px] bg-purple-500"></div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">

          {expertise.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#0b0223] border border-purple-500/20 rounded-2xl p-5 flex flex-col items-center justify-center hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="text-sm font-medium text-gray-200 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools <span className="text-purple-500">I Use</span>
          </h2>

          <div className="flex justify-center items-center mt-3 gap-3">
            <div className="w-16 h-[1px] bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-16 h-[1px] bg-purple-500"></div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">

          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-[#0b0223] border border-purple-500/20 rounded-2xl p-5 flex flex-col items-center justify-center hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition duration-300">
                {tool.icon}
              </div>

              <h3 className="text-sm font-medium text-gray-200 text-center">
                {tool.name}
              </h3>
            </div>
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