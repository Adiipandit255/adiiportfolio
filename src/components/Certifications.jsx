import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
import { X, Award, Eye, Calendar, Sparkles } from "lucide-react";

const Certifications = () => {
  const { certifications } = usePortfolio();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [activeModalCert, setActiveModalCert] = useState(null);

  // Skills mapping for certifications to showcase expertise validated by each course
  const certSkills = {
    "1": ["UI/UX Design", "HCI Principles", "User Psychology", "Prototyping"],
    "2": ["Embedded Systems", "Sensors", "Microcontrollers", "Smart Devices"],
    "3": ["Algorithm Design", "Logic Building", "Data Structures", "Python"],
    "4": ["Transformers", "GPT", "Prompt Engineering", "NLP Models"],
    "5": ["Data Analytics", "Pandas", "Matplotlib", "Data Visualization"],
    "6": ["Machine Learning", "Statistical Models", "R Programming", "Data Science"],
    "7": ["Project Delivery", "Agile Methodology", "Team Leadership", "Execution"],
    "8": ["Technical Training", "Public Speaking", "System Design", "Mentorship"],
  };

  const filteredCertificates = certifications.filter((item) => {
    const matchesFilter =
      selectedFilter === "All"
        ? true
        : item.category.toLowerCase() === selectedFilter.toLowerCase();

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="relative min-h-screen bg-themeBg text-themeText overflow-hidden transition-colors duration-500">

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-24">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-themeAccent1/20 bg-themeAccent1/5 text-xs font-semibold text-themeAccent1 mb-4">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            My{" "}
            <span 
              style={{
                backgroundImage: 'linear-gradient(to right, var(--theme-accent-2), var(--theme-accent-1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="bg-clip-text"
            >
              Certifications
            </span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg max-w-xl mx-auto">
            A comprehensive log of my verified learning journey, technical certifications, and academic milestones.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-themeAccent1/20 transition duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--theme-accent-1)" }}>
              {certifications.length}+
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Certificates Earned</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-themeAccent2/20 transition duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--theme-accent-2)" }}>
              {certifications.filter(c => c.category === "NPTEL").length}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">NPTEL Courses</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-themeAccent1/20 transition duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--theme-accent-1)" }}>
              94%
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Highest Score</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-themeAccent2/20 transition duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--theme-accent-2)" }}>
              Elite
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Performance Rating</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-14">
          <input
            type="text"
            placeholder="Search Certificates by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-themeAccent1/30 transition text-white"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["All", "NPTEL", "LearnNex", "Samatrix"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              style={selectedFilter === filter ? {
                backgroundColor: "var(--theme-accent-1)",
                color: "#000"
              } : {
                borderColor: "rgba(255,255,255,0.1)"
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedFilter === filter
                  ? ""
                  : "bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-themeAccent1/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Area */}
              <div className="relative overflow-hidden aspect-[4/3] bg-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                
                {/* Verified Issuer Stamp */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-green-500/30 text-[10px] font-bold text-green-400 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3.5">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 border border-white/10 uppercase tracking-wider text-gray-400">
                      {cert.category}
                    </span>
                    {cert.badge && (
                      <span 
                        style={{ borderColor: "rgba(var(--theme-accent-rgb-2), 0.2)", color: "var(--theme-accent-2)", backgroundColor: "rgba(var(--theme-accent-rgb-2), 0.05)" }}
                        className="px-3 py-0.5 rounded-full text-[10px] font-bold border"
                      >
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold leading-tight group-hover:text-themeAccent1 transition duration-200">
                    {cert.title}
                  </h3>

                  {cert.score && (
                    <div className="flex items-center gap-1.5 mt-2.5 text-xs text-themeAccent1 font-medium">
                      <Sparkles size={12} />
                      <span>Score Achieved: {cert.score}</span>
                    </div>
                  )}

                  {/* Skills Validated Badge List */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {(certSkills[cert.id] || ["Computer Science", "Engineering"]).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[9px] bg-white/[0.03] text-gray-500 border border-white/5 px-2 py-0.5 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View/Preview Button only */}
                <div className="mt-6">
                  <button
                    onClick={() => setActiveModalCert(cert)}
                    style={{
                      backgroundImage: "linear-gradient(to right, var(--theme-accent-2), var(--theme-accent-1))",
                    }}
                    className="w-full py-3 rounded-xl text-black font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye size={16} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="mt-28">
          <h2 className="text-4xl font-black text-center mb-14">
            Learning Timeline
          </h2>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10">
            {/* Timeline Vertical line */}
            <div className="absolute left-[30px] sm:left-[43px] top-4 bottom-4 w-[2px]" style={{ backgroundImage: "linear-gradient(to bottom, var(--theme-accent-2), var(--theme-accent-1))" }} />

            <div className="space-y-12">
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute left-[-2px] sm:left-[-1px] top-1.5 w-4 h-4 rounded-full bg-themeAccent2 border-2 border-black" />
                <h3 className="text-xl font-black" style={{ color: "var(--theme-accent-2)" }}>
                  2025 Milestones
                </h3>
                <ul className="mt-3 text-gray-400 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent1" />
                    <span>Human Computer Interaction (94% - Elite Silver/Gold)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent1" />
                    <span>Introduction to IoT (75% - Elite Score)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent1" />
                    <span>Large Language Models (Specialized Course)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent1" />
                    <span>The Joy of Computing using Python</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 sm:pl-12">
                <div className="absolute left-[-2px] sm:left-[-1px] top-1.5 w-4 h-4 rounded-full bg-themeAccent1 border-2 border-black" />
                <h3 className="text-xl font-black" style={{ color: "var(--theme-accent-1)" }}>
                  2024 Milestones
                </h3>
                <ul className="mt-3 text-gray-400 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent2" />
                    <span>Data Science & AI Internship (LearnNex)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent2" />
                    <span>Technical Training Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-themeAccent2" />
                    <span>Academic Excellence Recognition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-28 border-t border-white/10 pt-16">
          <h2 className="text-4xl font-black">
            Continuous Learning
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
            Building expertise through industry certifications, internships, and hands-on developer projects.
          </p>
        </div>
      </div>

      {/* LIGHTBOX PREVIEW MODAL */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveModalCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl border border-white/10 bg-[#090513] overflow-hidden shadow-2xl p-6"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-[10px] text-themeAccent1 font-bold uppercase tracking-wider">
                    {activeModalCert.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {activeModalCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-black max-h-[60vh] flex items-center justify-center">
                <img
                  src={activeModalCert.image}
                  alt={activeModalCert.title}
                  className="max-h-[55vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Modal Footer info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {(certSkills[activeModalCert.id] || ["Engineering"]).map((skill, idx) => (
                    <span key={idx} className="text-[10px] bg-themeAccent1/10 text-themeAccent1 px-2.5 py-1 rounded-lg font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {activeModalCert.score && (
                  <div className="text-xs text-gray-400">
                    Validated Score: <span className="font-bold text-white text-sm" style={{ color: "var(--theme-accent-1)" }}>{activeModalCert.score}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;