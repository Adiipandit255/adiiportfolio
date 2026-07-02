import React, { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

// 1. ADD YOUR PROJECTS MANUALLY HERE 🎯
const defaultProjects = [
  /*
  Example Project Format:
  {
    id: "01",
    badge: "NEW • Tech",
    title: "Project Title",
    description: "Short description here...",
    full: "Detailed description here...",
    image: "https://images.unsplash.com/...",
    tags: ["React", "Vite"],
    live: "https://live-link.com",
  }
  */
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
