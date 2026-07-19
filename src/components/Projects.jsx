import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
import { X, ExternalLink, Globe, Sparkles } from "lucide-react";

const Projects = () => {
  const { projects } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isTapped, setIsTapped] = useState(false);

  const filters = [
    "LIVE & DEPLOYED",
    "REACT",
    "NODE.JS",
    "MONGODB",
    "FIREBASE",
    "VERCEL",
    "JWT AUTH",
    "LATEST BUILDS",
    "FULL STACK"
  ];

  // Synthesize a high-tech electronic tapping sound using Web Audio API
  const playTapSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // First high tick tone
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1500, audioCtx.currentTime); // High pitch
      osc1.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
      
      gain1.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      
      osc1.start();
      osc1.stop(audioCtx.currentTime + 0.1);
      
      // Second low body resonance
      setTimeout(() => {
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(120, audioCtx.currentTime); // low click thump
        osc2.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.08);
        
        gain2.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        
        osc2.start();
        osc2.stop(audioCtx.currentTime + 0.08);
      }, 20);

    } catch (e) {
      console.warn("Web Audio API is not supported or blocked in this browser.", e);
    }
  };

  const handleFilterClick = (filter) => {
    playTapSound();
    if (activeFilter === filter) {
      setActiveFilter("ALL"); // toggle back to show all
    } else {
      setActiveFilter(filter);
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    const tagsUpper = project.tags.map(t => t.toUpperCase());
    const badgeUpper = project.badge.toUpperCase();
    
    switch (activeFilter) {
      case "LIVE & DEPLOYED":
        return project.live && project.live !== "#";
      case "REACT":
        return tagsUpper.includes("REACT");
      case "NODE.JS":
        return tagsUpper.includes("NODE.JS") || tagsUpper.includes("NODE");
      case "MONGODB":
        return tagsUpper.includes("MONGODB") || tagsUpper.includes("MONGO");
      case "FIREBASE":
        return tagsUpper.includes("FIREBASE");
      case "VERCEL":
        return tagsUpper.includes("VERCEL");
      case "JWT AUTH":
        return tagsUpper.includes("JWT AUTH") || tagsUpper.includes("JWT");
      case "LATEST BUILDS":
        return badgeUpper.includes("NEW");
      case "FULL STACK":
        return tagsUpper.includes("NODE.JS") || tagsUpper.includes("MONGODB") || badgeUpper.includes("FULL STACK");
      default:
        return true;
    }
  });

  const getCardGlowStyles = (badge) => {
    const text = badge ? badge.toUpperCase() : "";
    if (text.includes("AI")) {
      return {
        border: "border-orange-500/35 hover:border-orange-400/60",
        shadow: "shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:shadow-[0_0_35px_rgba(249,115,22,0.22)]"
      };
    }
    if (text.includes("PRODUCT")) {
      return {
        border: "border-pink-500/35 hover:border-pink-400/60",
        shadow: "shadow-[0_0_20px_rgba(236,72,153,0.1)] hover:shadow-[0_0_35px_rgba(236,72,153,0.22)]"
      };
    }
    return {
      border: "border-cyan-500/35 hover:border-cyan-400/60",
      shadow: "shadow-[0_0_20px_rgba(0,229,255,0.1)] hover:shadow-[0_0_35px_rgba(0,229,255,0.22)]"
    };
  };

  return (
    <section
      id="projects"
      className="relative bg-transparent text-white py-28 px-4 overflow-hidden min-h-screen"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Dynamic Style Injection for Automatic Staggered Shine Sweep & Rotating Laser Borders */}
      <style>{`
        @keyframes autoShine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          15% { transform: translateX(150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .animate-auto-shine {
          animation: autoShine 8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }
        
        @keyframes rotateLaser {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-laser-rotate {
          animation: rotateLaser 5s linear infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:55px_55px] pointer-events-none" />

      {/* AMBIENT GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none animate-drift-slow animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none animate-drift-medium" />

      <div className="max-w-[1600px] mx-auto relative z-10 px-4 md:px-8">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-5 text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Strategic{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
              Projects
            </span>
          </h1>

          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium tracking-wide leading-relaxed px-4">
            A curated portfolio of problem-solving initiatives focused on growth, clarity and measurable business impact.
          </p>

          {/* HIGH-TECH CENTERED DIVIDER */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping" />
              <div className="absolute w-4 h-4 rounded-full border border-cyan-400/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e5ff,0_0_20px_#00e5ff]" />
            </div>
            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
        </motion.div>

        {/* FILTER CATEGORIES */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] text-gray-400 mb-16 max-w-5xl mx-auto px-4 z-10 relative">
          {filters.map((filter, index) => {
            const isActive = activeFilter === filter;
            return (
              <div key={filter} className="flex items-center">
                {index > 0 && <span className="text-cyan-500 mx-3 md:mx-4 select-none font-bold animate-pulse">•</span>}
                <button
                  onClick={() => handleFilterClick(filter)}
                  className={`transition-all duration-300 hover:text-white uppercase tracking-[2px] md:tracking-[3px] whitespace-nowrap ${
                    isActive 
                      ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] font-black scale-105" 
                      : "text-gray-400"
                  }`}
                >
                  {filter}
                </button>
              </div>
            );
          })}
        </div>

        {/* CARDS GRID OR COMING SOON PLACEHOLDER */}
        <motion.div 
          layout
          className="w-full flex items-center justify-center min-h-[40vh]"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              // COMING SOON CARD
              <motion.div
                key="coming-soon"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  playTapSound();
                  setIsTapped(true);
                  setTimeout(() => setIsTapped(false), 200);
                }}
                className="group relative cursor-pointer w-full max-w-lg p-[2px] rounded-[30px] overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-500"
              >
                {/* Laser Glowing Border Effect */}
                <div className="absolute inset-0 -z-10 rounded-[30px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#d946ef] via-transparent to-[#00e5ff] animate-laser-rotate" />
                </div>

                {/* Inner Body Content */}
                <div className="bg-[#0b071a] rounded-[28px] py-14 px-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Cyberpunk HUD grid in background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.02)_1px,transparent_1px)] bg-[size:100%_10px] pointer-events-none" />
                  
                  {/* Glowing Ambient Sphere behind icon */}
                  <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#d946ef]/10 to-[#00e5ff]/10 blur-[30px] animate-pulse-glow" />

                  {/* Sparkles Icon with Pulse Glow */}
                  <div className="relative mb-6 w-16 h-16 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 flex items-center justify-center text-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_35px_rgba(0,229,255,0.4)] group-hover:scale-110 transition-all duration-500">
                    <Sparkles size={28} className="animate-spin-slow" />
                  </div>

                  <h3 
                    className="text-3xl md:text-4xl font-extrabold uppercase tracking-[6px] mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] via-fuchsia-400 to-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Coming Soon
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase font-bold max-w-xs mx-auto mb-8 leading-relaxed">
                    Workspace is being calibrated. New deployments are launching soon.
                  </p>

                  {/* Action HUD text */}
                  <span className="font-mono text-[9px] tracking-[4px] text-cyan-400/60 uppercase font-black animate-pulse">
                    [ Tap card to test audio feed ]
                  </span>
                </div>
              </motion.div>
            ) : (
              // PROJECTS GRID LIST
              <motion.div 
                key="projects-grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
              >
                {filteredProjects.map((project, idx) => {
                  const glowStyles = getCardGlowStyles(project.badge);
                  return (
                    <motion.div
                      key={project.id || project.title}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -6 }}
                      onClick={() => {
                        playTapSound();
                        setSelectedProject(project);
                      }}
                      className={`group relative cursor-pointer flex flex-col justify-between rounded-[24px] overflow-hidden border ${glowStyles.border} bg-white/[0.02] backdrop-blur-2xl ${glowStyles.shadow} hover:bg-white/[0.05] transition-all duration-500 h-full p-5`}
                    >
                      {/* Image Showcase Section */}
                      <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        {/* Badge overlay on top left of image */}
                        <div className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-full text-[8px] md:text-[9px] font-extrabold tracking-wider border uppercase backdrop-blur-md transition-all duration-500 border-pink-500/50 bg-pink-500/10 text-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.15)]">
                          {project.badge}
                        </div>
                        
                        {/* Screen Image */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Continuous Auto-Sweep Shine Element */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-auto-shine pointer-events-none"
                          style={{ animationDelay: `${idx * 0.8}s` }}
                        />
                        
                        {/* Card hover overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button className="px-5 py-2.5 text-[9px] tracking-[2px] font-bold text-white border border-cyan-400 bg-cyan-950/40 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105">
                            VIEW DETAILS
                          </button>
                        </div>
                      </div>

                      {/* Card Content Section */}
                      <div className="flex flex-col items-center text-center flex-grow">
                        <h2 
                          className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {project.title}
                        </h2>
                        
                        <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed mb-6 font-medium max-w-sm px-2">
                          {project.description}
                        </p>

                        {/* Tech stack tags */}
                        <div className="flex flex-wrap justify-center gap-2 mt-auto">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-[8px] md:text-[9px] font-extrabold tracking-wider border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 uppercase transition-all duration-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* DETAIL MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#070311] shadow-[0_0_50px_rgba(168,85,247,0.15)] scrollbar-none"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  playTapSound();
                  setSelectedProject(null);
                }}
                className="absolute top-5 right-5 z-30 p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/15 transition-all duration-200"
              >
                <X size={18} />
              </button>

              {/* Header Image banner */}
              <div className="relative h-48 md:h-64 overflow-hidden border-b border-white/5">
                <img
                  src={selectedProject.image}
                  alt=""
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070311] via-transparent to-[#070311]/60" />
                
                {/* Modal Title Overlay */}
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="inline-block mb-3 px-3 py-1.5 rounded-full text-[9px] font-extrabold tracking-wider border border-pink-500/50 bg-pink-500/10 text-pink-400 uppercase backdrop-blur-md">
                    {selectedProject.badge}
                  </div>
                  <h2 
                    className="text-2xl md:text-4xl font-extrabold text-white tracking-wide"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 md:p-8">
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm md:text-base font-normal">
                  <p className="mb-6">{selectedProject.full}</p>

                  <h4 
                    className="text-white text-sm uppercase tracking-wider font-extrabold mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Tech Stack & Tools
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1 rounded-full text-[11px] font-bold border border-cyan-500/35 bg-cyan-950/20 text-cyan-300 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playTapSound}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    <Globe size={14} />
                    Live Preview
                  </a>

                  <button
                    onClick={() => {
                      playTapSound();
                      setSelectedProject(null);
                    }}
                    className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-gray-300 text-xs tracking-wider font-bold uppercase transition-all duration-300"
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