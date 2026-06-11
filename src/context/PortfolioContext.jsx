import React, { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

// 1. ADD YOUR PROJECTS MANUALLY HERE 🎯
const defaultProjects = [
  {
    id: "01",
    badge: "NEW • AI • React",
    title: "Pathfinder",
    description: "I built a psychometric career discovery platform for Class 10 students, creating a 35 question quiz that maps personality traits to 20 distinct career paths with localized Indian roadmaps.",
    full: "Indian Class 10 students face one of the most consequential stream choices of their lives with almost zero structured guidance, relying on peer pressure or parental bias rather than self-awareness. I built Pathfinder as a psychometric career discovery platform that measures five core personality traits through 35 scenario-based questions, mapping them to the most suitable career paths using a cosine similarity algorithm. I designed a 35 question scenario quiz that measures five distinct personality dimensions, engineered a cosine similarity matching engine connected to 20 detailed career datasets, and integrated India-specific salary ranges, top-tier colleges, and structured professional roadmaps.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI", "React", "Firebase"],
    live: "https://www.sidpathfinder.online/",
  },
  {
    id: "02",
    badge: "NEW • Product • React",
    title: "CoachFinder",
    description: "I engineered a recommendation engine that helps students identify the ideal coaching institute for JEE, NEET, UPSC, and CA based on 7 weighted dimensions.",
    full: "Students and parents spend weeks researching coaching institutes with no objective way to compare options, relying on brand names rather than personal fit. I built CoachFinder to rank over 30 coaching institutes using a 7 dimension weighted scoring engine tailored directly to a student's budget, location, and learning style. I indexed and integrated data for 30 major institutes, including national brands like Allen and FIITJEE alongside regional names. I created a side-by-side comparison tool with winner indicators to highlight matching features, implemented a filterable search library for instant institute discovery.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Firebase", "EdTech"],
    live: "https://coachfinder-xi.vercel.app/",
  },
  {
    id: "03",
    badge: "NEW • Full Stack",
    title: "CollabX",
    description: "I built a full stack matchmaking platform for creators and brands featuring a bidirectional swipe-to-match system that only reveals contact details on mutual interest.",
    full: "Instagram creators waste hours sending cold pitches to brands that go unanswered, while brands receive hundreds of irrelevant DMs with no efficient way to filter interest. I built CollabX to act as a secure creator-brand matching portal where direct contact details are only shared when both parties swipe right, eliminating spam and outreach friction. I developed a bidirectional swipe-to-match matchmaking engine with secure matching logic, designed and deployed a REST API backend with secure JWT authentication, and structured database schemas in MongoDB to manage users, swipes, and successful matches.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://collabx-mauve.vercel.app/",
  },
  {
    id: "04",
    badge: "01 • Builder",
    title: "Booyahverse",
    description: "I built a dedicated community platform for Indian Free Fire players, complete with squad finding, arena challenges, and an integrated diamond rewards system to give competitive gamers a true home.",
    full: "Competitive Indian Free Fire players had no specialized, dedicated space to coordinate and grow their competitive careers. I designed Booyahverse to solve this perception gap and give them a professional, community-centric home base. I built a real-time squad matching system that pairs players based on rank and playstyle, eliminating uncoordinated random matching. I integrated daily arena challenges alongside a direct diamond rewards system to drive player engagement and retention. The frontend is fully responsive and optimized for mobile viewports, matching the habits of local mobile gamers.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    tags: ["GAMING", "COMMUNITY", "REACT", "VERCEL"],
    live: "https://booyahverse-india.vercel.app",
  },
  {
    id: "05",
    badge: "02 • Product",
    title: "Chakra",
    description: "I designed and launched India's premium influencer network, creating a dashboard for creators to manage brand deals, track metrics, and secure collaborations. It onboarded 2,400+ creators in month one.",
    full: "India's fast-growing creator space was held back by opaque brand deals and scattered tracking tools. I built Chakra as a premium, trust-first influencer network that automates collaboration discovery and tracking. I built a full-stack creator dashboard that compiles follower engagement, revenue metrics, and active deals into a unified view. I designed a bronze-to-gold creator tier ranking system that gamifies growth and unlocks premium, high-value brand matches. I developed a real-time deal discovery engine connecting qualified creators to curated campaigns.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    tags: ["CREATOR ECONOMY", "REACT", "NODE.JS", "DASHBOARD"],
    live: "https://chakra-kohl.vercel.app",
  },
  {
    id: "06",
    badge: "03 • Builder",
    title: "DropIQ",
    description: "I built a career credentialing platform for competitive Free Fire players, calculating a standard DropIQ Score based on in-game stats to help players share credentials directly with esports recruiters.",
    full: "Competitive mobile gamers lacked objective credentials to prove their value to professional teams and scouts. I built DropIQ as a standard resume builder and stat aggregator for competitive Free Fire players. I designed the DropIQ scoring algorithm, which aggregates gameplay statistics, tactical strategies, and decision-making metrics into a standardized performance score. I built a shareable player portfolio system so gamers can present verified resumes to professional esports recruiters instantly.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    tags: ["ESPORTS", "GAMING", "REACT", "VERCEL"],
    live: "https://freefirecareermode.com",
  },
  {
    id: "07",
    badge: "04 • Founder",
    title: "MapGalli",
    description: "I founded MapGalli to map India's vibrant street food, implementing a hyperlocal map native food discovery experience and vendor login system in a Hindi first layout tailored for local gully vendors.",
    full: "India's street food vendors are the backbone of local dining, yet they remain entirely absent from standard mapping and delivery applications. I founded MapGalli to map street food, bringing visibility to neighborhood street vendors. I developed a map-native food discovery experience using real-time geolocation to pinpoint active neighborhood stalls. I built an approachable, Hindi-first vendor management interface that lets non-technical cooks manage their profiles, listing schedules, and active menus with zero friction.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop",
    tags: ["MAPS", "FOOD TECH", "REACT", "HINDI FIRST"],
    live: "https://www.mapgalli.in",
  },
  {
    id: "08",
    badge: "05 • Builder",
    title: "PadhAI",
    description: "I built a conversational AI homework helper for Indian students in classes Nursery to 12, responding instantly in friendly Hindi, English, and Hinglish with zero signups required.",
    full: "Standard education search engines and AI assistants reply with clinical textbooks or rigid bullet points. I built PadhAI as an intelligent homework helper that explains complex lessons in a warm, conversational, friendly style. I configured the AI prompt engine to translate and explain STEM and humanities subjects in a mixture of friendly Hindi, English, and Hinglish. I optimized the response format to output clean, friendly prose, completely avoiding mechanical lists or bullet points. I built a lightweight, no-signup-needed web client to guarantee immediate educational access.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI", "EDTECH", "HINDI FIRST", "FREE"],
    live: "https://padhai-bay.vercel.app",
  },
  {
    id: "09",
    badge: "06 • Founder",
    title: "Periodically",
    description: "I founded a phase-aware cycle companion for women and their partners, building a body dashboard that translates cycle phases into science-backed mood, energy, and craving insights.",
    full: "Traditional cycle tracking applications are overly clinical, ad-heavy, or focus strictly on fertility, neglecting partners entirely. I founded Periodically to translate cycle biology into daily, actionable life context for women and their partners. I designed a phase-aware dashboard UI that dynamically shifts color theme and copy styling to mirror the active stage of the cycle. I developed a partner-facing view that explains biological context in practical terms, facilitating proactive support. I built a friendly, conversational onboarding experience that reframes cycles as a vital health dashboard rather than a secret.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    tags: ["FEMTECH", "PRODUCT", "REACT", "VERCEL"],
    live: "https://periodically.life",
  },
];

// 2. ADD YOUR CERTIFICATIONS MANUALLY HERE 🎯
const defaultCertifications = [
  {
    id: "1",
    title: "Human Computer Interaction",
    category: "NPTEL",
    score: "94%",
    badge: "Elite",
    image: "/certificates/hci.png",
    pdf: "/certificates/hci.pdf",
  },
  {
    id: "2",
    title: "Introduction to Internet of Things",
    category: "NPTEL",
    score: "75%",
    badge: "Elite",
    image: "/certificates/iot.png",
    pdf: "/certificates/iot.pdf",
  },
  {
    id: "3",
    title: "The Joy Of Computing Using Python",
    category: "NPTEL",
    score: "70%",
    badge: "Elite",
    image: "/certificates/joc.png",
    pdf: "/certificates/joc.pdf",
  },
  {
    id: "4",
    title: "Large Language Models",
    category: "NPTEL",
    score: "54%",
    badge: "Completed",
    image: "/certificates/llm.png",
    pdf: "/certificates/llm.pdf",
  },
  {
    id: "5",
    title: "Data Science Internship",
    category: "LearnNex",
    badge: "Internship",
    image: "/certificates/dci.png",
    pdf: "/certificates/dci.pdf",
  },
  {
    id: "6",
    title: "Data Science Certficate",
    category: "NPTEL",
    badge: "Data Science",
    image: "/certificates/ds.png",
  },
  {
    id: "7",
    title: "Excellence Certificate",
    category: "LearnNex",
    badge: "Excellence",
    image: "/certificates/ex.png",
  },
  {
    id: "8",
    title: "Training Certificate",
    category: "LearnNex",
    badge: "Training",
    image: "/certificates/tc.png",
  },
];

// 3. EDIT YOUR PROFILE INFO MANUALLY HERE 🎯
const defaultProfile = {
  name: "Aditya Sharma",
  title: "Artificial Intelligence",
  email: "adityasharma22093@gmail.com",
  location: "Gwalior, India",
  linkedin: "https://www.linkedin.com/in/aditya-sharma-b133622bb/",
  github: "https://github.com/Adiipandit255",
  instagram: "https://instagram.com",
  resumePreview: "/resume-preview.png",
  resumePdf: "/resume.pdf",
};

export const PortfolioProvider = ({ children }) => {
  const [projects] = useState(defaultProjects);
  const [certifications] = useState(defaultCertifications);
  const [profileInfo] = useState(defaultProfile);
  const [visitorRole, setVisitorRole] = useState(null);

  // Fallback structures so components don't crash
  const messages = [];
  const visits = [];
  const isLoggedIn = false;
  const login = () => false;
  const logout = () => {};
  const updatePasscode = () => {};
  const addProject = () => {};
  const updateProject = () => {};
  const deleteProject = () => {};
  const addCertification = () => {};
  const updateCertification = () => {};
  const deleteCertification = () => {};
  const addMessage = () => {};
  const deleteMessage = () => {};
  const toggleMessageRead = () => {};
  const markAllMessagesRead = () => {};
  const updateProfileInfo = () => {};

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        certifications,
        profileInfo,
        messages,
        visits,
        isLoggedIn,
        visitorRole,
        login,
        logout,
        setVisitorRole,
        updatePasscode,
        addProject,
        updateProject,
        deleteProject,
        addCertification,
        updateCertification,
        deleteCertification,
        addMessage,
        deleteMessage,
        toggleMessageRead,
        markAllMessagesRead,
        updateProfileInfo,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
