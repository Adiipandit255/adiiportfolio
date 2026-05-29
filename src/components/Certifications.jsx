import { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Human Computer Interaction",
    category: "NPTEL",
    score: "94%",
    badge: "Elite",
    image: "/certificates/hci.png",
    pdf: "/certificates/hci.pdf",
  },

  {
    id: 2,
    title: "Introduction to Internet of Things",
    category: "NPTEL",
    score: "75%",
    badge: "Elite",
    image: "/certificates/iot.png",
    pdf: "/certificates/iot.pdf",
  },

  {
    id: 3,
    title: "The Joy Of Computing Using Python",
    category: "NPTEL",
    score: "70%",
    badge: "Elite",
    image: "/certificates/joc.png",
    pdf: "/certificates/joc.pdf",
  },

  {
    id: 4,
    title: "Large Language Models",
    category: "NPTEL",
    score: "54%",
    badge: "Completed",
    image: "/certificates/llm.png",
    pdf: "/certificates/llm.pdf",
  },

  {
    id: 5,
    title: "Data Science Internship",
    category: "LearnNex",
    badge: "Internship",
    image: "/certificates/dci.png",
    pdf: "/certificates/dci.pdf",
  },

  {
    id: 6,
    title: "Data Science Certficate",
    category: "NPTEL",
    badge: "Data Science",
    image: "/certificates/ds.png",
  },

  {
    id: 7,
    title: "Excellence Certificate",
    category: "LearnNex",
    badge: "Excellence",
    image: "/certificates/ex.png",
  },
   {
    id: 8,
    title: "Training Certificate",
    category: "LearnNex",
    badge: "Training",
    image: "/certificates/tc.png",
  },
];

const Certifications = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCertificates = certificates.filter((item) => {
    const matchesFilter =
      selectedFilter === "All"
        ? true
        : item.category === selectedFilter;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="relative min-h-screen bg-[#03040a] text-white overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* CYAN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Verified Learning Journey & Professional Achievements
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-300">7+</h2>
            <p className="text-gray-400 mt-2">
              Certificates
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-300">4</h2>
            <p className="text-gray-400 mt-2">
              NPTEL Courses
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-300">94%</h2>
            <p className="text-gray-400 mt-2">
              Highest Score
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-300">
              Elite
            </h2>
            <p className="text-gray-400 mt-2">
              Achiever
            </p>
          </div>

        </div>

        {/* SEARCH */}
        <div className="mt-14">

          <input
            type="text"
            placeholder="Search Certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-white/5
              border
              border-cyan-500/20
              rounded-2xl
              px-6
              py-4
              outline-none
            "
          />

        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          {["All", "NPTEL", "LearnNex", "Samatrix"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() =>
                  setSelectedFilter(filter)
                }
                className={`
                  px-6 py-3 rounded-full
                  transition-all
                  ${
                    selectedFilter === filter
                      ? "bg-cyan-400 text-black"
                      : "border border-cyan-500/30"
                  }
                `}
              >
                {filter}
              </button>
            )
          )}

        </div>
                {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {filteredCertificates.map((cert) => (

            <motion.div
              key={cert.id}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-cyan-500/20
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >

              {/* SHINE EFFECT */}
              <div
                className="
                  absolute
                  top-0
                  left-[-100%]
                  h-full
                  w-[40%]
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  group-hover:left-[150%]
                  transition-all
                  duration-[1500ms]
                "
              />

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex justify-between items-center mb-3">

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      bg-cyan-500/20
                      border
                      border-cyan-500/30
                    "
                  >
                    {cert.category}
                  </span>

                  <span
                    className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      bg-purple-500/20
                      border
                      border-purple-500/30
                    "
                  >
                    {cert.badge}
                  </span>

                </div>

                <h3 className="text-xl font-bold">
                  {cert.title}
                </h3>

                {cert.score && (
                  <p className="text-cyan-300 mt-2">
                    Score: {cert.score}
                  </p>
                )}

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">

                  <button
                    className="
                      flex-1
                      py-3
                      rounded-xl
                      bg-cyan-400
                      text-black
                      font-semibold
                    "
                  >
                    View
                  </button>

                  <a
                    href={cert.pdf}
                    download
                    className="
                      flex-1
                      py-3
                      rounded-xl
                      text-center
                      border
                      border-cyan-400
                    "
                  >
                    Download
                  </a>

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

          <div className="max-w-4xl mx-auto">

            <div className="border-l-2 border-cyan-500/30 pl-10 space-y-12">

              <div>

                <h3 className="text-cyan-300 text-xl font-bold">
                  2025
                </h3>

                <ul className="mt-3 text-gray-300 space-y-2">
                  <li>Human Computer Interaction (94%)</li>
                  <li>Introduction to IoT (75%)</li>
                  <li>Large Language Models</li>
                  <li>Joy of Computing using Python</li>
                </ul>

              </div>

              <div>

                <h3 className="text-cyan-300 text-xl font-bold">
                  2024
                </h3>

                <ul className="mt-3 text-gray-300 space-y-2">
                  <li>Data Science Internship</li>
                  <li>Training Completion</li>
                  <li>Excellence Certificate</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">

          <h2 className="text-4xl font-black">
            Continuous Learning
          </h2>

          <p className="text-gray-400 mt-4">
            Building expertise through industry certifications,
            internships and hands-on projects.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Certifications;