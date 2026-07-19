import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Palette, Layers, Moon } from "lucide-react";

const AtmosphereSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(() => {
    return localStorage.getItem("portfolio_bg_template") || "aurora";
  });
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectTemplate = (templateId) => {
    setActiveTemplate(templateId);
    localStorage.setItem("portfolio_bg_template", templateId);
    window.dispatchEvent(new Event("portfolio-bg-change"));
  };

  const templates = [
    { id: "aurora", label: "Cosmic Aurora", icon: <Palette size={16} />, desc: "Cyan & Purple smooth energy flows" },
    { id: "stardust", label: "Twinkling Stardust", icon: <Moon size={16} />, desc: "Twinkling star cluster with deep blue voids" },
    { id: "cyberwave", label: "Cyber Code Rain", icon: <Layers size={16} />, desc: "Falling glowing green network data paths" },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full backdrop-blur-xl bg-black/60 border border-white/15 flex items-center justify-center text-cyan-400 hover:text-white shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
        title="Customize Background Animation"
      >
        <Sparkles size={20} className={isOpen ? "animate-spin" : "animate-pulse"} />
      </button>

      {/* Expanded Menu */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-72 p-4 rounded-3xl backdrop-blur-2xl bg-[#090518]/90 border border-white/10 shadow-2xl animate-fade-in transition-all duration-300">
          <div className="mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Background Atmosphere</h3>
            <p className="text-[10px] text-gray-500">Pick a professional eye-comfortable template</p>
          </div>

          <div className="flex flex-col gap-2">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => selectTemplate(t.id)}
                className={`w-full p-3 rounded-2xl border text-left transition-all duration-300 flex items-start gap-3 ${
                  activeTemplate === t.id
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                    : "bg-white/5 border-white/5 text-gray-300 hover:border-white/15 hover:bg-white/10"
                }`}
              >
                <span className={`p-1.5 rounded-lg ${activeTemplate === t.id ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-gray-400"}`}>
                  {t.icon}
                </span>
                <div>
                  <h4 className="text-xs font-bold">{t.label}</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5 leading-normal">{t.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AtmosphereSelector;
