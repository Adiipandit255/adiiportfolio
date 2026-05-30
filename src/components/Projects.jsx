import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    badge: "NEW • AI • React",
    title: "Pathfinder",
    description:
      "AI powered career discovery platform with psychometric analysis.",
    full:
      "A futuristic AI powered career guidance platform designed for Class 10 students. The system analyzes personality traits and recommends career paths with roadmaps and skill guidance.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI", "React", "Firebase"],
    live: "#",
  },

  {
    id: "02",
    badge: "NEW • Product • React",
    title: "CoachFinder",
    description:
      "Recommendation engine for coaching institute discovery.",
    full:
      "CoachFinder helps students discover the best coaching institutes using AI recommendation systems and weighted filters for exams like JEE, NEET and UPSC.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node", "MongoDB"],
    live: "#",
  },

  {
    id: "03",
    badge: "NEW • Full Stack",
    title: "CollabX",
    description:
      "Modern collaboration platform for creators and brands.",
    full:
      "A swipe-to-match collaboration platform connecting creators with brands using real-time matching and premium UI interactions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "JWT"],
    live: "#",
  },
];

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative bg-[#03040a] text-white py-24 px-6 overflow-hidden"
    >

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-20"
      >

        <motion.h1
          initial={{ letterSpacing: "0px" }}
          whileInView={{ letterSpacing: "-3px" }}
          transition={{ duration: 1 }}
          className="text-fluid-4xl md:text-fluid-6xl font-black"
        >
          Strategic{" "}

          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            Projects
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 mt-5 text-sm md:text-base max-w-3xl mx-auto"
        >
          Futuristic full stack and AI powered portfolio projects.
        </motion.p>

      </motion.div>

      {/* TECH STACK */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 flex flex-wrap justify-center gap-8 text-cyan-500 uppercase tracking-[4px] text-xs mb-16"
      >
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>Firebase</span>
        <span>JWT Auth</span>
      </motion.div>

      {/* CARDS */}
      <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer rounded-[28px] overflow-hidden border border-cyan-500/20 bg-[#071018]/80 backdrop-blur-xl"
          >

            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-black/40 to-transparent"></div>

              {/* SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 overflow-hidden">

                <div className="absolute top-[-100%] left-[-120%] h-[300%] w-[40%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl group-hover:left-[150%] transition-all duration-[1800ms]"></div>

              </div>

              {/* BADGE */}
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full text-[10px] border border-pink-500 bg-pink-500/10 text-pink-300 backdrop-blur-md">
                {project.badge}
              </div>

              {/* VIEW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <button className="px-6 py-3 rounded-full border border-cyan-300 bg-black/30 backdrop-blur-xl text-xs tracking-[3px] font-semibold shadow-[0_0_25px_rgba(0,255,255,0.4)]">
                  VIEW PROJECT
                </button>

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-xl sm:text-2xl font-bold">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mt-6">

                {project.tags.map((tag, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[10px] border border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

            {/* GLOW */}
            <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-700 shadow-[0_0_70px_rgba(0,255,255,0.15)] pointer-events-none"></div>

          </motion.div>

        ))}

      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[30px] border border-cyan-500/30 bg-[#071018] scrollbar-thin scrollbar-thumb-cyan-400"
            >

              {/* IMAGE */}
              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">

                <img
                  src={selectedProject.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071018] to-transparent"></div>

              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">

                <h2 className="text-3xl md:text-5xl font-black">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-400 mt-4 md:mt-6 leading-relaxed text-sm md:text-base">
                  {selectedProject.full}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-7">

                  {selectedProject.tags.map((tag, i) => (

                    <span
                      key={i}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs border border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-8 md:mt-10">

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition text-sm md:text-base text-center"
                  >
                    Live Preview
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 hover:bg-white/10 transition text-sm md:text-base"
                  >
                    Close
                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Projects;