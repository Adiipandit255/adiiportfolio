import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
import { isFirebaseConfigured } from "../firebase";
import {
  FaLock,
  FaFolder,
  FaAward,
  FaInbox,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaLink,
  FaMapMarkerAlt,
  FaChartLine
} from "react-icons/fa";

const AdminPanel = () => {
  const {
    projects,
    certifications,
    profileInfo,
    messages,
    isLoggedIn,
    login,
    logout,
    updatePasscode,
    addProject,
    updateProject,
    deleteProject,
    addCertification,
    updateCertification,
    deleteCertification,
    deleteMessage,
    toggleMessageRead,
    markAllMessagesRead,
    updateProfileInfo,
    visits
  } = usePortfolio();

  // Authentication State
  const [passcodeVal, setPasscodeVal] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");

  // UI Tabs State
  const [activeTab, setActiveTab] = useState("projects");

  // Notifications State (Internal Toasts)
  const [toast, setToast] = useState(null);
  const triggerToast = (text, type = "success") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Modals / Forms State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("project"); // "project" or "cert"
  const [editMode, setEditMode] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Form Fields - Projects
  const [projForm, setProjForm] = useState({
    title: "",
    badge: "",
    description: "",
    full: "",
    image: "",
    tags: "",
    live: ""
  });

  // Form Fields - Certifications
  const [certForm, setCertForm] = useState({
    title: "",
    category: "",
    score: "",
    badge: "",
    image: "",
    pdf: ""
  });

  // Form Fields - Settings
  const [settingsForm, setSettingsForm] = useState({
    name: profileInfo.name,
    title: profileInfo.title,
    email: profileInfo.email,
    location: profileInfo.location,
    linkedin: profileInfo.linkedin,
    github: profileInfo.github,
    instagram: profileInfo.instagram,
    resumePreview: profileInfo.resumePreview,
    resumePdf: profileInfo.resumePdf
  });

  const [passForm, setPassForm] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: ""
  });

  const [uploadingProjImg, setUploadingProjImg] = useState(false);
  const [uploadingCertImg, setUploadingCertImg] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [uploadingResumePreview, setUploadingResumePreview] = useState(false);

  const handleFileUpload = async (e, type, field = "image") => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === "project") {
      setUploadingProjImg(true);
    } else if (type === "cert") {
      setUploadingCertImg(true);
    } else if (field === "resumePdf") {
      setUploadingResume(true);
    } else {
      setUploadingResumePreview(true);
    }

    try {
      if (isFirebaseConfigured()) {
        const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
        const { storage } = await import("../firebase");
        const fileRef = ref(storage, `${type}s/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        if (type === "project") {
          setProjForm((prev) => ({ ...prev, [field]: downloadURL }));
        } else if (type === "cert") {
          setCertForm((prev) => ({ ...prev, [field]: downloadURL }));
        } else if (type === "settings") {
          setSettingsForm((prev) => ({ ...prev, [field]: downloadURL }));
        }
        triggerToast("File uploaded to Firebase Storage!");
      } else {
        // Fallback to Base64 data URL for local storage
        const reader = new FileReader();
        reader.onloadend = () => {
          if (type === "project") {
            setProjForm((prev) => ({ ...prev, [field]: reader.result }));
          } else if (type === "cert") {
            setCertForm((prev) => ({ ...prev, [field]: reader.result }));
          } else if (type === "settings") {
            setSettingsForm((prev) => ({ ...prev, [field]: reader.result }));
          }
          triggerToast("File saved locally!");
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.error("Firebase Storage upload failed, falling back to local Base64 storage:", err);
      triggerToast("Cloud storage upload failed. Saving image locally instead!", "error");
      
      // Automatic Base64 Fallback
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (type === "project") {
            setProjForm((prev) => ({ ...prev, [field]: reader.result }));
          } else if (type === "cert") {
            setCertForm((prev) => ({ ...prev, [field]: reader.result }));
          } else if (type === "settings") {
            setSettingsForm((prev) => ({ ...prev, [field]: reader.result }));
          }
        };
        reader.readAsDataURL(file);
      } catch (innerErr) {
        console.error("Base64 fallback failed:", innerErr);
      }
    } finally {
      if (type === "project") {
        setUploadingProjImg(false);
      } else if (type === "cert") {
        setUploadingCertImg(false);
      } else if (field === "resumePdf") {
        setUploadingResume(false);
      } else {
        setUploadingResumePreview(false);
      }
    }
  };

  // Form Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(passcodeVal);
    if (success) {
      triggerToast("Logged in successfully!");
      setPasscodeVal("");
      setLoginError("");
    } else {
      setLoginError("Invalid passcode. Please try again.");
    }
  };

  const openProjectModal = (project = null) => {
    setModalType("project");
    if (project) {
      setEditMode(true);
      setSelectedItemId(project.id);
      setProjForm({
        title: project.title,
        badge: project.badge || "",
        description: project.description,
        full: project.full || "",
        image: project.image,
        tags: Array.isArray(project.tags) ? project.tags.join(", ") : project.tags,
        live: project.live || ""
      });
    } else {
      setEditMode(false);
      setSelectedItemId(null);
      setProjForm({
        title: "",
        badge: "",
        description: "",
        full: "",
        image: "",
        tags: "",
        live: ""
      });
    }
    setIsModalOpen(true);
  };

  const openCertModal = (cert = null) => {
    setModalType("cert");
    if (cert) {
      setEditMode(true);
      setSelectedItemId(cert.id);
      setCertForm({
        title: cert.title,
        category: cert.category,
        score: cert.score || "",
        badge: cert.badge || "",
        image: cert.image || "",
        pdf: cert.pdf || ""
      });
    } else {
      setEditMode(false);
      setSelectedItemId(null);
      setCertForm({
        title: "",
        category: "",
        score: "",
        badge: "",
        image: "",
        pdf: ""
      });
    }
    setIsModalOpen(true);
  };

  const handleProjSubmit = (e) => {
    e.preventDefault();
    const formattedTags = projForm.tags
      ? projForm.tags.split(",").map((t) => t.trim()).filter((t) => t.length > 0)
      : [];

    const projectData = {
      title: projForm.title,
      badge: projForm.badge,
      description: projForm.description,
      full: projForm.full,
      image: projForm.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      tags: formattedTags,
      live: projForm.live
    };

    if (editMode) {
      updateProject(selectedItemId, projectData);
      triggerToast("Project updated successfully!");
    } else {
      addProject(projectData);
      triggerToast("Project added successfully!");
    }
    setIsModalOpen(false);
  };

  const handleCertSubmit = (e) => {
    e.preventDefault();
    const certData = {
      title: certForm.title,
      category: certForm.category,
      score: certForm.score,
      badge: certForm.badge,
      image: certForm.image || "/certificates/placeholder.png",
      pdf: certForm.pdf
    };

    if (editMode) {
      updateCertification(selectedItemId, certData);
      triggerToast("Certification updated successfully!");
    } else {
      addCertification(certData);
      triggerToast("Certification added successfully!");
    }
    setIsModalOpen(false);
  };

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    updateProfileInfo(settingsForm);
    triggerToast("Profile settings updated successfully!");
  };

  const handlePasscodeChange = (e) => {
    e.preventDefault();
    if (passForm.newPass !== passForm.confirmPass) {
      triggerToast("New passcodes do not match!", "error");
      return;
    }
    const success = updatePasscode(passForm.newPass);
    if (success) {
      triggerToast("Passcode changed successfully!");
      setPassForm({ currentPass: "", newPass: "", confirmPass: "" });
    }
  };

  // Helper for dates
  const formatTime = (isoString) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleString();
    } catch (e) {
      return isoString;
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white pt-24 pb-16 px-4 md:px-8">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TOAST SYSTEM */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className={`fixed top-24 right-4 md:right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${
                toast.type === "error"
                  ? "bg-red-500/20 border-red-500/50 text-red-300"
                  : "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
              }`}
            >
              <FaCheckCircle className="text-xl" />
              <span className="font-semibold text-sm">{toast.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. LOGIN INTERFACE */}
        {!isLoggedIn ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md p-8 rounded-3xl border border-cyan-500/20 bg-black/40 backdrop-blur-xl relative"
            >
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] animate-pulse">
                  <FaLock />
                </div>
              </div>

              <h2 className="text-3xl font-black text-center mb-2">Admin Panel</h2>
              <p className="text-gray-400 text-center text-sm mb-8">Enter your passcode to manage the portfolio</p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2 relative">
                  <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">Passcode</label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      value={passcodeVal}
                      onChange={(e) => setPasscodeVal(e.target.value)}
                      className="w-full p-4 pr-12 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                    >
                      {showPass ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {loginError && <p className="text-red-400 text-xs mt-1">{loginError}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold tracking-wider hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition duration-300"
                >
                  ACCESS DASHBOARD
                </motion.button>
              </form>
            </motion.div>
          </div>
        ) : (
          /* 2. LOGGED IN DASHBOARD */
          <div className="space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-3xl border border-cyan-500/10 bg-[#071018]/80 backdrop-blur-xl"
            >
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-gray-400 text-sm mt-1">
                  Manage projects, certificates, read client inquiries, and edit links.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="font-bold text-white">{profileInfo.name}</p>
                  <p className="text-xs text-cyan-400 uppercase tracking-widest">{profileInfo.title}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    triggerToast("Logged out!");
                  }}
                  className="px-5 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition flex items-center gap-2 text-sm font-semibold"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </motion.div>

            {/* Navigation Tabs & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Tabs */}
              <div className="flex flex-row overflow-x-auto lg:flex-col gap-3 scrollbar-none pb-2 w-full">
                {[
                  { id: "projects", label: "Projects", icon: <FaFolder /> },
                  { id: "certifications", label: "Certifications", icon: <FaAward /> },
                  {
                    id: "messages",
                    label: "Messages Inbox",
                    icon: <FaInbox />,
                    count: messages.filter((m) => !m.read).length
                  },
                  { id: "analytics", label: "Visitor Traffic", icon: <FaChartLine /> },
                  { id: "settings", label: "Profile Settings", icon: <FaCog /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border transition duration-300 font-semibold whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                        : "bg-[#071018]/50 border-white/5 text-gray-400 hover:border-cyan-500/30 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                    {tab.count !== undefined && tab.count > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-pink-500 text-white animate-pulse">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 md:p-8 rounded-3xl border border-white/10 bg-[#071018]/40 backdrop-blur-2xl min-h-[50vh]"
                >
                  {/* TAB 1: PROJECTS */}
                  {activeTab === "projects" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Manage Projects</h2>
                        <button
                          onClick={() => openProjectModal(null)}
                          className="px-4 py-2.5 rounded-xl bg-cyan-400 text-black font-semibold text-xs tracking-wider flex items-center gap-2 hover:scale-105 transition"
                        >
                          <FaPlus /> ADD NEW
                        </button>
                      </div>

                      {projects.length === 0 ? (
                        <div className="text-center py-16 text-gray-500">
                          No projects added yet. Click Add New to create one!
                        </div>
                      ) : (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {projects.map((proj) => (
                            <div
                              key={proj.id}
                              className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 transition flex flex-col justify-between"
                            >
                              <div className="flex gap-4">
                                <img
                                  src={proj.image}
                                  alt=""
                                  className="w-16 h-16 rounded-xl object-cover border border-white/10 flex-shrink-0"
                                />
                                <div className="min-w-0">
                                  <span className="px-2.5 py-0.5 rounded-full text-[9px] border border-cyan-500/30 text-cyan-300 bg-cyan-500/5">
                                    {proj.badge || "Project"}
                                  </span>
                                  <h3 className="text-lg font-bold truncate mt-2">{proj.title}</h3>
                                  <p className="text-gray-400 text-xs line-clamp-2 mt-1">{proj.description}</p>
                                </div>
                              </div>
                              <div className="flex gap-2 justify-end mt-4 pt-4 border-t border-white/5">
                                <button
                                  onClick={() => openProjectModal(proj)}
                                  className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition text-sm"
                                  title="Edit"
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  onClick={() => {
                                    if (confirm("Are you sure you want to delete this project?")) {
                                      deleteProject(proj.id);
                                      triggerToast("Project deleted.");
                                    }
                                  }}
                                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition text-sm"
                                  title="Delete"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 2: CERTIFICATIONS */}
                  {activeTab === "certifications" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Manage Certifications</h2>
                        <button
                          onClick={() => openCertModal(null)}
                          className="px-4 py-2.5 rounded-xl bg-cyan-400 text-black font-semibold text-xs tracking-wider flex items-center gap-2 hover:scale-105 transition"
                        >
                          <FaPlus /> ADD NEW
                        </button>
                      </div>

                      {certifications.length === 0 ? (
                        <div className="text-center py-16 text-gray-500">
                          No certifications added yet. Click Add New to create one!
                        </div>
                      ) : (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {certifications.map((cert) => (
                            <div
                              key={cert.id}
                              className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 transition flex flex-col justify-between"
                            >
                              <div className="flex gap-4">
                                <img
                                  src={cert.image}
                                  alt=""
                                  className="w-16 h-16 rounded-xl object-cover border border-white/10 flex-shrink-0"
                                />
                                <div className="min-w-0">
                                  <div className="flex flex-wrap gap-1.5">
                                    <span className="px-2 py-0.5 rounded-full text-[9px] border border-cyan-500/30 text-cyan-300 bg-cyan-500/5">
                                      {cert.category}
                                    </span>
                                    {cert.badge && (
                                      <span className="px-2 py-0.5 rounded-full text-[9px] border border-purple-500/30 text-purple-300 bg-purple-500/5">
                                        {cert.badge}
                                      </span>
                                    )}
                                  </div>
                                  <h3 className="text-base font-bold truncate mt-2">{cert.title}</h3>
                                  {cert.score && (
                                    <p className="text-xs text-cyan-400 font-semibold mt-1">Score: {cert.score}</p>
                                  )}
                                </div>
                              </div>
                              <div className="flex gap-2 justify-end mt-4 pt-4 border-t border-white/5">
                                <button
                                  onClick={() => openCertModal(cert)}
                                  className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition text-sm"
                                  title="Edit"
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  onClick={() => {
                                    if (confirm("Are you sure you want to delete this certification?")) {
                                      deleteCertification(cert.id);
                                      triggerToast("Certification deleted.");
                                    }
                                  }}
                                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition text-sm"
                                  title="Delete"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 3: INBOX */}
                  {activeTab === "messages" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Inbox Messages ({messages.length})</h2>
                        {messages.length > 0 && (
                          <button
                            onClick={() => {
                              markAllMessagesRead();
                              triggerToast("All marked as read!");
                            }}
                            className="text-xs font-semibold text-cyan-400 hover:underline"
                          >
                            Mark all as read
                          </button>
                        )}
                      </div>

                      {messages.length === 0 ? (
                        <div className="text-center py-16 text-gray-500">
                          Inbox is empty. Messages submitted via the contact form will show up here.
                        </div>
                      ) : (
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                          {messages.map((msg) => (
                            <div
                              key={msg.id}
                              className={`p-5 rounded-2xl border transition duration-300 flex flex-col justify-between gap-4 relative ${
                                msg.read
                                  ? "bg-white/[0.01] border-white/5 opacity-80"
                                  : "bg-cyan-500/[0.03] border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.02)]"
                              }`}
                            >
                              {!msg.read && (
                                <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                              )}
                              <div>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                                    <FaUser className="text-xs text-gray-400" />
                                    {msg.name}
                                  </h3>
                                  <a
                                    href={`mailto:${msg.email}`}
                                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1.5"
                                  >
                                    <FaEnvelope />
                                    {msg.email}
                                  </a>
                                  <span className="text-[10px] text-gray-500 ml-auto">
                                    {formatTime(msg.timestamp)}
                                  </span>
                                </div>
                                <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed pl-5 border-l border-white/10 mt-3">
                                  {msg.message}
                                </p>
                              </div>

                              <div className="flex gap-3 justify-end items-center mt-2">
                                <button
                                  onClick={() => toggleMessageRead(msg.id)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                                    msg.read
                                      ? "border-white/10 hover:bg-white/10 text-gray-400"
                                      : "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300"
                                  }`}
                                >
                                  {msg.read ? "Mark Unread" : "Mark Read"}
                                </button>
                                <button
                                  onClick={() => {
                                    if (confirm("Delete this message?")) {
                                      deleteMessage(msg.id);
                                      triggerToast("Message deleted.");
                                    }
                                  }}
                                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition text-sm"
                                  title="Delete"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 4: SETTINGS */}
                  {activeTab === "settings" && (
                    <div className="space-y-8">
                      {/* Profile Settings */}
                      <form onSubmit={handleSettingsSubmit} className="space-y-6">
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-3">Update Profile Links</h2>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaUser className="text-xs" /> Full Name
                            </label>
                            <input
                              type="text"
                              value={settingsForm.name}
                              onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaAward className="text-xs" /> Role / Title
                            </label>
                            <input
                              type="text"
                              value={settingsForm.title}
                              onChange={(e) => setSettingsForm({ ...settingsForm, title: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaEnvelope className="text-xs" /> Contact Email
                            </label>
                            <input
                              type="email"
                              value={settingsForm.email}
                              onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaMapMarkerAlt className="text-xs" /> Location
                            </label>
                            <input
                              type="text"
                              value={settingsForm.location}
                              onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaLink className="text-xs" /> LinkedIn URL
                            </label>
                            <input
                              type="url"
                              value={settingsForm.linkedin}
                              onChange={(e) => setSettingsForm({ ...settingsForm, linkedin: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaLink className="text-xs" /> GitHub URL
                            </label>
                            <input
                              type="url"
                              value={settingsForm.github}
                              onChange={(e) => setSettingsForm({ ...settingsForm, github: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaLink className="text-xs" /> Instagram URL
                            </label>
                            <input
                              type="url"
                              value={settingsForm.instagram || ""}
                              onChange={(e) => setSettingsForm({ ...settingsForm, instagram: e.target.value })}
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                            />
                          </div>

                          <div className="space-y-2 border border-white/5 p-4 rounded-2xl bg-white/[0.01] md:col-span-2">
                            <label className="text-xs text-gray-300 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaLink className="text-xs" /> Resume PDF Document
                            </label>
                            <div className="grid sm:grid-cols-2 gap-4 mt-2">
                              <div className="space-y-1">
                                <label className="text-[10px] text-gray-400 font-bold uppercase">Upload PDF File</label>
                                <input
                                  type="file"
                                  accept="application/pdf"
                                  onChange={(e) => handleFileUpload(e, "settings", "resumePdf")}
                                  className="w-full p-2.5 rounded-lg bg-white/5 border border-white/10 outline-none text-white text-xs file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-cyan-400 file:text-black hover:file:bg-cyan-300 file:cursor-pointer"
                                />
                                {uploadingResume && <p className="text-[10px] text-cyan-400 animate-pulse mt-1">Uploading PDF...</p>}
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] text-gray-400 font-bold uppercase">Or PDF URL / Path</label>
                                <input
                                  type="text"
                                  value={settingsForm.resumePdf}
                                  onChange={(e) => setSettingsForm({ ...settingsForm, resumePdf: e.target.value })}
                                  placeholder="/resume.pdf"
                                  className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 transition text-sm"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2 border border-white/5 p-4 rounded-2xl bg-white/[0.01] md:col-span-2">
                            <label className="text-xs text-gray-300 uppercase tracking-widest font-bold flex items-center gap-2">
                              <FaLink className="text-xs" /> Resume Preview Image
                            </label>
                            <div className="grid sm:grid-cols-2 gap-4 mt-2">
                              <div className="space-y-1">
                                <label className="text-[10px] text-gray-400 font-bold uppercase">Upload Preview Image</label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handleFileUpload(e, "settings", "resumePreview")}
                                  className="w-full p-2.5 rounded-lg bg-white/5 border border-white/10 outline-none text-white text-xs file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-cyan-400 file:text-black hover:file:bg-cyan-300 file:cursor-pointer"
                                />
                                {uploadingResumePreview && <p className="text-[10px] text-cyan-400 animate-pulse mt-1">Uploading Image...</p>}
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] text-gray-400 font-bold uppercase">Or Image URL / Path</label>
                                <input
                                  type="text"
                                  value={settingsForm.resumePreview}
                                  onChange={(e) => setSettingsForm({ ...settingsForm, resumePreview: e.target.value })}
                                  placeholder="/resume-preview.png"
                                  className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 transition text-sm"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition text-sm"
                        >
                          SAVE CHANGES
                        </motion.button>
                      </form>

                      {/* Security Settings */}
                      <form onSubmit={handlePasscodeChange} className="space-y-6 pt-8 border-t border-white/10">
                        <h2 className="text-2xl font-bold">Change Dashboard Passcode</h2>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">New Passcode</label>
                            <input
                              type="password"
                              value={passForm.newPass}
                              onChange={(e) => setPassForm({ ...passForm, newPass: e.target.value })}
                              placeholder="••••••••"
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-bold">Confirm Passcode</label>
                            <input
                              type="password"
                              value={passForm.confirmPass}
                              onChange={(e) => setPassForm({ ...passForm, confirmPass: e.target.value })}
                              placeholder="••••••••"
                              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 outline-none text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition text-sm"
                              required
                            />
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold tracking-wider hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition text-sm"
                        >
                          UPDATE PASSCODE
                        </motion.button>
                      </form>
                    </div>
                  )}

                  {/* TAB 5: ANALYTICS */}
                  {activeTab === "analytics" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Visitor Analytics</h2>
                        <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full animate-pulse">
                          Live Tracking
                        </span>
                      </div>

                      {/* STATS ROW */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:border-cyan-500/25 transition">
                          <h3 className="text-gray-400 text-xs uppercase tracking-widest font-bold">Total Traffic</h3>
                          <h2 className="text-3xl font-black text-white mt-2">{visits.length} Visits</h2>
                          <p className="text-[10px] text-gray-500 mt-1">Unique session tracking activated</p>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:border-cyan-500/25 transition">
                          <h3 className="text-gray-400 text-xs uppercase tracking-widest font-bold">Device Analytics</h3>
                          <div className="flex justify-between text-sm mt-3 font-semibold text-gray-300">
                            <span>Desktop: {visits.filter(v => v.device === "Desktop").length}</span>
                            <span>Mobile: {visits.filter(v => v.device === "Mobile").length}</span>
                          </div>
                          <div className="w-full bg-white/5 h-2 rounded-full mt-2 overflow-hidden flex">
                            <div 
                              style={{ width: `${visits.length ? (visits.filter(v => v.device === "Desktop").length / visits.length) * 100 : 50}%` }}
                              className="bg-cyan-400 h-full"
                            />
                            <div 
                              style={{ width: `${visits.length ? (visits.filter(v => v.device === "Mobile").length / visits.length) * 100 : 50}%` }}
                              className="bg-pink-500 h-full"
                            />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:border-cyan-500/25 transition">
                          <h3 className="text-gray-400 text-xs uppercase tracking-widest font-bold">Top Browsers</h3>
                          <div className="flex flex-wrap gap-2 mt-3.5">
                            {["Chrome", "Safari", "Firefox", "Edge"].map(b => {
                              const count = visits.filter(v => v.browser === b).length;
                              if (count === 0) return null;
                              return (
                                <span key={b} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-bold text-gray-300">
                                  {b}: {count}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* RECENT VISITS TABLE */}
                      <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 mt-6">
                        <h3 className="text-base font-bold text-white mb-4">Recent Visitor Inflow</h3>
                        {visits.length === 0 ? (
                          <div className="text-center py-10 text-gray-500 text-sm">
                            No visits recorded yet.
                          </div>
                        ) : (
                          <div className="overflow-x-auto scrollbar-none">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="border-b border-white/5 text-gray-400 uppercase tracking-widest font-bold text-[10px]">
                                  <th className="pb-3">Time</th>
                                  <th className="pb-3">Device</th>
                                  <th className="pb-3">Browser</th>
                                  <th className="pb-3">Session ID</th>
                                </tr>
                              </thead>
                              <tbody>
                                {visits.slice(0, 10).map((v) => (
                                  <tr key={v.id} className="border-b border-white/5 text-gray-300 last:border-0 hover:bg-white/[0.01] transition-colors">
                                    <td className="py-3.5 font-medium">{formatTime(v.timestamp)}</td>
                                    <td className="py-3.5">
                                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${v.device === "Desktop" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-pink-500/10 text-pink-400 border border-pink-500/20"}`}>
                                        {v.device}
                                      </span>
                                    </td>
                                    <td className="py-3.5 font-semibold text-gray-200">{v.browser}</td>
                                    <td className="py-3.5 text-gray-500 font-mono">_sess_{v.id.slice(-6)}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CRUD MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#071018] p-6 md:p-8 scrollbar-thin scrollbar-thumb-cyan-400/50"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 text-lg hover:bg-white/5 rounded-full transition"
              >
                <FaTimes />
              </button>

              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <span className="text-cyan-400">
                  {editMode ? "Edit" : "Add New"}
                </span>{" "}
                {modalType === "project" ? "Project" : "Certification"}
              </h2>

              {modalType === "project" ? (
                /* Project Form */
                <form onSubmit={handleProjSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Project Title</label>
                      <input
                        type="text"
                        value={projForm.title}
                        onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                        placeholder="Pathfinder"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Badge (e.g. NEW • AI • React)</label>
                      <input
                        type="text"
                        value={projForm.badge}
                        onChange={(e) => setProjForm({ ...projForm, badge: e.target.value })}
                        placeholder="NEW • AI • React"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-bold uppercase">Short Description</label>
                    <input
                      type="text"
                      value={projForm.description}
                      onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                      placeholder="AI powered career discovery platform"
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-bold uppercase">Full/Detailed Description</label>
                    <textarea
                      rows="4"
                      value={projForm.full}
                      onChange={(e) => setProjForm({ ...projForm, full: e.target.value })}
                      placeholder="Provide full description of project features and technology stack..."
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 resize-none text-sm"
                      required
                    ></textarea>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Upload Project Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "project", "image")}
                        className="w-full p-2.5 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-xs file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-cyan-400 file:text-black hover:file:bg-cyan-300 file:cursor-pointer"
                      />
                      {uploadingProjImg && <p className="text-[10px] text-cyan-400 animate-pulse mt-1">Uploading...</p>}
                      {projForm.image && (
                        <div className="mt-3 flex items-center gap-3">
                          <img
                            src={projForm.image}
                            alt="Selected"
                            className="w-16 h-10 object-cover rounded-md border border-white/10"
                          />
                          <span className="text-[10px] text-green-400 font-semibold">✓ Image Loaded</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Or Paste Image URL</label>
                      <input
                        type="text"
                        value={projForm.image}
                        onChange={(e) => setProjForm({ ...projForm, image: e.target.value })}
                        placeholder="https://images.unsplash.com/photo-..."
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={projForm.tags}
                        onChange={(e) => setProjForm({ ...projForm, tags: e.target.value })}
                        placeholder="React, Firebase, Tailwind"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Live Preview Link</label>
                      <input
                        type="text"
                        value={projForm.live}
                        onChange={(e) => setProjForm({ ...projForm, live: e.target.value })}
                        placeholder="https://..."
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-cyan-400 text-black font-semibold hover:scale-105 transition text-sm"
                    >
                      Save Project
                    </button>
                  </div>
                </form>
              ) : (
                /* Certification Form */
                <form onSubmit={handleCertSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-bold uppercase">Certification Title</label>
                    <input
                      type="text"
                      value={certForm.title}
                      onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                      placeholder="Human Computer Interaction"
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Category (e.g. NPTEL, LearnNex)</label>
                      <input
                        type="text"
                        value={certForm.category}
                        onChange={(e) => setCertForm({ ...certForm, category: e.target.value })}
                        placeholder="NPTEL"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Badge (e.g. Elite, Internship)</label>
                      <input
                        type="text"
                        value={certForm.badge}
                        onChange={(e) => setCertForm({ ...certForm, badge: e.target.value })}
                        placeholder="Elite"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Score (Optional, e.g. 94%)</label>
                      <input
                        type="text"
                        value={certForm.score}
                        onChange={(e) => setCertForm({ ...certForm, score: e.target.value })}
                        placeholder="94%"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">PDF Certificate Link (Optional)</label>
                      <input
                        type="text"
                        value={certForm.pdf}
                        onChange={(e) => setCertForm({ ...certForm, pdf: e.target.value })}
                        placeholder="/certificates/hci.pdf"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <h3 className="text-sm font-semibold text-gray-300">Certificate Image</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Upload Image File</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, "cert", "image")}
                          className="w-full p-2.5 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-xs file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-cyan-400 file:text-black hover:file:bg-cyan-300 file:cursor-pointer"
                        />
                        {uploadingCertImg && <p className="text-[10px] text-cyan-400 animate-pulse mt-1">Uploading...</p>}
                        {certForm.image && (
                          <div className="mt-3 flex items-center gap-3">
                            <img
                              src={certForm.image}
                              alt="Selected"
                              className="w-16 h-10 object-cover rounded-md border border-white/10"
                            />
                            <span className="text-[10px] text-green-400 font-semibold">✓ Image Loaded</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Or Image URL / Path</label>
                        <input
                          type="text"
                          value={certForm.image}
                          onChange={(e) => setCertForm({ ...certForm, image: e.target.value })}
                          placeholder="/certificates/hci.png"
                          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white focus:border-cyan-400 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/10 transition text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-cyan-400 text-black font-semibold hover:scale-105 transition text-sm"
                    >
                      Save Certification
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPanel;
