import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import { Fingerprint } from "lucide-react";

const RoleSelectModal = () => {
  const { visitorRole, setVisitorRole } = usePortfolio();
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState(null);
  const [loadingText, setLoadingText] = useState("");

  // Hide the modal if role is already selected, or if the user is visiting the admin login page directly
  if (visitorRole !== null || location.pathname === "/admin") return null;

  const roles = [
    {
      id: "hr",
      emoji: "💼",
      text: "I am a recruiter looking for someone who actually ships things, not just talks about them.",
      borderColor: "border-l-[#c678dd] hover:border-l-[#d596e7] hover:border-r hover:border-y hover:border-white/10",
      glowColor: "hover:shadow-[0_0_35px_rgba(198,120,221,0.22)]",
      accent: "#c678dd",
      borderTheme: "border-[#c678dd]/20"
    },
    {
      id: "brand",
      emoji: "🚀",
      text: "I am a founder or brand that needs real growth, killer campaigns, and zero excuses.",
      borderColor: "border-l-[#00e5ff] hover:border-l-[#5df2ff] hover:border-r hover:border-y hover:border-white/10",
      glowColor: "hover:shadow-[0_0_35px_rgba(0,229,255,0.22)]",
      accent: "#00e5ff",
      borderTheme: "border-[#00e5ff]/20"
    },
    {
      id: "guest",
      emoji: "👀",
      text: "I have no idea how I got here but I am intrigued and staying.",
      borderColor: "border-l-[#d946ef] hover:border-l-[#e870fb] hover:border-r hover:border-y hover:border-white/10",
      glowColor: "hover:shadow-[0_0_35px_rgba(217,70,239,0.22)]",
      accent: "#d946ef",
      borderTheme: "border-[#d946ef]/20"
    },
  ];

  const handleRoleSelection = (roleId) => {
    if (selectedRole) return; // prevent multiple clicks
    setSelectedRole(roleId);
    setLoadingText("INITIALIZING SYSTEM...");

    setTimeout(() => {
      setLoadingText("CALIBRATING WORKSPACE...");
    }, 700);

    setTimeout(() => {
      setVisitorRole(roleId);
    }, 1500);
  };

  const isAnySelected = selectedRole !== null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-[#030108]/98 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
        {/* Holographic Scanline Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(18, 10, 36, 0) 50%, rgba(0, 229, 255, 0.25) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        {/* Floating Cyber Glows */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#d946ef]/5 rounded-full blur-[140px] pointer-events-none animate-drift-slow" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none animate-drift-medium" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative max-w-3xl w-full text-center py-12 px-6 z-10"
        >
          {/* Top Interface Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-8">
            <Fingerprint size={12} className="text-[#00e5ff] animate-pulse" />
            <span>Secure Access Terminal</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none text-white font-sans uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Initialize{" "}
              <span className="bg-gradient-to-r from-[#d946ef] to-[#00e5ff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                Environment
              </span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
              Select your visitor profile to calibrate the workspace layout and system highlights.
            </p>
          </div>

          {/* Role Cards Vertical Stack */}
          <div className="flex flex-col gap-5 max-w-2xl mx-auto w-full text-left">
            {roles.map((role, idx) => {
              const isCurrentSelected = selectedRole === role.id;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  whileHover={!isAnySelected ? { x: 6, scale: 1.01 } : {}}
                  onClick={() => handleRoleSelection(role.id)}
                  className={`group cursor-pointer rounded-2xl p-6 md:p-7 border border-white/5 border-l-[5px] ${role.borderColor} bg-black/50 backdrop-blur-xl flex items-center justify-between transition-all duration-300 relative overflow-hidden ${role.glowColor} ${
                    isAnySelected 
                      ? (isCurrentSelected ? "border-l-[6px] border-l-[#00e5ff] bg-white/[0.04]" : "opacity-20 scale-95 pointer-events-none") 
                      : ""
                  }`}
                >
                  {/* Holographic background glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle at 10% 50%, ${role.accent}, transparent)`
                    }}
                  />

                  <div className="flex items-center gap-5 relative z-10 w-full">
                    {/* Emoji Icon */}
                    <span className="text-2xl select-none leading-none flex-shrink-0">
                      {role.emoji}
                    </span>

                    {/* Role Text description */}
                    <p className="text-[13px] sm:text-[15px] font-medium tracking-wide text-white/90 leading-relaxed font-sans pr-4">
                      {role.text}
                    </p>
                  </div>

                  {/* Right Arrow indicator */}
                  <div 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 text-gray-500 mr-1"
                    style={{ color: role.accent }}
                  >
                    <span className="text-base font-bold">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Admin Terminal Access Profile Icon */}
          {!isAnySelected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-10 flex justify-center"
            >
              <Link 
                to="/admin" 
                className="group flex flex-col items-center gap-2.5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#00e5ff] group-hover:border-[#00e5ff]/50 group-hover:bg-[#00e5ff]/5 shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transition-all duration-500 relative overflow-hidden">
                  {/* Holographic scanner line pulse */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e5ff]/10 to-transparent -translate-y-full group-hover:animate-pulse pointer-events-none" />
                  
                  {/* Profile SVG Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-7 h-7 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.963-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <span className="text-[10px] font-mono tracking-[4px] text-gray-500 group-hover:text-cyan-400 uppercase font-extrabold transition-colors duration-300">
                  Admin Terminal
                </span>
              </Link>
            </motion.div>
          )}

          {/* INITIALIZING SYSTEM HUD ANIMATION */}
          <AnimatePresence>
            {isAnySelected && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="mt-10 flex flex-col items-center gap-3.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono text-xs tracking-[4px] text-cyan-400 font-extrabold uppercase animate-pulse">
                    {loadingText}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-56 h-1 bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-[#d946ef] to-[#00e5ff] shadow-[0_0_8px_#00e5ff]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RoleSelectModal;
